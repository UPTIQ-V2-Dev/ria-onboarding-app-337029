import prisma from '../client.ts';
import { Client, Prisma } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';

/**
 * Create a client
 * @param {Object} clientData
 * @param {number} userId - The user who owns this client
 * @returns {Promise<Client>}
 */
const createClient = async (clientData: Omit<Prisma.ClientCreateInput, 'user'>, userId: number): Promise<Client> => {
    if (await getClientByEmail(clientData.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }

    // Exclude userId if it exists in clientData to avoid conflict
    const { userId: _, ...cleanClientData } = clientData as any;

    return prisma.client.create({
        data: {
            ...cleanClientData,
            user: {
                connect: { id: userId }
            }
        }
    });
};

/**
 * Query for clients
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<Client[]>}
 */
const queryClients = async <Key extends keyof Client>(
    filter: object,
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    },
    keys: Key[] = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'status',
        'progress',
        'riskProfile',
        'accountValue',
        'firmId',
        'createdAt',
        'updatedAt',
        'userId'
    ] as Key[]
): Promise<Pick<Client, Key>[]> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';

    const clients = await prisma.client.findMany({
        where: filter,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        skip: (page - 1) * limit,
        take: limit,
        orderBy: sortBy ? { [sortBy]: sortType } : { updatedAt: 'desc' }
    });

    return clients as Pick<Client, Key>[];
};

/**
 * Get recent clients (created or updated within last 30 days)
 * @param {number} userId - User ID to filter clients by
 * @param {number} [limit=10] - Number of clients to return
 * @returns {Promise<Client[]>}
 */
const getRecentClients = async (userId: number, limit: number = 10): Promise<Client[]> => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return await prisma.client.findMany({
        where: {
            userId,
            OR: [{ createdAt: { gte: thirtyDaysAgo } }, { updatedAt: { gte: thirtyDaysAgo } }]
        },
        orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }],
        take: limit
    });
};

/**
 * Get client by id
 * @param {string} id
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Client, Key> | null>}
 */
const getClientById = async <Key extends keyof Client>(
    id: string,
    keys: Key[] = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'status',
        'progress',
        'riskProfile',
        'accountValue',
        'firmId',
        'createdAt',
        'updatedAt',
        'userId'
    ] as Key[]
): Promise<Pick<Client, Key> | null> => {
    return (await prisma.client.findUnique({
        where: { id },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    })) as Pick<Client, Key> | null;
};

/**
 * Get client by email
 * @param {string} email
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Client, Key> | null>}
 */
const getClientByEmail = async <Key extends keyof Client>(
    email: string,
    keys: Key[] = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'status',
        'progress',
        'riskProfile',
        'accountValue',
        'firmId',
        'createdAt',
        'updatedAt',
        'userId'
    ] as Key[]
): Promise<Pick<Client, Key> | null> => {
    return (await prisma.client.findUnique({
        where: { email },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    })) as Pick<Client, Key> | null;
};

/**
 * Update client by id
 * @param {string} clientId
 * @param {Object} updateBody
 * @returns {Promise<Client>}
 */
const updateClientById = async <Key extends keyof Client>(
    clientId: string,
    updateBody: Prisma.ClientUpdateInput,
    keys: Key[] = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'status',
        'progress',
        'riskProfile',
        'accountValue',
        'firmId',
        'createdAt',
        'updatedAt'
    ] as Key[]
): Promise<Pick<Client, Key> | null> => {
    const client = await getClientById(clientId, ['id', 'email']);
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    if (updateBody.email && updateBody.email !== client.email && (await getClientByEmail(updateBody.email as string))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }

    const updatedClient = await prisma.client.update({
        where: { id: client.id },
        data: updateBody,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });

    return updatedClient as Pick<Client, Key> | null;
};

/**
 * Get clients by user ID
 * @param {number} userId
 * @returns {Promise<Client[]>}
 */
const getClientsByUserId = async (userId: number): Promise<Client[]> => {
    return await prisma.client.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
    });
};

/**
 * Delete client by id
 * @param {string} clientId
 * @returns {Promise<Client>}
 */
const deleteClientById = async (clientId: string): Promise<Client> => {
    const client = await getClientById(clientId);
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }

    await prisma.client.delete({ where: { id: client.id } });
    return client;
};

export default {
    createClient,
    queryClients,
    getRecentClients,
    getClientById,
    getClientByEmail,
    getClientsByUserId,
    updateClientById,
    deleteClientById
};
