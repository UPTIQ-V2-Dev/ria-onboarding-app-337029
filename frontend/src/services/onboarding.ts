import { api } from '@/lib/api';
import { emitter } from '@/agentSdk';
import type {
    OnboardingData,
    OnboardingSummary,
    CreateClientInput,
    UpdateOnboardingStepInput,
    SubmitOnboardingInput,
    AccountType,
    DocumentType,
    Disclosure,
    RiskProfile,
    InvestmentObjective,
    UploadedDocument
} from '@/types/onboarding';

// Client creation and basic info
export const createClient = async (input: CreateClientInput): Promise<{ clientId: string }> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return {
            clientId: `client_${Date.now()}`
        };
    }

    const response = await api.post<{ clientId: string }>('/clients', input);
    return response.data;
};

export const getOnboardingData = async (clientId: string): Promise<OnboardingData> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return {
            clientId,
            personalInfo: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '+1-555-123-4567',
                dateOfBirth: '1990-05-15',
                socialSecurityNumber: '***-**-****',
                address: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'USA'
                }
            },
            contactInfo: {
                preferredContactMethod: 'email',
                emergencyContact: {
                    name: 'Jane Doe',
                    relationship: 'Spouse',
                    phone: '+1-555-123-4568',
                    email: 'jane.doe@example.com'
                }
            },
            employmentInfo: {
                employmentStatus: 'employed',
                employer: 'Tech Corp',
                jobTitle: 'Software Engineer',
                industry: 'Technology',
                annualIncome: 120000,
                netWorth: 250000,
                liquidNetWorth: 100000
            },
            riskProfile: {
                investmentExperience: 'good',
                riskTolerance: 'moderate',
                investmentTimeHorizon: 'long',
                liquidityNeeds: 'low',
                ageRange: '31-45',
                investmentKnowledge: 'intermediate'
            },
            investmentObjectives: {
                primaryGoal: 'growth',
                specificGoals: ['Retirement', 'Long-term wealth building'],
                targetAmount: 1000000,
                timeHorizon: 25,
                monthlyContribution: 2000,
                riskComfort: 7
            },
            financialGoals: [],
            selectedAccountTypes: [],
            fundingMethods: [],
            uploadedDocuments: [],
            disclosures: [],
            complianceRecords: [],
            status: 'draft',
            currentStep: 1,
            totalSteps: 7
        };
    }

    const response = await api.get<OnboardingData>(`/onboarding/${clientId}`);
    return response.data;
};

export const updateOnboardingStep = async (input: UpdateOnboardingStepInput): Promise<OnboardingData> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const existingData = await getOnboardingData(input.clientId);
        return {
            ...existingData,
            ...input.data,
            currentStep: Math.max(existingData.currentStep, input.step)
        };
    }

    const response = await api.put<OnboardingData>(`/onboarding/${input.clientId}/step/${input.step}`, input.data);
    return response.data;
};

// Risk assessment
export const submitRiskAssessment = async (clientId: string, riskProfile: RiskProfile): Promise<RiskProfile> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return riskProfile;
    }

    const response = await api.post<RiskProfile>(`/risk-assessment`, { clientId, ...riskProfile });
    return response.data;
};

export const getRiskProfiles = async (): Promise<RiskProfile[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return [
            {
                investmentExperience: 'limited',
                riskTolerance: 'conservative',
                investmentTimeHorizon: 'long',
                liquidityNeeds: 'medium',
                ageRange: '31-45',
                investmentKnowledge: 'beginner'
            },
            {
                investmentExperience: 'good',
                riskTolerance: 'moderate',
                investmentTimeHorizon: 'long',
                liquidityNeeds: 'low',
                ageRange: '31-45',
                investmentKnowledge: 'intermediate'
            }
        ];
    }

    const response = await api.get<RiskProfile[]>('/risk-profiles');
    return response.data;
};

// Investment objectives
export const submitInvestmentObjectives = async (
    clientId: string,
    objectives: InvestmentObjective
): Promise<InvestmentObjective> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return objectives;
    }

    const response = await api.post<InvestmentObjective>(`/investment-objectives`, { clientId, ...objectives });
    return response.data;
};

// Account setup
export const getAccountTypes = async (): Promise<AccountType[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return [
            {
                id: 'traditional_ira',
                name: 'Traditional IRA',
                description: 'Tax-deferred retirement account',
                taxAdvantaged: true,
                minimumBalance: 1000,
                fees: {
                    annual: 25,
                    transaction: 0
                }
            },
            {
                id: 'roth_ira',
                name: 'Roth IRA',
                description: 'Tax-free retirement account',
                taxAdvantaged: true,
                minimumBalance: 1000,
                fees: {
                    annual: 25,
                    transaction: 0
                }
            },
            {
                id: 'taxable',
                name: 'Taxable Investment Account',
                description: 'Standard investment account',
                taxAdvantaged: false,
                minimumBalance: 500,
                fees: {
                    annual: 0,
                    transaction: 4.95
                }
            }
        ];
    }

    const response = await api.get<AccountType[]>('/account-types');
    return response.data;
};

