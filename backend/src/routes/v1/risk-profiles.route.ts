import riskAssessmentController from '../../controllers/risk-assessment.controller.ts';
import auth from '../../middlewares/auth.ts';
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Risk Profiles
 *   description: Risk profile templates management
 */

/**
 * @swagger
 * /risk-profiles:
 *   get:
 *     summary: Get risk profile templates
 *     description: Get available risk profile templates for reference
 *     tags: [Risk Profiles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Risk profile templates retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   investmentExperience:
 *                     type: string
 *                   riskTolerance:
 *                     type: string
 *                   investmentTimeHorizon:
 *                     type: string
 *                   liquidityNeeds:
 *                     type: string
 *                   ageRange:
 *                     type: string
 *                   investmentKnowledge:
 *                     type: string
 *             example:
 *               - investmentExperience: "limited"
 *                 riskTolerance: "conservative"
 *                 investmentTimeHorizon: "long"
 *                 liquidityNeeds: "medium"
 *                 ageRange: "31-45"
 *                 investmentKnowledge: "beginner"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
router.get('/', auth('getRiskAssessments'), riskAssessmentController.getRiskProfiles);

export default router;
