import type { Document, DocumentType, DocumentUploadResult, CreateDocumentInput } from '@/types/document';

export const mockDocumentTypes: DocumentType[] = [
    {
        id: 'id-verification',
        name: 'ID Verification',
        description: "Government-issued photo ID (Driver's License, Passport, etc.)",
        required: true,
        category: 'identity',
        acceptedFormats: ['image/jpeg', 'image/png', 'application/pdf'],
        maxFileSize: 5 * 1024 * 1024 // 5MB
    },
    {
        id: 'bank-statement',
        name: 'Bank Statement',
        description: 'Recent bank statements (last 3 months)',
        required: true,
        category: 'financial',
        acceptedFormats: ['application/pdf', 'image/jpeg', 'image/png'],
        maxFileSize: 10 * 1024 * 1024 // 10MB
    },
    {
        id: 'income-verification',
        name: 'Income Verification',
        description: 'Pay stubs, tax returns, or employment verification',
        required: true,
        category: 'financial',
        acceptedFormats: ['application/pdf', 'image/jpeg', 'image/png'],
        maxFileSize: 10 * 1024 * 1024 // 10MB
    },
    {
        id: 'address-verification',
        name: 'Address Verification',
        description: 'Utility bill or lease agreement showing current address',
        required: true,
        category: 'identity',
        acceptedFormats: ['application/pdf', 'image/jpeg', 'image/png'],
        maxFileSize: 5 * 1024 * 1024 // 5MB
    },
    {
        id: 'investment-account',
        name: 'Investment Account Statement',
        description: 'Existing investment account statements (optional)',
        required: false,
        category: 'financial',
        acceptedFormats: ['application/pdf', 'image/jpeg', 'image/png'],
        maxFileSize: 10 * 1024 * 1024 // 10MB
    }
];

export const mockClientDocuments: Document[] = [
    {
        id: 'doc-1',
        fileName: 'drivers_license.pdf',
        fileSize: 2048000,
        fileType: 'application/pdf',
        documentType: mockDocumentTypes[0],
        clientId: '1',
        status: 'verified',
        signedUrl: 'https://example.com/signed-url/doc-1',
        uploadedAt: '2024-10-28T10:00:00Z',
        verifiedAt: '2024-10-28T11:00:00Z'
    },
    {
        id: 'doc-2',
        fileName: 'bank_statement_october.pdf',
        fileSize: 1536000,
        fileType: 'application/pdf',
        documentType: mockDocumentTypes[1],
        clientId: '1',
        status: 'processing',
        signedUrl: 'https://example.com/signed-url/doc-2',
        uploadedAt: '2024-10-28T09:30:00Z'
    },
    {
        id: 'doc-3',
        fileName: 'pay_stub_september.pdf',
        fileSize: 512000,
        fileType: 'application/pdf',
        documentType: mockDocumentTypes[2],
        clientId: '2',
        status: 'uploaded',
        signedUrl: 'https://example.com/signed-url/doc-3',
        uploadedAt: '2024-10-28T08:15:00Z'
    }
];

export const createMockDocument = (input: CreateDocumentInput): DocumentUploadResult => {
    const documentType = mockDocumentTypes.find(dt => dt.id === input.documentTypeId);
    if (!documentType) {
        throw new Error('Invalid document type');
    }

    const document: Document = {
        id: `doc-${Date.now()}`,
        fileName: input.fileName,
        fileSize: input.fileSize,
        fileType: input.fileType,
        documentType,
        clientId: input.clientId,
        status: 'uploaded',
        signedUrl: `https://example.com/signed-url/${Date.now()}`,
        uploadedAt: new Date().toISOString()
    };

    // Add to mock data for future queries
    mockClientDocuments.push(document);

    return {
        document,
        signedUrl: document.signedUrl!
    };
};
