import { dashboardService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

const activitySchema = z.object({
    id: z.string(),
    type: z.string(),
    clientName: z.string(),
    description: z.string(),
    timestamp: z.string(),
    clientId: z.string().nullable()
});

const dashboardStatsSchema = z.object({
    totalClients: z.number(),
    pendingOnboardings: z.number(),
    completedThisMonth: z.number(),
    averageCompletionTime: z.number(),
    recentActivity: z.array(activitySchema)
});

const clientStatusCountSchema = z.object({
    status: z.string(),
    count: z.number(),
    percentage: z.number()
});

const getDashboardStatsTool: MCPTool = {
    id: 'dashboard_get_stats',
    name: 'Get Dashboard Statistics',
    description:
        'Get comprehensive dashboard statistics including client counts, completion metrics, and recent activity',
    inputSchema: z.object({}), // No input parameters required
    outputSchema: dashboardStatsSchema,
    fn: async () => {
        const stats = await dashboardService.getDashboardStats();
        return {
            ...stats,
            recentActivity: stats.recentActivity.map(activity => ({
                ...activity,
                timestamp: activity.timestamp.toISOString()
            }))
        };
    }
};

const getClientStatusCountsTool: MCPTool = {
    id: 'dashboard_get_client_status_counts',
    name: 'Get Client Status Distribution',
    description: 'Get the distribution of clients by their status with counts and percentages',
    inputSchema: z.object({}), // No input parameters required
    outputSchema: z.object({
        statusCounts: z.array(clientStatusCountSchema)
    }),
    fn: async () => {
        const statusCounts = await dashboardService.getClientStatusCounts();
        return { statusCounts };
    }
};

export const dashboardTools: MCPTool[] = [getDashboardStatsTool, getClientStatusCountsTool];
