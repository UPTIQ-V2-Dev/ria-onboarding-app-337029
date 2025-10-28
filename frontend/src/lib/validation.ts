import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    rememberMe: z.boolean().optional()
});

export const registerSchema = z
    .object({
        firstName: z.string().min(2, 'First name must be at least 2 characters'),
        lastName: z.string().min(2, 'Last name must be at least 2 characters'),
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
        confirmPassword: z.string(),
        firmName: z.string().min(2, 'Firm name must be at least 2 characters'),
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
        agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions')
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
    });

export const mfaVerificationSchema = z.object({
    code: z.string().min(6, 'Code must be at least 6 characters').max(8, 'Code must be at most 8 characters'),
    method: z.enum(['sms', 'email', 'authenticator'])
});

export const passwordResetSchema = z.object({
    email: z.string().email('Invalid email address')
});

export const newPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
        confirmPassword: z.string(),
        token: z.string().min(1, 'Reset token is required')
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
    });
