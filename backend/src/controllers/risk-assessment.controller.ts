import { riskAssessmentService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const createRiskAssessment = catchAsyncWithAuth(async (req, res) => {
    const {
        clientId,
        investmentExperience,
        riskTolerance,
        investmentTimeHorizon,
        liquidityNeeds,
        ageRange,
        investmentKnowledge
    } = req.body;

    const riskAssessment = await riskAssessmentService.createRiskAssessment(clientId, {
        investmentExperience,
        riskTolerance,
        investmentTimeHorizon,
        liquidityNeeds,
        ageRange,
        investmentKnowledge
    });

    res.status(httpStatus.CREATED).send(riskAssessment);
});

const getRiskAssessment = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;

    const riskAssessment = await riskAssessmentService.getRiskAssessmentByClientId(clientId);

    if (!riskAssessment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Risk assessment not found');
    }

    res.send(riskAssessment);
});

const updateRiskAssessment = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;
    const updateData = pick(req.body, [
        'investmentExperience',
        'riskTolerance',
        'investmentTimeHorizon',
        'liquidityNeeds',
        'ageRange',
        'investmentKnowledge'
    ]);

    const riskAssessment = await riskAssessmentService.updateRiskAssessmentByClientId(clientId, updateData);

    res.send(riskAssessment);
});

const deleteRiskAssessment = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;

    await riskAssessmentService.deleteRiskAssessmentByClientId(clientId);

    res.status(httpStatus.NO_CONTENT).send();
});

const getRiskProfiles = catchAsyncWithAuth((req, res) => {
    const profiles = riskAssessmentService.getRiskProfiles();
    res.send(profiles);
});

export default {
    createRiskAssessment,
    getRiskAssessment,
    updateRiskAssessment,
    deleteRiskAssessment,
    getRiskProfiles
};
