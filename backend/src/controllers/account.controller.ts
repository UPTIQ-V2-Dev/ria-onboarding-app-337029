import { accountService } from '../services/index.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import httpStatus from 'http-status';

const getAccountTypes = catchAsyncWithAuth(async (req, res) => {
    const accountTypes = await accountService.getAccountTypes();

    // Transform the response to match the API specification format
    const formattedAccountTypes = accountTypes.map(accountType => ({
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

    res.send(formattedAccountTypes);
});

const createAccounts = catchAsyncWithAuth(async (req, res) => {
    const { clientId, accountTypeIds } = req.body;
    const result = await accountService.createAccountsForClient(clientId, accountTypeIds);
    res.status(httpStatus.CREATED).send(result);
});

export default {
    getAccountTypes,
    createAccounts
};
