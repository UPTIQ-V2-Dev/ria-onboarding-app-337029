import { api } from '@/lib/api';
import { emitter } from '@/agentSdk';
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
    // Get document with signed URL
    const document = await getDocument(documentId);

    // Use agent's Bank-Statement-Uploaded event for analysis
    const recommendations = await emitter.emit({
        agentId: '37cff143-f7d2-4204-878f-020620e7697e',
        event: 'Bank-Statement-Uploaded',
        payload: {
            documentId,
            fileName: file.name,
            fileSize: file.size,
            clientId: document.clientId
        },
        documents: document.signedUrl
            ? [
                  {
                      signedUrl: document.signedUrl,
                      fileName: document.fileName,
                      mimeType: file.type
                  }
              ]
            : undefined
    });

    return recommendations as TreasuryRecommendationResponse;
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
