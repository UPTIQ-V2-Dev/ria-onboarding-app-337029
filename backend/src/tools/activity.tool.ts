import { activityService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import pick from '../utils/pick.ts';
import { z } from 'zod';

const activitySchema = z.object({
    id: z.string(),
    type: z.string(),
    clientName: z.string(),
    description: z.string(),
    timestamp: z.string(),
    clientId: z.string().nullable()
});

const createActivityTool: MCPTool = {
    id: 'activity_create',
    name: 'Create Activity',
    description: 'Create a new activity record for tracking client onboarding progress and system events',
    inputSchema: z.object({
        type: z.string().min(1),
        clientName: z.string().min(1),
        description: z.string().min(1),
        clientId: z.string().optional()
    }),
    outputSchema: activitySchema,
    fn: async (inputs: { type: string; clientName: string; description: string; clientId?: string }) => {
        const activity = await activityService.createActivity(inputs);
        return activity;
    }
};

const getActivitiesTool: MCPTool = {
    id: 'activity_list',
    name: 'List Activities',
    description: 'Get all activities with optional filters and pagination',
    inputSchema: z.object({
        type: z.string().optional(),
        clientName: z.string().optional(),
        clientId: z.string().optional(),
        sortBy: z.string().optional(),
        limit: z.number().int().optional(),
        page: z.number().int().optional()
    }),
    outputSchema: z.object({
        activities: z.array(activitySchema)
    }),
    fn: async (inputs: {
        type?: string;
        clientName?: string;
        clientId?: string;
        sortBy?: string;
        limit?: number;
        page?: number;
    }) => {
        const filter = pick(inputs, ['type', 'clientName', 'clientId']);
        const options = pick(inputs, ['sortBy', 'limit', 'page']);
        const result = await activityService.queryActivities(filter, options);
        return { activities: result };
    }
};

const getActivityTool: MCPTool = {
    id: 'activity_get',
    name: 'Get Activity By ID',
    description: 'Get a single activity by its ID',
    inputSchema: z.object({
        activityId: z.string().min(1)
    }),
    outputSchema: activitySchema,
    fn: async (inputs: { activityId: string }) => {
        const activity = await activityService.getActivityById(inputs.activityId);
        if (!activity) {
            throw new Error('Activity not found');
        }
        return activity;
    }
};

const updateActivityTool: MCPTool = {
    id: 'activity_update',
    name: 'Update Activity',
    description: 'Update activity information by ID',
    inputSchema: z.object({
        activityId: z.string().min(1),
        type: z.string().optional(),
        clientName: z.string().optional(),
        description: z.string().optional(),
        clientId: z.string().optional()
    }),
    outputSchema: activitySchema,
    fn: async (inputs: {
        activityId: string;
        type?: string;
        clientName?: string;
        description?: string;
        clientId?: string;
    }) => {
        const updateBody = pick(inputs, ['type', 'clientName', 'description', 'clientId']);
        const activity = await activityService.updateActivityById(inputs.activityId, updateBody);
        return activity;
    }
};

const deleteActivityTool: MCPTool = {
    id: 'activity_delete',
    name: 'Delete Activity',
    description: 'Delete an activity by its ID',
    inputSchema: z.object({
        activityId: z.string().min(1)
    }),
    outputSchema: z.object({
        success: z.boolean()
    }),
    fn: async (inputs: { activityId: string }) => {
        await activityService.deleteActivityById(inputs.activityId);
        return { success: true };
    }
};

const getRecentActivitiesTool: MCPTool = {
    id: 'activity_recent',
    name: 'Get Recent Activities',
    description: 'Get recent activities for dashboard display',
    inputSchema: z.object({
        limit: z.number().int().optional().default(10)
    }),
    outputSchema: z.object({
        activities: z.array(activitySchema)
    }),
    fn: async (inputs: { limit?: number }) => {
        const activities = await activityService.getRecentActivities(inputs.limit);
        return { activities };
    }
};

export const activityTools: MCPTool[] = [
    createActivityTool,
    getActivitiesTool,
    getActivityTool,
    updateActivityTool,
    deleteActivityTool,
    getRecentActivitiesTool
];
