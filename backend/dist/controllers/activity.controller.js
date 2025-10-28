import { activityService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
const createActivity = catchAsyncWithAuth(async (req, res) => {
    const result = await activityService.createActivity(req.body);
    res.status(httpStatus.CREATED).send(result);
});
const getActivities = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['type', 'clientName', 'clientId']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    const result = await activityService.queryActivities(filter, options);
    res.send(result);
});
const getActivity = catchAsyncWithAuth(async (req, res) => {
    const activity = await activityService.getActivityById(req.params.activityId);
    if (!activity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Activity not found');
    }
    res.send(activity);
});
const updateActivity = catchAsyncWithAuth(async (req, res) => {
    const activity = await activityService.updateActivityById(req.params.activityId, req.body);
    res.send(activity);
});
const deleteActivity = catchAsyncWithAuth(async (req, res) => {
    await activityService.deleteActivityById(req.params.activityId);
    res.status(httpStatus.NO_CONTENT).send();
});
export default {
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity
};
