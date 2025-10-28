import { complianceController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { complianceValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// GET /disclosures
router
    .route('/disclosures')
    .get(auth(), validate(complianceValidation.getDisclosures), complianceController.getDisclosures);
// POST /compliance/agreements
router
    .route('/compliance/agreements')
    .post(auth(), validate(complianceValidation.createComplianceAgreements), complianceController.createComplianceAgreements);
// Additional routes for extended functionality
router
    .route('/compliance/:clientId')
    .get(auth(), validate(complianceValidation.getClientCompliance), complianceController.getClientCompliance);
router
    .route('/compliance/:clientId/agreements')
    .get(auth(), validate(complianceValidation.getClientCompliance), complianceController.getClientComplianceAgreements);
export default router;
/**
 * @swagger
 * tags:
 *   name: Compliance
 *   description: Compliance management and disclosure tracking
 */
/**
 * @swagger
 * /disclosures:
 *   get:
 *     summary: Get all compliance disclosures and agreements
 *     description: Retrieve all available compliance disclosures that clients need to acknowledge
 *     tags: [Compliance]
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
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   required:
 *                     type: boolean
 *                 example:
 *                   id: "investment_risks"
 *                   title: "Investment Risk Disclosure"
 *                   content: "Investment involves risk, including potential loss of principal..."
 *                   required: true
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /compliance/agreements:
 *   post:
 *     summary: Record client acknowledgment of disclosures
 *     description: Create compliance agreements for a client by recording their acknowledgment of specific disclosures
 *     tags: [Compliance]
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
 *               - disclosureIds
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: ID of the client acknowledging the disclosures
 *               disclosureIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of disclosure IDs being acknowledged
 *             example:
 *               clientId: "client-123"
 *               disclosureIds: ["investment_risks", "privacy_policy", "terms_of_service"]
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 agreements:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       clientId:
 *                         type: string
 *                       disclosureId:
 *                         type: string
 *                       acknowledged:
 *                         type: boolean
 *                       acknowledgedAt:
 *                         type: string
 *                         format: date-time
 *                   example:
 *                     - id: "agr-789"
 *                       clientId: "client-123"
 *                       disclosureId: "investment_risks"
 *                       acknowledged: true
 *                       acknowledgedAt: "2024-10-28T10:00:00Z"
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
 */
/**
 * @swagger
 * /compliance/{clientId}:
 *   get:
 *     summary: Check client compliance status
 *     description: Verify if a client has acknowledged all required disclosures
 *     tags: [Compliance]
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
 *                 compliant:
 *                   type: boolean
 *                 missingDisclosures:
 *                   type: array
 *                   items:
 *                     type: string
 *               example:
 *                 compliant: false
 *                 missingDisclosures: ["Privacy Policy", "Terms of Service"]
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /compliance/{clientId}/agreements:
 *   get:
 *     summary: Get client's compliance agreements
 *     description: Retrieve all compliance agreements for a specific client
 *     tags: [Compliance]
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
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   clientId:
 *                     type: string
 *                   disclosureId:
 *                     type: string
 *                   acknowledged:
 *                     type: boolean
 *                   acknowledgedAt:
 *                     type: string
 *                     format: date-time
 *                   disclosure:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       content:
 *                         type: string
 *                       required:
 *                         type: boolean
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
