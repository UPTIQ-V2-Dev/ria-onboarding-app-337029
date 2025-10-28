import { onboardingService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

// Common schemas for reuse
const personalInfoSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    dateOfBirth: z.string(),
    socialSecurityNumber: z.string(),
    address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string(),
        country: z.string()
    })
});

const contactInfoSchema = z.object({
    preferredContactMethod: z.string(),
    emergencyContact: z.object({
        name: z.string(),
        relationship: z.string(),
        phone: z.string(),
        email: z.string()
    })
});

const employmentInfoSchema = z.object({
    employmentStatus: z.string(),
    employer: z.string().optional(),
    jobTitle: z.string().optional(),
    industry: z.string().optional(),
    annualIncome: z.number(),
    netWorth: z.number(),
    liquidNetWorth: z.number()
});

const riskProfileSchema = z.object({
    investmentExperience: z.string(),
    riskTolerance: z.string(),
    investmentTimeHorizon: z.string(),
    liquidityNeeds: z.string(),
    ageRange: z.string(),
    investmentKnowledge: z.string()
});

const investmentObjectivesSchema = z.object({
    primaryGoal: z.string(),
    specificGoals: z.array(z.string()),
    targetAmount: z.number().optional(),
    timeHorizon: z.number(),
    monthlyContribution: z.number().optional(),
    riskComfort: z.number()
});

const onboardingDataSchema = z.object({
    clientId: z.string(),
    personalInfo: personalInfoSchema.optional(),
    contactInfo: contactInfoSchema.optional(),
    employmentInfo: employmentInfoSchema.optional(),
    riskProfile: riskProfileSchema.optional(),
    investmentObjectives: investmentObjectivesSchema.optional(),
    financialGoals: z.array(z.any()).optional(),
    selectedAccountTypes: z.array(z.string()).optional(),
    fundingMethods: z.array(z.any()).optional(),
    uploadedDocuments: z.array(z.any()).optional(),
    disclosures: z.array(z.any()).optional(),
    complianceRecords: z.array(z.any()).optional(),
    status: z.string(),
    currentStep: z.number(),
    totalSteps: z.number(),
    submittedAt: z.string().optional(),
    reviewedAt: z.string().optional()
});

const createOnboardingTool: MCPTool = {
    id: 'onboarding_create',
    name: 'Create Onboarding',
    description: 'Create initial onboarding data for a client with personal information',
    inputSchema: z.object({
        clientId: z.string().min(1),
        personalInfo: personalInfoSchema,
        contactInfo: contactInfoSchema.optional(),
        employmentInfo: employmentInfoSchema.optional()
    }),
    outputSchema: z.object({
        clientId: z.string(),
        status: z.string(),
        currentStep: z.number(),
        totalSteps: z.number(),
        createdAt: z.string()
    }),
    fn: async (inputs: { clientId: string; personalInfo: any; contactInfo?: any; employmentInfo?: any }) => {
        const result = await onboardingService.createOnboardingData(inputs);
        return {
            clientId: result.clientId,
            status: result.status,
            currentStep: result.currentStep,
            totalSteps: result.totalSteps,
            createdAt: result.createdAt.toISOString()
        };
    }
};

const getOnboardingTool: MCPTool = {
    id: 'onboarding_get',
    name: 'Get Onboarding Data',
    description: 'Get complete onboarding data for a specific client',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: onboardingDataSchema,
    fn: async (inputs: { clientId: string }) => {
        const result = await onboardingService.getOnboardingDataByClientId(inputs.clientId);
        if (!result) {
            throw new Error('Onboarding data not found');
        }
        return {
            clientId: result.clientId,
            personalInfo: result.personalInfo,
            contactInfo: result.contactInfo,
            employmentInfo: result.employmentInfo,
            riskProfile: result.riskProfile,
            investmentObjectives: result.investmentObjectives,
            financialGoals: result.financialGoals,
            selectedAccountTypes: result.selectedAccountTypes,
            fundingMethods: result.fundingMethods,
            uploadedDocuments: result.uploadedDocuments,
            disclosures: result.disclosures,
            complianceRecords: result.complianceRecords,
            status: result.status,
            currentStep: result.currentStep,
            totalSteps: result.totalSteps,
            submittedAt: result.submittedAt?.toISOString(),
            reviewedAt: result.reviewedAt?.toISOString()
        };
    }
};

