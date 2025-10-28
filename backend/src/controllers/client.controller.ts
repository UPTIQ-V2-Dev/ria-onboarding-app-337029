import { clientService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const createClient = catchAsyncWithAuth(async (req, res) => {
    const client = await clientService.createClient(req.body, req.user.id);
    res.status(httpStatus.CREATED).send(client);
});

const getClients = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['firstName', 'lastName', 'email', 'status', 'riskProfile', 'firmId']);
    // Add user filter to ensure users only see their own clients
    filter.userId = req.user.id;
    const options = pick(req.validatedQuery, ['sortBy', 'sortType', 'limit', 'page']);
    const result = await clientService.queryClients(filter, options);
    res.send(result);
});

const getRecentClients = catchAsyncWithAuth(async (req, res) => {
    const { limit } = req.validatedQuery;
    const result = await clientService.getRecentClients(req.user.id, limit);
    res.send(result);
});

const getClient = catchAsyncWithAuth(async (req, res) => {
    const client = await clientService.getClientById(req.params.clientId);
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    // Check if client belongs to the authenticated user
    if (client.userId !== req.user.id) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }
    res.send(client);
});

const updateClient = catchAsyncWithAuth(async (req, res) => {
    // First check if client exists and belongs to user
    const existingClient = await clientService.getClientById(req.params.clientId, ['id', 'userId']);
    if (!existingClient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    if (existingClient.userId !== req.user.id) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }

    const client = await clientService.updateClientById(req.params.clientId, req.body);
    res.send(client);
});

const deleteClient = catchAsyncWithAuth(async (req, res) => {
    // First check if client exists and belongs to user
    const existingClient = await clientService.getClientById(req.params.clientId, ['id', 'userId']);
    if (!existingClient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    if (existingClient.userId !== req.user.id) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }

    await clientService.deleteClientById(req.params.clientId);
    res.status(httpStatus.NO_CONTENT).send();
});

const bulkUpdateStatus = catchAsyncWithAuth(async (req, res) => {
    const { clientIds, status } = req.body;
    const result = await clientService.bulkUpdateStatus(clientIds, status, req.user.id);
    res.send(result);
});

const exportClients = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['status', 'riskProfile', 'firmId']);
    const { search, format } = req.validatedQuery;

    // Add search functionality if provided
    if (search) {
        filter.OR = [
            { firstName: { contains: search } },
            { lastName: { contains: search } },
            { email: { contains: search } }
        ];
    }

    const clients = await clientService.exportClients(filter, req.user.id);

    // Generate CSV content
    if (format === 'csv' || !format) {
        const csvHeaders = [
            'ID',
            'First Name',
            'Last Name',
            'Email',
            'Phone',
            'Status',
            'Progress',
            'Risk Profile',
            'Account Value',
            'Firm ID',
            'Created At',
            'Updated At'
        ];
        const csvRows = clients.map(client => [
            client.id,
            client.firstName,
            client.lastName,
            client.email,
            client.phone,
            client.status,
            client.progress,
            client.riskProfile || '',
            client.accountValue || '',
            client.firmId,
            client.createdAt.toISOString(),
            client.updatedAt.toISOString()
        ]);

        const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.map(field => `"${field}"`).join(','))].join(
            '\n'
        );

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="clients_export.csv"');
        res.send(csvContent);
    } else {
        // For now, just return JSON for excel format (could be enhanced with actual Excel generation)
        res.json(clients);
    }
});

export default {
    createClient,
    getClients,
    getRecentClients,
    getClient,
    updateClient,
    deleteClient,
    bulkUpdateStatus,
    exportClients
};
