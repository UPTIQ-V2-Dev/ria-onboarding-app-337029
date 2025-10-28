import { onboardingController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { onboardingValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// Create initial onboarding data
router
    .route('/')
    .post(auth('manageOnboarding'), validate(onboardingValidation.createOnboarding), onboardingController.createOnboarding);
// Submit completed onboarding
router
    .route('/submit')
    .post(auth('manageOnboarding'), validate(onboardingValidation.submitOnboarding), onboardingController.submitOnboarding);
// Get onboarding data for a specific client
router
    .route('/:clientId')
    .get(auth('getOnboarding'), validate(onboardingValidation.getOnboarding), onboardingController.getOnboarding);
// Update onboarding data for a specific step
router
    .route('/:clientId/step/:stepNumber')
    .put(auth('manageOnboarding'), validate(onboardingValidation.updateOnboardingStep), onboardingController.updateOnboardingStep);
// Get onboarding summary
router
    .route('/:clientId/summary')
    .get(auth('getOnboarding'), validate(onboardingValidation.getOnboardingSummary), onboardingController.getOnboardingSummary);
export default router;
/**
 * @swagger
 * tags:
 *   name: Onboarding
 *   description: Client onboarding management and multi-step data collection
 */
/**
 * @swagger
 * /onboarding:
 *   post:
 *     summary: Create initial onboarding data for a client
 *     description: Create initial onboarding data with personal info and optional contact/employment info.
 *     tags: [Onboarding]
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
 *               - personalInfo
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: The client ID
 *               personalInfo:
 *                 type: object
 *                 required:
 *                   - firstName
 *                   - lastName
 *                   - email
 *                   - phone
 *                   - dateOfBirth
 *                   - socialSecurityNumber
 *                   - address
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                     format: email
 *                   phone:
 *                     type: string
 *                   dateOfBirth:
 *                     type: string
 *                     format: date
 *                   socialSecurityNumber:
 *                     type: string
 *                   address:
 *                     type: object
 *                     properties:
 *                       street:
 *                         type: string
 *                       city:
 *                         type: string
 *                       state:
 *                         type: string
 *                       zipCode:
 *                         type: string
 *                       country:
 *                         type: string
 *               contactInfo:
 *                 type: object
 *                 properties:
 *                   preferredContactMethod:
 *                     type: string
 *                     enum: [email, phone, mail]
 *                   emergencyContact:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       relationship:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       email:
 *                         type: string
 *               employmentInfo:
 *                 type: object
 *                 properties:
 *                   employmentStatus:
 *                     type: string
 *                     enum: [employed, unemployed, retired, self_employed, student]
 *                   employer:
 *                     type: string
 *                   jobTitle:
 *                     type: string
 *                   industry:
 *                     type: string
 *                   annualIncome:
 *                     type: integer
 *                     minimum: 0
 *                   netWorth:
 *                     type: integer
 *                     minimum: 0
 *                   liquidNetWorth:
 *                     type: integer
 *                     minimum: 0
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientId:
 *                   type: string
 *                 status:
 *                   type: string
 *                 currentStep:
 *                   type: integer
 *                 totalSteps:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 */
/**
 * @swagger
 * /onboarding/{clientId}:
 *   get:
 *     summary: Get onboarding data for a specific client
 *     description: Retrieve complete onboarding data for a client including all steps.
 *     tags: [Onboarding]
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientId:
 *                   type: string
 *                 personalInfo:
 *                   type: object
 *                 contactInfo:
 *                   type: object
 *                 employmentInfo:
 *                   type: object
 *                 riskProfile:
 *                   type: object
 *                 investmentObjectives:
 *                   type: object
 *                 financialGoals:
 *                   type: array
 *                 selectedAccountTypes:
 *                   type: array
 *                 fundingMethods:
 *                   type: array
 *                 uploadedDocuments:
 *                   type: array
 *                 disclosures:
 *                   type: array
 *                 complianceRecords:
 *                   type: array
 *                 status:
 *                   type: string
 *                 currentStep:
 *                   type: integer
 *                 totalSteps:
 *                   type: integer
 *                 submittedAt:
 *                   type: string
 *                   format: date-time
 *                 reviewedAt:
 *                   type: string
 *                   format: date-time
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
/**
 * @swagger
 * /onboarding/{clientId}/step/{stepNumber}:
 *   put:
 *     summary: Update onboarding data for a specific step
 *     description: Update specific step data in the onboarding process.
 *     tags: [Onboarding]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *       - in: path
 *         name: stepNumber
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 7
 *         description: Step number (1-7)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Step-specific data (varies by step)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientId:
 *                   type: string
 *                 personalInfo:
 *                   type: object
 *                 riskProfile:
 *                   type: object
 *                 status:
 *                   type: string
 *                 currentStep:
 *                   type: integer
 *                 totalSteps:
 *                   type: integer
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 */
/**
 * @swagger
 * /onboarding/{clientId}/summary:
 *   get:
 *     summary: Get onboarding summary for review
 *     description: Get comprehensive summary of onboarding data for review purposes.
 *     tags: [Onboarding]
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientId:
 *                   type: string
 *                 personalInfo:
 *                   type: object
 *                 riskProfile:
 *                   type: object
 *                 investmentObjectives:
 *                   type: object
 *                 selectedAccounts:
 *                   type: array
 *                 totalFunding:
 *                   type: number
 *                 documentsStatus:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     uploaded:
 *                       type: integer
 *                     pending:
 *                       type: integer
 *                     approved:
 *                       type: integer
 *                 complianceStatus:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     completed:
 *                       type: integer
 *                 estimatedCompletionDate:
 *                   type: string
 *                   format: date-time
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
/**
 * @swagger
 * /onboarding/submit:
 *   post:
 *     summary: Submit completed onboarding for review
 *     description: Submit completed onboarding data for final review and approval.
 *     tags: [Onboarding]
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
 *               - finalReview
 *               - electronicallySign
 *               - signatureDate
 *             properties:
 *               clientId:
 *                 type: string
 *               finalReview:
 *                 type: boolean
 *               electronicallySign:
 *                 type: boolean
 *               signatureDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 submissionId:
 *                   type: string
 *                 status:
 *                   type: string
 *                 submittedAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 */
