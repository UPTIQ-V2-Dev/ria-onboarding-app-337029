import { clientService } from "../services/index.js";
import pick from "../utils/pick.js";
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
const createClientTool = {
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
    fn: async (inputs) => {
        const { userId, ...clientData } = inputs;
        const client = await clientService.createClient(clientData, userId);
        return client;
    }
};
const getClientsTool = {
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
        clients: z.array(clientSchema)
    }),
    fn: async (inputs) => {
        const filter = pick(inputs, ['firstName', 'lastName', 'email', 'status', 'riskProfile', 'firmId', 'userId']);
        const options = pick(inputs, ['sortBy', 'sortType', 'limit', 'page']);
        const result = await clientService.queryClients(filter, options);
        return { clients: result };
    }
};
const getRecentClientsTool = {
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
    fn: async (inputs) => {
        const result = await clientService.getRecentClients(inputs.userId, inputs.limit);
        return { clients: result };
    }
};
const getClientTool = {
    id: 'client_get_by_id',
    name: 'Get Client By ID',
    description: 'Get a single client by their ID',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: clientSchema,
    fn: async (inputs) => {
        const client = await clientService.getClientById(inputs.clientId);
        if (!client) {
            throw new Error('Client not found');
        }
        return client;
    }
};
const updateClientTool = {
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
    fn: async (inputs) => {
        const { clientId, ...updateBody } = inputs;
        const client = await clientService.updateClientById(clientId, updateBody);
        return client;
    }
};
const deleteClientTool = {
    id: 'client_delete',
    name: 'Delete Client',
    description: 'Delete a client by their ID',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: z.object({
        success: z.boolean()
    }),
    fn: async (inputs) => {
        await clientService.deleteClientById(inputs.clientId);
        return { success: true };
    }
};
export const clientTools = [
    createClientTool,
    getClientsTool,
    getRecentClientsTool,
    getClientTool,
    updateClientTool,
    deleteClientTool
];
