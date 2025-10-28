export interface Document {
    id: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    documentType: DocumentType;
    clientId: string;
    status: 'pending' | 'uploaded' | 'processing' | 'verified' | 'rejected';
    signedUrl?: string;
    uploadedAt: string;
    verifiedAt?: string;
    rejectionReason?: string;
}

export interface DocumentType {
    id: string;
    name: string;
    description: string;
    required: boolean;
    category: 'identity' | 'financial' | 'legal' | 'compliance';
    acceptedFormats: string[];
    maxFileSize: number;
}

export interface DocumentUploadResult {
    document: Document;
    signedUrl: string;
}

export interface CreateDocumentInput {
    fileName: string;
    fileSize: number;
    fileType: string;
    documentTypeId: string;
    clientId: string;
}

export interface TreasuryRecommendation {
    product: string;
    description: string;
    reasoning: string;
    priority: 'high' | 'medium' | 'low';
}

export interface TreasuryRecommendationResponse {
    recommendations: TreasuryRecommendation[];
}
