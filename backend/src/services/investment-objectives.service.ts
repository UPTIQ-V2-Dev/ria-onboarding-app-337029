import prisma from '../client.ts';
import { InvestmentObjectives, Prisma } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';

/**
 * Create investment objectives for a client
 * @param {Object} investmentObjectivesData
 * @returns {Promise<InvestmentObjectives>}
 */
const createInvestmentObjectives = async (data: {
    clientId: string;
    primaryGoal: string;
    specificGoals: string[];
    targetAmount?: number;
    timeHorizon: number;
    monthlyContribution?: number;
    riskComfort: number;
}): Promise<InvestmentObjectives> => {
    // Check if client exists
    const client = await prisma.client.findUnique({
        where: { id: data.clientId }
    });
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    // Check if investment objectives already exist for this client
    const existing = await prisma.investmentObjectives.findUnique({
        where: { clientId: data.clientId }
    });
    if (existing) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Investment objectives already exist for this client');
    }

    return prisma.investmentObjectives.create({
        data: {
            clientId: data.clientId,
            primaryGoal: data.primaryGoal,
            specificGoals: data.specificGoals,
            targetAmount: data.targetAmount,
            timeHorizon: data.timeHorizon,
            monthlyContribution: data.monthlyContribution,
            riskComfort: data.riskComfort
        }
    });
};

/**
 * Get investment objectives by client ID
 * @param {string} clientId
 * @returns {Promise<InvestmentObjectives | null>}
 */
const getInvestmentObjectivesByClientId = async (clientId: string): Promise<InvestmentObjectives | null> => {
    return await prisma.investmentObjectives.findUnique({
        where: { clientId },
        include: {
            client: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            }
        }
    });
};

/**
 * Get investment objectives by ID
 * @param {string} id
 * @returns {Promise<InvestmentObjectives | null>}
 */
const getInvestmentObjectivesById = async (id: string): Promise<InvestmentObjectives | null> => {
    return await prisma.investmentObjectives.findUnique({
        where: { id },
        include: {
            client: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            }
        }
    });
};

/**
 * Update investment objectives by ID
 * @param {string} id
 * @param {Object} updateData
 * @returns {Promise<InvestmentObjectives>}
 */
const updateInvestmentObjectivesById = async (
    id: string,
    updateData: Prisma.InvestmentObjectivesUpdateInput
): Promise<InvestmentObjectives> => {
    const investmentObjectives = await getInvestmentObjectivesById(id);
    if (!investmentObjectives) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Investment objectives not found');
    }

    return prisma.investmentObjectives.update({
        where: { id },
        data: updateData,
        include: {
            client: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            }
        }
    });
};

/**
 * Update investment objectives by client ID
 * @param {string} clientId
 * @param {Object} updateData
 * @returns {Promise<InvestmentObjectives>}
 */
const updateInvestmentObjectivesByClientId = async (
    clientId: string,
    updateData: Prisma.InvestmentObjectivesUpdateInput
): Promise<InvestmentObjectives> => {
    const investmentObjectives = await getInvestmentObjectivesByClientId(clientId);
    if (!investmentObjectives) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Investment objectives not found for this client');
    }

    return prisma.investmentObjectives.update({
        where: { clientId },
        data: updateData,
        include: {
            client: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            }
        }
    });
};

/**
 * Delete investment objectives by ID
 * @param {string} id
 * @returns {Promise<InvestmentObjectives>}
 */
const deleteInvestmentObjectivesById = async (id: string): Promise<InvestmentObjectives> => {
    const investmentObjectives = await getInvestmentObjectivesById(id);
    if (!investmentObjectives) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Investment objectives not found');
    }

    return prisma.investmentObjectives.delete({
        where: { id }
    });
};

/**
 * Delete investment objectives by client ID
 * @param {string} clientId
 * @returns {Promise<InvestmentObjectives>}
 */
const deleteInvestmentObjectivesByClientId = async (clientId: string): Promise<InvestmentObjectives> => {
    const investmentObjectives = await getInvestmentObjectivesByClientId(clientId);
    if (!investmentObjectives) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Investment objectives not found for this client');
    }

    return prisma.investmentObjectives.delete({
        where: { clientId }
    });
};

export default {
    createInvestmentObjectives,
    getInvestmentObjectivesByClientId,
    getInvestmentObjectivesById,
    updateInvestmentObjectivesById,
    updateInvestmentObjectivesByClientId,
    deleteInvestmentObjectivesById,
    deleteInvestmentObjectivesByClientId
};
