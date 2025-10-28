import prisma from '../client.ts';
import { Activity, Prisma } from '../generated/prisma/index.js';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';

/**
 * Create an activity
 * @param {Object} activityBody
 * @returns {Promise<Activity>}
 */
const createActivity = async (data: {
    type: string;
    clientName: string;
    description: string;
    clientId?: string;
}): Promise<Activity> => {
    return await prisma.activity.create({
        data: {
            type: data.type,
            clientName: data.clientName,
            description: data.description,
            clientId: data.clientId
        }
    });
};

/**
 * Query for activities
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryActivities = async <Key extends keyof Activity>(
    filter: object,
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    },
    keys: Key[] = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId'] as Key[]
): Promise<Pick<Activity, Key>[]> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';

    const activities = await prisma.activity.findMany({
        where: filter,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        skip: (page - 1) * limit,
        take: limit,
        orderBy: sortBy ? { [sortBy]: sortType } : { timestamp: 'desc' }
    });

    return activities as Pick<Activity, Key>[];
};

/**
 * Get activity by id
 * @param {string} id
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Activity, Key> | null>}
 */
const getActivityById = async <Key extends keyof Activity>(
    id: string,
    keys: Key[] = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId'] as Key[]
): Promise<Pick<Activity, Key> | null> => {
    return (await prisma.activity.findUnique({
        where: { id },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    })) as Promise<Pick<Activity, Key> | null>;
};

/**
 * Update activity by id
 * @param {string} activityId
 * @param {Object} updateBody
 * @returns {Promise<Activity>}
 */
const updateActivityById = async <Key extends keyof Activity>(
    activityId: string,
    updateBody: Prisma.ActivityUpdateInput,
    keys: Key[] = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId'] as Key[]
): Promise<Pick<Activity, Key> | null> => {
    const activity = await getActivityById(activityId, ['id']);
    if (!activity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Activity not found');
    }

    const updatedActivity = await prisma.activity.update({
        where: { id: activity.id },
        data: updateBody,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });

    return updatedActivity as Pick<Activity, Key> | null;
};

/**
 * Delete activity by id
 * @param {string} activityId
 * @returns {Promise<Activity>}
 */
const deleteActivityById = async (activityId: string): Promise<Activity> => {
    const activity = await getActivityById(activityId);
    if (!activity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Activity not found');
    }

    await prisma.activity.delete({ where: { id: activity.id } });
    return activity as Activity;
};

/**
 * Get recent activities
 * @param {number} limit - Number of recent activities to return (default = 10)
 * @returns {Promise<Activity[]>}
 */
const getRecentActivities = async (limit: number = 10): Promise<Activity[]> => {
    return await prisma.activity.findMany({
        orderBy: {
            timestamp: 'desc'
        },
        take: limit
    });
};

export default {
    createActivity,
    queryActivities,
    getActivityById,
    updateActivityById,
    deleteActivityById,
    getRecentActivities
};
