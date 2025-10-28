import logger from "../config/logger.js";
import { JSONRPC_INTERNAL_ERROR, JSONRPC_INVALID_REQUEST } from "../constants/jsonrpc.constants.js";
import { registerMCPTools } from "../services/mcp.service.js";
import { activityTools } from "../tools/activity.tool.js";
import { clientTools } from "../tools/client.tool.js";
import { dashboardTools } from "../tools/dashboard.tool.js";
import { documentTools } from "../tools/document.tool.js";
import { userTools } from "../tools/user.tool.js";
import catchAsync from "../utils/catchAsync.js";
import { Server } from '@modelcontextprotocol/sdk/server';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { v4 as uuid } from 'uuid';
// Map to store transports by session ID
const transports = {};
export const mcpPostController = catchAsync(async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    let transport;
    logger.info(`MCP POST request received. Method: ${req.body?.method}, Session ID: ${sessionId}`);
    try {
        if (sessionId && transports[sessionId]) {
            transport = transports[sessionId];
            logger.debug(`Using existing MCP session: ${sessionId}`);
        }
        else if (!sessionId && isInitializeRequest(req.body)) {
            logger.info('Initializing new MCP session');
            transport = new StreamableHTTPServerTransport({
                sessionIdGenerator: () => uuid(),
                onsessioninitialized: newSessionId => {
                    logger.info(`New MCP session initialized: ${newSessionId}`);
                    transports[newSessionId] = transport;
                }
            });
            transport.onclose = () => {
                if (transport.sessionId) {
                    logger.info(`MCP session closed: ${transport.sessionId}`);
                    delete transports[transport.sessionId];
                }
            };
            const server = new Server({
                name: 'app-builder-mcp-server',
                title: 'App Builder MCP Server',
                version: '1.0.0'
            }, {
                capabilities: {
                    logging: {},
                    tools: {}
                }
            });
            registerMCPTools({
                server,
                tools: [...userTools, ...clientTools, ...dashboardTools, ...activityTools, ...documentTools]
            });
            await server.connect(transport);
            logger.info('MCP server connected successfully');
        }
        else {
            logger.warn(`Invalid MCP request: No valid session ID provided. Method: ${req.body?.method}`);
            res.status(400).json({
                jsonrpc: '2.0',
                error: {
                    code: JSONRPC_INVALID_REQUEST,
                    message: 'Invalid Request: No valid session ID provided'
                },
                id: req.body?.id || null
            });
            return;
        }
        await transport.handleRequest(req, res, req.body);
    }
    catch (error) {
        logger.error(`Error in MCP POST controller: ${error.message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: error.message }
            },
            id: req.body?.id || null
        });
    }
});
export const mcpGetController = catchAsync(async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    logger.info(`MCP GET request received. Session ID: ${sessionId}`);
    if (!sessionId || !transports[sessionId]) {
        logger.warn(`Invalid MCP GET request: Invalid or missing session ID: ${sessionId}`);
        res.status(400).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INVALID_REQUEST,
                message: 'Invalid Request: Invalid or missing session ID'
            },
            id: null
        });
        return;
    }
    try {
        const transport = transports[sessionId];
        logger.debug(`Processing MCP GET request for session: ${sessionId}`);
        await transport.handleRequest(req, res);
    }
    catch (error) {
        logger.error(`Error in MCP GET controller: ${error.message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: error.message }
            },
            id: null
        });
    }
});
export const mcpDeleteController = catchAsync(async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    logger.info(`MCP DELETE request received. Session ID: ${sessionId}`);
    if (!sessionId || !transports[sessionId]) {
        logger.warn(`Invalid MCP DELETE request: Invalid or missing session ID: ${sessionId}`);
        res.status(400).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INVALID_REQUEST,
                message: 'Invalid Request: Invalid or missing session ID'
            },
            id: null
        });
        return;
    }
    try {
        const transport = transports[sessionId];
        logger.info(`Terminating MCP session: ${sessionId}`);
        // Handle the delete request through transport first
        await transport.handleRequest(req, res);
        // Clean up the session after successful deletion
        if (transport.sessionId) {
            delete transports[transport.sessionId];
            logger.info(`MCP session terminated and cleaned up: ${transport.sessionId}`);
        }
    }
    catch (error) {
        logger.error(`Error in MCP DELETE controller: ${error.message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: error.message }
            },
            id: null
        });
    }
});