export const createAccounts = async (clientId: string, accountTypeIds: string[]): Promise<{ accountIds: string[] }> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return {
            accountIds: accountTypeIds.map(id => `acc_${id}_${Date.now()}`)
        };
    }

    const response = await api.post<{ accountIds: string[] }>('/accounts', { clientId, accountTypeIds });
    return response.data;
};

// Document management
export const getDocumentTypes = async (): Promise<DocumentType[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return [
            {
                id: 'drivers_license',
                name: "Driver's License",
                required: true,
                description: 'Government-issued photo ID',
                acceptedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
                maxFileSize: 5 * 1024 * 1024 // 5MB
            },
            {
                id: 'bank_statement',
                name: 'Bank Statement',
                required: true,
                description: 'Recent bank statement for funding verification',
                acceptedFormats: ['pdf'],
                maxFileSize: 10 * 1024 * 1024 // 10MB
            },
            {
                id: 'w2',
                name: 'W-2 Form',
                required: false,
                description: 'Most recent W-2 tax form',
                acceptedFormats: ['pdf'],
                maxFileSize: 10 * 1024 * 1024 // 10MB
            }
        ];
    }

    const response = await api.get<DocumentType[]>('/document-types');
    return response.data;
};

export const uploadDocument = async (
    clientId: string,
    documentTypeId: string,
    file: File
): Promise<UploadedDocument> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('clientId', clientId);
    formData.append('documentTypeId', documentTypeId);

    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const mockDocument: UploadedDocument = {
            id: `doc_${Date.now()}`,
            documentTypeId,
            fileName: file.name,
            fileSize: file.size,
            mimeType: file.type,
            uploadedAt: new Date().toISOString(),
            status: 'pending',
            signedUrl: URL.createObjectURL(file)
        };

        // Emit bank statement uploaded event if applicable
        if (documentTypeId === 'bank_statement') {
            emitter.emit({
                agentId: '37cff143-f7d2-4204-878f-020620e7697e',
                event: 'Bank-Statement-Uploaded',
                payload: { clientId, documentId: mockDocument.id },
                documents: [
                    {
                        signedUrl: mockDocument.signedUrl!,
                        fileName: file.name,
                        mimeType: file.type
                    }
                ]
            });
        }

        return mockDocument;
    }

    const response = await api.post<UploadedDocument>('/documents/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    // Emit bank statement uploaded event if applicable
    if (documentTypeId === 'bank_statement' && response.data.signedUrl) {
        emitter.emit({
            agentId: '37cff143-f7d2-4204-878f-020620e7697e',
            event: 'Bank-Statement-Uploaded',
            payload: { clientId, documentId: response.data.id },
            documents: [
                {
                    signedUrl: response.data.signedUrl,
                    fileName: file.name,
                    mimeType: file.type
                }
            ]
        });
    }

    return response.data;
};

export const getClientDocuments = async (clientId: string): Promise<UploadedDocument[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return [];
    }

    const response = await api.get<UploadedDocument[]>(`/documents/client/${clientId}`);
    return response.data;
};

// Compliance
export const getDisclosures = async (): Promise<Disclosure[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return [
            {
                id: 'investment_risks',
                title: 'Investment Risk Disclosure',
                content: 'Investment involves risk, including potential loss of principal...',
                required: true,
                acknowledged: false
            },
            {
                id: 'privacy_policy',
                title: 'Privacy Policy',
                content: 'This privacy policy describes how we collect and use your personal information...',
                required: true,
                acknowledged: false
            },
            {
                id: 'terms_of_service',
                title: 'Terms of Service',
                content: 'These terms govern your use of our investment services...',
                required: true,
                acknowledged: false
            }
        ];
    }

    const response = await api.get<Disclosure[]>('/disclosures');
    return response.data;
};

export const acknowledgeDisclosures = async (clientId: string, disclosureIds: string[]): Promise<void> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return;
    }

    await api.post('/compliance/agreements', { clientId, disclosureIds });
};

// Final submission
export const getOnboardingSummary = async (clientId: string): Promise<OnboardingSummary> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const onboardingData = await getOnboardingData(clientId);
        const accountTypes = await getAccountTypes();

        return {
            clientId,
            personalInfo: onboardingData.personalInfo,
            riskProfile: onboardingData.riskProfile,
            investmentObjectives: onboardingData.investmentObjectives,
            selectedAccounts: accountTypes.filter(acc => onboardingData.selectedAccountTypes.includes(acc.id)),
            totalFunding: onboardingData.fundingMethods.reduce((sum, method) => sum + method.amount, 0),
            documentsStatus: {
                total: 3,
                uploaded: onboardingData.uploadedDocuments.length,
                pending: onboardingData.uploadedDocuments.filter(doc => doc.status === 'pending').length,
                approved: onboardingData.uploadedDocuments.filter(doc => doc.status === 'approved').length
            },
            complianceStatus: {
                total: 3,
                completed: onboardingData.disclosures.filter(disc => disc.acknowledged).length
            },
            estimatedCompletionDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        };
    }

    const response = await api.get<OnboardingSummary>(`/onboarding/${clientId}/summary`);
    return response.data;
};

export const submitOnboarding = async (input: SubmitOnboardingInput): Promise<{ submissionId: string }> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return {
            submissionId: `submission_${Date.now()}`
        };
    }

    const response = await api.post<{ submissionId: string }>('/onboarding/submit', input);
    return response.data;
};
