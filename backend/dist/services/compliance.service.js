import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Get all disclosures
 * @returns {Promise<Disclosure[]>}
 */
const getDisclosures = async () => {
    return await prisma.disclosure.findMany({
        orderBy: { createdAt: 'asc' }
    });
};
/**
 * Get disclosure by ID
 * @param {string} disclosureId
 * @returns {Promise<Disclosure | null>}
 */
const getDisclosureById = async (disclosureId) => {
    return await prisma.disclosure.findUnique({
        where: { id: disclosureId }
    });
};
/**
 * Create compliance agreements for a client
 * @param {string} clientId
 * @param {string[]} disclosureIds
 * @returns {Promise<ComplianceAgreement[]>}
 */
const createComplianceAgreements = async (clientId, disclosureIds) => {
    // First, verify that the client exists
    const client = await prisma.client.findUnique({
        where: { id: clientId }
    });
    if (!client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client or disclosure not found');
    }
    // Verify all disclosures exist
    const disclosures = await prisma.disclosure.findMany({
        where: {
            id: { in: disclosureIds }
        }
    });
    if (disclosures.length !== disclosureIds.length) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid disclosure IDs');
    }
    // Create compliance agreements
    const agreements = [];
    const now = new Date();
    for (const disclosureId of disclosureIds) {
        try {
            const agreement = await prisma.complianceAgreement.upsert({
                where: {
                    clientId_disclosureId: {
                        clientId,
                        disclosureId
                    }
                },
                update: {
                    acknowledged: true,
                    acknowledgedAt: now,
                    updatedAt: now
                },
                create: {
                    clientId,
                    disclosureId,
                    acknowledged: true,
                    acknowledgedAt: now
                }
            });
            agreements.push(agreement);
        }
        catch (error) {
            // Continue processing other agreements even if one fails
            console.error(`Failed to create agreement for disclosure ${disclosureId}:`, error);
        }
    }
    if (agreements.length === 0) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create compliance agreements');
    }
    return agreements;
};
/**
 * Get compliance agreements for a client
 * @param {string} clientId
 * @returns {Promise<ComplianceAgreement[]>}
 */
const getClientComplianceAgreements = async (clientId) => {
    return await prisma.complianceAgreement.findMany({
        where: { clientId },
        include: {
            disclosure: true
        },
        orderBy: { createdAt: 'desc' }
    });
};
/**
 * Check if a client has acknowledged all required disclosures
 * @param {string} clientId
 * @returns {Promise<{ compliant: boolean; missingDisclosures: string[] }>}
 */
const checkClientCompliance = async (clientId) => {
    // Get all required disclosures
    const requiredDisclosures = await prisma.disclosure.findMany({
        where: { required: true },
        select: { id: true, title: true }
    });
    // Get client's acknowledged disclosures
    const acknowledgedAgreements = await prisma.complianceAgreement.findMany({
        where: {
            clientId,
            acknowledged: true
        },
        select: { disclosureId: true }
    });
    const acknowledgedDisclosureIds = acknowledgedAgreements.map(agreement => agreement.disclosureId);
    const missingDisclosures = [];
    for (const disclosure of requiredDisclosures) {
        if (!acknowledgedDisclosureIds.includes(disclosure.id)) {
            missingDisclosures.push(disclosure.title);
        }
    }
    return {
        compliant: missingDisclosures.length === 0,
        missingDisclosures
    };
};
export default {
    getDisclosures,
    getDisclosureById,
    createComplianceAgreements,
    getClientComplianceAgreements,
    checkClientCompliance
};
