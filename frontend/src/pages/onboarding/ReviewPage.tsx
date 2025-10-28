import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CheckCircle, FileText, Shield, User, Target, Settings, Calendar } from 'lucide-react';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { getOnboardingSummary, submitOnboarding } from '@/services/onboarding';

const reviewSchema = z.object({
    finalReview: z.boolean().refine(value => value === true, 'You must confirm that all information is accurate'),
    electronicallySign: z
        .boolean()
        .refine(value => value === true, 'You must agree to sign the application electronically')
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export const ReviewPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            finalReview: false,
            electronicallySign: false
        }
    });

    const watchedFinalReview = watch('finalReview');
    const watchedElectronicallySign = watch('electronicallySign');

    // Load onboarding summary
    const { data: summary } = useQuery({
        queryKey: ['onboarding-summary', clientId],
        queryFn: () => getOnboardingSummary(clientId!),
        enabled: !!clientId
    });

    const submitOnboardingMutation = useMutation({
        mutationFn: submitOnboarding,
        onSuccess: result => {
            navigate(`/onboarding/success?submissionId=${result.submissionId}`);
        }
    });

    const getRiskProfileColor = (profile: string) => {
        switch (profile?.toLowerCase()) {
            case 'conservative':
                return 'bg-green-100 text-green-800';
            case 'moderate':
                return 'bg-yellow-100 text-yellow-800';
            case 'aggressive':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPrimaryGoalDescription = (goal: string) => {
        switch (goal) {
            case 'growth':
                return 'Capital Growth';
            case 'income':
                return 'Income Generation';
            case 'preservation':
                return 'Capital Preservation';
            case 'balanced':
                return 'Balanced Approach';
            default:
                return goal;
        }
    };

    const onSubmit = async (data: ReviewFormData) => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            await submitOnboardingMutation.mutateAsync({
                clientId,
                finalReview: data.finalReview,
                electronicallySign: data.electronicallySign,
                signatureDate: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error submitting onboarding:', error);
        }
    };

    if (!summary) {
        return (
            <FormLayout
                currentStep={7}
                title='Review & Submit'
                description='Loading your application summary...'
            >
                <div className='flex justify-center py-12'>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                </div>
            </FormLayout>
        );
    }

    return (
        <FormLayout
            currentStep={7}
            title='Review & Submit'
            description='Please review all information before submitting your application.'
        >
            <div className='space-y-6'>
                {/* Application Progress Overview */}
                <Card className='bg-blue-50'>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <CheckCircle className='h-5 w-5 text-green-600' />
                            Application Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-blue-600'>7/7</div>
                                <div className='text-sm text-gray-600'>Steps Completed</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-green-600'>
                                    {summary.documentsStatus.uploaded}
                                </div>
                                <div className='text-sm text-gray-600'>Documents Uploaded</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-purple-600'>
                                    {summary.selectedAccounts.length}
                                </div>
                                <div className='text-sm text-gray-600'>Accounts Selected</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-orange-600'>
                                    ${summary.totalFunding.toLocaleString()}
                                </div>
                                <div className='text-sm text-gray-600'>Initial Funding</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Personal Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <User className='h-5 w-5' />
                            Personal Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <div className='font-medium'>Full Name</div>
                                <div className='text-gray-600'>
                                    {summary.personalInfo.firstName} {summary.personalInfo.lastName}
                                </div>
                            </div>
                            <div>
                                <div className='font-medium'>Email</div>
                                <div className='text-gray-600'>{summary.personalInfo.email}</div>
                            </div>
                            <div>
                                <div className='font-medium'>Phone</div>
                                <div className='text-gray-600'>{summary.personalInfo.phone}</div>
                            </div>
                            <div>
                                <div className='font-medium'>Date of Birth</div>
                                <div className='text-gray-600'>
                                    {new Date(summary.personalInfo.dateOfBirth).toLocaleDateString()}
                                </div>
                            </div>
                            <div className='md:col-span-2'>
                                <div className='font-medium'>Address</div>
                                <div className='text-gray-600'>
                                    {summary.personalInfo.address.street}
                                    <br />
                                    {summary.personalInfo.address.city}, {summary.personalInfo.address.state}{' '}
                                    {summary.personalInfo.address.zipCode}
                                    <br />
                                    {summary.personalInfo.address.country}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Risk Profile & Investment Objectives */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <Target className='h-5 w-5' />
                            Investment Profile
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <div className='font-medium mb-2'>Risk Profile</div>
                                <Badge className={getRiskProfileColor(summary.riskProfile.riskTolerance)}>
                                    {summary.riskProfile.riskTolerance?.toUpperCase()}
                                </Badge>
                                <div className='text-sm text-gray-600 mt-2'>
                                    <div>Investment Experience: {summary.riskProfile.investmentExperience}</div>
                                    <div>Time Horizon: {summary.riskProfile.investmentTimeHorizon}</div>
                                    <div>Knowledge Level: {summary.riskProfile.investmentKnowledge}</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-medium mb-2'>Investment Objectives</div>
                                <div className='text-gray-600'>
                                    <div>
                                        Primary Goal:{' '}
                                        {getPrimaryGoalDescription(summary.investmentObjectives.primaryGoal)}
                                    </div>
                                    {summary.investmentObjectives.targetAmount && (
                                        <div>
                                            Target Amount: ${summary.investmentObjectives.targetAmount.toLocaleString()}
                                        </div>
                                    )}
                                    <div>Time Horizon: {summary.investmentObjectives.timeHorizon} years</div>
                                    <div>Risk Comfort Level: {summary.investmentObjectives.riskComfort}/10</div>
                                </div>
                            </div>
                        </div>

                        {summary.investmentObjectives.specificGoals.length > 0 && (
                            <div>
                                <div className='font-medium mb-2'>Specific Goals</div>
                                <div className='flex flex-wrap gap-2'>
                                    {summary.investmentObjectives.specificGoals.map((goal, index) => (
                                        <Badge
                                            key={index}
                                            variant='outline'
                                        >
                                            {goal}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Selected Accounts */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <Settings className='h-5 w-5' />
                            Account Configuration
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-4'>
                            {summary.selectedAccounts.map(account => (
                                <div
                                    key={account.id}
                                    className='flex justify-between items-center p-3 border rounded-lg'
                                >
                                    <div>
                                        <div className='font-medium'>{account.name}</div>
                                        <div className='text-sm text-gray-600'>{account.description}</div>
                                        <div className='text-sm text-gray-500'>
                                            Min. Balance: ${account.minimumBalance.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <Badge variant={account.taxAdvantaged ? 'default' : 'secondary'}>
                                            {account.taxAdvantaged ? 'Tax Advantaged' : 'Taxable'}
                                        </Badge>
                                        <div className='text-sm text-gray-500 mt-1'>
                                            Annual Fee: ${account.fees.annual}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Separator />

                            <div className='flex justify-between items-center text-lg font-semibold'>
                                <span>Total Initial Funding:</span>
                                <span className='text-green-600'>${summary.totalFunding.toLocaleString()}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Documents & Compliance Status */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg flex items-center gap-2'>
                                <FileText className='h-5 w-5' />
                                Documents Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center'>
                                    <span>Total Required:</span>
                                    <Badge variant='outline'>{summary.documentsStatus.total}</Badge>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Uploaded:</span>
                                    <Badge
                                        variant={
                                            summary.documentsStatus.uploaded === summary.documentsStatus.total
                                                ? 'default'
                                                : 'secondary'
                                        }
                                    >
                                        {summary.documentsStatus.uploaded}
                                    </Badge>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Under Review:</span>
                                    <Badge variant='outline'>{summary.documentsStatus.pending}</Badge>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Approved:</span>
                                    <Badge variant='default'>{summary.documentsStatus.approved}</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg flex items-center gap-2'>
                                <Shield className='h-5 w-5' />
                                Compliance Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center'>
                                    <span>Required Disclosures:</span>
                                    <Badge
                                        variant={
                                            summary.complianceStatus.completed === summary.complianceStatus.total
                                                ? 'default'
                                                : 'destructive'
                                        }
                                    >
                                        {summary.complianceStatus.completed} / {summary.complianceStatus.total}
                                    </Badge>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <CheckCircle className='h-4 w-4 text-green-600' />
                                    <span>Electronic delivery consent given</span>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <CheckCircle className='h-4 w-4 text-green-600' />
                                    <span>All agreements acknowledged</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Estimated Timeline */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <Calendar className='h-5 w-5' />
                            Next Steps
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='text-sm text-gray-600 space-y-2'>
                            <div>
                                <strong>Estimated Account Approval:</strong>{' '}
                                {new Date(summary.estimatedCompletionDate).toLocaleDateString()}
                            </div>
                            <div>
                                After submission, your application will be reviewed within 2-3 business days. You'll
                                receive email notifications about the status of your application and next steps.
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Final Confirmation */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className='border-2 border-blue-200'>
                        <CardHeader>
                            <CardTitle className='text-lg'>Final Confirmation</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <Alert>
                                <AlertDescription>
                                    Please carefully review all information above. Once submitted, changes to your
                                    application may require additional documentation and processing time.
                                </AlertDescription>
                            </Alert>

                            <div className='space-y-4'>
                                <div className='flex items-start space-x-2'>
                                    <Checkbox
                                        id='finalReview'
                                        checked={watchedFinalReview}
                                        onCheckedChange={checked => setValue('finalReview', checked as boolean)}
                                    />
                                    <Label
                                        htmlFor='finalReview'
                                        className='cursor-pointer leading-relaxed'
                                    >
                                        I confirm that I have reviewed all information provided and certify that it is
                                        accurate and complete to the best of my knowledge.
                                    </Label>
                                </div>
                                {errors.finalReview && (
                                    <p className='text-red-500 text-sm ml-6'>{errors.finalReview.message}</p>
                                )}

                                <div className='flex items-start space-x-2'>
                                    <Checkbox
                                        id='electronicallySign'
                                        checked={watchedElectronicallySign}
                                        onCheckedChange={checked => setValue('electronicallySign', checked as boolean)}
                                    />
                                    <Label
                                        htmlFor='electronicallySign'
                                        className='cursor-pointer leading-relaxed'
                                    >
                                        I agree to sign this application electronically and acknowledge that my
                                        electronic signature has the same legal effect as a handwritten signature.
                                    </Label>
                                </div>
                                {errors.electronicallySign && (
                                    <p className='text-red-500 text-sm ml-6'>{errors.electronicallySign.message}</p>
                                )}
                            </div>

                            <div className='pt-4 border-t'>
                                <div className='text-sm text-gray-600 mb-4'>
                                    By submitting this application, you agree to open the selected investment accounts
                                    subject to our terms and conditions and applicable regulations.
                                </div>

                                <div className='flex justify-between'>
                                    <Button
                                        type='button'
                                        variant='outline'
                                        onClick={() => navigate(`/onboarding/compliance?clientId=${clientId}`)}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type='submit'
                                        size='lg'
                                        className='px-8'
                                        disabled={
                                            !watchedFinalReview ||
                                            !watchedElectronicallySign ||
                                            submitOnboardingMutation.isPending
                                        }
                                    >
                                        {submitOnboardingMutation.isPending
                                            ? 'Submitting Application...'
                                            : 'Submit Application'}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </FormLayout>
    );
};
