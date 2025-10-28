import Joi from 'joi';
const createInvestmentObjectives = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        primaryGoal: Joi.string().required(),
        specificGoals: Joi.array().items(Joi.string()).required(),
        targetAmount: Joi.number().positive().optional(),
        timeHorizon: Joi.number().integer().min(1).required(),
        monthlyContribution: Joi.number().positive().optional(),
        riskComfort: Joi.number().integer().min(1).max(10).required()
    })
};
const getInvestmentObjectivesById = {
    params: Joi.object().keys({
        id: Joi.string().required()
    })
};
const getInvestmentObjectivesByClientId = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
const updateInvestmentObjectivesById = {
    params: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object()
        .keys({
        primaryGoal: Joi.string(),
        specificGoals: Joi.array().items(Joi.string()),
        targetAmount: Joi.number().positive(),
        timeHorizon: Joi.number().integer().min(1),
        monthlyContribution: Joi.number().positive(),
        riskComfort: Joi.number().integer().min(1).max(10)
    })
        .min(1)
};
const updateInvestmentObjectivesByClientId = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    }),
    body: Joi.object()
        .keys({
        primaryGoal: Joi.string(),
        specificGoals: Joi.array().items(Joi.string()),
        targetAmount: Joi.number().positive(),
        timeHorizon: Joi.number().integer().min(1),
        monthlyContribution: Joi.number().positive(),
        riskComfort: Joi.number().integer().min(1).max(10)
    })
        .min(1)
};
const deleteInvestmentObjectivesById = {
    params: Joi.object().keys({
        id: Joi.string().required()
    })
};
const deleteInvestmentObjectivesByClientId = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
export default {
    createInvestmentObjectives,
    getInvestmentObjectivesById,
    getInvestmentObjectivesByClientId,
    updateInvestmentObjectivesById,
    updateInvestmentObjectivesByClientId,
    deleteInvestmentObjectivesById,
    deleteInvestmentObjectivesByClientId
};
