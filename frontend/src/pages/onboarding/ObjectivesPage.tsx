import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Plus, Trash2 } from 'lucide-react';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { submitInvestmentObjectives, updateOnboardingStep, getOnboardingData } from '@/services/onboarding';
import type { InvestmentObjective, FinancialGoal } from '@/types/onboarding';

const objectivesSchema = z.object({
    primaryGoal: z.enum(['growth', 'income', 'preservation', 'balanced']),
    specificGoals: z.array(z.string()).min(1, 'At least one specific goal is required'),
    targetAmount: z.number().min(1000, 'Target amount must be at least $1,000').optional(),
    timeHorizon: z.number().min(1, 'Time horizon must be at least 1 year'),
    monthlyContribution: z.number().min(0, 'Monthly contribution cannot be negative').optional(),
    riskComfort: z.number().min(1).max(10),
    financialGoals: z.array(
        z.object({
            type: z.enum(['retirement', 'education', 'home', 'emergency', 'other']),
            targetAmount: z.number().min(1000, 'Target amount must be at least $1,000'),
            timeHorizon: z.number().min(1, 'Time horizon must be at least 1 year'),
            priority: z.enum(['high', 'medium', 'low']),
            description: z.string().optional()
        })
    )
});

type ObjectivesFormData = z.infer<typeof objectivesSchema>;

const goalTypeOptions = [
    { value: 'retirement', label: 'Retirement' },
    { value: 'education', label: 'Education' },
    { value: 'home', label: 'Home Purchase' },
    { value: 'emergency', label: 'Emergency Fund' },
    { value: 'other', label: 'Other' }
];

