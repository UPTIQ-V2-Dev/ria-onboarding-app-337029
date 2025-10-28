import { Role } from '../generated/prisma/index.js';
import { clientService, documentService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
const getDocumentTypes = catchAsyncWithAuth(async (req, res) => {
    const documentTypes = await documentService.getDocumentTypes();
    res.send(documentTypes);
});
const getClientDocuments = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;
    const requestingUser = req.user;
    // Check if user has access to this client
    // Users can only access documents for their own clients, admins can access all
    if (requestingUser.role !== Role.ADMIN) {
        // Check if the client belongs to the requesting user
        const client = await clientService.getClientById(clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot access documents for this client');
        }
    }
    const documents = await documentService.getDocumentsByClientId(clientId);
    res.send(documents);
});
const createDocument = catchAsyncWithAuth(async (req, res) => {
    const requestingUser = req.user;
    const { clientId } = req.body;
    // Check if user has access to this client
    // Users can only create documents for their own clients, admins can create for all
    if (requestingUser.role !== Role.ADMIN) {
        const client = await clientService.getClientById(clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot create documents for this client');
        }
    }
    const result = await documentService.createDocument(req.body);
    res.status(httpStatus.CREATED).send(result);
});
const getDocument = catchAsyncWithAuth(async (req, res) => {
    const { documentId } = req.params;
    const requestingUser = req.user;
    const document = await documentService.getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }
    // Check if user has access to this document
    // Users can only access documents for their own clients, admins can access all
    if (requestingUser.role !== Role.ADMIN) {
        const client = await clientService.getClientById(document.clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot access this document');
        }
    }
    res.send(document);
});
const updateDocumentStatus = catchAsyncWithAuth(async (req, res) => {
    const { documentId } = req.params;
    const requestingUser = req.user;
    const document = await documentService.getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }
    // Check if user has permission to update document status
    // Only admins or users who own the client can update document status
    if (requestingUser.role !== Role.ADMIN) {
        const client = await clientService.getClientById(document.clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - insufficient permissions to update this document');
        }
    }
    const updatedDocument = await documentService.updateDocumentStatus(documentId, req.body);
    res.send(updatedDocument);
});
const deleteDocument = catchAsyncWithAuth(async (req, res) => {
    const { documentId } = req.params;
    const requestingUser = req.user;
    const document = await documentService.getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }
    // Check if user has access to delete this document
    // Users can only delete documents for their own clients, admins can delete all
    if (requestingUser.role !== Role.ADMIN) {
        const client = await clientService.getClientById(document.clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot delete this document');
        }
    }
    await documentService.deleteDocumentById(documentId);
    res.status(httpStatus.NO_CONTENT).send();
});
const queryDocuments = catchAsyncWithAuth(async (req, res) => {
    const requestingUser = req.user;
    const queryFilter = pick(req.validatedQuery, ['clientId', 'documentTypeId', 'status']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    let filter = { ...queryFilter };
    // If not admin, filter to only show documents for user's clients
    if (requestingUser.role !== Role.ADMIN) {
        // Get user's client IDs
        const userClients = await clientService.getClientsByUserId(requestingUser.id);
        const userClientIds = userClients.map(client => client.id);
        // If user specifies a clientId, ensure they own it
        if (filter.clientId && !userClientIds.includes(filter.clientId)) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot access documents for this client');
        }
        // Filter to user's clients only
        if (!filter.clientId) {
            filter.clientId = { in: userClientIds };
        }
    }
    const result = await documentService.queryDocuments(filter, options);
    res.send(result);
});
const analyzeDocument = catchAsyncWithAuth(async (req, res) => {
    const { documentId } = req.params;
    const requestingUser = req.user;
    const document = await documentService.getDocumentById(documentId);
    if (!document) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
    }
    // Check if user has access to this document
    // Users can only analyze documents for their own clients, admins can analyze all
    if (requestingUser.role !== Role.ADMIN) {
        const client = await clientService.getClientById(document.clientId);
        if (!client || client.userId !== requestingUser.id) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - cannot analyze document');
        }
    }
    const result = await documentService.analyzeDocument(documentId);
    res.send(result);
});
export default {
    getDocumentTypes,
    getClientDocuments,
    createDocument,
    getDocument,
    updateDocumentStatus,
    deleteDocument,
    queryDocuments,
    analyzeDocument
};
