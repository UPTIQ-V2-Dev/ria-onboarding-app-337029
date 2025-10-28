import { clientController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { clientValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Authenticated routes - all client operations require authentication
router
    .route('/')
    .post(auth('manageClients'), validate(clientValidation.createClient), clientController.createClient)
    .get(auth('getClients'), validate(clientValidation.getClients), clientController.getClients);

router
    .route('/recent')
    .get(auth('getClients'), validate(clientValidation.getRecentClients), clientController.getRecentClients);

router
    .route('/bulk-status')
    .put(auth('manageClients'), validate(clientValidation.bulkUpdateStatus), clientController.bulkUpdateStatus);

router
    .route('/export')
    .get(auth('getClients'), validate(clientValidation.exportClients), clientController.exportClients);

router
    .route('/:clientId')
    .get(auth('getClients'), validate(clientValidation.getClient), clientController.getClient)
    .patch(auth('manageClients'), validate(clientValidation.updateClient), clientController.updateClient)
    .delete(auth('manageClients'), validate(clientValidation.deleteClient), clientController.deleteClient);

export default router;

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Client management and retrieval
 */

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Create a client
 *     description: Create a new client record.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - firmId
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               phone:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed, rejected]
 *                 default: pending
 *               progress:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 100
 *                 default: 0
 *               riskProfile:
 *                 type: string
 *                 enum: [conservative, moderate, aggressive]
 *                 nullable: true
 *               accountValue:
 *                 type: number
 *                 minimum: 0
 *                 nullable: true
 *               firmId:
 *                 type: string
 *             example:
 *               firstName: Sarah
 *               lastName: Johnson
 *               email: sarah.johnson@email.com
 *               phone: "+1-555-0123"
 *               status: pending
 *               progress: 0
 *               riskProfile: moderate
 *               accountValue: 50000
 *               firmId: firm-1
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all clients
 *     description: Get all clients with pagination and filtering.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Client first name
 *       - in: query
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Client last name
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Client email
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, in_progress, completed, rejected]
 *         description: Client status
 *       - in: query
 *         name: riskProfile
 *         schema:
 *           type: string
 *           enum: [conservative, moderate, aggressive]
 *         description: Client risk profile
 *       - in: query
 *         name: firmId
 *         schema:
 *           type: string
 *         description: Firm ID
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by field
 *       - in: query
 *         name: sortType
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort direction
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         default: 10
 *         description: Maximum number of clients
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Client'
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 totalResults:
 *                   type: integer
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /clients/recent:
 *   get:
 *     summary: Get recent clients
 *     description: Get recently created or updated clients.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *         default: 10
 *         description: Maximum number of clients to return
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /clients/bulk-status:
 *   put:
 *     summary: Update status for multiple clients
 *     description: Update status for multiple clients simultaneously.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientIds
 *               - status
 *             properties:
 *               clientIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 minItems: 1
 *                 maxItems: 100
 *                 description: Array of client IDs to update
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed, rejected]
 *                 description: New status to apply to all clients
 *             example:
 *               clientIds: ["client-123", "client-456"]
 *               status: "in_progress"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedCount:
 *                   type: integer
 *                   description: Number of clients updated
 *                 clients:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Client'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /clients/export:
 *   get:
 *     summary: Export client data
 *     description: Export client data as CSV or Excel file.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, in_progress, completed, rejected]
 *         description: Filter by client status
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in client name and email
 *       - in: query
 *         name: riskProfile
 *         schema:
 *           type: string
 *           enum: [conservative, moderate, aggressive]
 *         description: Filter by risk profile
 *       - in: query
 *         name: firmId
 *         schema:
 *           type: string
 *         description: Filter by firm ID
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         default: csv
 *         description: Export format
 *     responses:
 *       "200":
 *         description: File downloaded
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 */

/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     summary: Get a client
 *     description: Get a client by ID. Users can only access their own clients.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Client id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Client'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a client
 *     description: Update client information. Users can only update their own clients.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Client id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed, rejected]
 *               progress:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 100
 *               riskProfile:
 *                 type: string
 *                 enum: [conservative, moderate, aggressive]
 *                 nullable: true
 *               accountValue:
 *                 type: number
 *                 minimum: 0
 *                 nullable: true
 *               firmId:
 *                 type: string
 *             example:
 *               status: in_progress
 *               progress: 65
 *               riskProfile: moderate
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Client'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a client
 *     description: Delete a client. Users can only delete their own clients.
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Client id
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: string
 *         status:
 *           type: string
 *           enum: [pending, in_progress, completed, rejected]
 *         progress:
 *           type: integer
 *           minimum: 0
 *           maximum: 100
 *         riskProfile:
 *           type: string
 *           enum: [conservative, moderate, aggressive]
 *           nullable: true
 *         accountValue:
 *           type: number
 *           minimum: 0
 *           nullable: true
 *         firmId:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         userId:
 *           type: integer
 *       example:
 *         id: "clzx1y2z3a4b5c6d7e8f9g0h"
 *         firstName: Sarah
 *         lastName: Johnson
 *         email: sarah.johnson@email.com
 *         phone: "+1-555-0123"
 *         status: in_progress
 *         progress: 65
 *         riskProfile: moderate
 *         accountValue: 50000
 *         firmId: firm-1
 *         createdAt: 2024-10-28T14:30:00Z
 *         updatedAt: 2024-10-28T14:30:00Z
 *         userId: 1
 */