export const ObjectivesPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<ObjectivesFormData>({
        resolver: zodResolver(objectivesSchema),
        defaultValues: {
            riskComfort: 5,
            specificGoals: [''],
            financialGoals: []
        }
    });

    const watchedRiskComfort = watch('riskComfort');
    const watchedTimeHorizon = watch('timeHorizon');

    // Load existing data if clientId exists
    const { data: existingData } = useQuery({
        queryKey: ['onboarding', clientId],
        queryFn: () => getOnboardingData(clientId!),
        enabled: !!clientId
    });

    // Populate form with existing data
    useEffect(() => {
        if (existingData?.investmentObjectives) {
            const { investmentObjectives } = existingData;
            setValue('primaryGoal', investmentObjectives.primaryGoal);
            setValue('specificGoals', investmentObjectives.specificGoals || ['']);
            setValue('targetAmount', investmentObjectives.targetAmount);
            setValue('timeHorizon', investmentObjectives.timeHorizon);
            setValue('monthlyContribution', investmentObjectives.monthlyContribution);
            setValue('riskComfort', investmentObjectives.riskComfort);
        }
        if (existingData?.financialGoals) {
            setValue(
                'financialGoals',
                existingData.financialGoals.map(goal => ({
                    type: goal.type,
                    targetAmount: goal.targetAmount,
                    timeHorizon: goal.timeHorizon,
                    priority: goal.priority,
                    description: goal.description
                }))
            );
        }
    }, [existingData, setValue]);

    const submitObjectivesMutation = useMutation({
        mutationFn: (data: InvestmentObjective) => submitInvestmentObjectives(clientId!, data)
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    const onSubmit = async (data: ObjectivesFormData) => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            const investmentObjectives: InvestmentObjective = {
                primaryGoal: data.primaryGoal,
                specificGoals: data.specificGoals.filter(goal => goal.trim() !== ''),
                targetAmount: data.targetAmount,
                timeHorizon: data.timeHorizon,
                monthlyContribution: data.monthlyContribution,
                riskComfort: data.riskComfort
            };

            const financialGoals: FinancialGoal[] = data.financialGoals.map((goal, index) => ({
                id: `goal_${index}`,
                ...goal
            }));

            await submitObjectivesMutation.mutateAsync(investmentObjectives);

            await updateStepMutation.mutateAsync({
                clientId,
                step: 3,
                data: {
                    investmentObjectives,
                    financialGoals
                }
            });

            navigate(`/onboarding/account-setup?clientId=${clientId}`);
        } catch (error) {
            console.error('Error submitting investment objectives:', error);
        }
    };

    const getRiskComfortDescription = (value: number) => {
        if (value <= 2) return 'Very Conservative - Prioritize capital preservation';
        if (value <= 4) return 'Conservative - Prefer steady, predictable growth';
        if (value <= 6) return 'Moderate - Balance growth and stability';
        if (value <= 8) return 'Aggressive - Willing to accept volatility for higher returns';
        return 'Very Aggressive - Maximize growth potential';
    };

    const getTimeHorizonDescription = (years: number) => {
        if (years < 5) return 'Short-term - Consider conservative investments';
        if (years < 15) return 'Medium-term - Balanced growth strategy recommended';
        return 'Long-term - Growth-focused strategy may be appropriate';
    };

    return (
        <FormLayout
            currentStep={3}
            title='Investment Objectives'
            description='Define your investment goals and financial objectives.'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >
                {/* Primary Investment Goal */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Primary Investment Goal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup
                            onValueChange={(value: 'growth' | 'income' | 'preservation' | 'balanced') =>
                                setValue('primaryGoal', value)
                            }
                            className='space-y-3'
                        >
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem
                                    value='growth'
                                    id='growth'
                                />
                                <Label
                                    htmlFor='growth'
                                    className='flex-1'
                                >
                                    <div className='font-medium'>Growth</div>
                                    <div className='text-sm text-gray-600'>Maximize long-term capital appreciation</div>
                                </Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem
                                    value='income'
                                    id='income'
                                />
                                <Label
                                    htmlFor='income'
                                    className='flex-1'
                                >
                                    <div className='font-medium'>Income</div>
                                    <div className='text-sm text-gray-600'>
                                        Generate regular income from investments
                                    </div>
                                </Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem
                                    value='preservation'
                                    id='preservation'
                                />
                                <Label
                                    htmlFor='preservation'
                                    className='flex-1'
                                >
                                    <div className='font-medium'>Capital Preservation</div>
                                    <div className='text-sm text-gray-600'>Protect principal with minimal risk</div>
                                </Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem
                                    value='balanced'
                                    id='balanced'
                                />
                                <Label
                                    htmlFor='balanced'
                                    className='flex-1'
                                >
                                    <div className='font-medium'>Balanced</div>
                                    <div className='text-sm text-gray-600'>Combine growth and income objectives</div>
                                </Label>
                            </div>
                        </RadioGroup>
                        {errors.primaryGoal && (
                            <p className='text-red-500 text-sm mt-2'>Please select a primary goal.</p>
                        )}
                    </CardContent>
                </Card>

                {/* Specific Goals */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Specific Investment Goals</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {(watch('specificGoals') || []).map((goal, index) => (
                            <div
                                key={index}
                                className='flex gap-2'
                            >
                                <div className='flex-1'>
                                    <Input
                                        {...register(`specificGoals.${index}`)}
                                        placeholder="e.g., Save for retirement, Buy a home, Children's education"
                                    />
                                </div>
                                {(watch('specificGoals') || []).length > 1 && (
                                    <Button
                                        type='button'
                                        variant='outline'
                                        size='icon'
                                        onClick={() => {
                                            const currentGoals = watch('specificGoals') || [];
                                            setValue(
                                                'specificGoals',
                                                currentGoals.filter((_, i) => i !== index)
                                            );
                                        }}
                                    >
                                        <Trash2 className='h-4 w-4' />
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            type='button'
                            variant='outline'
                            onClick={() => {
                                const currentGoals = watch('specificGoals') || [];
                                setValue('specificGoals', [...currentGoals, '']);
                            }}
                            className='w-full'
                        >
                            <Plus className='h-4 w-4 mr-2' />
                            Add Another Goal
                        </Button>
                        {errors.specificGoals && (
                            <p className='text-red-500 text-sm'>At least one specific goal is required.</p>
                        )}
                    </CardContent>
                </Card>

                {/* Target Amount and Time Horizon */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Investment Timeline & Target</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='targetAmount'>Target Investment Amount ($)</Label>
                                <Input
                                    id='targetAmount'
                                    type='number'
                                    {...register('targetAmount', { valueAsNumber: true })}
                                    placeholder='100000'
                                />
                                {errors.targetAmount && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.targetAmount.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='timeHorizon'>Investment Time Horizon (years) *</Label>
                                <Input
                                    id='timeHorizon'
                                    type='number'
                                    {...register('timeHorizon', { valueAsNumber: true })}
                                    placeholder='10'
                                    className={errors.timeHorizon ? 'border-red-500' : ''}
                                />
                                {watchedTimeHorizon && (
                                    <p className='text-sm text-gray-600 mt-1'>
                                        {getTimeHorizonDescription(watchedTimeHorizon)}
                                    </p>
                                )}
                                {errors.timeHorizon && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.timeHorizon.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor='monthlyContribution'>Expected Monthly Contribution ($)</Label>
                            <Input
                                id='monthlyContribution'
                                type='number'
                                {...register('monthlyContribution', { valueAsNumber: true })}
                                placeholder='1000'
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Risk Comfort Level */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Risk Comfort Level</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div>
                            <Label>
                                How comfortable are you with investment risk? (1 = Very Conservative, 10 = Very
                                Aggressive)
                            </Label>
                            <div className='mt-4 space-y-4'>
                                <Slider
                                    value={[watchedRiskComfort || 5]}
                                    onValueChange={value => setValue('riskComfort', value[0])}
                                    max={10}
                                    min={1}
                                    step={1}
                                    className='w-full'
                                />
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-blue-600'>{watchedRiskComfort || 5}</div>
                                    <div className='text-sm text-gray-600'>
                                        {getRiskComfortDescription(watchedRiskComfort || 5)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Financial Goals */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Specific Financial Goals</CardTitle>
                        <p className='text-sm text-gray-600'>
                            Add specific financial goals with timelines and amounts.
                        </p>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {(watch('financialGoals') || []).map((goal, index) => (
                            <div
                                key={index}
                                className='p-4 border rounded-lg space-y-4'
                            >
                                <div className='flex justify-between items-center'>
                                    <h4 className='font-medium'>Goal {index + 1}</h4>
                                    <Button
                                        type='button'
                                        variant='outline'
                                        size='sm'
                                        onClick={() => {
                                            const currentGoals = watch('financialGoals') || [];
                                            setValue(
                                                'financialGoals',
                                                currentGoals.filter((_, i) => i !== index)
                                            );
                                        }}
                                    >
                                        <Trash2 className='h-4 w-4' />
                                    </Button>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <Label>Goal Type *</Label>
                                        <Select
                                            onValueChange={(
                                                value: 'retirement' | 'education' | 'home' | 'emergency' | 'other'
                                            ) => setValue(`financialGoals.${index}.type`, value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select goal type' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {goalTypeOptions.map(option => (
                                                    <SelectItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Priority *</Label>
                                        <Select
                                            onValueChange={(value: 'high' | 'medium' | 'low') =>
                                                setValue(`financialGoals.${index}.priority`, value)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select priority' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='high'>High</SelectItem>
                                                <SelectItem value='medium'>Medium</SelectItem>
                                                <SelectItem value='low'>Low</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <Label>Target Amount ($) *</Label>
                                        <Input
                                            type='number'
                                            {...register(`financialGoals.${index}.targetAmount`, {
                                                valueAsNumber: true
                                            })}
                                            placeholder='50000'
                                        />
                                    </div>
                                    <div>
                                        <Label>Time Horizon (years) *</Label>
                                        <Input
                                            type='number'
                                            {...register(`financialGoals.${index}.timeHorizon`, {
                                                valueAsNumber: true
                                            })}
                                            placeholder='5'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label>Description</Label>
                                    <Textarea
                                        {...register(`financialGoals.${index}.description`)}
                                        placeholder='Describe this goal in more detail...'
                                        rows={2}
                                    />
                                </div>
                            </div>
                        ))}
                        <Button
                            type='button'
                            variant='outline'
                            onClick={() => {
                                const currentGoals = watch('financialGoals') || [];
                                setValue('financialGoals', [
                                    ...currentGoals,
                                    {
                                        type: 'retirement' as const,
                                        targetAmount: 0,
                                        timeHorizon: 1,
                                        priority: 'medium' as const
                                    }
                                ]);
                            }}
                            className='w-full'
                        >
                            <Plus className='h-4 w-4 mr-2' />
                            Add Financial Goal
                        </Button>
                    </CardContent>
                </Card>

                <div className='flex justify-between'>
                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => navigate(`/onboarding/risk-assessment?clientId=${clientId}`)}
                    >
                        Back
                    </Button>
                    <Button
                        type='submit'
                        className='px-8'
                        disabled={submitObjectivesMutation.isPending || updateStepMutation.isPending}
                    >
                        {submitObjectivesMutation.isPending || updateStepMutation.isPending
                            ? 'Saving...'
                            : 'Continue to Account Setup'}
                    </Button>
                </div>
            </form>
        </FormLayout>
    );
};
