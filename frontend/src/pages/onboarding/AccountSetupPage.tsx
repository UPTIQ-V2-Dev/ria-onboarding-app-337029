import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Plus, Trash2, DollarSign } from 'lucide-react';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAccountTypes, createAccounts, updateOnboardingStep, getOnboardingData } from '@/services/onboarding';

const accountSetupSchema = z.object({
    selectedAccountTypes: z.array(z.string()).min(1, 'At least one account type must be selected'),
    fundingMethods: z
        .array(
            z.object({
                type: z.enum(['bank_transfer', 'check', 'wire', 'rollover', 'transfer']),
                amount: z.number().min(100, 'Minimum funding amount is $100'),
                accountInfo: z
                    .object({
                        bankName: z.string().min(1, 'Bank name is required'),
                        accountNumber: z.string().min(1, 'Account number is required'),
                        routingNumber: z.string().min(9, 'Routing number must be 9 digits'),
                        accountType: z.enum(['checking', 'savings'])
                    })
                    .optional()
            })
        )
        .min(1, 'At least one funding method is required')
});

type AccountSetupFormData = z.infer<typeof accountSetupSchema>;

const fundingTypeOptions = [
    { value: 'bank_transfer', label: 'Bank Transfer (ACH)', requiresAccount: true },
    { value: 'check', label: 'Check', requiresAccount: false },
    { value: 'wire', label: 'Wire Transfer', requiresAccount: true },
    { value: 'rollover', label: '401(k)/IRA Rollover', requiresAccount: false },
    { value: 'transfer', label: 'Account Transfer', requiresAccount: false }
];

