import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { submitRiskAssessment, updateOnboardingStep, getOnboardingData } from '@/services/onboarding';
import type { RiskProfile } from '@/types/onboarding';

const riskAssessmentSchema = z.object({
    investmentExperience: z.enum(['none', 'limited', 'good', 'extensive']),
    riskTolerance: z.enum(['conservative', 'moderate', 'aggressive']),
    investmentTimeHorizon: z.enum(['short', 'medium', 'long']),
    liquidityNeeds: z.enum(['low', 'medium', 'high']),
    ageRange: z.enum(['18-30', '31-45', '46-60', '61+']),
    investmentKnowledge: z.enum(['beginner', 'intermediate', 'advanced', 'expert'])
});

type RiskAssessmentFormData = z.infer<typeof riskAssessmentSchema>;

const riskQuestions = [
    {
        id: 'investmentExperience',
        question: 'What is your investment experience?',
        options: [
            { value: 'none', label: 'None - I have never invested before' },
            { value: 'limited', label: 'Limited - Less than 2 years of investing' },
            { value: 'good', label: 'Good - 2-10 years of investing experience' },
            { value: 'extensive', label: 'Extensive - More than 10 years of investing' }
        ]
    },
    {
        id: 'riskTolerance',
        question: 'How comfortable are you with investment risk?',
        options: [
            { value: 'conservative', label: 'Conservative - I prefer stable returns with minimal risk' },
            { value: 'moderate', label: 'Moderate - I accept moderate risk for potentially higher returns' },
            { value: 'aggressive', label: 'Aggressive - I accept high risk for potentially much higher returns' }
        ]
    },
    {
        id: 'investmentTimeHorizon',
        question: 'What is your investment time horizon?',
        options: [
            { value: 'short', label: 'Short term - Less than 3 years' },
            { value: 'medium', label: 'Medium term - 3 to 10 years' },
            { value: 'long', label: 'Long term - More than 10 years' }
        ]
    },
    {
        id: 'liquidityNeeds',
        question: 'How quickly might you need access to your invested money?',
        options: [
            { value: 'low', label: "Low - I don't expect to need this money for many years" },
            { value: 'medium', label: 'Medium - I might need some of this money in 5-10 years' },
            { value: 'high', label: 'High - I might need this money within 2-5 years' }
        ]
    },
    {
        id: 'ageRange',
        question: 'What is your age range?',
        options: [
            { value: '18-30', label: '18-30 years old' },
            { value: '31-45', label: '31-45 years old' },
            { value: '46-60', label: '46-60 years old' },
            { value: '61+', label: '61+ years old' }
        ]
    },
    {
        id: 'investmentKnowledge',
        question: 'How would you rate your investment knowledge?',
        options: [
            { value: 'beginner', label: 'Beginner - I know very little about investing' },
            { value: 'intermediate', label: 'Intermediate - I have basic investment knowledge' },
            { value: 'advanced', label: 'Advanced - I have good investment knowledge' },
            { value: 'expert', label: 'Expert - I have extensive investment knowledge' }
        ]
    }
];

