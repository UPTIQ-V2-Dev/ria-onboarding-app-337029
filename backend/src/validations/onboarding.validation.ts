import Joi from 'joi';

const createOnboarding = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        personalInfo: Joi.object()
            .keys({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                email: Joi.string().email().required(),
                phone: Joi.string().required(),
                dateOfBirth: Joi.string().isoDate().required(),
                socialSecurityNumber: Joi.string().required(),
                address: Joi.object()
                    .keys({
                        street: Joi.string().required(),
                        city: Joi.string().required(),
                        state: Joi.string().required(),
                        zipCode: Joi.string().required(),
                        country: Joi.string().required()
                    })
                    .required()
            })
            .required(),
        contactInfo: Joi.object()
            .keys({
                preferredContactMethod: Joi.string().valid('email', 'phone', 'mail').required(),
                emergencyContact: Joi.object()
                    .keys({
                        name: Joi.string().required(),
                        relationship: Joi.string().required(),
                        phone: Joi.string().required(),
                        email: Joi.string().email().required()
                    })
                    .required()
            })
            .optional(),
        employmentInfo: Joi.object()
            .keys({
                employmentStatus: Joi.string()
                    .valid('employed', 'unemployed', 'retired', 'self_employed', 'student')
                    .required(),
                employer: Joi.string().optional(),
                jobTitle: Joi.string().optional(),
                industry: Joi.string().optional(),
                annualIncome: Joi.number().integer().min(0).required(),
                netWorth: Joi.number().integer().min(0).required(),
                liquidNetWorth: Joi.number().integer().min(0).required()
            })
            .optional()
    })
};

const getOnboarding = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};

const updateOnboardingStep = {
    params: Joi.object().keys({
        clientId: Joi.string().required(),
        stepNumber: Joi.number().integer().min(1).max(7).required()
    }),
    body: Joi.object()
        .keys({
            // Step 1: Personal Info
            personalInfo: Joi.object()
                .keys({
                    firstName: Joi.string(),
                    lastName: Joi.string(),
                    email: Joi.string().email(),
                    phone: Joi.string(),
                    dateOfBirth: Joi.string().isoDate(),
                    socialSecurityNumber: Joi.string(),
                    address: Joi.object().keys({
                        street: Joi.string(),
                        city: Joi.string(),
                        state: Joi.string(),
                        zipCode: Joi.string(),
                        country: Joi.string()
                    })
                })
                .optional(),

            // Step 2: Risk Profile
            riskProfile: Joi.object()
                .keys({
                    investmentExperience: Joi.string().valid('none', 'limited', 'good', 'extensive'),
                    riskTolerance: Joi.string().valid('conservative', 'moderate', 'aggressive'),
                    investmentTimeHorizon: Joi.string().valid('short', 'medium', 'long'),
                    liquidityNeeds: Joi.string().valid('high', 'medium', 'low'),
                    ageRange: Joi.string().valid('18-30', '31-45', '46-60', '60+'),
                    investmentKnowledge: Joi.string().valid('beginner', 'intermediate', 'advanced')
                })
                .optional(),

            // Step 3: Investment Objectives
            investmentObjectives: Joi.object()
                .keys({
                    primaryGoal: Joi.string().valid('growth', 'income', 'preservation', 'speculation'),
                    specificGoals: Joi.array().items(Joi.string()),
                    targetAmount: Joi.number().min(0).optional(),
                    timeHorizon: Joi.number().integer().min(1),
                    monthlyContribution: Joi.number().min(0).optional(),
                    riskComfort: Joi.number().integer().min(1).max(10)
                })
                .optional(),

            // Step 4: Financial Goals
            financialGoals: Joi.array()
                .items(
                    Joi.object().keys({
                        goal: Joi.string().required(),
                        amount: Joi.number().min(0).required(),
                        timeframe: Joi.number().integer().min(1).required(),
                        priority: Joi.string().valid('high', 'medium', 'low').required()
                    })
                )
                .optional(),

            // Step 5: Account Types
            selectedAccountTypes: Joi.array().items(Joi.string()).optional(),

            // Step 6: Funding Methods
            fundingMethods: Joi.array()
                .items(
                    Joi.object().keys({
                        method: Joi.string().valid('bank_transfer', 'wire', 'check', 'rollover').required(),
                        amount: Joi.number().min(0).required(),
                        accountInfo: Joi.object().optional()
                    })
                )
                .optional(),

            // Step 7: Documents & Compliance
            uploadedDocuments: Joi.array()
                .items(
                    Joi.object().keys({
                        documentId: Joi.string().required(),
                        documentType: Joi.string().required(),
                        status: Joi.string().valid('uploaded', 'pending', 'approved', 'rejected').required()
                    })
                )
                .optional(),

            disclosures: Joi.array()
                .items(
                    Joi.object().keys({
                        disclosureId: Joi.string().required(),
                        acknowledged: Joi.boolean().required(),
                        acknowledgedAt: Joi.string().isoDate().required()
                    })
                )
                .optional(),

            complianceRecords: Joi.array()
                .items(
                    Joi.object().keys({
                        type: Joi.string().required(),
                        acknowledged: Joi.boolean().required(),
                        acknowledgedAt: Joi.string().isoDate().optional()
                    })
                )
                .optional()
        })
        .min(1)
};

const getOnboardingSummary = {
    params: Joi.object().keys({
        clientId: Joi.string().required()
    })
};

const submitOnboarding = {
    body: Joi.object().keys({
        clientId: Joi.string().required(),
        finalReview: Joi.boolean().required(),
        electronicallySign: Joi.boolean().required(),
        signatureDate: Joi.string().isoDate().required()
    })
};

export default {
    createOnboarding,
    getOnboarding,
    updateOnboardingStep,
    getOnboardingSummary,
    submitOnboarding
};
