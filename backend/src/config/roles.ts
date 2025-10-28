import { Role } from './constants.ts';

const allRoles = {
    [Role.USER]: ['getClients', 'manageClients'],
    [Role.ADMIN]: ['getUsers', 'manageUsers', 'getClients', 'manageClients']
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
