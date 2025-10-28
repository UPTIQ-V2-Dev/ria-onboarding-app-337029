import prisma from '../client.ts';
import { OnboardingData, Prisma } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';

/**
 * Create initial onboarding data for a client
 */
const createOnboardingData = async (data: {
    clientId: string;
    personalInfo: any;
    contactInfo?: any;
    employmentInfo?: any;
}): Promise<OnboardingData> => {
    // Check if client exists
    const client = await prisma.client.findUnique({
        where: { id: data.clientId }
    });

    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    // Check if onboarding data already exists
    const existingOnboardingData = await prisma.onboardingData.findUnique({
        where: { clientId: data.clientId }
    });

    if (existingOnboardingData) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid input or client already exists');
    }

    return prisma.onboardingData.create({
        data: {
            clientId: data.clientId,
            personalInfo: data.personalInfo,
            contactInfo: data.contactInfo || {},
            employmentInfo: data.employmentInfo || {},
            financialGoals: [],
            selectedAccountTypes: [],
            fundingMethods: [],
            uploadedDocuments: [],
            disclosures: [],
            complianceRecords: [],
            status: 'draft',
            currentStep: 1,
            totalSteps: 7
        }
    });
};

/**
 * Get onboarding data by client ID
 */
const getOnboardingDataByClientId = async (clientId: string): Promise<OnboardingData | null> => {
    const onboardingData = await prisma.onboardingData.findUnique({
        where: { clientId }
    });

    if (!onboardingData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Onboarding data not found');
    }

    // Mask sensitive information like SSN in personalInfo
    if (onboardingData.personalInfo && typeof onboardingData.personalInfo === 'object') {
        const personalInfo = onboardingData.personalInfo as any;
        if (personalInfo.socialSecurityNumber) {
            personalInfo.socialSecurityNumber = `***-**-${personalInfo.socialSecurityNumber.slice(-4)}`;
        }
    }

    return onboardingData;
};

/**
 * Update onboarding data for a specific step
 */
const updateOnboardingStep = async (
    clientId: string,
    stepNumber: number,
    stepData: Record<string, any>
): Promise<OnboardingData> => {
    const existingOnboardingData = await prisma.onboardingData.findUnique({
        where: { clientId }
    });

    if (!existingOnboardingData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Onboarding data not found');
    }

    // Validate step number
    if (stepNumber < 1 || stepNumber > existingOnboardingData.totalSteps) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid step or data');
    }

    const updateData: Prisma.OnboardingDataUpdateInput = {
        updatedAt: new Date()
    };

    // Update specific step data based on step number
    switch (stepNumber) {
        case 1:
            // Personal Info step
            if (stepData.personalInfo) {
                updateData.personalInfo = stepData.personalInfo;
            }
            break;
        case 2:
            // Risk Profile step
            if (stepData.riskProfile) {
                updateData.riskProfile = stepData.riskProfile;
            }
            break;
        case 3:
            // Investment Objectives step
            if (stepData.investmentObjectives) {
                updateData.investmentObjectives = stepData.investmentObjectives;
            }
            break;
        case 4:
            // Financial Goals step
            if (stepData.financialGoals) {
                updateData.financialGoals = stepData.financialGoals;
            }
            break;
        case 5:
            // Account Types step
            if (stepData.selectedAccountTypes) {
                updateData.selectedAccountTypes = stepData.selectedAccountTypes;
            }
            break;
        case 6:
            // Funding Methods step
            if (stepData.fundingMethods) {
                updateData.fundingMethods = stepData.fundingMethods;
            }
            break;
        case 7:
            // Documents & Compliance step
            if (stepData.uploadedDocuments) {
                updateData.uploadedDocuments = stepData.uploadedDocuments;
            }
            if (stepData.disclosures) {
                updateData.disclosures = stepData.disclosures;
            }
            if (stepData.complianceRecords) {
                updateData.complianceRecords = stepData.complianceRecords;
            }
            break;
        default:
            throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid step or data');
    }

    // Update current step if we're advancing
    if (stepNumber > existingOnboardingData.currentStep) {
        updateData.currentStep = stepNumber;
    }

    const updatedOnboardingData = await prisma.onboardingData.update({
        where: { clientId },
        data: updateData
    });

    // Mask sensitive information
    if (updatedOnboardingData.personalInfo && typeof updatedOnboardingData.personalInfo === 'object') {
        const personalInfo = updatedOnboardingData.personalInfo as any;
        if (personalInfo.socialSecurityNumber) {
            personalInfo.socialSecurityNumber = `***-**-${personalInfo.socialSecurityNumber.slice(-4)}`;
        }
    }

    return updatedOnboardingData;
};

