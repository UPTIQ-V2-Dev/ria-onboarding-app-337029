import { complianceService } from '../services/index.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import httpStatus from 'http-status';

const getDisclosures = catchAsyncWithAuth(async (req, res) => {
    const disclosures = await complianceService.getDisclosures();
    res.send(disclosures);
});

const createComplianceAgreements = catchAsyncWithAuth(async (req, res) => {
    const { clientId, disclosureIds } = req.body;
    const agreements = await complianceService.createComplianceAgreements(clientId, disclosureIds);
    res.status(httpStatus.CREATED).send({ agreements });
});

const getClientCompliance = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;
    const compliance = await complianceService.checkClientCompliance(clientId);
    res.send(compliance);
});

const getClientComplianceAgreements = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;
    const agreements = await complianceService.getClientComplianceAgreements(clientId);
    res.send(agreements);
});

export default {
    getDisclosures,
    createComplianceAgreements,
    getClientCompliance,
    getClientComplianceAgreements
};
