import prisma from '../client.ts';

/**
 * Get dashboard statistics and metrics
 * @returns {Promise<Object>}
 */
const getDashboardStats = async () => {
    // Get total clients count
    const totalClients = await prisma.client.count();

    // Get pending onboardings count
    const pendingOnboardings = await prisma.client.count({
        where: {
            status: 'pending'
        }
    });

    // Get completed clients this month
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const completedThisMonth = await prisma.client.count({
        where: {
            status: 'completed',
            updatedAt: {
                gte: firstDayOfMonth
            }
        }
    });

    // Calculate average completion time (in days)
    const completedClients = await prisma.client.findMany({
        where: {
            status: 'completed'
        },
        select: {
            createdAt: true,
            updatedAt: true
        }
    });

    let averageCompletionTime = 0;
    if (completedClients.length > 0) {
        const totalDays = completedClients.reduce((sum, client) => {
            const days = Math.ceil((client.updatedAt.getTime() - client.createdAt.getTime()) / (1000 * 60 * 60 * 24));
            return sum + days;
        }, 0);
        averageCompletionTime = Math.round((totalDays / completedClients.length) * 10) / 10; // Round to 1 decimal
    }

    // Get recent activity (last 10 activities)
    const recentActivity = await prisma.activity.findMany({
        orderBy: {
            timestamp: 'desc'
        },
        take: 10
    });

    return {
        totalClients,
        pendingOnboardings,
        completedThisMonth,
        averageCompletionTime,
        recentActivity
    };
};

/**
 * Get client status distribution counts
 * @returns {Promise<Array>}
 */
const getClientStatusCounts = async () => {
    // Get total clients count for percentage calculation
    const totalClients = await prisma.client.count();

    if (totalClients === 0) {
        return [];
    }

    // Get counts by status using groupBy
    const statusCounts = await prisma.client.groupBy({
        by: ['status'],
        _count: {
            status: true
        }
    });

    // Calculate percentages and format response
    const result = statusCounts.map(item => ({
        status: item.status,
        count: item._count.status,
        percentage: Math.round((item._count.status / totalClients) * 1000) / 10 // Round to 1 decimal
    }));

    // Sort by count descending
    result.sort((a, b) => b.count - a.count);

    return result;
};

export default {
    getDashboardStats,
    getClientStatusCounts
};
