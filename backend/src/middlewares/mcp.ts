import { NextFunction, Request, Response } from 'express';

export const mcpAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization as string | undefined;

    // Validate Authorization header exists
    if (!authHeader) {
        return res.status(401).json({
            jsonrpc: '2.0',
            error: {
                code: -32001,
                message: 'Unauthorized: Authorization header required'
            },
            id: req.body?.id || null
        });
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;

    const validApiKey = process.env.MCP_API_KEY || 'test-mcp-key';

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (token !== validApiKey) {
        return res.status(401).json({
            jsonrpc: '2.0',
            error: {
                code: -32001,
                message: 'Unauthorized: Invalid API key'
            },
            id: req.body?.id || null
        });
    }

    next();
};
