import prisma from '../client.ts';
import { AccountType } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';
import { v4 as uuid } from 'uuid';

/**
 * Get all account types
 * @returns {Promise<AccountType[]>}
 */
const getAccountTypes = async (): Promise<AccountType[]> => {
    return await prisma.accountType.findMany({
        orderBy: { name: 'asc' }
    });
};

/**
 * Get account type by ID
 * @param {string} id
 * @returns {Promise<AccountType | null>}
 */
const getAccountTypeById = async (id: string): Promise<AccountType | null> => {
    return await prisma.accountType.findUnique({
        where: { id }
    });
};

/**
 * Create accounts for a client based on selected account types
 * @param {string} clientId
 * @param {string[]} accountTypeIds
 * @returns {Promise<{accountIds: string[]}>}
 */
const createAccountsForClient = async (
    clientId: string,
    accountTypeIds: string[]
): Promise<{ accountIds: string[] }> => {
    // Verify client exists
    const client = await prisma.client.findUnique({
        where: { id: clientId }
    });

    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    // Verify all account types exist
    const accountTypes = await prisma.accountType.findMany({
        where: {
            id: { in: accountTypeIds }
        }
    });

    if (accountTypes.length !== accountTypeIds.length) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'One or more account types not found');
    }

    // Generate account IDs based on account type and client
    const accountIds: string[] = [];

    for (const accountTypeId of accountTypeIds) {
        // Generate a unique account ID using pattern: acc_{accountType}_{uniqueId}
        const uniqueId = uuid().split('-')[0]; // First part of UUID for shorter ID
        const accountId = `acc_${accountTypeId.replace('-', '_')}_${uniqueId}`;
        accountIds.push(accountId);
    }

    // In a real implementation, you would store these accounts in a separate Account table
    // For now, we'll just return the generated account IDs as per the API spec
    console.log(`Created accounts for client ${clientId}:`, accountIds);

    return { accountIds };
};

export default {
    getAccountTypes,
    getAccountTypeById,
    createAccountsForClient
};
