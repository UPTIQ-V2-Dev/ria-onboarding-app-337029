import Joi from 'joi';
const getAccountTypes = {
// No parameters needed for GET /account-types
};
const createAccounts = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        accountTypeIds: Joi.array().items(Joi.string().required()).min(1).required()
    })
};
export default {
    getAccountTypes,
    createAccounts
};
