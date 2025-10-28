import Joi from 'joi';
// Valid values for each field based on typical risk assessment questionnaires
const INVESTMENT_EXPERIENCE_VALUES = ['none', 'limited', 'some', 'good', 'extensive'];
const RISK_TOLERANCE_VALUES = ['conservative', 'moderate', 'aggressive'];
const INVESTMENT_TIME_HORIZON_VALUES = ['short', 'medium', 'long'];
const LIQUIDITY_NEEDS_VALUES = ['high', 'medium', 'low'];
const AGE_RANGE_VALUES = ['18-24', '25-30', '31-45', '46-60', '60+'];
const INVESTMENT_KNOWLEDGE_VALUES = ['beginner', 'intermediate', 'advanced'];
const createRiskAssessment = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        investmentExperience: Joi.string()
            .required()
            .valid(...INVESTMENT_EXPERIENCE_VALUES),
        riskTolerance: Joi.string()
            .required()
            .valid(...RISK_TOLERANCE_VALUES),
        investmentTimeHorizon: Joi.string()
            .required()
            .valid(...INVESTMENT_TIME_HORIZON_VALUES),
        liquidityNeeds: Joi.string()
            .required()
            .valid(...LIQUIDITY_NEEDS_VALUES),
        ageRange: Joi.string()
            .required()
            .valid(...AGE_RANGE_VALUES),
        investmentKnowledge: Joi.string()
            .required()
            .valid(...INVESTMENT_KNOWLEDGE_VALUES)
    })
};
const getRiskAssessment = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
const updateRiskAssessment = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    }),
    body: Joi.object()
        .keys({
        investmentExperience: Joi.string().valid(...INVESTMENT_EXPERIENCE_VALUES),
        riskTolerance: Joi.string().valid(...RISK_TOLERANCE_VALUES),
        investmentTimeHorizon: Joi.string().valid(...INVESTMENT_TIME_HORIZON_VALUES),
        liquidityNeeds: Joi.string().valid(...LIQUIDITY_NEEDS_VALUES),
        ageRange: Joi.string().valid(...AGE_RANGE_VALUES),
        investmentKnowledge: Joi.string().valid(...INVESTMENT_KNOWLEDGE_VALUES)
    })
        .min(1)
};
const deleteRiskAssessment = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
export default {
    createRiskAssessment,
    getRiskAssessment,
    updateRiskAssessment,
    deleteRiskAssessment
};
export { INVESTMENT_EXPERIENCE_VALUES, RISK_TOLERANCE_VALUES, INVESTMENT_TIME_HORIZON_VALUES, LIQUIDITY_NEEDS_VALUES, AGE_RANGE_VALUES, INVESTMENT_KNOWLEDGE_VALUES };
