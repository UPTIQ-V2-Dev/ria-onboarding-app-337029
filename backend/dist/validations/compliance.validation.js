import Joi from 'joi';
const getDisclosures = {
// No validation needed for GET /disclosures
};
const createComplianceAgreements = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        disclosureIds: Joi.array().items(Joi.string()).min(1).required()
    })
};
const getClientCompliance = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};
export default {
    getDisclosures,
    createComplianceAgreements,
    getClientCompliance
};
