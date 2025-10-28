import { dashboardController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { dashboardValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Dashboard routes - all require authentication
router
    .route('/stats')
    .get(auth('getClients'), validate(dashboardValidation.getStats), dashboardController.getDashboardStats);

router
    .route('/client-status-counts')
    .get(
        auth('getClients'),
        validate(dashboardValidation.getClientStatusCounts),
        dashboardController.getClientStatusCounts
    );

export default router;

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard statistics and analytics
 */

/**
 * @swagger
 * /dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics and metrics
 *     description: Get comprehensive dashboard statistics including client counts, completion metrics, and recent activity
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalClients:
 *                   type: integer
 *                   description: Total number of clients in the system
 *                   example: 156
 *                 pendingOnboardings:
 *                   type: integer
 *                   description: Number of clients with pending status
 *                   example: 23
 *                 completedThisMonth:
 *                   type: integer
 *                   description: Number of clients completed this month
 *                   example: 12
 *                 averageCompletionTime:
 *                   type: number
 *                   format: float
 *                   description: Average time to complete onboarding in days
 *                   example: 5.2
 *                 recentActivity:
 *                   type: array
 *                   description: Recent activities in the system
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "clk123abc456"
 *                       type:
 *                         type: string
 *                         example: "client_registered"
 *                       clientName:
 *                         type: string
 *                         example: "Sarah Johnson"
 *                       description:
 *                         type: string
 *                         example: "New client registration completed"
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-28T14:30:00Z"
 *                       clientId:
 *                         type: string
 *                         nullable: true
 *                         example: "clk789def012"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */

/**
 * @swagger
 * /dashboard/client-status-counts:
 *   get:
 *     summary: Get client status distribution counts
 *     description: Get the distribution of clients by their status with counts and percentages
 *     tags: [Dashboard]
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
 *                   status:
 *                     type: string
 *                     description: Client status
 *                     example: "pending"
 *                   count:
 *                     type: integer
 *                     description: Number of clients with this status
 *                     example: 23
 *                   percentage:
 *                     type: number
 *                     format: float
 *                     description: Percentage of total clients with this status
 *                     example: 14.7
 *               example:
 *                 - status: "completed"
 *                   count: 78
 *                   percentage: 50.0
 *                 - status: "in_progress"
 *                   count: 45
 *                   percentage: 28.8
 *                 - status: "pending"
 *                   count: 23
 *                   percentage: 14.7
 *                 - status: "rejected"
 *                   count: 10
 *                   percentage: 6.4
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
