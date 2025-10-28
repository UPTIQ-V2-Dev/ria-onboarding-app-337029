import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import { generateDownloadSignedUrl, generateUploadSignedUrl, isFileSizeAcceptable, isFileTypeSupported } from "../utils/storage.js";
import httpStatus from 'http-status';
/**
 * Get all document types
 * @returns {Promise<DocumentType[]>}
 */
const getDocumentTypes = async () => {
    return await prisma.documentType.findMany({
        orderBy: [{ required: 'desc' }, { category: 'asc' }, { name: 'asc' }]
    });
};
/**
 * Get document type by ID
 * @param {string} documentTypeId
 * @returns {Promise<DocumentType | null>}
 */
const getDocumentTypeById = async (documentTypeId) => {
    return await prisma.documentType.findUnique({
        where: { id: documentTypeId }
    });
};
/**
 * Create a new document
 * @param {Object} documentData
 * @returns {Promise<{document: Document & {documentType: DocumentType}, signedUrl: string}>}
 */
const createDocument = async (documentData) => {
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
        throw new ApiError(httpStatus.BAD_REQUEST, `File type ${documentData.fileType} is not supported for ${documentType.name}. Accepted formats: ${documentType.acceptedFormats.replace(/,/g, ', ')}`);
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
const queryDocuments = async (filter, options) => {
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
const getDocumentById = async (documentId) => {
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
const getDocumentsByClientId = async (clientId) => {
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
const updateDocumentStatus = async (documentId, updateData) => {
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
    const updatePayload = {
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
const deleteDocumentById = async (documentId) => {
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
const markDocumentAsUploaded = async (documentId) => {
    return await updateDocumentStatus(documentId, { status: 'uploaded' });
};
/**
 * Analyze bank statement document and get treasury recommendations
 * @param {string} documentId
 * @returns {Promise<{recommendations: {product: string, description: string, reasoning: string, priority: string}[]}>}
 */
const analyzeDocument = async (documentId) => {
    const document = await getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }
    // Check if document is verified
    if (document.status !== 'verified') {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Document must be verified before analysis');
    }
    // Check if document is a bank statement (based on document type or file name)
    const isBankStatement = document.documentType.category === 'financial' ||
        document.documentType.name.toLowerCase().includes('bank') ||
        document.fileName.toLowerCase().includes('bank') ||
        document.fileName.toLowerCase().includes('statement');
    if (!isBankStatement) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Document not suitable for analysis - must be a bank statement');
    }
    // Mock treasury analysis - in a real implementation this would integrate with document analysis services
    // Return sample recommendations based on the document type and mock financial analysis
    const recommendations = [
        {
            product: 'High-Yield Savings Account',
            description: 'Maximize returns on excess cash with competitive interest rates',
            reasoning: 'Based on your current cash position and liquidity needs, a high-yield savings account would provide better returns while maintaining accessibility',
            priority: 'high'
        },
        {
            product: 'Short-Term Treasury Bills',
            description: 'Low-risk investment for surplus funds',
            reasoning: 'Your conservative risk profile and short-term liquidity requirements make Treasury Bills an ideal choice',
            priority: 'medium'
        },
        {
            product: 'Certificate of Deposit (CD)',
            description: 'Fixed-term investment with guaranteed returns',
            reasoning: 'Analysis shows stable cash flows that could benefit from fixed-rate investments with higher yields than savings accounts',
            priority: 'medium'
        },
        {
            product: 'Money Market Fund',
            description: 'Diversified short-term investment with better liquidity than CDs',
            reasoning: 'Your transaction patterns indicate a need for both yield and liquidity, making money market funds suitable',
            priority: 'low'
        }
    ];
    // In a real implementation, you would:
    // 1. Extract text/data from the document using OCR/document parsing
    // 2. Analyze cash flows, account balances, transaction patterns
    // 3. Apply treasury management algorithms
    // 4. Generate personalized recommendations based on client's financial profile
    return { recommendations };
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
    markDocumentAsUploaded,
    analyzeDocument
};
