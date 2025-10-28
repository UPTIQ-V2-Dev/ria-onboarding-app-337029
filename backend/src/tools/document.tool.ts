import { documentService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

// Reusable schemas
const documentTypeSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    required: z.boolean(),
    category: z.string(),
    acceptedFormats: z.array(z.string()),
    maxFileSize: z.number()
});

const documentSchema = z.object({
    id: z.string(),
    fileName: z.string(),
    fileSize: z.number(),
    fileType: z.string(),
    documentType: documentTypeSchema,
    clientId: z.string(),
    status: z.string(),
    signedUrl: z.string().nullable(),
    uploadedAt: z.string(),
    verifiedAt: z.string().nullable(),
    rejectionReason: z.string().nullable()
});

const paginatedDocumentsSchema = z.object({
    results: z.array(documentSchema),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    totalResults: z.number()
});

// Document type tools
const getDocumentTypesTool: MCPTool = {
    id: 'document_types_list',
    name: 'List Document Types',
    description: 'Get all available document types for client onboarding',
    inputSchema: z.object({}),
    outputSchema: z.object({
        documentTypes: z.array(documentTypeSchema)
    }),
    fn: async () => {
        const documentTypes = await documentService.getDocumentTypes();
        return { documentTypes };
    }
};

const getDocumentTypeTool: MCPTool = {
    id: 'document_type_get_by_id',
    name: 'Get Document Type By ID',
    description: 'Get a specific document type by its ID',
    inputSchema: z.object({
        documentTypeId: z.string()
    }),
    outputSchema: z.object({
        documentType: documentTypeSchema.nullable()
    }),
    fn: async (inputs: { documentTypeId: string }) => {
        const documentType = await documentService.getDocumentTypeById(inputs.documentTypeId);
        return { documentType };
    }
};

// Document management tools
const createDocumentTool: MCPTool = {
    id: 'document_create',
    name: 'Create Document',
    description: 'Create a new document and get signed URL for file upload',
    inputSchema: z.object({
        fileName: z.string(),
        fileSize: z.number().int().min(1),
        fileType: z.string(),
        documentTypeId: z.string(),
        clientId: z.string()
    }),
    outputSchema: z.object({
        document: documentSchema,
        signedUrl: z.string()
    }),
    fn: async (inputs: {
        fileName: string;
        fileSize: number;
        fileType: string;
        documentTypeId: string;
        clientId: string;
    }) => {
        return await documentService.createDocument(inputs);
    }
};

const getDocumentTool: MCPTool = {
    id: 'document_get_by_id',
    name: 'Get Document By ID',
    description: 'Get a specific document by its ID',
    inputSchema: z.object({
        documentId: z.string()
    }),
    outputSchema: z.object({
        document: documentSchema.nullable()
    }),
    fn: async (inputs: { documentId: string }) => {
        const document = await documentService.getDocumentById(inputs.documentId);
        return { document };
    }
};

const getClientDocumentsTool: MCPTool = {
    id: 'document_list_by_client',
    name: 'List Client Documents',
    description: 'Get all documents for a specific client',
    inputSchema: z.object({
        clientId: z.string()
    }),
    outputSchema: z.object({
        documents: z.array(documentSchema)
    }),
    fn: async (inputs: { clientId: string }) => {
        const documents = await documentService.getDocumentsByClientId(inputs.clientId);
        return { documents };
    }
};

const queryDocumentsTool: MCPTool = {
    id: 'document_query',
    name: 'Query Documents',
    description: 'Query documents with filters and pagination',
    inputSchema: z.object({
        clientId: z.string().optional(),
        documentTypeId: z.string().optional(),
        status: z.enum(['pending', 'uploaded', 'verified', 'rejected']).optional(),
        sortBy: z.string().optional(),
        limit: z.number().int().min(1).max(100).optional().default(10),
        page: z.number().int().min(1).optional().default(1)
    }),
    outputSchema: paginatedDocumentsSchema,
    fn: async (inputs: {
        clientId?: string;
        documentTypeId?: string;
        status?: string;
        sortBy?: string;
        limit?: number;
        page?: number;
    }) => {
        const filter: any = {};
        if (inputs.clientId) filter.clientId = inputs.clientId;
        if (inputs.documentTypeId) filter.documentTypeId = inputs.documentTypeId;
        if (inputs.status) filter.status = inputs.status;

        const options = {
            sortBy: inputs.sortBy,
            limit: inputs.limit,
            page: inputs.page
        };

        return await documentService.queryDocuments(filter, options);
    }
};

const updateDocumentStatusTool: MCPTool = {
    id: 'document_update_status',
    name: 'Update Document Status',
    description: 'Update document status and verification details',
    inputSchema: z.object({
        documentId: z.string(),
        status: z.enum(['pending', 'uploaded', 'verified', 'rejected']),
        rejectionReason: z.string().optional()
    }),
    outputSchema: documentSchema,
    fn: async (inputs: { documentId: string; status: string; rejectionReason?: string }) => {
        return await documentService.updateDocumentStatus(inputs.documentId, {
            status: inputs.status,
            rejectionReason: inputs.rejectionReason
        });
    }
};

const deleteDocumentTool: MCPTool = {
    id: 'document_delete',
    name: 'Delete Document',
    description: 'Delete a document by its ID',
    inputSchema: z.object({
        documentId: z.string()
    }),
    outputSchema: z.object({
        success: z.boolean(),
        deletedDocument: z.object({
            id: z.string(),
            fileName: z.string(),
            clientId: z.string()
        })
    }),
    fn: async (inputs: { documentId: string }) => {
        const deletedDocument = await documentService.deleteDocumentById(inputs.documentId);
        return {
            success: true,
            deletedDocument: {
                id: deletedDocument.id,
                fileName: deletedDocument.fileName,
                clientId: deletedDocument.clientId
            }
        };
    }
};

const markDocumentUploadedTool: MCPTool = {
    id: 'document_mark_uploaded',
    name: 'Mark Document as Uploaded',
    description: 'Mark a document as uploaded after successful file upload',
    inputSchema: z.object({
        documentId: z.string()
    }),
    outputSchema: documentSchema,
    fn: async (inputs: { documentId: string }) => {
        return await documentService.markDocumentAsUploaded(inputs.documentId);
    }
};

const analyzeDocumentTool: MCPTool = {
    id: 'document_analyze',
    name: 'Analyze Document',
    description: 'Analyze bank statement document and get treasury recommendations',
    inputSchema: z.object({
        documentId: z.string()
    }),
    outputSchema: z.object({
        recommendations: z.array(
            z.object({
                product: z.string(),
                description: z.string(),
                reasoning: z.string(),
                priority: z.enum(['high', 'medium', 'low'])
            })
        )
    }),
    fn: async (inputs: { documentId: string }) => {
        return await documentService.analyzeDocument(inputs.documentId);
    }
};

// Note: Upload tool is not included as it requires file handling which is not suitable for MCP
// File uploads should be handled through the REST API endpoint /documents/upload

export const documentTools: MCPTool[] = [
    getDocumentTypesTool,
    getDocumentTypeTool,
    createDocumentTool,
    getDocumentTool,
    getClientDocumentsTool,
    queryDocumentsTool,
    updateDocumentStatusTool,
    deleteDocumentTool,
    markDocumentUploadedTool,
    analyzeDocumentTool
];
