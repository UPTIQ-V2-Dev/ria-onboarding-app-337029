import { accountController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { accountValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// GET /account-types - Get available account types
router
    .route('/account-types')
    .get(auth('getAccountTypes'), validate(accountValidation.getAccountTypes), accountController.getAccountTypes);
// POST /accounts - Create accounts for client
router
    .route('/accounts')
    .post(auth('manageAccounts'), validate(accountValidation.createAccounts), accountController.createAccounts);
export default router;
/**
 * @swagger
 * tags:
 *   name: Account Management
 *   description: Account types and account creation management
 */
/**
 * @swagger
 * /account-types:
 *   get:
 *     summary: Get available account types
 *     description: Retrieve all available account types for client selection
 *     tags: [Account Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Unique identifier for the account type
 *                     example: traditional_ira
 *                   name:
 *                     type: string
 *                     description: Display name of the account type
 *                     example: Traditional IRA
 *                   description:
 *                     type: string
 *                     description: Detailed description of the account type
 *                     example: Tax-deferred retirement account
 *                   taxAdvantaged:
 *                     type: boolean
 *                     description: Whether the account has tax advantages
 *                     example: true
 *                   minimumBalance:
 *                     type: number
 *                     format: float
 *                     description: Minimum balance required for the account
 *                     example: 1000
 *                   fees:
 *                     type: object
 *                     properties:
 *                       annual:
 *                         type: number
 *                         format: float
 *                         description: Annual fee for the account
 *                         example: 25
 *                       transaction:
 *                         type: number
 *                         format: float
 *                         description: Transaction fee for the account
 *                         example: 0
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create accounts for a client
 *     description: Create accounts for a client based on selected account types
 *     tags: [Account Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - accountTypeIds
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: ID of the client for whom to create accounts
 *                 example: client-123
 *               accountTypeIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of account type IDs to create
 *                 example: ["traditional_ira", "roth_ira"]
 *             example:
 *               clientId: client-123
 *               accountTypeIds: ["traditional_ira", "roth_ira"]
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accountIds:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Array of created account IDs
 *                   example: ["acc_traditional_ira_123", "acc_roth_ira_456"]
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
