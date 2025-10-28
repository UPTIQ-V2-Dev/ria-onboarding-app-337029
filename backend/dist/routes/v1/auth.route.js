import { authController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import authValidation from "../../validations/auth.validation.js";
import express from 'express';
const router = express.Router();
// Un-authenticated routes
router.post('/register', validate(authValidation.register), authController.register);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);
// Authenticated route
router.post('/send-verification-email', auth(), validate(authValidation.sendVerificationEmail), authController.sendVerificationEmail);
export default router;
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                       nullable: true
 *                     role:
 *                       type: string
 *                     isEmailVerified:
 *                       type: boolean
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 tokens:
 *                   type: object
 *                   properties:
 *                     access:
 *                       type: object
 *                       properties:
 *                         token:
 *                           type: string
 *                         expires:
 *                           type: string
 *                     refresh:
 *                       type: object
 *                       properties:
 *                         token:
 *                           type: string
 *                         expires:
 *                           type: string
 *       "400":
 *         description: Invalid input or email already exists
 *       "422":
 *         description: Password validation failed
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate user and return access tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                       nullable: true
 *                     role:
 *                       type: string
 *                     isEmailVerified:
 *                       type: boolean
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 tokens:
 *                   type: object
 *                   properties:
 *                     access:
 *                       type: object
 *                       properties:
 *                         token:
 *                           type: string
 *                         expires:
 *                           type: string
 *                     refresh:
 *                       type: object
 *                       properties:
 *                         token:
 *                           type: string
 *                         expires:
 *                           type: string
 *       "401":
 *         description: Invalid email or password
 *       "400":
 *         description: Invalid input
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Invalidate user refresh token and logout
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *             example:
 *               refreshToken: eyJhbGc..
 *     responses:
 *       "204":
 *         description: No content
 *       "404":
 *         description: Refresh token not found
 *       "400":
 *         description: Invalid refresh token
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/refresh-tokens:
 *   post:
 *     summary: Generate new access and refresh tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *             example:
 *               refreshToken: eyJhbGc..
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     expires:
 *                       type: string
 *                 refresh:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     expires:
 *                       type: string
 *       "401":
 *         description: Invalid refresh token
 *       "400":
 *         description: Invalid input
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Send password reset email to user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *             example:
 *               email: user@example.com
 *     responses:
 *       "204":
 *         description: No content
 *       "404":
 *         description: Email not found
 *       "400":
 *         description: Invalid email format
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset user password using reset token
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: The reset password token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               password: newPassword123
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         description: Invalid or expired token
 *       "400":
 *         description: Invalid password format
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/send-verification-email:
 *   post:
 *     summary: Send email verification link to authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "500":
 *         description: Internal server error
 */
/**
 * @swagger
 * /auth/verify-email:
 *   post:
 *     summary: Verify user email address using verification token
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: The verify email token
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         description: Invalid or expired token
 *       "400":
 *         description: Invalid token format
 *       "500":
 *         description: Internal server error
 */