/**
 * Get onboarding summary for review
 */
const getOnboardingSummary = async (clientId: string) => {
    const onboardingData = await prisma.onboardingData.findUnique({
        where: { clientId }
    });

    if (!onboardingData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Onboarding data not found');
    }

    // Get client info
    const client = await prisma.client.findUnique({
        where: { id: clientId }
    });

    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    // Calculate document status
    const uploadedDocuments = (onboardingData.uploadedDocuments as any[]) || [];
    const documentsStatus = {
        total: uploadedDocuments.length,
        uploaded: uploadedDocuments.filter(doc => doc.status !== 'pending').length,
        pending: uploadedDocuments.filter(doc => doc.status === 'pending').length,
        approved: uploadedDocuments.filter(doc => doc.status === 'approved').length
    };

    // Calculate compliance status
    const complianceRecords = (onboardingData.complianceRecords as any[]) || [];
    const complianceStatus = {
        total: complianceRecords.length,
        completed: complianceRecords.filter(record => record.acknowledged).length
    };

    // Calculate total funding
    const fundingMethods = (onboardingData.fundingMethods as any[]) || [];
    const totalFunding = fundingMethods.reduce((total, method) => total + (method.amount || 0), 0);

    // Estimated completion date (assume 7 days from creation for now)
    const estimatedCompletionDate = new Date(onboardingData.createdAt);
    estimatedCompletionDate.setDate(estimatedCompletionDate.getDate() + 7);

    // Get selected account types info
    const selectedAccountTypes = (onboardingData.selectedAccountTypes as string[]) || [];
    const selectedAccounts = await prisma.accountType.findMany({
        where: {
            id: { in: selectedAccountTypes }
        }
    });

    // Mask sensitive information in personal info
    let personalInfo = onboardingData.personalInfo as any;
    if (personalInfo && personalInfo.socialSecurityNumber) {
        personalInfo = {
            ...personalInfo,
            socialSecurityNumber: `***-**-${personalInfo.socialSecurityNumber.slice(-4)}`
        };
    }

    return {
        clientId,
        personalInfo,
        riskProfile: onboardingData.riskProfile,
        investmentObjectives: onboardingData.investmentObjectives,
        selectedAccounts,
        totalFunding,
        documentsStatus,
        complianceStatus,
        estimatedCompletionDate: estimatedCompletionDate.toISOString()
    };
};

/**
 * Submit completed onboarding for review
 */
const submitOnboarding = async (data: {
    clientId: string;
    finalReview: boolean;
    electronicallySign: boolean;
    signatureDate: string;
}): Promise<{ submissionId: string; status: string; submittedAt: string }> => {
    const onboardingData = await prisma.onboardingData.findUnique({
        where: { clientId: data.clientId }
    });

    if (!onboardingData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Onboarding data not found');
    }

    // Validate that onboarding is complete
    if (onboardingData.currentStep < onboardingData.totalSteps) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Incomplete onboarding or invalid data');
    }

    if (!data.finalReview || !data.electronicallySign) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Incomplete onboarding or invalid data');
    }

    // Update onboarding data with submission details
    const submittedAt = new Date();
    await prisma.onboardingData.update({
        where: { clientId: data.clientId },
        data: {
            status: 'submitted',
            submittedAt,
            complianceRecords: [
                ...(onboardingData.complianceRecords as any[]),
                {
                    type: 'electronic_signature',
                    signedAt: data.signatureDate,
                    acknowledged: true
                }
            ]
        }
    });

    // Update client status
    await prisma.client.update({
        where: { id: data.clientId },
        data: {
            status: 'submitted',
            progress: 100
        }
    });

    // Generate a submission ID (in practice, this might be more sophisticated)
    const submissionId = `sub-${Date.now()}`;

    return {
        submissionId,
        status: 'submitted',
        submittedAt: submittedAt.toISOString()
    };
};

export default {
    createOnboardingData,
    getOnboardingDataByClientId,
    updateOnboardingStep,
    getOnboardingSummary,
    submitOnboarding
};
