import ApiError from '../utils/ApiError.ts';
import pick from '../utils/pick.ts';
import { RequestWithAdditionalProperties } from '../utils/types.ts';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import Joi from 'joi';

const validate = (schema: object) => (req: RequestWithAdditionalProperties, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ['params', 'query', 'body', 'headers']);
    const obj = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(obj);
    if (error) {
        const errorMessage = error.details.map(details => details.message).join(', ');
        return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    if (value.body) {
        req.body = value.body;
    }
    if (value.params) {
        req.params = value.params;
    }
    if (value.query) {
        req.validatedQuery = value.query;
    }
    if (value.headers) {
        // Headers validation passed, no need to replace since req.headers is read-only
        // Validation ensures required headers are present
    }
    return next();
};

export default validate;
