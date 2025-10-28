export interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    firmName: string;
    phone: string;
    agreeToTerms: boolean;
}

export interface MFAVerificationData {
    code: string;
    method: 'sms' | 'email' | 'authenticator';
}

export interface PasswordResetData {
    email: string;
}

export interface NewPasswordData {
    password: string;
    confirmPassword: string;
    token: string;
}
