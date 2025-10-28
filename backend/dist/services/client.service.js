import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Create a client
 * @param {Object} clientData
 * @param {number} userId - The user who owns this client
 * @returns {Promise<Client>}
 */
const createClient = async (clientData, userId) => {
    if (await getClientByEmail(clientData.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    // Exclude userId if it exists in clientData to avoid conflict
    const { userId: _, ...cleanClientData } = clientData;
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
 * @returns {Promise<{results: Client[], page: number, limit: number, totalPages: number, totalResults: number}>}
 */
const queryClients = async (filter, options, keys = [
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
]) => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';
    const [clients, totalResults] = await Promise.all([
        prisma.client.findMany({
            where: filter,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
            skip: (page - 1) * limit,
            take: limit,
            orderBy: sortBy ? { [sortBy]: sortType } : { updatedAt: 'desc' }
        }),
        prisma.client.count({ where: filter })
    ]);
    const totalPages = Math.ceil(totalResults / limit);
    return {
        results: clients,
        page,
        limit,
        totalPages,
        totalResults
    };
};
/**
 * Get recent clients (created or updated within last 30 days)
 * @param {number} userId - User ID to filter clients by
 * @param {number} [limit=10] - Number of clients to return
 * @returns {Promise<Client[]>}
 */
const getRecentClients = async (userId, limit = 10) => {
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
const getClientById = async (id, keys = [
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
]) => {
    return (await prisma.client.findUnique({
        where: { id },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }));
};
/**
 * Get client by email
 * @param {string} email
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Client, Key> | null>}
 */
const getClientByEmail = async (email, keys = [
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
]) => {
    return (await prisma.client.findUnique({
        where: { email },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }));
};
/**
 * Update client by id
 * @param {string} clientId
 * @param {Object} updateBody
 * @returns {Promise<Client>}
 */
const updateClientById = async (clientId, updateBody, keys = [
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
]) => {
    const client = await getClientById(clientId, ['id', 'email']);
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    if (updateBody.email && updateBody.email !== client.email && (await getClientByEmail(updateBody.email))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const updatedClient = await prisma.client.update({
        where: { id: client.id },
        data: updateBody,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });
    return updatedClient;
};
/**
 * Get clients by user ID
 * @param {number} userId
 * @returns {Promise<Client[]>}
 */
const getClientsByUserId = async (userId) => {
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
const deleteClientById = async (clientId) => {
    const client = await getClientById(clientId);
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    await prisma.client.delete({ where: { id: client.id } });
    return client;
};
/**
 * Update status for multiple clients simultaneously
 * @param {string[]} clientIds - Array of client IDs
 * @param {string} status - New status to apply
 * @param {number} userId - User ID to ensure clients belong to user
 * @returns {Promise<{updatedCount: number, clients: Client[]}>}
 */
const bulkUpdateStatus = async (clientIds, status, userId) => {
    // First, validate that all clients exist and belong to the user
    const existingClients = await prisma.client.findMany({
        where: {
            id: { in: clientIds },
            userId
        }
    });
    if (existingClients.length !== clientIds.length) {
        throw new ApiError(httpStatus.NOT_FOUND, 'One or more clients not found or access denied');
    }
    // Update the clients
    await prisma.client.updateMany({
        where: {
            id: { in: clientIds },
            userId
        },
        data: {
            status,
            updatedAt: new Date()
        }
    });
    // Fetch the updated clients
    const updatedClients = await prisma.client.findMany({
        where: {
            id: { in: clientIds },
            userId
        },
        orderBy: { updatedAt: 'desc' }
    });
    return {
        updatedCount: updatedClients.length,
        clients: updatedClients
    };
};
/**
 * Export clients data for CSV/Excel download
 * @param {object} filter - Filter criteria
 * @param {number} userId - User ID to filter clients by
 * @returns {Promise<Client[]>}
 */
const exportClients = async (filter, userId) => {
    return await prisma.client.findMany({
        where: {
            ...filter,
            userId
        },
        orderBy: { createdAt: 'desc' }
    });
};
export default {
    createClient,
    queryClients,
    getRecentClients,
    getClientById,
    getClientByEmail,
    getClientsByUserId,
    updateClientById,
    deleteClientById,
    bulkUpdateStatus,
    exportClients
};