const updateOnboardingStepTool: MCPTool = {
    id: 'onboarding_update_step',
    name: 'Update Onboarding Step',
    description: 'Update onboarding data for a specific step (1-7)',
    inputSchema: z.object({
        clientId: z.string().min(1),
        stepNumber: z.number().int().min(1).max(7),
        stepData: z.object({
            personalInfo: personalInfoSchema.optional(),
            riskProfile: riskProfileSchema.optional(),
            investmentObjectives: investmentObjectivesSchema.optional(),
            financialGoals: z
                .array(
                    z.object({
                        goal: z.string(),
                        amount: z.number(),
                        timeframe: z.number(),
                        priority: z.string()
                    })
                )
                .optional(),
            selectedAccountTypes: z.array(z.string()).optional(),
            fundingMethods: z
                .array(
                    z.object({
                        method: z.string(),
                        amount: z.number(),
                        accountInfo: z.any().optional()
                    })
                )
                .optional(),
            uploadedDocuments: z
                .array(
                    z.object({
                        documentId: z.string(),
                        documentType: z.string(),
                        status: z.string()
                    })
                )
                .optional(),
            disclosures: z
                .array(
                    z.object({
                        disclosureId: z.string(),
                        acknowledged: z.boolean(),
                        acknowledgedAt: z.string()
                    })
                )
                .optional(),
            complianceRecords: z
                .array(
                    z.object({
                        type: z.string(),
                        acknowledged: z.boolean(),
                        acknowledgedAt: z.string().optional()
                    })
                )
                .optional()
        })
    }),
    outputSchema: onboardingDataSchema,
    fn: async (inputs: { clientId: string; stepNumber: number; stepData: any }) => {
        const result = await onboardingService.updateOnboardingStep(
            inputs.clientId,
            inputs.stepNumber,
            inputs.stepData
        );
        return {
            clientId: result.clientId,
            personalInfo: result.personalInfo,
            contactInfo: result.contactInfo,
            employmentInfo: result.employmentInfo,
            riskProfile: result.riskProfile,
            investmentObjectives: result.investmentObjectives,
            financialGoals: result.financialGoals,
            selectedAccountTypes: result.selectedAccountTypes,
            fundingMethods: result.fundingMethods,
            uploadedDocuments: result.uploadedDocuments,
            disclosures: result.disclosures,
            complianceRecords: result.complianceRecords,
            status: result.status,
            currentStep: result.currentStep,
            totalSteps: result.totalSteps,
            submittedAt: result.submittedAt?.toISOString(),
            reviewedAt: result.reviewedAt?.toISOString()
        };
    }
};

const getOnboardingSummaryTool: MCPTool = {
    id: 'onboarding_get_summary',
    name: 'Get Onboarding Summary',
    description: 'Get comprehensive onboarding summary for review purposes',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: z.object({
        clientId: z.string(),
        personalInfo: z.any().optional(),
        riskProfile: z.any().optional(),
        investmentObjectives: z.any().optional(),
        selectedAccounts: z.array(z.any()),
        totalFunding: z.number(),
        documentsStatus: z.object({
            total: z.number(),
            uploaded: z.number(),
            pending: z.number(),
            approved: z.number()
        }),
        complianceStatus: z.object({
            total: z.number(),
            completed: z.number()
        }),
        estimatedCompletionDate: z.string()
    }),
    fn: async (inputs: { clientId: string }) => {
        return await onboardingService.getOnboardingSummary(inputs.clientId);
    }
};

const submitOnboardingTool: MCPTool = {
    id: 'onboarding_submit',
    name: 'Submit Onboarding',
    description: 'Submit completed onboarding for final review and approval',
    inputSchema: z.object({
        clientId: z.string().min(1),
        finalReview: z.boolean(),
        electronicallySign: z.boolean(),
        signatureDate: z.string()
    }),
    outputSchema: z.object({
        submissionId: z.string(),
        status: z.string(),
        submittedAt: z.string()
    }),
    fn: async (inputs: {
        clientId: string;
        finalReview: boolean;
        electronicallySign: boolean;
        signatureDate: string;
    }) => {
        return await onboardingService.submitOnboarding(inputs);
    }
};

export const onboardingTools: MCPTool[] = [
    createOnboardingTool,
    getOnboardingTool,
    updateOnboardingStepTool,
    getOnboardingSummaryTool,
    submitOnboardingTool
];
