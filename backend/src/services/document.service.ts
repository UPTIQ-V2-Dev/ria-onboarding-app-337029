import prisma from '../client.ts';
import { Document, DocumentType } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import {
    generateDownloadSignedUrl,
    generateUploadSignedUrl,
    isFileSizeAcceptable,
    isFileTypeSupported
} from '../utils/storage.ts';
import httpStatus from 'http-status';

/**
 * Get all document types
 * @returns {Promise<DocumentType[]>}
 */
const getDocumentTypes = async (): Promise<DocumentType[]> => {
    return await prisma.documentType.findMany({
        orderBy: [{ required: 'desc' }, { category: 'asc' }, { name: 'asc' }]
    });
};

/**
 * Get document type by ID
 * @param {string} documentTypeId
 * @returns {Promise<DocumentType | null>}
 */
const getDocumentTypeById = async (documentTypeId: string): Promise<DocumentType | null> => {
    return await prisma.documentType.findUnique({
        where: { id: documentTypeId }
    });
};

/**
 * Create a new document
 * @param {Object} documentData
 * @returns {Promise<{document: Document & {documentType: DocumentType}, signedUrl: string}>}
 */
const createDocument = async (documentData: {
    fileName: string;
    fileSize: number;
    fileType: string;
    documentTypeId: string;
    clientId: string;
}): Promise<{ document: Document & { documentType: DocumentType }; signedUrl: string }> => {
    // Validate document type exists
    const documentType = await getDocumentTypeById(documentData.documentTypeId);
    if (!documentType) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document type not found');
    }

    // Validate client exists
    const client = await prisma.client.findUnique({
        where: { id: documentData.clientId }
    });
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    // Validate file type
    if (!isFileTypeSupported(documentData.fileType, documentType.acceptedFormats)) {
        throw new ApiError(
            httpStatus.BAD_REQUEST,
            `File type ${documentData.fileType} is not supported for ${documentType.name}. Accepted formats: ${documentType.acceptedFormats.join(', ')}`
        );
    }

    // Validate file size
    if (!isFileSizeAcceptable(documentData.fileSize, documentType.maxFileSize)) {
        throw new ApiError(413, `File size exceeds maximum allowed size of ${documentType.maxFileSize} bytes`);
    }

    // Generate upload signed URL
    const signedUrl = await generateUploadSignedUrl(documentData.fileName);

    // Create document record
    const document = await prisma.document.create({
        data: {
            fileName: documentData.fileName,
            fileSize: documentData.fileSize,
            fileType: documentData.fileType,
            documentTypeId: documentData.documentTypeId,
            clientId: documentData.clientId,
            status: 'pending',
            signedUrl
        },
        include: {
            documentType: true
        }
    });

    return { document, signedUrl };
};

/**
 * Query documents with pagination and filtering
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryDocuments = async (
    filter: object,
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    }
): Promise<{
    results: (Document & { documentType: DocumentType })[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';

    // Get total count for pagination
    const totalResults = await prisma.document.count({
        where: filter
    });

    const totalPages = Math.ceil(totalResults / limit);
    const skip = (page - 1) * limit;

    const documents = await prisma.document.findMany({
        where: filter,
        include: {
            documentType: true
        },
        skip: skip,
        take: limit,
        orderBy: sortBy ? { [sortBy]: sortType } : { uploadedAt: 'desc' }
    });

    return {
        results: documents,
        page,
        limit,
        totalPages,
        totalResults
    };
};

/**
 * Get document by ID
 * @param {string} documentId
 * @returns {Promise<Document & {documentType: DocumentType} | null>}
 */
const getDocumentById = async (documentId: string): Promise<(Document & { documentType: DocumentType }) | null> => {
    const document = await prisma.document.findUnique({
        where: { id: documentId },
        include: {
            documentType: true
        }
    });

    if (document && document.status === 'uploaded') {
        // Generate download signed URL for uploaded documents
        const downloadUrl = await generateDownloadSignedUrl(document.id, document.fileName);
        document.signedUrl = downloadUrl;
    }

    return document;
};

/**
 * Get documents by client ID
 * @param {string} clientId
 * @returns {Promise<(Document & {documentType: DocumentType})[]>}
 */
const getDocumentsByClientId = async (clientId: string): Promise<(Document & { documentType: DocumentType })[]> => {
    // Validate client exists
    const client = await prisma.client.findUnique({
        where: { id: clientId }
    });
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    const documents = await prisma.document.findMany({
        where: { clientId },
        include: {
            documentType: true
        },
        orderBy: [{ documentType: { required: 'desc' } }, { uploadedAt: 'desc' }]
    });

    // Generate download URLs for uploaded documents
    for (const document of documents) {
        if (document.status === 'uploaded' || document.status === 'verified') {
            document.signedUrl = await generateDownloadSignedUrl(document.id, document.fileName);
        }
    }

    return documents;
};

/**
 * Update document status
 * @param {string} documentId
 * @param {Object} updateData
 * @returns {Promise<Document & {documentType: DocumentType}>}
 */
const updateDocumentStatus = async (
    documentId: string,
    updateData: {
        status: string;
        rejectionReason?: string;
    }
): Promise<Document & { documentType: DocumentType }> => {
    const document = await getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }

    // Validate status transition
    const validStatuses = ['pending', 'uploaded', 'verified', 'rejected'];
    if (!validStatuses.includes(updateData.status)) {
        throw new ApiError(httpStatus.BAD_REQUEST, `Invalid status. Must be one of: ${validStatuses.join(', ')}`);
    }

    // If rejecting, require rejection reason
    if (updateData.status === 'rejected' && !updateData.rejectionReason) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Rejection reason is required when rejecting a document');
    }

    // Clear rejection reason if not rejecting
    if (updateData.status !== 'rejected') {
        updateData.rejectionReason = undefined;
    }

    // Set verification timestamp if verifying
    const updatePayload: any = {
        status: updateData.status,
        rejectionReason: updateData.rejectionReason
    };

    if (updateData.status === 'verified') {
        updatePayload.verifiedAt = new Date();
    }

    const updatedDocument = await prisma.document.update({
        where: { id: documentId },
        data: updatePayload,
        include: {
            documentType: true
        }
    });

    // Generate download URL if document is uploaded or verified
    if (updatedDocument.status === 'uploaded' || updatedDocument.status === 'verified') {
        updatedDocument.signedUrl = await generateDownloadSignedUrl(updatedDocument.id, updatedDocument.fileName);
    }

    return updatedDocument;
};

/**
 * Delete document by ID
 * @param {string} documentId
 * @returns {Promise<Document>}
 */
const deleteDocumentById = async (documentId: string): Promise<Document> => {
    const document = await prisma.document.findUnique({
        where: { id: documentId }
    });
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }

    await prisma.document.delete({ where: { id: documentId } });
    return document;
};

/**
 * Update document to uploaded status when file is actually uploaded
 * @param {string} documentId
 * @returns {Promise<Document & {documentType: DocumentType}>}
 */
const markDocumentAsUploaded = async (documentId: string): Promise<Document & { documentType: DocumentType }> => {
    return await updateDocumentStatus(documentId, { status: 'uploaded' });
};

export default {
    getDocumentTypes,
    getDocumentTypeById,
    createDocument,
    queryDocuments,
    getDocumentById,
    getDocumentsByClientId,
    updateDocumentStatus,
    deleteDocumentById,
    markDocumentAsUploaded
};
