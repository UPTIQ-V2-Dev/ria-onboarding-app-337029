import Joi from 'joi';

const createClient = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required(),
        status: Joi.string().valid('pending', 'in_progress', 'completed', 'rejected').default('pending'),
        progress: Joi.number().integer().min(0).max(100).default(0),
        riskProfile: Joi.string().valid('conservative', 'moderate', 'aggressive').allow(null),
        accountValue: Joi.number().min(0).allow(null),
        firmId: Joi.string().required()
    })
};

const getClients = {
    query: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email(),
        status: Joi.string().valid('pending', 'in_progress', 'completed', 'rejected'),
        riskProfile: Joi.string().valid('conservative', 'moderate', 'aggressive'),
        firmId: Joi.string(),
        sortBy: Joi.string(),
        sortType: Joi.string().valid('asc', 'desc'),
        limit: Joi.number().integer().min(1).max(100),
        page: Joi.number().integer().min(1)
    })
};

const getClient = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};

const updateClient = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    }),
    body: Joi.object()
        .keys({
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            phone: Joi.string(),
            status: Joi.string().valid('pending', 'in_progress', 'completed', 'rejected'),
            progress: Joi.number().integer().min(0).max(100),
            riskProfile: Joi.string().valid('conservative', 'moderate', 'aggressive').allow(null),
            accountValue: Joi.number().min(0).allow(null),
            firmId: Joi.string()
        })
        .min(1)
};

const deleteClient = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};

const getRecentClients = {
    query: Joi.object().keys({
        limit: Joi.number().integer().min(1).max(50).default(10)
    })
};

export default {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient,
    getRecentClients
};
