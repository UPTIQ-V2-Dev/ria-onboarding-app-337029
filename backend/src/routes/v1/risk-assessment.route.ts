import riskAssessmentController from '../../controllers/risk-assessment.controller.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import riskAssessmentValidation from '../../validations/risk-assessment.validation.ts';
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Risk Assessment
 *   description: Risk assessment questionnaire and profile management
 */

/**
 * @swagger
 * /risk-assessment:
 *   post:
 *     summary: Submit risk assessment questionnaire
 *     description: Submit a risk assessment questionnaire for a client
 *     tags: [Risk Assessment]
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
 *               - investmentExperience
 *               - riskTolerance
 *               - investmentTimeHorizon
 *               - liquidityNeeds
 *               - ageRange
 *               - investmentKnowledge
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: Client identifier
 *               investmentExperience:
 *                 type: string
 *                 enum: [none, limited, some, good, extensive]
 *                 description: Investment experience level
 *               riskTolerance:
 *                 type: string
 *                 enum: [conservative, moderate, aggressive]
 *                 description: Risk tolerance level
 *               investmentTimeHorizon:
 *                 type: string
 *                 enum: [short, medium, long]
 *                 description: Investment time horizon
 *               liquidityNeeds:
 *                 type: string
 *                 enum: [high, medium, low]
 *                 description: Liquidity needs
 *               ageRange:
 *                 type: string
 *                 enum: [18-24, 25-30, 31-45, 46-60, 60+]
 *                 description: Age range of client
 *               investmentKnowledge:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced]
 *                 description: Investment knowledge level
 *           example:
 *             clientId: "client-123"
 *             investmentExperience: "good"
 *             riskTolerance: "moderate"
 *             investmentTimeHorizon: "long"
 *             liquidityNeeds: "low"
 *             ageRange: "31-45"
 *             investmentKnowledge: "intermediate"
 *     responses:
 *       "201":
 *         description: Risk assessment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 clientId:
 *                   type: string
 *                 investmentExperience:
 *                   type: string
 *                 riskTolerance:
 *                   type: string
 *                 investmentTimeHorizon:
 *                   type: string
 *                 liquidityNeeds:
 *                   type: string
 *                 ageRange:
 *                   type: string
 *                 investmentKnowledge:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
router.post(
    '/',
    auth('manageRiskAssessments'),
    validate(riskAssessmentValidation.createRiskAssessment),
    riskAssessmentController.createRiskAssessment
);

/**
 * @swagger
 * /risk-assessment/{clientId}:
 *   get:
 *     summary: Get risk assessment by client ID
 *     description: Get risk assessment for a specific client
 *     tags: [Risk Assessment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *     responses:
 *       "200":
 *         description: Risk assessment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 clientId:
 *                   type: string
 *                 investmentExperience:
 *                   type: string
 *                 riskTolerance:
 *                   type: string
 *                 investmentTimeHorizon:
 *                   type: string
 *                 liquidityNeeds:
 *                   type: string
 *                 ageRange:
 *                   type: string
 *                 investmentKnowledge:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *   patch:
 *     summary: Update risk assessment
 *     description: Update risk assessment for a specific client
 *     tags: [Risk Assessment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               investmentExperience:
 *                 type: string
 *                 enum: [none, limited, some, good, extensive]
 *               riskTolerance:
 *                 type: string
 *                 enum: [conservative, moderate, aggressive]
 *               investmentTimeHorizon:
 *                 type: string
 *                 enum: [short, medium, long]
 *               liquidityNeeds:
 *                 type: string
 *                 enum: [high, medium, low]
 *               ageRange:
 *                 type: string
 *                 enum: [18-24, 25-30, 31-45, 46-60, 60+]
 *               investmentKnowledge:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced]
 *             minProperties: 1
 *     responses:
 *       "200":
 *         description: Risk assessment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 clientId:
 *                   type: string
 *                 investmentExperience:
 *                   type: string
 *                 riskTolerance:
 *                   type: string
 *                 investmentTimeHorizon:
 *                   type: string
 *                 liquidityNeeds:
 *                   type: string
 *                 ageRange:
 *                   type: string
 *                 investmentKnowledge:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *   delete:
 *     summary: Delete risk assessment
 *     description: Delete risk assessment for a specific client
 *     tags: [Risk Assessment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *     responses:
 *       "204":
 *         description: Risk assessment deleted successfully
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
router
    .route('/:clientId')
    .get(
        auth('getRiskAssessments'),
        validate(riskAssessmentValidation.getRiskAssessment),
        riskAssessmentController.getRiskAssessment
    )
    .patch(
        auth('manageRiskAssessments'),
        validate(riskAssessmentValidation.updateRiskAssessment),
        riskAssessmentController.updateRiskAssessment
    )
    .delete(
        auth('manageRiskAssessments'),
        validate(riskAssessmentValidation.deleteRiskAssessment),
        riskAssessmentController.deleteRiskAssessment
    );

export default router;
