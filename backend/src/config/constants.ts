export const TokenType = {
    ACCESS: 'ACCESS',
    REFRESH: 'REFRESH',
    RESET_PASSWORD: 'RESET_PASSWORD',
    VERIFY_EMAIL: 'VERIFY_EMAIL'
} as const;

export const Role = {
    USER: 'USER',
    ADMIN: 'ADMIN'
} as const;

export type TokenType = typeof TokenType[keyof typeof TokenType];
export type Role = typeof Role[keyof typeof Role];