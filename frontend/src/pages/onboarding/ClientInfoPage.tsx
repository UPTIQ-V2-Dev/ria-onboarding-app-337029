import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient, updateOnboardingStep, getOnboardingData } from '@/services/onboarding';
import type { ClientPersonalInfo, ContactInfo, EmploymentInfo } from '@/types/onboarding';

const clientInfoSchema = z.object({
    // Personal Information
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    socialSecurityNumber: z.string().min(9, 'Social Security Number is required'),

    // Address
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zipCode: z.string().min(5, 'ZIP code is required'),
    country: z.string().min(1, 'Country is required'),

    // Contact Information
    preferredContactMethod: z.enum(['email', 'phone', 'mail']),
    emergencyContactName: z.string().min(1, 'Emergency contact name is required'),
    emergencyContactRelationship: z.string().min(1, 'Relationship is required'),
    emergencyContactPhone: z.string().min(10, 'Emergency contact phone is required'),
    emergencyContactEmail: z.string().email('Invalid email address'),

    // Employment Information
    employmentStatus: z.enum(['employed', 'unemployed', 'retired', 'self_employed', 'student']),
    employer: z.string().optional(),
    jobTitle: z.string().optional(),
    industry: z.string().optional(),
    annualIncome: z.number().min(0, 'Annual income must be positive'),
    netWorth: z.number().min(0, 'Net worth must be positive'),
    liquidNetWorth: z.number().min(0, 'Liquid net worth must be positive')
});

type ClientInfoFormData = z.infer<typeof clientInfoSchema>;

