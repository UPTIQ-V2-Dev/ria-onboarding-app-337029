import { riskAssessmentService } from "../services/index.js";
import { AGE_RANGE_VALUES, INVESTMENT_EXPERIENCE_VALUES, INVESTMENT_KNOWLEDGE_VALUES, INVESTMENT_TIME_HORIZON_VALUES, LIQUIDITY_NEEDS_VALUES, RISK_TOLERANCE_VALUES } from "../validations/risk-assessment.validation.js";
import { z } from 'zod';
const riskAssessmentSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    investmentExperience: z.string(),
    riskTolerance: z.string(),
    investmentTimeHorizon: z.string(),
    liquidityNeeds: z.string(),
    ageRange: z.string(),
    investmentKnowledge: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
});
const riskProfileSchema = z.object({
    investmentExperience: z.string(),
    riskTolerance: z.string(),
    investmentTimeHorizon: z.string(),
    liquidityNeeds: z.string(),
    ageRange: z.string(),
    investmentKnowledge: z.string()
});
const createRiskAssessmentTool = {
    id: 'riskassessment_create',
    name: 'Create Risk Assessment',
    description: 'Submit a risk assessment questionnaire for a client',
    inputSchema: z.object({
        clientId: z.string().min(1, 'Client ID is required'),
        investmentExperience: z.enum(INVESTMENT_EXPERIENCE_VALUES),
        riskTolerance: z.enum(RISK_TOLERANCE_VALUES),
        investmentTimeHorizon: z.enum(INVESTMENT_TIME_HORIZON_VALUES),
        liquidityNeeds: z.enum(LIQUIDITY_NEEDS_VALUES),
        ageRange: z.enum(AGE_RANGE_VALUES),
        investmentKnowledge: z.enum(INVESTMENT_KNOWLEDGE_VALUES)
    }),
    outputSchema: riskAssessmentSchema,
    fn: async (inputs) => {
        const riskAssessment = await riskAssessmentService.createRiskAssessment(inputs.clientId, {
            investmentExperience: inputs.investmentExperience,
            riskTolerance: inputs.riskTolerance,
            investmentTimeHorizon: inputs.investmentTimeHorizon,
            liquidityNeeds: inputs.liquidityNeeds,
            ageRange: inputs.ageRange,
            investmentKnowledge: inputs.investmentKnowledge
        });
        return {
            ...riskAssessment,
            createdAt: riskAssessment.createdAt.toISOString(),
            updatedAt: riskAssessment.updatedAt.toISOString()
        };
    }
};
const getRiskAssessmentTool = {
    id: 'riskassessment_get',
    name: 'Get Risk Assessment',
    description: 'Get risk assessment for a specific client',
    inputSchema: z.object({
        clientId: z.string().min(1, 'Client ID is required')
    }),
    outputSchema: z.object({
        id: z.string().nullable(),
        clientId: z.string().nullable(),
        investmentExperience: z.string().nullable(),
        riskTolerance: z.string().nullable(),
        investmentTimeHorizon: z.string().nullable(),
        liquidityNeeds: z.string().nullable(),
        ageRange: z.string().nullable(),
        investmentKnowledge: z.string().nullable(),
        createdAt: z.string().nullable(),
        updatedAt: z.string().nullable()
    }),
    fn: async (inputs) => {
        const riskAssessment = await riskAssessmentService.getRiskAssessmentByClientId(inputs.clientId);
        if (!riskAssessment) {
            return {
                id: null,
                clientId: null,
                investmentExperience: null,
                riskTolerance: null,
                investmentTimeHorizon: null,
                liquidityNeeds: null,
                ageRange: null,
                investmentKnowledge: null,
                createdAt: null,
                updatedAt: null
            };
        }
        return {
            ...riskAssessment,
            createdAt: riskAssessment.createdAt.toISOString(),
            updatedAt: riskAssessment.updatedAt.toISOString()
        };
    }
};
const updateRiskAssessmentTool = {
    id: 'riskassessment_update',
    name: 'Update Risk Assessment',
    description: 'Update risk assessment for a specific client',
    inputSchema: z.object({
        clientId: z.string().min(1, 'Client ID is required'),
        investmentExperience: z.enum(INVESTMENT_EXPERIENCE_VALUES).optional(),
        riskTolerance: z.enum(RISK_TOLERANCE_VALUES).optional(),
        investmentTimeHorizon: z.enum(INVESTMENT_TIME_HORIZON_VALUES).optional(),
        liquidityNeeds: z.enum(LIQUIDITY_NEEDS_VALUES).optional(),
        ageRange: z.enum(AGE_RANGE_VALUES).optional(),
        investmentKnowledge: z.enum(INVESTMENT_KNOWLEDGE_VALUES).optional()
    }),
    outputSchema: riskAssessmentSchema,
    fn: async (inputs) => {
        const { clientId, ...updateData } = inputs;
        const riskAssessment = await riskAssessmentService.updateRiskAssessmentByClientId(clientId, updateData);
        return {
            ...riskAssessment,
            createdAt: riskAssessment.createdAt.toISOString(),
            updatedAt: riskAssessment.updatedAt.toISOString()
        };
    }
};
const deleteRiskAssessmentTool = {
    id: 'riskassessment_delete',
    name: 'Delete Risk Assessment',
    description: 'Delete risk assessment for a specific client',
    inputSchema: z.object({
        clientId: z.string().min(1, 'Client ID is required')
    }),
    outputSchema: z.object({
        success: z.boolean()
    }),
    fn: async (inputs) => {
        await riskAssessmentService.deleteRiskAssessmentByClientId(inputs.clientId);
        return { success: true };
    }
};
const getRiskProfilesTool = {
    id: 'riskassessment_get_profiles',
    name: 'Get Risk Profiles',
    description: 'Get available risk profile templates for reference',
    inputSchema: z.object({}),
    outputSchema: z.object({
        profiles: z.array(riskProfileSchema)
    }),
    fn: () => {
        const profiles = riskAssessmentService.getRiskProfiles();
        return { profiles };
    }
};
export const riskAssessmentTools = [
    createRiskAssessmentTool,
    getRiskAssessmentTool,
    updateRiskAssessmentTool,
    deleteRiskAssessmentTool,
    getRiskProfilesTool
];
