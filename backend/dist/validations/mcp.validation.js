import Joi from 'joi';
const mcpPost = {
    body: Joi.object().keys({
        jsonrpc: Joi.string().valid('2.0').required(),
        method: Joi.string().required(),
        params: Joi.object().optional(),
        id: Joi.alternatives().try(Joi.string(), Joi.number()).optional()
    }),
    headers: Joi.object()
        .keys({
        'authorization': Joi.string().required(),
        'mcp-session-id': Joi.string().optional(),
        'content-type': Joi.string().valid('application/json').required()
    })
        .unknown(true)
};
const mcpGet = {
    headers: Joi.object()
        .keys({
        'authorization': Joi.string().required(),
        'mcp-session-id': Joi.string().required()
    })
        .unknown(true)
};
const mcpDelete = {
    headers: Joi.object()
        .keys({
        'authorization': Joi.string().required(),
        'mcp-session-id': Joi.string().required()
    })
        .unknown(true)
};
export { mcpPost, mcpGet, mcpDelete };