export const ClientInfoPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');
    const [isNewClient] = useState(!clientId);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<ClientInfoFormData>({
        resolver: zodResolver(clientInfoSchema),
        defaultValues: {
            country: 'USA',
            preferredContactMethod: 'email'
        }
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
            const { personalInfo, contactInfo, employmentInfo } = existingData;
            setValue('firstName', personalInfo.firstName);
            setValue('lastName', personalInfo.lastName);
            setValue('email', personalInfo.email);
            setValue('phone', personalInfo.phone);
            setValue('dateOfBirth', personalInfo.dateOfBirth);
            setValue('socialSecurityNumber', personalInfo.socialSecurityNumber);
            setValue('street', personalInfo.address.street);
            setValue('city', personalInfo.address.city);
            setValue('state', personalInfo.address.state);
            setValue('zipCode', personalInfo.address.zipCode);
            setValue('country', personalInfo.address.country);
            setValue('preferredContactMethod', contactInfo.preferredContactMethod);
            setValue('emergencyContactName', contactInfo.emergencyContact.name);
            setValue('emergencyContactRelationship', contactInfo.emergencyContact.relationship);
            setValue('emergencyContactPhone', contactInfo.emergencyContact.phone);
            setValue('emergencyContactEmail', contactInfo.emergencyContact.email);
            setValue('employmentStatus', employmentInfo.employmentStatus);
            setValue('employer', employmentInfo.employer || '');
            setValue('jobTitle', employmentInfo.jobTitle || '');
            setValue('industry', employmentInfo.industry || '');
            setValue('annualIncome', employmentInfo.annualIncome);
            setValue('netWorth', employmentInfo.netWorth);
            setValue('liquidNetWorth', employmentInfo.liquidNetWorth);
        }
    }, [existingData, setValue]);

    const createClientMutation = useMutation({
        mutationFn: createClient
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    const employmentStatus = watch('employmentStatus');
    const isEmployed = employmentStatus === 'employed' || employmentStatus === 'self_employed';

    const onSubmit = async (data: ClientInfoFormData) => {
        try {
            let currentClientId = clientId;

            const personalInfo: ClientPersonalInfo = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                dateOfBirth: data.dateOfBirth,
                socialSecurityNumber: data.socialSecurityNumber,
                address: {
                    street: data.street,
                    city: data.city,
                    state: data.state,
                    zipCode: data.zipCode,
                    country: data.country
                }
            };

            const contactInfo: ContactInfo = {
                preferredContactMethod: data.preferredContactMethod,
                emergencyContact: {
                    name: data.emergencyContactName,
                    relationship: data.emergencyContactRelationship,
                    phone: data.emergencyContactPhone,
                    email: data.emergencyContactEmail
                }
            };

            const employmentInfo: EmploymentInfo = {
                employmentStatus: data.employmentStatus,
                employer: data.employer,
                jobTitle: data.jobTitle,
                industry: data.industry,
                annualIncome: data.annualIncome,
                netWorth: data.netWorth,
                liquidNetWorth: data.liquidNetWorth
            };

            if (isNewClient) {
                const result = await createClientMutation.mutateAsync({
                    personalInfo,
                    contactInfo,
                    employmentInfo
                });
                currentClientId = result.clientId;
            } else {
                await updateStepMutation.mutateAsync({
                    clientId: currentClientId!,
                    step: 1,
                    data: {
                        personalInfo,
                        contactInfo,
                        employmentInfo
                    }
                });
            }

            navigate(`/onboarding/risk-assessment?clientId=${currentClientId}`);
        } catch (error) {
            console.error('Error submitting client info:', error);
        }
    };

    return (
        <FormLayout
            currentStep={1}
            title='Client Information'
            description='Please provide your personal, contact, and employment information.'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-8'
            >
                {/* Personal Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='firstName'>First Name *</Label>
                                <Input
                                    id='firstName'
                                    {...register('firstName')}
                                    className={errors.firstName ? 'border-red-500' : ''}
                                />
                                {errors.firstName && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.firstName.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='lastName'>Last Name *</Label>
                                <Input
                                    id='lastName'
                                    {...register('lastName')}
                                    className={errors.lastName ? 'border-red-500' : ''}
                                />
                                {errors.lastName && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='email'>Email Address *</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    {...register('email')}
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor='phone'>Phone Number *</Label>
                                <Input
                                    id='phone'
                                    {...register('phone')}
                                    placeholder='+1-555-123-4567'
                                    className={errors.phone ? 'border-red-500' : ''}
                                />
                                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='dateOfBirth'>Date of Birth *</Label>
                                <Input
                                    id='dateOfBirth'
                                    type='date'
                                    {...register('dateOfBirth')}
                                    className={errors.dateOfBirth ? 'border-red-500' : ''}
                                />
                                {errors.dateOfBirth && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.dateOfBirth.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='socialSecurityNumber'>Social Security Number *</Label>
                                <Input
                                    id='socialSecurityNumber'
                                    {...register('socialSecurityNumber')}
                                    placeholder='123-45-6789'
                                    className={errors.socialSecurityNumber ? 'border-red-500' : ''}
                                />
                                {errors.socialSecurityNumber && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.socialSecurityNumber.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor='street'>Street Address *</Label>
                            <Input
                                id='street'
                                {...register('street')}
                                className={errors.street ? 'border-red-500' : ''}
                            />
                            {errors.street && <p className='text-red-500 text-sm mt-1'>{errors.street.message}</p>}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div>
                                <Label htmlFor='city'>City *</Label>
                                <Input
                                    id='city'
                                    {...register('city')}
                                    className={errors.city ? 'border-red-500' : ''}
                                />
                                {errors.city && <p className='text-red-500 text-sm mt-1'>{errors.city.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor='state'>State *</Label>
                                <Input
                                    id='state'
                                    {...register('state')}
                                    placeholder='NY'
                                    className={errors.state ? 'border-red-500' : ''}
                                />
                                {errors.state && <p className='text-red-500 text-sm mt-1'>{errors.state.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor='zipCode'>ZIP Code *</Label>
                                <Input
                                    id='zipCode'
                                    {...register('zipCode')}
                                    placeholder='10001'
                                    className={errors.zipCode ? 'border-red-500' : ''}
                                />
                                {errors.zipCode && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.zipCode.message}</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Preferences */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div>
                            <Label htmlFor='preferredContactMethod'>Preferred Contact Method *</Label>
                            <Select
                                onValueChange={(value: 'email' | 'phone' | 'mail') =>
                                    setValue('preferredContactMethod', value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder='Select preferred contact method' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='email'>Email</SelectItem>
                                    <SelectItem value='phone'>Phone</SelectItem>
                                    <SelectItem value='mail'>Mail</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='emergencyContactName'>Emergency Contact Name *</Label>
                                <Input
                                    id='emergencyContactName'
                                    {...register('emergencyContactName')}
                                    className={errors.emergencyContactName ? 'border-red-500' : ''}
                                />
                                {errors.emergencyContactName && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.emergencyContactName.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='emergencyContactRelationship'>Relationship *</Label>
                                <Input
                                    id='emergencyContactRelationship'
                                    {...register('emergencyContactRelationship')}
                                    placeholder='Spouse, Parent, etc.'
                                    className={errors.emergencyContactRelationship ? 'border-red-500' : ''}
                                />
                                {errors.emergencyContactRelationship && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.emergencyContactRelationship.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <Label htmlFor='emergencyContactPhone'>Emergency Contact Phone *</Label>
                                <Input
                                    id='emergencyContactPhone'
                                    {...register('emergencyContactPhone')}
                                    placeholder='+1-555-123-4567'
                                    className={errors.emergencyContactPhone ? 'border-red-500' : ''}
                                />
                                {errors.emergencyContactPhone && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.emergencyContactPhone.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='emergencyContactEmail'>Emergency Contact Email *</Label>
                                <Input
                                    id='emergencyContactEmail'
                                    type='email'
                                    {...register('emergencyContactEmail')}
                                    className={errors.emergencyContactEmail ? 'border-red-500' : ''}
                                />
                                {errors.emergencyContactEmail && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.emergencyContactEmail.message}</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Employment Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Employment Information</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div>
                            <Label htmlFor='employmentStatus'>Employment Status *</Label>
                            <Select
                                onValueChange={(
                                    value: 'employed' | 'unemployed' | 'retired' | 'self_employed' | 'student'
                                ) => setValue('employmentStatus', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder='Select employment status' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='employed'>Employed</SelectItem>
                                    <SelectItem value='self_employed'>Self Employed</SelectItem>
                                    <SelectItem value='retired'>Retired</SelectItem>
                                    <SelectItem value='unemployed'>Unemployed</SelectItem>
                                    <SelectItem value='student'>Student</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {isEmployed && (
                            <>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <Label htmlFor='employer'>Employer</Label>
                                        <Input
                                            id='employer'
                                            {...register('employer')}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor='jobTitle'>Job Title</Label>
                                        <Input
                                            id='jobTitle'
                                            {...register('jobTitle')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor='industry'>Industry</Label>
                                    <Input
                                        id='industry'
                                        {...register('industry')}
                                    />
                                </div>
                            </>
                        )}

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div>
                                <Label htmlFor='annualIncome'>Annual Income *</Label>
                                <Input
                                    id='annualIncome'
                                    type='number'
                                    {...register('annualIncome', { valueAsNumber: true })}
                                    placeholder='50000'
                                    className={errors.annualIncome ? 'border-red-500' : ''}
                                />
                                {errors.annualIncome && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.annualIncome.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='netWorth'>Net Worth *</Label>
                                <Input
                                    id='netWorth'
                                    type='number'
                                    {...register('netWorth', { valueAsNumber: true })}
                                    placeholder='100000'
                                    className={errors.netWorth ? 'border-red-500' : ''}
                                />
                                {errors.netWorth && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.netWorth.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor='liquidNetWorth'>Liquid Net Worth *</Label>
                                <Input
                                    id='liquidNetWorth'
                                    type='number'
                                    {...register('liquidNetWorth', { valueAsNumber: true })}
                                    placeholder='50000'
                                    className={errors.liquidNetWorth ? 'border-red-500' : ''}
                                />
                                {errors.liquidNetWorth && (
                                    <p className='text-red-500 text-sm mt-1'>{errors.liquidNetWorth.message}</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Submit Button */}
                <div className='flex justify-end'>
                    <Button
                        type='submit'
                        className='px-8'
                        disabled={createClientMutation.isPending || updateStepMutation.isPending}
                    >
                        {createClientMutation.isPending || updateStepMutation.isPending
                            ? 'Saving...'
                            : 'Continue to Risk Assessment'}
                    </Button>
                </div>
            </form>
        </FormLayout>
    );
};
