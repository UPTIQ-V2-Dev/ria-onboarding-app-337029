import Joi from 'joi';

export const password: Joi.CustomValidator<string> = (value, helpers) => {
    if (value.length < 8) {
        return helpers.error('password.minLength');
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return helpers.error('password.requirements');
    }
    return value;
};

// Define custom error messages
export const passwordErrorMessages = {
    'password.minLength': 'Password must be at least 8 characters',
    'password.requirements': 'Password must contain at least 1 letter and 1 number'
};
