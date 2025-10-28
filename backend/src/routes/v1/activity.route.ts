import { activityController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { activityValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Authenticated routes
router
    .route('/')
    .post(auth('manageActivities'), validate(activityValidation.createActivity), activityController.createActivity)
    .get(auth('getActivities'), validate(activityValidation.getActivities), activityController.getActivities);

router
    .route('/:activityId')
    .get(auth('getActivities'), validate(activityValidation.getActivity), activityController.getActivity)
    .patch(auth('manageActivities'), validate(activityValidation.updateActivity), activityController.updateActivity)
    .delete(auth('manageActivities'), validate(activityValidation.deleteActivity), activityController.deleteActivity);

export default router;

/**
 * @swagger
 * tags:
 *   name: Activities
 *   description: Activity tracking and management
 */

/**
 * @swagger
 * /activities:
 *   post:
 *     summary: Create an activity
 *     description: Create a new activity record for tracking client onboarding progress and system events.
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - clientName
 *               - description
 *             properties:
 *               type:
 *                 type: string
 *                 description: Type of activity (e.g., client_registered, document_uploaded, etc.)
 *               clientName:
 *                 type: string
 *                 description: Name of the client associated with this activity
 *               description:
 *                 type: string
 *                 description: Detailed description of the activity
 *               clientId:
 *                 type: string
 *                 description: Optional client ID if activity is related to a specific client
 *             example:
 *               type: client_registered
 *               clientName: Sarah Johnson
 *               description: New client registration completed
 *               clientId: client123
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all activities
 *     description: Retrieve all activities with optional filtering and pagination.
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by activity type
 *       - in: query
 *         name: clientName
 *         schema:
 *           type: string
 *         description: Filter by client name
 *       - in: query
 *         name: clientId
 *         schema:
 *           type: string
 *         description: Filter by client ID
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by field (e.g., timestamp:desc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of activities
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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /activities/{activityId}:
 *   get:
 *     summary: Get an activity
 *     description: Retrieve a specific activity by its ID.
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: activityId
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update an activity
 *     description: Update an activity's information.
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: activityId
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Type of activity
 *               clientName:
 *                 type: string
 *                 description: Name of the client
 *               description:
 *                 type: string
 *                 description: Activity description
 *               clientId:
 *                 type: string
 *                 description: Client ID
 *             example:
 *               type: document_verified
 *               description: Client documents have been verified
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete an activity
 *     description: Delete an activity record.
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: activityId
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity ID
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
 *     Activity:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique activity identifier (CUID)
 *         type:
 *           type: string
 *           description: Type of activity
 *         clientName:
 *           type: string
 *           description: Name of the client associated with this activity
 *         description:
 *           type: string
 *           description: Detailed description of the activity
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: When the activity occurred
 *         clientId:
 *           type: string
 *           description: Optional client ID if activity is related to a specific client
 *       example:
 *         id: "clxyz123456789"
 *         type: "client_registered"
 *         clientName: "Sarah Johnson"
 *         description: "New client registration completed"
 *         timestamp: "2024-10-28T14:30:00Z"
 *         clientId: "client123"
 */
