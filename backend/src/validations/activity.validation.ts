import Joi from 'joi';

const createActivity = {
    body: Joi.object().keys({
        type: Joi.string().required(),
        clientName: Joi.string().required(),
        description: Joi.string().required(),
        clientId: Joi.string().optional()
    })
};

const getActivities = {
    query: Joi.object().keys({
        type: Joi.string(),
        clientName: Joi.string(),
        clientId: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer()
    })
};

const getActivity = {
    params: Joi.object().keys({
        activityId: Joi.string().required()
    })
};

const updateActivity = {
    params: Joi.object().keys({
        activityId: Joi.string().required()
    }),
    body: Joi.object()
        .keys({
            type: Joi.string(),
            clientName: Joi.string(),
            description: Joi.string(),
            clientId: Joi.string().allow('')
        })
        .min(1)
};

const deleteActivity = {
    params: Joi.object().keys({
        activityId: Joi.string().required()
    })
};

export default {
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity
};
