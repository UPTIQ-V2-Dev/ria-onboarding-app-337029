import { clientService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
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
export default {
    createClient,
    getClients,
    getRecentClients,
    getClient,
    updateClient,
    deleteClient
};
