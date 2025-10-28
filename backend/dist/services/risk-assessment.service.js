import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Create a risk assessment
 * @param {string} clientId
 * @param {Object} riskData
 * @returns {Promise<RiskAssessment>}
 */
const createRiskAssessment = async (clientId, riskData) => {
    // Check if client exists
    const client = await prisma.client.findUnique({
        where: { id: clientId }
    });
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    // Check if risk assessment already exists for this client
    const existingAssessment = await prisma.riskAssessment.findUnique({
        where: { clientId }
    });
    if (existingAssessment) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Risk assessment already exists for this client');
    }
    return prisma.riskAssessment.create({
        data: {
            clientId,
            ...riskData
        }
    });
};
/**
 * Get risk assessment by client ID
 * @param {string} clientId
 * @returns {Promise<RiskAssessment | null>}
 */
const getRiskAssessmentByClientId = async (clientId) => {
    return await prisma.riskAssessment.findUnique({
        where: { clientId }
    });
};
/**
 * Update risk assessment by client ID
 * @param {string} clientId
 * @param {Object} updateData
 * @returns {Promise<RiskAssessment>}
 */
const updateRiskAssessmentByClientId = async (clientId, updateData) => {
    const existingAssessment = await getRiskAssessmentByClientId(clientId);
    if (!existingAssessment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Risk assessment not found');
    }
    return prisma.riskAssessment.update({
        where: { clientId },
        data: updateData
    });
};
/**
 * Get risk profile templates
 * @returns {Promise<Array>}
 */
const getRiskProfiles = () => {
    // Static risk profile templates as per API specification
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
        },
        {
            investmentExperience: 'extensive',
            riskTolerance: 'aggressive',
            investmentTimeHorizon: 'long',
            liquidityNeeds: 'low',
            ageRange: '25-30',
            investmentKnowledge: 'advanced'
        },
        {
            investmentExperience: 'some',
            riskTolerance: 'moderate',
            investmentTimeHorizon: 'medium',
            liquidityNeeds: 'medium',
            ageRange: '46-60',
            investmentKnowledge: 'intermediate'
        },
        {
            investmentExperience: 'limited',
            riskTolerance: 'conservative',
            investmentTimeHorizon: 'short',
            liquidityNeeds: 'high',
            ageRange: '60+',
            investmentKnowledge: 'beginner'
        }
    ];
};
/**
 * Delete risk assessment by client ID
 * @param {string} clientId
 * @returns {Promise<RiskAssessment>}
 */
const deleteRiskAssessmentByClientId = async (clientId) => {
    const existingAssessment = await getRiskAssessmentByClientId(clientId);
    if (!existingAssessment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Risk assessment not found');
    }
    return prisma.riskAssessment.delete({
        where: { clientId }
    });
};
export default {
    createRiskAssessment,
    getRiskAssessmentByClientId,
    updateRiskAssessmentByClientId,
    getRiskProfiles,
    deleteRiskAssessmentByClientId
};
