import { complianceService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

const disclosureSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    required: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
});

const complianceAgreementSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    disclosureId: z.string(),
    acknowledged: z.boolean(),
    acknowledgedAt: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string()
});

const getDisclosuresTool: MCPTool = {
    id: 'compliance_get_disclosures',
    name: 'Get Compliance Disclosures',
    description: 'Retrieve all available compliance disclosures that clients need to acknowledge',
    inputSchema: z.object({}),
    outputSchema: z.object({
        disclosures: z.array(disclosureSchema)
    }),
    fn: async () => {
        const disclosures = await complianceService.getDisclosures();
        return {
            disclosures: disclosures.map(disclosure => ({
                ...disclosure,
                createdAt: disclosure.createdAt.toISOString(),
                updatedAt: disclosure.updatedAt.toISOString()
            }))
        };
    }
};

const createComplianceAgreementsTool: MCPTool = {
    id: 'compliance_create_agreements',
    name: 'Create Compliance Agreements',
    description: 'Record client acknowledgment of specific disclosures',
    inputSchema: z.object({
        clientId: z.string().min(1),
        disclosureIds: z.array(z.string()).min(1)
    }),
    outputSchema: z.object({
        agreements: z.array(complianceAgreementSchema)
    }),
    fn: async (inputs: { clientId: string; disclosureIds: string[] }) => {
        const agreements = await complianceService.createComplianceAgreements(inputs.clientId, inputs.disclosureIds);
        return {
            agreements: agreements.map(agreement => ({
                ...agreement,
                acknowledgedAt: agreement.acknowledgedAt?.toISOString() || null,
                createdAt: agreement.createdAt.toISOString(),
                updatedAt: agreement.updatedAt.toISOString()
            }))
        };
    }
};

const checkClientComplianceTool: MCPTool = {
    id: 'compliance_check_client',
    name: 'Check Client Compliance',
    description: 'Verify if a client has acknowledged all required disclosures',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: z.object({
        compliant: z.boolean(),
        missingDisclosures: z.array(z.string())
    }),
    fn: async (inputs: { clientId: string }) => {
        const compliance = await complianceService.checkClientCompliance(inputs.clientId);
        return compliance;
    }
};

const getClientComplianceAgreementsTool: MCPTool = {
    id: 'compliance_get_client_agreements',
    name: 'Get Client Compliance Agreements',
    description: 'Retrieve all compliance agreements for a specific client',
    inputSchema: z.object({
        clientId: z.string().min(1)
    }),
    outputSchema: z.object({
        agreements: z.array(
            z.object({
                ...complianceAgreementSchema.shape,
                disclosure: disclosureSchema
            })
        )
    }),
    fn: async (inputs: { clientId: string }) => {
        const agreements = await complianceService.getClientComplianceAgreements(inputs.clientId);
        return {
            agreements: agreements.map(agreement => ({
                ...agreement,
                acknowledgedAt: agreement.acknowledgedAt?.toISOString() || null,
                createdAt: agreement.createdAt.toISOString(),
                updatedAt: agreement.updatedAt.toISOString(),
                disclosure: {
                    ...(agreement as any).disclosure,
                    createdAt: (agreement as any).disclosure.createdAt.toISOString(),
                    updatedAt: (agreement as any).disclosure.updatedAt.toISOString()
                }
            }))
        };
    }
};

export const complianceTools: MCPTool[] = [
    getDisclosuresTool,
    createComplianceAgreementsTool,
    checkClientComplianceTool,
    getClientComplianceAgreementsTool
];
