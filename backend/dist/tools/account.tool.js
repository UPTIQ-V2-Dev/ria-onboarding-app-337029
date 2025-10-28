import { accountService } from "../services/index.js";
import { z } from 'zod';
const accountTypeSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    taxAdvantaged: z.boolean(),
    minimumBalance: z.number(),
    fees: z.object({
        annual: z.number(),
        transaction: z.number()
    })
});
const getAccountTypesTool = {
    id: 'account_types_list',
    name: 'Get Account Types',
    description: 'Retrieve all available account types for client selection',
    inputSchema: z.object({}), // No input parameters needed
    outputSchema: z.object({
        results: z.array(accountTypeSchema)
    }),
    fn: async () => {
        const accountTypes = await accountService.getAccountTypes();
        // Transform the response to match the API specification format
        const results = accountTypes.map(accountType => ({
            id: accountType.id,
            name: accountType.name,
            description: accountType.description,
            taxAdvantaged: accountType.taxAdvantaged,
            minimumBalance: accountType.minimumBalance,
            fees: {
                annual: accountType.annualFee,
                transaction: accountType.transactionFee
            }
        }));
        return { results };
    }
};
const createAccountsTool = {
    id: 'account_create_for_client',
    name: 'Create Accounts for Client',
    description: 'Create accounts for a client based on selected account types',
    inputSchema: z.object({
        clientId: z.string().min(1),
        accountTypeIds: z.array(z.string()).min(1)
    }),
    outputSchema: z.object({
        accountIds: z.array(z.string())
    }),
    fn: async (inputs) => {
        const result = await accountService.createAccountsForClient(inputs.clientId, inputs.accountTypeIds);
        return result;
    }
};
const getAccountTypeByIdTool = {
    id: 'account_type_get_by_id',
    name: 'Get Account Type By ID',
    description: 'Get details of a specific account type by its ID',
    inputSchema: z.object({
        accountTypeId: z.string().min(1)
    }),
    outputSchema: accountTypeSchema,
    fn: async (inputs) => {
        const accountType = await accountService.getAccountTypeById(inputs.accountTypeId);
        if (!accountType) {
            throw new Error('Account type not found');
        }
        return {
            id: accountType.id,
            name: accountType.name,
            description: accountType.description,
            taxAdvantaged: accountType.taxAdvantaged,
            minimumBalance: accountType.minimumBalance,
            fees: {
                annual: accountType.annualFee,
                transaction: accountType.transactionFee
            }
        };
    }
};
export const accountTools = [getAccountTypesTool, createAccountsTool, getAccountTypeByIdTool];
