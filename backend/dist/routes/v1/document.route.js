import { documentController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import upload from "../../middlewares/upload.js";
import validate from "../../middlewares/validate.js";
import { documentValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// Get all document types (authenticated users only)
router
    .route('/document-types')
    .get(auth(), validate(documentValidation.getDocumentTypes), documentController.getDocumentTypes);
// Client documents routes
router
    .route('/clients/:clientId/documents')
    .get(auth(), validate(documentValidation.getClientDocuments), documentController.getClientDocuments);
// Documents CRUD routes
router
    .route('/documents')
    .post(auth(), validate(documentValidation.createDocument), documentController.createDocument)
    .get(auth(), validate(documentValidation.queryDocuments), documentController.queryDocuments);
router
    .route('/documents/:documentId')
    .get(auth(), validate(documentValidation.getDocument), documentController.getDocument)
    .delete(auth(), validate(documentValidation.deleteDocument), documentController.deleteDocument);
router
    .route('/documents/:documentId/status')
    .put(auth(), validate(documentValidation.updateDocumentStatus), documentController.updateDocumentStatus);
router
    .route('/documents/:documentId/analyze')
    .post(auth(), validate(documentValidation.analyzeDocument), documentController.analyzeDocument);
// File upload endpoint (multipart/form-data)
router
    .route('/documents/upload')
    .post(auth(), upload.single('file'), validate(documentValidation.uploadDocument), documentController.uploadDocument);
// Alternative endpoint for getting client documents
router
    .route('/documents/client/:clientId')
    .get(auth(), validate(documentValidation.getClientDocumentsByParams), documentController.getClientDocumentsByParams);
export default router;
/**
 * @swagger
 * tags:
 *   name: Documents
 *   description: Document management and file upload for client onboarding
 */
/**
 * @swagger
 * /document-types:
 *   get:
 *     summary: Get all available document types
 *     description: Retrieve all document types required for client onboarding
 *     tags: [Documents]
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
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   required:
 *                     type: boolean
 *                   category:
 *                     type: string
 *                   acceptedFormats:
 *                     type: array
 *                     items:
 *                       type: string
 *                   maxFileSize:
 *                     type: integer
 *             example:
 *               - id: "id-verification"
 *                 name: "ID Verification"
 *                 description: "Government-issued photo ID"
 *                 required: true
 *                 category: "identity"
 *                 acceptedFormats: ["image/jpeg", "image/png", "application/pdf"]
 *                 maxFileSize: 5242880
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /clients/{clientId}/documents:
 *   get:
 *     summary: Get all documents for a specific client
 *     description: Retrieve all documents uploaded for a specific client
 *     tags: [Documents]
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
 *                   fileName:
 *                     type: string
 *                   fileSize:
 *                     type: integer
 *                   fileType:
 *                     type: string
 *                   documentType:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       required:
 *                         type: boolean
 *                       category:
 *                         type: string
 *                       acceptedFormats:
 *                         type: array
 *                         items:
 *                           type: string
 *                       maxFileSize:
 *                         type: integer
 *                   clientId:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [pending, uploaded, verified, rejected]
 *                   signedUrl:
 *                     type: string
 *                     nullable: true
 *                   uploadedAt:
 *                     type: string
 *                     format: date-time
 *                   verifiedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                   rejectionReason:
 *                     type: string
 *                     nullable: true
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents:
 *   post:
 *     summary: Create a new document and get signed URL for upload
 *     description: Create a document record and receive a signed URL for file upload
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fileName
 *               - fileSize
 *               - fileType
 *               - documentTypeId
 *               - clientId
 *             properties:
 *               fileName:
 *                 type: string
 *               fileSize:
 *                 type: integer
 *               fileType:
 *                 type: string
 *               documentTypeId:
 *                 type: string
 *               clientId:
 *                 type: string
 *             example:
 *               fileName: "drivers_license.pdf"
 *               fileSize: 2048000
 *               fileType: "application/pdf"
 *               documentTypeId: "id-verification"
 *               clientId: "client123"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 document:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     fileName:
 *                       type: string
 *                     fileSize:
 *                       type: integer
 *                     fileType:
 *                       type: string
 *                     documentType:
 *                       type: object
 *                     clientId:
 *                       type: string
 *                     status:
 *                       type: string
 *                     uploadedAt:
 *                       type: string
 *                       format: date-time
 *                 signedUrl:
 *                   type: string
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "413":
 *         $ref: '#/components/responses/PayloadTooLarge'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *   get:
 *     summary: Query documents with filters and pagination
 *     description: Get documents with optional filtering and pagination
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: clientId
 *         schema:
 *           type: string
 *         description: Filter by client ID
 *       - in: query
 *         name: documentTypeId
 *         schema:
 *           type: string
 *         description: Filter by document type ID
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, uploaded, verified, rejected]
 *         description: Filter by document status
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by field
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         default: 10
 *         description: Maximum number of documents
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 1
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
 *                     type: object
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
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents/{documentId}:
 *   get:
 *     summary: Get specific document by ID
 *     description: Retrieve a single document with download URL if available
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: documentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Document ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *   delete:
 *     summary: Delete a document
 *     description: Delete a document by ID
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: documentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Document ID
 *     responses:
 *       "204":
 *         description: No Content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents/{documentId}/status:
 *   put:
 *     summary: Update document status and verification details
 *     description: Update the status of a document (verify, reject, etc.)
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: documentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Document ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, uploaded, verified, rejected]
 *               rejectionReason:
 *                 type: string
 *                 description: Required when status is 'rejected'
 *             example:
 *               status: "verified"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents/{documentId}/analyze:
 *   post:
 *     summary: Analyze bank statement document and get treasury recommendations
 *     description: Analyze a verified bank statement document to generate treasury management recommendations
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: documentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Document ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       product:
 *                         type: string
 *                         description: Treasury product name
 *                       description:
 *                         type: string
 *                         description: Product description
 *                       reasoning:
 *                         type: string
 *                         description: Reasoning for the recommendation
 *                       priority:
 *                         type: string
 *                         enum: [high, medium, low]
 *                         description: Recommendation priority
 *             example:
 *               recommendations:
 *                 - product: "High-Yield Savings Account"
 *                   description: "Maximize returns on excess cash with competitive interest rates"
 *                   reasoning: "Based on your current cash position and liquidity needs, a high-yield savings account would provide better returns while maintaining accessibility"
 *                   priority: "high"
 *                 - product: "Short-Term Treasury Bills"
 *                   description: "Low-risk investment for surplus funds"
 *                   reasoning: "Your conservative risk profile and short-term liquidity requirements make Treasury Bills an ideal choice"
 *                   priority: "medium"
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "422":
 *         $ref: '#/components/responses/UnprocessableEntity'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents/upload:
 *   post:
 *     summary: Upload document with multipart form data
 *     description: Upload a document file using multipart/form-data
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - clientId
 *               - documentTypeId
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The document file to upload
 *               clientId:
 *                 type: string
 *                 description: Client ID
 *               documentTypeId:
 *                 type: string
 *                 description: Document type ID
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
 *                 documentTypeId:
 *                   type: string
 *                 fileName:
 *                   type: string
 *                 fileSize:
 *                   type: integer
 *                 mimeType:
 *                   type: string
 *                 uploadedAt:
 *                   type: string
 *                   format: date-time
 *                 status:
 *                   type: string
 *                 signedUrl:
 *                   type: string
 *                   nullable: true
 *             example:
 *               id: "doc-789"
 *               documentTypeId: "bank_statement"
 *               fileName: "document.pdf"
 *               fileSize: 1048576
 *               mimeType: "application/pdf"
 *               uploadedAt: "2024-10-28T10:00:00Z"
 *               status: "pending"
 *               signedUrl: "https://storage.example.com/signed-url"
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "413":
 *         $ref: '#/components/responses/PayloadTooLarge'
 *       "415":
 *         $ref: '#/components/responses/UnsupportedMediaType'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /documents/client/{clientId}:
 *   get:
 *     summary: Get all documents uploaded by a specific client during onboarding
 *     description: Alternative endpoint to get client documents with simplified response format
 *     tags: [Documents]
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
 *                   documentTypeId:
 *                     type: string
 *                   fileName:
 *                     type: string
 *                   fileSize:
 *                     type: integer
 *                   mimeType:
 *                     type: string
 *                   uploadedAt:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                   rejectionReason:
 *                     type: string
 *                     nullable: true
 *                   signedUrl:
 *                     type: string
 *                     nullable: true
 *             example:
 *               - id: "doc-789"
 *                 documentTypeId: "bank_statement"
 *                 fileName: "statement.pdf"
 *                 fileSize: 1048576
 *                 mimeType: "application/pdf"
 *                 uploadedAt: "2024-10-28T10:00:00Z"
 *                 status: "pending"
 *                 signedUrl: "https://storage.example.com/view-url"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
