import { clientService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import pick from '../utils/pick.ts';
import { z } from 'zod';

const clientSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    status: z.string(),
    progress: z.number(),
    riskProfile: z.string().nullable(),
    accountValue: z.number().nullable(),
    firmId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    userId: z.number()
});

const createClientTool: MCPTool = {
    id: 'client_create',
    name: 'Create Client',
    description: 'Create a new client record',
    inputSchema: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        status: z.enum(['pending', 'in_progress', 'completed', 'rejected']).default('pending'),
        progress: z.number().int().min(0).max(100).default(0),
        riskProfile: z.enum(['conservative', 'moderate', 'aggressive']).nullable().optional(),
        accountValue: z.number().min(0).nullable().optional(),
        firmId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: clientSchema,
    fn: async (inputs: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
        progress?: number;
        riskProfile?: 'conservative' | 'moderate' | 'aggressive' | null;
        accountValue?: number | null;
        firmId: string;
        userId: number;
    }) => {
        const { userId, ...clientData } = inputs;
        const client = await clientService.createClient(clientData, userId);
        return client;
    }
};

const getClientsTool: MCPTool = {
    id: 'client_list',
    name: 'List Clients',
    description: 'Get all clients with optional filters and pagination',
    inputSchema: z.object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
        status: z.enum(['pending', 'in_progress', 'completed', 'rejected']).optional(),
        riskProfile: z.enum(['conservative', 'moderate', 'aggressive']).optional(),
        firmId: z.string().optional(),
        userId: z.number().int(),
        sortBy: z.string().optional(),
        sortType: z.enum(['asc', 'desc']).optional(),
        limit: z.number().int().min(1).max(100).optional(),
        page: z.number().int().min(1).optional()
    }),
    outputSchema: z.object({
        results: z.array(clientSchema),
        page: z.number(),
        limit: z.number(),
        totalPages: z.number(),
        totalResults: z.number()
    }),
    fn: async (inputs: {
        firstName?: string;
        lastName?: string;
        email?: string;
        status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
        riskProfile?: 'conservative' | 'moderate' | 'aggressive';
        firmId?: string;
        userId: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
        limit?: number;
        page?: number;
    }) => {
        const filter = pick(inputs, ['firstName', 'lastName', 'email', 'status', 'riskProfile', 'firmId', 'userId']);
        const options = pick(inputs, ['sortBy', 'sortType', 'limit', 'page']);
        const result = await clientService.queryClients(filter, options);
        return result;
    }
};

const getRecentClientsTool: MCPTool = {
    id: 'client_recent',
    name: 'Get Recent Clients',
    description: 'Get recently created or updated clients',
    inputSchema: z.object({
        userId: z.number().int(),
        limit: z.number().int().min(1).max(50).default(10)
    }),
    outputSchema: z.object({
        clients: z.array(clientSchema)
    }),
    fn: async (inputs: { userId: number; limit?: number }) => {
        const result = await clientService.getRecentClients(inputs.userId, inputs.limit);
        return { clients: result };
    }
};

const getClientTool: MCPTool = {
    id: 'client_get_by_id',
    name: 'Get Client By ID',
    description: 'Get a single client by their ID',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: clientSchema,
    fn: async (inputs: { clientId: string }) => {
        const client = await clientService.getClientById(inputs.clientId);
        if (!client) {
            throw new Error('Client not found');
        }
        return client;
    }
};

const updateClientTool: MCPTool = {
    id: 'client_update',
    name: 'Update Client',
    description: 'Update client information by ID',
    inputSchema: z.object({
        clientId: z.string().min(1),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        status: z.enum(['pending', 'in_progress', 'completed', 'rejected']).optional(),
        progress: z.number().int().min(0).max(100).optional(),
        riskProfile: z.enum(['conservative', 'moderate', 'aggressive']).nullable().optional(),
        accountValue: z.number().min(0).nullable().optional(),
        firmId: z.string().optional()
    }),
    outputSchema: clientSchema,
    fn: async (inputs: {
        clientId: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
        progress?: number;
        riskProfile?: 'conservative' | 'moderate' | 'aggressive' | null;
        accountValue?: number | null;
        firmId?: string;
    }) => {
        const { clientId, ...updateBody } = inputs;
        const client = await clientService.updateClientById(clientId, updateBody);
        return client;
    }
};

const deleteClientTool: MCPTool = {
    id: 'client_delete',
    name: 'Delete Client',
    description: 'Delete a client by their ID',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: z.object({
        success: z.boolean()
    }),
    fn: async (inputs: { clientId: string }) => {
        await clientService.deleteClientById(inputs.clientId);
        return { success: true };
    }
};

const bulkUpdateStatusTool: MCPTool = {
    id: 'client_bulk_update_status',
    name: 'Bulk Update Client Status',
    description: 'Update status for multiple clients simultaneously',
    inputSchema: z.object({
        clientIds: z.array(z.string().min(1)).min(1).max(100),
        status: z.enum(['pending', 'in_progress', 'completed', 'rejected']),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        updatedCount: z.number(),
        clients: z.array(clientSchema)
    }),
    fn: async (inputs: {
        clientIds: string[];
        status: 'pending' | 'in_progress' | 'completed' | 'rejected';
        userId: number;
    }) => {
        const result = await clientService.bulkUpdateStatus(inputs.clientIds, inputs.status, inputs.userId);
        return result;
    }
};

const exportClientsTool: MCPTool = {
    id: 'client_export',
    name: 'Export Clients',
    description: 'Export clients data with optional filters',
    inputSchema: z.object({
        status: z.enum(['pending', 'in_progress', 'completed', 'rejected']).optional(),
        riskProfile: z.enum(['conservative', 'moderate', 'aggressive']).optional(),
        firmId: z.string().optional(),
        search: z.string().optional(),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        clients: z.array(clientSchema),
        count: z.number()
    }),
    fn: async (inputs: {
        status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
        riskProfile?: 'conservative' | 'moderate' | 'aggressive';
        firmId?: string;
        search?: string;
        userId: number;
    }) => {
        const filter = pick(inputs, ['status', 'riskProfile', 'firmId']);

        // Add search functionality if provided
        if (inputs.search) {
            filter.OR = [
                { firstName: { contains: inputs.search } },
                { lastName: { contains: inputs.search } },
                { email: { contains: inputs.search } }
            ];
        }

        const clients = await clientService.exportClients(filter, inputs.userId);
        return {
            clients,
            count: clients.length
        };
    }
};

export const clientTools: MCPTool[] = [
    createClientTool,
    getClientsTool,
    getRecentClientsTool,
    getClientTool,
    updateClientTool,
    deleteClientTool,
    bulkUpdateStatusTool,
    exportClientsTool
];
