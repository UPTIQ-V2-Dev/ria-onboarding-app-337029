import Joi from 'joi';
const getDocumentTypes = {
// No validation needed for GET /document-types
};
const getClientDocuments = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
const createDocument = {
    body: Joi.object().keys({
        fileName: Joi.string().required(),
        fileSize: Joi.number().integer().min(1).required(),
        fileType: Joi.string().required(),
        documentTypeId: Joi.string().required(),
        clientId: Joi.string().required()
    })
};
const getDocument = {
    params: Joi.object().keys({
        documentId: Joi.string().required()
    })
};
const updateDocumentStatus = {
    params: Joi.object().keys({
        documentId: Joi.string().required()
    }),
    body: Joi.object().keys({
        status: Joi.string().required().valid('pending', 'uploaded', 'verified', 'rejected'),
        rejectionReason: Joi.string().when('status', {
            is: 'rejected',
            then: Joi.required(),
            otherwise: Joi.optional()
        })
    })
};
const deleteDocument = {
    params: Joi.object().keys({
        documentId: Joi.string().required()
    })
};
const queryDocuments = {
    query: Joi.object().keys({
        clientId: Joi.string(),
        documentTypeId: Joi.string(),
        status: Joi.string().valid('pending', 'uploaded', 'verified', 'rejected'),
        sortBy: Joi.string(),
        limit: Joi.number().integer().min(1).max(100),
        page: Joi.number().integer().min(1)
    })
};
export default {
    getDocumentTypes,
    getClientDocuments,
    createDocument,
    getDocument,
    updateDocumentStatus,
    deleteDocument,
    queryDocuments
};
