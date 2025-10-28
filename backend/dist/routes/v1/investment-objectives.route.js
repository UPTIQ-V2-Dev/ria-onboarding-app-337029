import { investmentObjectivesController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { investmentObjectivesValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// Create investment objectives
router.post('/', auth('manageClients'), validate(investmentObjectivesValidation.createInvestmentObjectives), investmentObjectivesController.createInvestmentObjectives);
// Get investment objectives by ID
router.get('/:id', auth('getClients'), validate(investmentObjectivesValidation.getInvestmentObjectivesById), investmentObjectivesController.getInvestmentObjectivesById);
// Update investment objectives by ID
router.patch('/:id', auth('manageClients'), validate(investmentObjectivesValidation.updateInvestmentObjectivesById), investmentObjectivesController.updateInvestmentObjectivesById);
// Delete investment objectives by ID
router.delete('/:id', auth('manageClients'), validate(investmentObjectivesValidation.deleteInvestmentObjectivesById), investmentObjectivesController.deleteInvestmentObjectivesById);
// Get investment objectives by client ID
router.get('/client/:clientId', auth('getClients'), validate(investmentObjectivesValidation.getInvestmentObjectivesByClientId), investmentObjectivesController.getInvestmentObjectivesByClientId);
// Update investment objectives by client ID
router.patch('/client/:clientId', auth('manageClients'), validate(investmentObjectivesValidation.updateInvestmentObjectivesByClientId), investmentObjectivesController.updateInvestmentObjectivesByClientId);
// Delete investment objectives by client ID
router.delete('/client/:clientId', auth('manageClients'), validate(investmentObjectivesValidation.deleteInvestmentObjectivesByClientId), investmentObjectivesController.deleteInvestmentObjectivesByClientId);
export default router;
/**
 * @swagger
 * tags:
 *   name: InvestmentObjectives
 *   description: Investment objectives management
 */
/**
 * @swagger
 * /investment-objectives:
 *   post:
 *     summary: Submit investment objectives
 *     description: Create investment objectives for a client
 *     tags: [InvestmentObjectives]
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
 *               - primaryGoal
 *               - specificGoals
 *               - timeHorizon
 *               - riskComfort
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: Client ID
 *               primaryGoal:
 *                 type: string
 *                 description: Primary investment goal
 *               specificGoals:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of specific goals
 *               targetAmount:
 *                 type: number
 *                 description: Target investment amount
 *               timeHorizon:
 *                 type: integer
 *                 minimum: 1
 *                 description: Investment time horizon in years
 *               monthlyContribution:
 *                 type: number
 *                 description: Monthly contribution amount
 *               riskComfort:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *                 description: Risk comfort level (1-10)
 *             example:
 *               clientId: client-123
 *               primaryGoal: growth
 *               specificGoals: ["Retirement", "Long-term wealth building"]
 *               targetAmount: 1000000
 *               timeHorizon: 25
 *               monthlyContribution: 2000
 *               riskComfort: 7
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 clientId:
 *                   type: string
 *                 primaryGoal:
 *                   type: string
 *                 specificGoals:
 *                   type: array
 *                   items:
 *                     type: string
 *                 targetAmount:
 *                   type: number
 *                 timeHorizon:
 *                   type: integer
 *                 monthlyContribution:
 *                   type: number
 *                 riskComfort:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         description: Bad request - Invalid input or investment objectives already exist
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Client not found
 *       "422":
 *         description: Validation failed
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /investment-objectives/{id}:
 *   get:
 *     summary: Get investment objectives by ID
 *     description: Retrieve investment objectives by their ID
 *     tags: [InvestmentObjectives]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Investment objectives ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 clientId:
 *                   type: string
 *                 primaryGoal:
 *                   type: string
 *                 specificGoals:
 *                   type: array
 *                   items:
 *                     type: string
 *                 targetAmount:
 *                   type: number
 *                 timeHorizon:
 *                   type: integer
 *                 monthlyContribution:
 *                   type: number
 *                 riskComfort:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                 client:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     email:
 *                       type: string
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found
 *       "500":
 *         description: Internal server error
 *
 *   patch:
 *     summary: Update investment objectives by ID
 *     description: Update investment objectives information
 *     tags: [InvestmentObjectives]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Investment objectives ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               primaryGoal:
 *                 type: string
 *               specificGoals:
 *                 type: array
 *                 items:
 *                   type: string
 *               targetAmount:
 *                 type: number
 *               timeHorizon:
 *                 type: integer
 *                 minimum: 1
 *               monthlyContribution:
 *                 type: number
 *               riskComfort:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *             example:
 *               primaryGoal: growth
 *               targetAmount: 1200000
 *               riskComfort: 8
 *     responses:
 *       "200":
 *         description: OK
 *       "400":
 *         description: Bad request - Invalid input
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found
 *       "422":
 *         description: Validation failed
 *       "500":
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete investment objectives by ID
 *     description: Remove investment objectives from the system
 *     tags: [InvestmentObjectives]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Investment objectives ID
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /investment-objectives/client/{clientId}:
 *   get:
 *     summary: Get investment objectives by client ID
 *     description: Retrieve investment objectives for a specific client
 *     tags: [InvestmentObjectives]
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
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found for this client
 *       "500":
 *         description: Internal server error
 *
 *   patch:
 *     summary: Update investment objectives by client ID
 *     description: Update investment objectives for a specific client
 *     tags: [InvestmentObjectives]
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
 *               primaryGoal:
 *                 type: string
 *               specificGoals:
 *                 type: array
 *                 items:
 *                   type: string
 *               targetAmount:
 *                 type: number
 *               timeHorizon:
 *                 type: integer
 *                 minimum: 1
 *               monthlyContribution:
 *                 type: number
 *               riskComfort:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *     responses:
 *       "200":
 *         description: OK
 *       "400":
 *         description: Bad request - Invalid input
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found for this client
 *       "422":
 *         description: Validation failed
 *       "500":
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete investment objectives by client ID
 *     description: Remove investment objectives for a specific client
 *     tags: [InvestmentObjectives]
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
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "404":
 *         description: Investment objectives not found for this client
 *       "500":
 *         description: Internal server error
 */