export const AccountSetupPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        control
    } = useForm<AccountSetupFormData>({
        resolver: zodResolver(accountSetupSchema),
        defaultValues: {
            selectedAccountTypes: [],
            fundingMethods: []
        }
    });

    const {
        fields: fundingFields,
        append: addFundingMethod,
        remove: removeFundingMethod
    } = useFieldArray({
        control,
        name: 'fundingMethods'
    });

    const watchedSelectedAccounts = watch('selectedAccountTypes');
    const watchedFundingMethods = watch('fundingMethods');

    // Load account types
    const { data: accountTypes = [] } = useQuery({
        queryKey: ['accountTypes'],
        queryFn: getAccountTypes
    });

    // Load existing data if clientId exists
    const { data: existingData } = useQuery({
        queryKey: ['onboarding', clientId],
        queryFn: () => getOnboardingData(clientId!),
        enabled: !!clientId
    });

    // Populate form with existing data
    useEffect(() => {
        if (existingData) {
            setValue('selectedAccountTypes', existingData.selectedAccountTypes || []);
            setValue('fundingMethods', existingData.fundingMethods || []);
        }
    }, [existingData, setValue]);

    const createAccountsMutation = useMutation({
        mutationFn: ({ clientId, accountTypeIds }: { clientId: string; accountTypeIds: string[] }) =>
            createAccounts(clientId, accountTypeIds)
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    const handleAccountTypeToggle = (accountTypeId: string, checked: boolean) => {
        const currentTypes = watchedSelectedAccounts || [];
        if (checked) {
            setValue('selectedAccountTypes', [...currentTypes, accountTypeId]);
        } else {
            setValue(
                'selectedAccountTypes',
                currentTypes.filter(id => id !== accountTypeId)
            );
        }
    };

    const getFundingMethodRequiresAccount = (type: string) => {
        const option = fundingTypeOptions.find(opt => opt.value === type);
        return option?.requiresAccount || false;
    };

    const getTotalFunding = () => {
        return watchedFundingMethods?.reduce((sum, method) => sum + (method.amount || 0), 0) || 0;
    };

    const getSelectedAccountsInfo = () => {
        return accountTypes.filter(account => watchedSelectedAccounts?.includes(account.id));
    };

    const onSubmit = async (data: AccountSetupFormData) => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            // Create accounts
            await createAccountsMutation.mutateAsync({
                clientId,
                accountTypeIds: data.selectedAccountTypes
            });

            // Update onboarding step
            await updateStepMutation.mutateAsync({
                clientId,
                step: 4,
                data: {
                    selectedAccountTypes: data.selectedAccountTypes,
                    fundingMethods: data.fundingMethods
                }
            });

            navigate(`/onboarding/documents?clientId=${clientId}`);
        } catch (error) {
            console.error('Error setting up accounts:', error);
        }
    };

    return (
        <FormLayout
            currentStep={4}
            title='Account Setup'
            description='Select account types and configure funding methods.'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >
                {/* Account Type Selection */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Select Account Types</CardTitle>
                        <p className='text-sm text-gray-600'>
                            Choose the types of investment accounts you'd like to open.
                        </p>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {accountTypes.map(accountType => (
                            <div
                                key={accountType.id}
                                className='border rounded-lg p-4'
                            >
                                <div className='flex items-start space-x-3'>
                                    <Checkbox
                                        id={accountType.id}
                                        checked={watchedSelectedAccounts?.includes(accountType.id) || false}
                                        onCheckedChange={checked =>
                                            handleAccountTypeToggle(accountType.id, checked as boolean)
                                        }
                                        className='mt-1'
                                    />
                                    <div className='flex-1'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Label
                                                htmlFor={accountType.id}
                                                className='text-base font-medium cursor-pointer'
                                            >
                                                {accountType.name}
                                            </Label>
                                            {accountType.taxAdvantaged && (
                                                <Badge variant='secondary'>Tax Advantaged</Badge>
                                            )}
                                        </div>
                                        <p className='text-sm text-gray-600 mb-2'>{accountType.description}</p>
                                        <div className='text-sm space-y-1'>
                                            <div>Minimum Balance: ${accountType.minimumBalance.toLocaleString()}</div>
                                            <div>Annual Fee: ${accountType.fees.annual}</div>
                                            <div>Transaction Fee: ${accountType.fees.transaction}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {errors.selectedAccountTypes && (
                            <p className='text-red-500 text-sm'>{errors.selectedAccountTypes.message}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Selected Accounts Summary */}
                {watchedSelectedAccounts && watchedSelectedAccounts.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Selected Accounts Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-2'>
                                {getSelectedAccountsInfo().map(account => (
                                    <div
                                        key={account.id}
                                        className='flex justify-between items-center py-2 border-b last:border-b-0'
                                    >
                                        <div>
                                            <div className='font-medium'>{account.name}</div>
                                            <div className='text-sm text-gray-600'>
                                                Min. Balance: ${account.minimumBalance.toLocaleString()}
                                            </div>
                                        </div>
                                        <Badge variant={account.taxAdvantaged ? 'default' : 'secondary'}>
                                            {account.taxAdvantaged ? 'Tax Advantaged' : 'Taxable'}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Funding Methods */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Funding Methods</CardTitle>
                        <p className='text-sm text-gray-600'>How will you fund your investment accounts?</p>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {fundingFields.map((field, index) => (
                            <div
                                key={field.id}
                                className='p-4 border rounded-lg space-y-4'
                            >
                                <div className='flex justify-between items-center'>
                                    <h4 className='font-medium'>Funding Method {index + 1}</h4>
                                    <Button
                                        type='button'
                                        variant='outline'
                                        size='sm'
                                        onClick={() => removeFundingMethod(index)}
                                    >
                                        <Trash2 className='h-4 w-4' />
                                    </Button>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <Label>Funding Type *</Label>
                                        <Select
                                            onValueChange={value =>
                                                setValue(`fundingMethods.${index}.type`, value as any)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select funding type' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {fundingTypeOptions.map(option => (
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
                                        <Label>Amount ($) *</Label>
                                        <div className='relative'>
                                            <DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                                            <Input
                                                type='number'
                                                {...register(`fundingMethods.${index}.amount`, { valueAsNumber: true })}
                                                className='pl-10'
                                                placeholder='10000'
                                            />
                                        </div>
                                        {errors.fundingMethods?.[index]?.amount && (
                                            <p className='text-red-500 text-sm mt-1'>
                                                {errors.fundingMethods[index]?.amount?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Bank Account Information */}
                                {watchedFundingMethods?.[index]?.type &&
                                    getFundingMethodRequiresAccount(watchedFundingMethods[index].type) && (
                                        <div className='space-y-4 p-4 bg-gray-50 rounded-lg'>
                                            <h5 className='font-medium'>Bank Account Information</h5>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div>
                                                    <Label>Bank Name *</Label>
                                                    <Input
                                                        {...register(`fundingMethods.${index}.accountInfo.bankName`)}
                                                        placeholder='Bank of America'
                                                    />
                                                    {errors.fundingMethods?.[index]?.accountInfo?.bankName && (
                                                        <p className='text-red-500 text-sm mt-1'>
                                                            Bank name is required
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <Label>Account Type *</Label>
                                                    <Select
                                                        onValueChange={value =>
                                                            setValue(
                                                                `fundingMethods.${index}.accountInfo.accountType`,
                                                                value as 'checking' | 'savings'
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder='Select account type' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value='checking'>Checking</SelectItem>
                                                            <SelectItem value='savings'>Savings</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div>
                                                    <Label>Account Number *</Label>
                                                    <Input
                                                        {...register(
                                                            `fundingMethods.${index}.accountInfo.accountNumber`
                                                        )}
                                                        placeholder='1234567890'
                                                    />
                                                    {errors.fundingMethods?.[index]?.accountInfo?.accountNumber && (
                                                        <p className='text-red-500 text-sm mt-1'>
                                                            Account number is required
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <Label>Routing Number *</Label>
                                                    <Input
                                                        {...register(
                                                            `fundingMethods.${index}.accountInfo.routingNumber`
                                                        )}
                                                        placeholder='123456789'
                                                        maxLength={9}
                                                    />
                                                    {errors.fundingMethods?.[index]?.accountInfo?.routingNumber && (
                                                        <p className='text-red-500 text-sm mt-1'>
                                                            {
                                                                errors.fundingMethods[index]?.accountInfo?.routingNumber
                                                                    ?.message
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        ))}

                        <Button
                            type='button'
                            variant='outline'
                            onClick={() =>
                                addFundingMethod({
                                    type: 'bank_transfer',
                                    amount: 0
                                })
                            }
                            className='w-full'
                        >
                            <Plus className='h-4 w-4 mr-2' />
                            Add Funding Method
                        </Button>

                        {errors.fundingMethods && (
                            <p className='text-red-500 text-sm'>{errors.fundingMethods.message}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Funding Summary */}
                {fundingFields.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Funding Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-2'>
                                {watchedFundingMethods?.map((method, index) => (
                                    <div
                                        key={index}
                                        className='flex justify-between items-center py-2 border-b last:border-b-0'
                                    >
                                        <div>
                                            <div className='font-medium'>
                                                {fundingTypeOptions.find(opt => opt.value === method.type)?.label}
                                            </div>
                                        </div>
                                        <div className='font-medium'>${(method.amount || 0).toLocaleString()}</div>
                                    </div>
                                ))}
                                <div className='flex justify-between items-center pt-2 font-bold text-lg border-t'>
                                    <div>Total Initial Funding:</div>
                                    <div>${getTotalFunding().toLocaleString()}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className='flex justify-between'>
                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => navigate(`/onboarding/objectives?clientId=${clientId}`)}
                    >
                        Back
                    </Button>
                    <Button
                        type='submit'
                        className='px-8'
                        disabled={createAccountsMutation.isPending || updateStepMutation.isPending}
                    >
                        {createAccountsMutation.isPending || updateStepMutation.isPending
                            ? 'Setting up accounts...'
                            : 'Continue to Documents'}
                    </Button>
                </div>
            </form>
        </FormLayout>
    );
};
