export interface ClientPersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    socialSecurityNumber: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
}

export interface ContactInfo {
    preferredContactMethod: 'email' | 'phone' | 'mail';
    emergencyContact: {
        name: string;
        relationship: string;
        phone: string;
        email: string;
    };
}

export interface EmploymentInfo {
    employmentStatus: 'employed' | 'unemployed' | 'retired' | 'self_employed' | 'student';
    employer?: string;
    jobTitle?: string;
    industry?: string;
    annualIncome: number;
    netWorth: number;
    liquidNetWorth: number;
}

export interface RiskProfile {
    investmentExperience: 'none' | 'limited' | 'good' | 'extensive';
    riskTolerance: 'conservative' | 'moderate' | 'aggressive';
    investmentTimeHorizon: 'short' | 'medium' | 'long';
    liquidityNeeds: 'low' | 'medium' | 'high';
    ageRange: '18-30' | '31-45' | '46-60' | '61+';
    investmentKnowledge: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface QuestionnaireResponse {
    questionId: string;
    answer: string | number;
    weight: number;
}

export interface InvestmentObjective {
    primaryGoal: 'growth' | 'income' | 'preservation' | 'balanced';
    specificGoals: string[];
    targetAmount?: number;
    timeHorizon: number;
    monthlyContribution?: number;
    riskComfort: number; // 1-10 scale
}

export interface FinancialGoal {
    id: string;
    type: 'retirement' | 'education' | 'home' | 'emergency' | 'other';
    targetAmount: number;
    timeHorizon: number;
    priority: 'high' | 'medium' | 'low';
    description?: string;
}

export interface AccountType {
    id: string;
    name: string;
    description: string;
    taxAdvantaged: boolean;
    minimumBalance: number;
    fees: {
        annual: number;
        transaction: number;
    };
}

export interface FundingMethod {
    type: 'bank_transfer' | 'check' | 'wire' | 'rollover' | 'transfer';
    accountInfo?: {
        bankName: string;
        accountNumber: string;
        routingNumber: string;
        accountType: 'checking' | 'savings';
    };
    amount: number;
}

export interface DocumentType {
    id: string;
    name: string;
    required: boolean;
    description: string;
    acceptedFormats: string[];
    maxFileSize: number;
}

export interface UploadedDocument {
    id: string;
    documentTypeId: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    uploadedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
    signedUrl?: string;
}

export interface Disclosure {
    id: string;
    title: string;
    content: string;
    required: boolean;
    acknowledged: boolean;
    acknowledgedAt?: string;
}

export interface ComplianceRecord {
    id: string;
    type: 'disclosure' | 'agreement' | 'acknowledgment';
    title: string;
    status: 'pending' | 'completed';
    completedAt?: string;
    documentId?: string;
}

export interface OnboardingData {
    clientId: string;
    personalInfo: ClientPersonalInfo;
    contactInfo: ContactInfo;
    employmentInfo: EmploymentInfo;
    riskProfile: RiskProfile;
    investmentObjectives: InvestmentObjective;
    financialGoals: FinancialGoal[];
    selectedAccountTypes: string[];
    fundingMethods: FundingMethod[];
    uploadedDocuments: UploadedDocument[];
    disclosures: Disclosure[];
    complianceRecords: ComplianceRecord[];
    status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
    currentStep: number;
    totalSteps: number;
    submittedAt?: string;
    reviewedAt?: string;
}

export interface OnboardingSummary {
    clientId: string;
    personalInfo: ClientPersonalInfo;
    riskProfile: RiskProfile;
    investmentObjectives: InvestmentObjective;
    selectedAccounts: AccountType[];
    totalFunding: number;
    documentsStatus: {
        total: number;
        uploaded: number;
        pending: number;
        approved: number;
    };
    complianceStatus: {
        total: number;
        completed: number;
    };
    estimatedCompletionDate: string;
}

export interface CreateClientInput {
    personalInfo: ClientPersonalInfo;
    contactInfo: ContactInfo;
    employmentInfo: EmploymentInfo;
}

export interface UpdateOnboardingStepInput {
    clientId: string;
    step: number;
    data: Partial<OnboardingData>;
}

export interface SubmitOnboardingInput {
    clientId: string;
    finalReview: boolean;
    electronicallySign: boolean;
    signatureDate: string;
}

export const ONBOARDING_STEPS = [
    { id: 1, title: 'Client Information', path: '/onboarding/client-info' },
    { id: 2, title: 'Risk Assessment', path: '/onboarding/risk-assessment' },
    { id: 3, title: 'Investment Objectives', path: '/onboarding/objectives' },
    { id: 4, title: 'Account Setup', path: '/onboarding/account-setup' },
    { id: 5, title: 'Documents', path: '/onboarding/documents' },
    { id: 6, title: 'Compliance', path: '/onboarding/compliance' },
    { id: 7, title: 'Review & Submit', path: '/onboarding/review' }
] as const;

export type OnboardingStep = (typeof ONBOARDING_STEPS)[number];
