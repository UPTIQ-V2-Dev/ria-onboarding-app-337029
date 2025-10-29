import { api } from '@/lib/api';
import type {
    Document,
    DocumentType,
    DocumentUploadResult,
    CreateDocumentInput,
    TreasuryRecommendationResponse
} from '@/types/document';

export const getDocumentTypes = async (): Promise<DocumentType[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockDocumentTypes } = await import('@/data/documentMockData');
        return mockDocumentTypes;
    }

    const response = await api.get<DocumentType[]>('/document-types');
    return response.data;
};

export const getClientDocuments = async (clientId: string): Promise<Document[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClientDocuments } = await import('@/data/documentMockData');
        return mockClientDocuments.filter(doc => doc.clientId === clientId);
    }

    const response = await api.get<Document[]>(`/clients/${clientId}/documents`);
    return response.data;
};

export const uploadDocument = async (input: CreateDocumentInput, file: File): Promise<DocumentUploadResult> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { createMockDocument } = await import('@/data/documentMockData');
        const mockResult = createMockDocument(input);

        // Simulate file upload delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return mockResult;
    }

    const response = await api.post<DocumentUploadResult>('/documents', input);

    // Upload file to signed URL
    await fetch(response.data.signedUrl, {
        method: 'PUT',
        body: file,
        headers: {
            'Content-Type': file.type
        }
    });

    return response.data;
};

export const analyzeBankStatement = async (documentId: string, file: File): Promise<TreasuryRecommendationResponse> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Return mock treasury recommendations since agent is detached
        const mockRecommendations: TreasuryRecommendationResponse = {
            recommendations: [
                {
                    product: 'High-Yield Savings Account',
                    description: 'Earn competitive interest on your cash reserves with FDIC insurance',
                    reasoning:
                        'Based on your transaction patterns, you maintain significant cash balances that could earn higher returns',
                    priority: 'high'
                },
                {
                    product: 'Certificate of Deposit (12-month)',
                    description: 'Lock in guaranteed returns with a 12-month CD at competitive rates',
                    reasoning: 'Your regular monthly deposits suggest stable cash flow suitable for CD investment',
                    priority: 'medium'
                },
                {
                    product: 'Money Market Account',
                    description: 'Flexible access to funds while earning higher interest than traditional savings',
                    reasoning:
                        'Your spending patterns indicate you need liquid access while wanting to maximize returns',
                    priority: 'medium'
                }
            ]
        };
        return mockRecommendations;
    }

    // Fallback to backend API analysis since agent is no longer available
    const response = await api.post<TreasuryRecommendationResponse>('/documents/analyze-bank-statement', {
        documentId
    });
    return response.data;
};

export const getDocument = async (documentId: string): Promise<Document> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClientDocuments } = await import('@/data/documentMockData');
        const document = mockClientDocuments.find(doc => doc.id === documentId);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    }

    const response = await api.get<Document>(`/documents/${documentId}`);
    return response.data;
};

export const updateDocumentStatus = async (
    documentId: string,
    status: Document['status'],
    rejectionReason?: string
): Promise<Document> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClientDocuments } = await import('@/data/documentMockData');
        const document = mockClientDocuments.find(doc => doc.id === documentId);
        if (!document) {
            throw new Error('Document not found');
        }

        document.status = status;
        if (rejectionReason) {
            document.rejectionReason = rejectionReason;
        }
        if (status === 'verified') {
            document.verifiedAt = new Date().toISOString();
        }

        return document;
    }

    const response = await api.put<Document>(`/documents/${documentId}/status`, {
        status,
        rejectionReason
    });
    return response.data;
};
