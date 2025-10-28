import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Create an activity
 * @param {Object} activityBody
 * @returns {Promise<Activity>}
 */
const createActivity = async (data) => {
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
const queryActivities = async (filter, options, keys = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId']) => {
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
    return activities;
};
/**
 * Get activity by id
 * @param {string} id
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Activity, Key> | null>}
 */
const getActivityById = async (id, keys = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId']) => {
    return (await prisma.activity.findUnique({
        where: { id },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }));
};
/**
 * Update activity by id
 * @param {string} activityId
 * @param {Object} updateBody
 * @returns {Promise<Activity>}
 */
const updateActivityById = async (activityId, updateBody, keys = ['id', 'type', 'clientName', 'description', 'timestamp', 'clientId']) => {
    const activity = await getActivityById(activityId, ['id']);
    if (!activity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Activity not found');
    }
    const updatedActivity = await prisma.activity.update({
        where: { id: activity.id },
        data: updateBody,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });
    return updatedActivity;
};
/**
 * Delete activity by id
 * @param {string} activityId
 * @returns {Promise<Activity>}
 */
const deleteActivityById = async (activityId) => {
    const activity = await getActivityById(activityId);
    if (!activity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Activity not found');
    }
    await prisma.activity.delete({ where: { id: activity.id } });
    return activity;
};
/**
 * Get recent activities
 * @param {number} limit - Number of recent activities to return (default = 10)
 * @returns {Promise<Activity[]>}
 */
const getRecentActivities = async (limit = 10) => {
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
