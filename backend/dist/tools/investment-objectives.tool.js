import { investmentObjectivesService } from "../services/index.js";
import { z } from 'zod';
const investmentObjectivesSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    primaryGoal: z.string(),
    specificGoals: z.array(z.string()),
    targetAmount: z.number().nullable(),
    timeHorizon: z.number(),
    monthlyContribution: z.number().nullable(),
    riskComfort: z.number(),
    createdAt: z.string(),
    updatedAt: z.string()
});
const investmentObjectivesWithClientSchema = investmentObjectivesSchema.extend({
    client: z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string()
    })
});
const createInvestmentObjectivesTool = {
    id: 'investment_objectives_create',
    name: 'Create Investment Objectives',
    description: 'Create investment objectives for a client',
    inputSchema: z.object({
        clientId: z.string(),
        primaryGoal: z.string(),
        specificGoals: z.array(z.string()),
        targetAmount: z.number().positive().optional(),
        timeHorizon: z.number().int().min(1),
        monthlyContribution: z.number().positive().optional(),
        riskComfort: z.number().int().min(1).max(10)
    }),
    outputSchema: investmentObjectivesSchema,
    fn: async (inputs) => {
        const result = await investmentObjectivesService.createInvestmentObjectives(inputs);
        return {
            ...result,
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        };
    }
};
const getInvestmentObjectivesByIdTool = {
    id: 'investment_objectives_get_by_id',
    name: 'Get Investment Objectives By ID',
    description: 'Retrieve investment objectives by their ID',
    inputSchema: z.object({
        id: z.string()
    }),
    outputSchema: investmentObjectivesWithClientSchema,
    fn: async (inputs) => {
        const result = await investmentObjectivesService.getInvestmentObjectivesById(inputs.id);
        if (!result) {
            throw new Error('Investment objectives not found');
        }
        return {
            ...result,
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        };
    }
};
const getInvestmentObjectivesByClientIdTool = {
    id: 'investment_objectives_get_by_client_id',
    name: 'Get Investment Objectives By Client ID',
    description: 'Retrieve investment objectives for a specific client',
    inputSchema: z.object({
        clientId: z.string()
    }),
    outputSchema: investmentObjectivesWithClientSchema,
    fn: async (inputs) => {
        const result = await investmentObjectivesService.getInvestmentObjectivesByClientId(inputs.clientId);
        if (!result) {
            throw new Error('Investment objectives not found for this client');
        }
        return {
            ...result,
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        };
    }
};
const updateInvestmentObjectivesByIdTool = {
    id: 'investment_objectives_update_by_id',
    name: 'Update Investment Objectives By ID',
    description: 'Update investment objectives by their ID',
    inputSchema: z.object({
        id: z.string(),
        primaryGoal: z.string().optional(),
        specificGoals: z.array(z.string()).optional(),
        targetAmount: z.number().positive().optional(),
        timeHorizon: z.number().int().min(1).optional(),
        monthlyContribution: z.number().positive().optional(),
        riskComfort: z.number().int().min(1).max(10).optional()
    }),
    outputSchema: investmentObjectivesWithClientSchema,
    fn: async (inputs) => {
        const { id, ...updateData } = inputs;
        const result = await investmentObjectivesService.updateInvestmentObjectivesById(id, updateData);
        return {
            ...result,
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        };
    }
};
const updateInvestmentObjectivesByClientIdTool = {
    id: 'investment_objectives_update_by_client_id',
    name: 'Update Investment Objectives By Client ID',
    description: 'Update investment objectives for a specific client',
    inputSchema: z.object({
        clientId: z.string(),
        primaryGoal: z.string().optional(),
        specificGoals: z.array(z.string()).optional(),
        targetAmount: z.number().positive().optional(),
        timeHorizon: z.number().int().min(1).optional(),
        monthlyContribution: z.number().positive().optional(),
        riskComfort: z.number().int().min(1).max(10).optional()
    }),
    outputSchema: investmentObjectivesWithClientSchema,
    fn: async (inputs) => {
        const { clientId, ...updateData } = inputs;
        const result = await investmentObjectivesService.updateInvestmentObjectivesByClientId(clientId, updateData);
        return {
            ...result,
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        };
    }
};
const deleteInvestmentObjectivesByIdTool = {
    id: 'investment_objectives_delete_by_id',
    name: 'Delete Investment Objectives By ID',
    description: 'Delete investment objectives by their ID',
    inputSchema: z.object({
        id: z.string()
    }),
    outputSchema: z.object({
        success: z.boolean(),
        message: z.string()
    }),
    fn: async (inputs) => {
        await investmentObjectivesService.deleteInvestmentObjectivesById(inputs.id);
        return {
            success: true,
            message: 'Investment objectives deleted successfully'
        };
    }
};
const deleteInvestmentObjectivesByClientIdTool = {
    id: 'investment_objectives_delete_by_client_id',
    name: 'Delete Investment Objectives By Client ID',
    description: 'Delete investment objectives for a specific client',
    inputSchema: z.object({
        clientId: z.string()
    }),
    outputSchema: z.object({
        success: z.boolean(),
        message: z.string()
    }),
    fn: async (inputs) => {
        await investmentObjectivesService.deleteInvestmentObjectivesByClientId(inputs.clientId);
        return {
            success: true,
            message: 'Investment objectives deleted successfully'
        };
    }
};
export const investmentObjectivesTools = [
    createInvestmentObjectivesTool,
    getInvestmentObjectivesByIdTool,
    getInvestmentObjectivesByClientIdTool,
    updateInvestmentObjectivesByIdTool,
    updateInvestmentObjectivesByClientIdTool,
    deleteInvestmentObjectivesByIdTool,
    deleteInvestmentObjectivesByClientIdTool
];
