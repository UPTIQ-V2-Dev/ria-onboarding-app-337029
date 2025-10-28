import { dashboardService } from '../services/index.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import httpStatus from 'http-status';

const getDashboardStats = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.getDashboardStats();
    res.status(httpStatus.OK).send(result);
});

const getClientStatusCounts = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.getClientStatusCounts();
    res.status(httpStatus.OK).send(result);
});

export default {
    getDashboardStats,
    getClientStatusCounts
};
