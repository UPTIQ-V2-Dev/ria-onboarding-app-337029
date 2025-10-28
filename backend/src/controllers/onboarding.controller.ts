import { onboardingService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import httpStatus from 'http-status';

const createOnboarding = catchAsyncWithAuth(async (req, res) => {
    const { clientId, personalInfo, contactInfo, employmentInfo } = req.body;

    const onboardingData = await onboardingService.createOnboardingData({
        clientId,
        personalInfo,
        contactInfo,
        employmentInfo
    });

    // Return minimal response as per API spec
    const response = {
        clientId: onboardingData.clientId,
        status: onboardingData.status,
        currentStep: onboardingData.currentStep,
        totalSteps: onboardingData.totalSteps,
        createdAt: onboardingData.createdAt.toISOString()
    };

    res.status(httpStatus.CREATED).send(response);
});

const getOnboarding = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;

    const onboardingData = await onboardingService.getOnboardingDataByClientId(clientId);

    if (!onboardingData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Onboarding data not found');
    }

    // Format response according to API spec
    const response = {
        clientId: onboardingData.clientId,
        personalInfo: onboardingData.personalInfo,
        contactInfo: onboardingData.contactInfo,
        employmentInfo: onboardingData.employmentInfo,
        riskProfile: onboardingData.riskProfile,
        investmentObjectives: onboardingData.investmentObjectives,
        financialGoals: onboardingData.financialGoals,
        selectedAccountTypes: onboardingData.selectedAccountTypes,
        fundingMethods: onboardingData.fundingMethods,
        uploadedDocuments: onboardingData.uploadedDocuments,
        disclosures: onboardingData.disclosures,
        complianceRecords: onboardingData.complianceRecords,
        status: onboardingData.status,
        currentStep: onboardingData.currentStep,
        totalSteps: onboardingData.totalSteps,
        submittedAt: onboardingData.submittedAt?.toISOString(),
        reviewedAt: onboardingData.reviewedAt?.toISOString()
    };

    res.send(response);
});

const updateOnboardingStep = catchAsyncWithAuth(async (req, res) => {
    const { clientId, stepNumber } = req.params;
    const stepData = req.body;

    const updatedOnboardingData = await onboardingService.updateOnboardingStep(
        clientId,
        parseInt(stepNumber),
        stepData
    );

    // Format response according to API spec
    const response = {
        clientId: updatedOnboardingData.clientId,
        personalInfo: updatedOnboardingData.personalInfo,
        contactInfo: updatedOnboardingData.contactInfo,
        employmentInfo: updatedOnboardingData.employmentInfo,
        riskProfile: updatedOnboardingData.riskProfile,
        investmentObjectives: updatedOnboardingData.investmentObjectives,
        financialGoals: updatedOnboardingData.financialGoals,
        selectedAccountTypes: updatedOnboardingData.selectedAccountTypes,
        fundingMethods: updatedOnboardingData.fundingMethods,
        uploadedDocuments: updatedOnboardingData.uploadedDocuments,
        disclosures: updatedOnboardingData.disclosures,
        complianceRecords: updatedOnboardingData.complianceRecords,
        status: updatedOnboardingData.status,
        currentStep: updatedOnboardingData.currentStep,
        totalSteps: updatedOnboardingData.totalSteps,
        submittedAt: updatedOnboardingData.submittedAt?.toISOString(),
        reviewedAt: updatedOnboardingData.reviewedAt?.toISOString()
    };

    res.send(response);
});

const getOnboardingSummary = catchAsyncWithAuth(async (req, res) => {
    const { clientId } = req.params;

    const summary = await onboardingService.getOnboardingSummary(clientId);

    res.send(summary);
});

const submitOnboarding = catchAsyncWithAuth(async (req, res) => {
    const { clientId, finalReview, electronicallySign, signatureDate } = req.body;

    const result = await onboardingService.submitOnboarding({
        clientId,
        finalReview,
        electronicallySign,
        signatureDate
    });

    res.send(result);
});

export default {
    createOnboarding,
    getOnboarding,
    updateOnboardingStep,
    getOnboardingSummary,
    submitOnboarding
};