export const RiskAssessmentPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');
    const [calculatedRiskProfile, setCalculatedRiskProfile] = useState<string | null>(null);

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<RiskAssessmentFormData>({
        resolver: zodResolver(riskAssessmentSchema)
    });

    const watchedValues = watch();

    // Load existing data if clientId exists
    const { data: existingData } = useQuery({
        queryKey: ['onboarding', clientId],
        queryFn: () => getOnboardingData(clientId!),
        enabled: !!clientId
    });

    // Populate form with existing data
    useEffect(() => {
        if (existingData?.riskProfile) {
            const { riskProfile } = existingData;
            setValue('investmentExperience', riskProfile.investmentExperience);
            setValue('riskTolerance', riskProfile.riskTolerance);
            setValue('investmentTimeHorizon', riskProfile.investmentTimeHorizon);
            setValue('liquidityNeeds', riskProfile.liquidityNeeds);
            setValue('ageRange', riskProfile.ageRange);
            setValue('investmentKnowledge', riskProfile.investmentKnowledge);
        }
    }, [existingData, setValue]);

    const submitRiskMutation = useMutation({
        mutationFn: (data: RiskProfile) => submitRiskAssessment(clientId!, data)
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    // Calculate risk profile based on answers
    useEffect(() => {
        const calculateRiskProfile = () => {
            if (!watchedValues.investmentExperience || !watchedValues.riskTolerance) return;

            let score = 0;

            // Investment experience scoring
            const experienceScore = {
                none: 0,
                limited: 1,
                good: 2,
                extensive: 3
            };
            score += experienceScore[watchedValues.investmentExperience] || 0;

            // Risk tolerance scoring
            const riskScore = {
                conservative: 0,
                moderate: 2,
                aggressive: 4
            };
            score += riskScore[watchedValues.riskTolerance] || 0;

            // Time horizon scoring
            const timeScore = {
                short: 0,
                medium: 1,
                long: 2
            };
            score += timeScore[watchedValues.investmentTimeHorizon] || 0;

            // Age scoring (younger = higher risk tolerance)
            const ageScore = {
                '18-30': 2,
                '31-45': 1,
                '46-60': 0,
                '61+': -1
            };
            score += ageScore[watchedValues.ageRange] || 0;

            // Knowledge scoring
            const knowledgeScore = {
                beginner: 0,
                intermediate: 1,
                advanced: 2,
                expert: 3
            };
            score += knowledgeScore[watchedValues.investmentKnowledge] || 0;

            // Liquidity needs (inverse scoring - high liquidity needs = lower risk)
            const liquidityScore = {
                high: 0,
                medium: 1,
                low: 2
            };
            score += liquidityScore[watchedValues.liquidityNeeds] || 0;

            // Determine final risk profile
            if (score <= 4) {
                setCalculatedRiskProfile('Conservative');
            } else if (score <= 8) {
                setCalculatedRiskProfile('Moderate');
            } else {
                setCalculatedRiskProfile('Aggressive');
            }
        };

        calculateRiskProfile();
    }, [watchedValues]);

    const onSubmit = async (data: RiskAssessmentFormData) => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            const riskProfile: RiskProfile = {
                investmentExperience: data.investmentExperience,
                riskTolerance: data.riskTolerance,
                investmentTimeHorizon: data.investmentTimeHorizon,
                liquidityNeeds: data.liquidityNeeds,
                ageRange: data.ageRange,
                investmentKnowledge: data.investmentKnowledge
            };

            await submitRiskMutation.mutateAsync(riskProfile);

            await updateStepMutation.mutateAsync({
                clientId,
                step: 2,
                data: { riskProfile }
            });

            navigate(`/onboarding/objectives?clientId=${clientId}`);
        } catch (error) {
            console.error('Error submitting risk assessment:', error);
        }
    };

    const getRiskProfileDescription = (profile: string) => {
        switch (profile) {
            case 'Conservative':
                return 'Based on your answers, you appear to have a conservative risk profile. You prefer stable, predictable returns and are comfortable with lower growth potential in exchange for capital preservation.';
            case 'Moderate':
                return "Based on your answers, you appear to have a moderate risk profile. You're willing to accept some market volatility for the potential of higher returns over time.";
            case 'Aggressive':
                return "Based on your answers, you appear to have an aggressive risk profile. You're comfortable with significant market volatility and willing to accept higher risk for the potential of substantially higher returns.";
            default:
                return '';
        }
    };

    return (
        <FormLayout
            currentStep={2}
            title='Risk Assessment'
            description='Help us understand your investment experience and risk tolerance.'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >
                {riskQuestions.map(question => (
                    <Card key={question.id}>
                        <CardHeader>
                            <CardTitle className='text-lg'>{question.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup
                                onValueChange={value =>
                                    setValue(question.id as keyof RiskAssessmentFormData, value as any)
                                }
                                className='space-y-3'
                            >
                                {question.options.map(option => (
                                    <div
                                        key={option.value}
                                        className='flex items-center space-x-2'
                                    >
                                        <RadioGroupItem
                                            value={option.value}
                                            id={`${question.id}-${option.value}`}
                                        />
                                        <Label
                                            htmlFor={`${question.id}-${option.value}`}
                                            className='flex-1 cursor-pointer'
                                        >
                                            {option.label}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            {errors[question.id as keyof RiskAssessmentFormData] && (
                                <p className='text-red-500 text-sm mt-2'>Please select an option for this question.</p>
                            )}
                        </CardContent>
                    </Card>
                ))}

                {calculatedRiskProfile && (
                    <Alert>
                        <AlertDescription>
                            <div className='space-y-2'>
                                <div className='font-semibold'>Calculated Risk Profile: {calculatedRiskProfile}</div>
                                <div className='text-sm'>{getRiskProfileDescription(calculatedRiskProfile)}</div>
                            </div>
                        </AlertDescription>
                    </Alert>
                )}

                <div className='flex justify-between'>
                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => navigate(`/onboarding/client-info?clientId=${clientId}`)}
                    >
                        Back
                    </Button>
                    <Button
                        type='submit'
                        className='px-8'
                        disabled={submitRiskMutation.isPending || updateStepMutation.isPending}
                    >
                        {submitRiskMutation.isPending || updateStepMutation.isPending
                            ? 'Saving...'
                            : 'Continue to Investment Objectives'}
                    </Button>
                </div>
            </form>
        </FormLayout>
    );
};
