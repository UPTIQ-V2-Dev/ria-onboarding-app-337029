import logger from '../config/logger.ts';
import { JSONRPC_INTERNAL_ERROR, JSONRPC_INVALID_REQUEST } from '../constants/jsonrpc.constants.ts';
import { registerMCPTools } from '../services/mcp.service.ts';
import { accountTools } from '../tools/account.tool.ts';
import { activityTools } from '../tools/activity.tool.ts';
import { clientTools } from '../tools/client.tool.ts';
import { complianceTools } from '../tools/compliance.tool.ts';
import { dashboardTools } from '../tools/dashboard.tool.ts';
import { documentTools } from '../tools/document.tool.ts';
import { investmentObjectivesTools } from '../tools/investment-objectives.tool.ts';
import { onboardingTools } from '../tools/onboarding.tool.ts';
import { riskAssessmentTools } from '../tools/risk-assessment.tool.ts';
import { userTools } from '../tools/user.tool.ts';
import catchAsync from '../utils/catchAsync.ts';
import { Server } from '@modelcontextprotocol/sdk/server';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

// Map to store transports by session ID
const transports: { [sessionId: string]: StreamableHTTPServerTransport | undefined } = {};

export const mcpPostController = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    logger.info(`MCP POST request received. Method: ${req.body?.method}, Session ID: ${sessionId}`);

    try {
        if (sessionId && transports[sessionId]) {
            transport = transports[sessionId]!;
            logger.debug(`Using existing MCP session: ${sessionId}`);
        } else if (!sessionId && isInitializeRequest(req.body)) {
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

            const server = new Server(
                {
                    name: 'app-builder-mcp-server',
                    title: 'App Builder MCP Server',
                    version: '1.0.0'
                },
                {
                    capabilities: {
                        logging: {},
                        tools: {}
                    }
                }
            );

            registerMCPTools({
                server,
                tools: [
                    ...userTools,
                    ...clientTools,
                    ...dashboardTools,
                    ...activityTools,
                    ...documentTools,
                    ...onboardingTools,
                    ...riskAssessmentTools,
                    ...investmentObjectivesTools,
                    ...accountTools,
                    ...complianceTools
                ]
            });
            await server.connect(transport);
            logger.info('MCP server connected successfully');
        } else {
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
    } catch (error) {
        logger.error(`Error in MCP POST controller: ${(error as Error).message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: (error as Error).message }
            },
            id: req.body?.id || null
        });
    }
});

export const mcpGetController = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;

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
        const transport = transports[sessionId]!;
        logger.debug(`Processing MCP GET request for session: ${sessionId}`);
        await transport.handleRequest(req, res);
    } catch (error) {
        logger.error(`Error in MCP GET controller: ${(error as Error).message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: (error as Error).message }
            },
            id: null
        });
    }
});

export const mcpDeleteController = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;

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
        const transport = transports[sessionId]!;
        logger.info(`Terminating MCP session: ${sessionId}`);

        // Handle the delete request through transport first
        await transport.handleRequest(req, res);

        // Clean up the session after successful deletion
        if (transport.sessionId) {
            delete transports[transport.sessionId];
            logger.info(`MCP session terminated and cleaned up: ${transport.sessionId}`);
        }
    } catch (error) {
        logger.error(`Error in MCP DELETE controller: ${(error as Error).message}`);
        res.status(500).json({
            jsonrpc: '2.0',
            error: {
                code: JSONRPC_INTERNAL_ERROR,
                message: 'Internal error',
                data: { details: (error as Error).message }
            },
            id: null
        });
    }
});
