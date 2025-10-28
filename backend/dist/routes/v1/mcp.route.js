import { mcpDeleteController, mcpGetController, mcpPostController } from "../../controllers/mcp.controller.js";
import { mcpAuthMiddleware } from "../../middlewares/mcp.js";
import validate from "../../middlewares/validate.js";
import { mcpValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
router.use(mcpAuthMiddleware);
/**
 * @swagger
 * tags:
 *   name: MCP
 *   description: Model Context Protocol (MCP) endpoints for AI agent integration
 */
/**
 * @swagger
 * /mcp:
 *   post:
 *     summary: Handle MCP protocol POST requests
 *     description: Process MCP JSON-RPC requests for tool execution and protocol commands
 *     tags: [MCP]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: mcp-session-id
 *         schema:
 *           type: string
 *         description: MCP session identifier (optional for initialize requests)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - jsonrpc
 *               - method
 *             properties:
 *               jsonrpc:
 *                 type: string
 *                 enum: ["2.0"]
 *                 example: "2.0"
 *               method:
 *                 type: string
 *                 description: The MCP method to call
 *                 example: "initialize"
 *               params:
 *                 type: object
 *                 description: Parameters for the method call
 *               id:
 *                 oneOf:
 *                   - type: string
 *                   - type: number
 *                 description: Request identifier
 *           examples:
 *             initialize:
 *               summary: Initialize MCP session
 *               value:
 *                 jsonrpc: "2.0"
 *                 method: "initialize"
 *                 params:
 *                   protocolVersion: "2024-11-05"
 *                   capabilities: {}
 *                 id: 1
 *             listTools:
 *               summary: List available tools
 *               value:
 *                 jsonrpc: "2.0"
 *                 method: "tools/list"
 *                 id: 2
 *             callTool:
 *               summary: Execute a tool
 *               value:
 *                 jsonrpc: "2.0"
 *                 method: "tools/call"
 *                 params:
 *                   name: "client_list"
 *                   arguments:
 *                     userId: 1
 *                     limit: 10
 *                 id: 3
 *     responses:
 *       200:
 *         description: MCP response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jsonrpc:
 *                   type: string
 *                   enum: ["2.0"]
 *                 result:
 *                   type: object
 *                   description: Method result
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: integer
 *                     message:
 *                       type: string
 *                     data:
 *                       type: object
 *                 id:
 *                   oneOf:
 *                     - type: string
 *                     - type: number
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.post('/', validate(mcpValidation.mcpPost), mcpPostController);
/**
 * @swagger
 * /mcp:
 *   get:
 *     summary: Handle MCP protocol GET requests
 *     description: Handle MCP server-sent events and streaming responses
 *     tags: [MCP]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: mcp-session-id
 *         required: true
 *         schema:
 *           type: string
 *         description: MCP session identifier
 *     responses:
 *       200:
 *         description: MCP streaming response
 *         content:
 *           text/event-stream:
 *             schema:
 *               type: string
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.get('/', validate(mcpValidation.mcpGet), mcpGetController);
/**
 * @swagger
 * /mcp:
 *   delete:
 *     summary: Handle MCP protocol DELETE requests
 *     description: Terminate MCP session and cleanup resources
 *     tags: [MCP]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: mcp-session-id
 *         required: true
 *         schema:
 *           type: string
 *         description: MCP session identifier to terminate
 *     responses:
 *       200:
 *         description: Session terminated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jsonrpc:
 *                   type: string
 *                   enum: ["2.0"]
 *                 result:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: boolean
 *                       example: true
 *                 id:
 *                   type: string
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.delete('/', validate(mcpValidation.mcpDelete), mcpDeleteController);
export default router;
