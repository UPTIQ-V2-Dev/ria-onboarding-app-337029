import { Role } from "./constants.js";
const allRoles = {
    [Role.USER]: [
        'getClients',
        'manageClients',
        'getOnboarding',
        'manageOnboarding',
        'getRiskAssessments',
        'manageRiskAssessments',
        'getAccountTypes',
        'manageAccounts'
    ],
    [Role.ADMIN]: [
        'getUsers',
        'manageUsers',
        'getClients',
        'manageClients',
        'getOnboarding',
        'manageOnboarding',
        'getRiskAssessments',
        'manageRiskAssessments',
        'getAccountTypes',
        'manageAccounts'
    ]
};
export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
