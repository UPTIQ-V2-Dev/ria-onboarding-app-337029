import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FileText, Shield, AlertTriangle } from 'lucide-react';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { getDisclosures, acknowledgeDisclosures, updateOnboardingStep, getOnboardingData } from '@/services/onboarding';

const complianceSchema = z.object({
    acknowledgedDisclosures: z
        .array(z.string())
        .refine(disclosures => disclosures.length > 0, 'You must acknowledge all required disclosures'),
    electronicConsent: z.boolean().refine(value => value === true, 'You must consent to electronic delivery'),
    finalAcknowledgment: z.boolean().refine(value => value === true, 'You must acknowledge the final agreement')
});

type ComplianceFormData = z.infer<typeof complianceSchema>;

export const CompliancePage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');
    const [expandedDisclosure, setExpandedDisclosure] = useState<string | null>(null);

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<ComplianceFormData>({
        resolver: zodResolver(complianceSchema),
        defaultValues: {
            acknowledgedDisclosures: [],
            electronicConsent: false,
            finalAcknowledgment: false
        }
    });

    const watchedAcknowledgedDisclosures = watch('acknowledgedDisclosures');
    const watchedElectronicConsent = watch('electronicConsent');
    const watchedFinalAcknowledgment = watch('finalAcknowledgment');

    // Load disclosures
    const { data: disclosures = [] } = useQuery({
        queryKey: ['disclosures'],
        queryFn: getDisclosures
    });

    // Load existing data if clientId exists
    const { data: existingData } = useQuery({
        queryKey: ['onboarding', clientId],
        queryFn: () => getOnboardingData(clientId!),
        enabled: !!clientId
    });

    // Populate form with existing data
    useEffect(() => {
        if (existingData?.disclosures) {
            const acknowledgedIds = existingData.disclosures.filter(d => d.acknowledged).map(d => d.id);
            setValue('acknowledgedDisclosures', acknowledgedIds);
        }
    }, [existingData, setValue]);

    const acknowledgeDisclosuresMutation = useMutation({
        mutationFn: (disclosureIds: string[]) => acknowledgeDisclosures(clientId!, disclosureIds)
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    const handleDisclosureToggle = (disclosureId: string, checked: boolean) => {
        const current = watchedAcknowledgedDisclosures || [];
        if (checked) {
            setValue('acknowledgedDisclosures', [...current, disclosureId]);
        } else {
            setValue(
                'acknowledgedDisclosures',
                current.filter(id => id !== disclosureId)
            );
        }
    };

    const getRequiredDisclosures = () => {
        return disclosures.filter(d => d.required);
    };

    const getOptionalDisclosures = () => {
        return disclosures.filter(d => !d.required);
    };

    const getAllRequiredAcknowledged = () => {
        const requiredIds = getRequiredDisclosures().map(d => d.id);
        return requiredIds.every(id => watchedAcknowledgedDisclosures?.includes(id));
    };

    const onSubmit = async (data: ComplianceFormData) => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            await acknowledgeDisclosuresMutation.mutateAsync(data.acknowledgedDisclosures);

            const updatedDisclosures = disclosures.map(disclosure => ({
                ...disclosure,
                acknowledged: data.acknowledgedDisclosures.includes(disclosure.id),
                acknowledgedAt: data.acknowledgedDisclosures.includes(disclosure.id)
                    ? new Date().toISOString()
                    : disclosure.acknowledgedAt
            }));

            await updateStepMutation.mutateAsync({
                clientId,
                step: 6,
                data: {
                    disclosures: updatedDisclosures,
                    complianceRecords: [
                        {
                            id: 'electronic_consent',
                            type: 'acknowledgment',
                            title: 'Electronic Delivery Consent',
                            status: 'completed',
                            completedAt: new Date().toISOString()
                        },
                        {
                            id: 'final_acknowledgment',
                            type: 'agreement',
                            title: 'Final Investment Agreement',
                            status: 'completed',
                            completedAt: new Date().toISOString()
                        }
                    ]
                }
            });

            navigate(`/onboarding/review?clientId=${clientId}`);
        } catch (error) {
            console.error('Error submitting compliance:', error);
        }
    };

    return (
        <FormLayout
            currentStep={6}
            title='Compliance & Disclosures'
            description='Please review and acknowledge the required disclosures and agreements.'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >
                {/* Important Notice */}
                <Alert>
                    <Shield className='h-4 w-4' />
                    <AlertDescription>
                        <div className='space-y-2'>
                            <div className='font-semibold'>Important Legal Information</div>
                            <div className='text-sm'>
                                Please carefully read all disclosures and agreements below. By proceeding, you
                                acknowledge that you have read, understood, and agree to all terms and conditions.
                            </div>
                        </div>
                    </AlertDescription>
                </Alert>

                {/* Required Disclosures */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg flex items-center gap-2'>
                            <FileText className='h-5 w-5' />
                            Required Disclosures
                        </CardTitle>
                        <p className='text-sm text-gray-600'>
                            You must acknowledge all required disclosures to proceed.
                        </p>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {getRequiredDisclosures().map(disclosure => (
                            <div
                                key={disclosure.id}
                                className='border rounded-lg'
                            >
                                <div className='p-4'>
                                    <div className='flex items-start space-x-3 mb-3'>
                                        <Badge
                                            variant='destructive'
                                            className='mt-1'
                                        >
                                            Required
                                        </Badge>
                                        <div className='flex-1'>
                                            <h3 className='font-semibold text-base'>{disclosure.title}</h3>
                                        </div>
                                        <Button
                                            type='button'
                                            variant='outline'
                                            size='sm'
                                            onClick={() =>
                                                setExpandedDisclosure(
                                                    expandedDisclosure === disclosure.id ? null : disclosure.id
                                                )
                                            }
                                        >
                                            {expandedDisclosure === disclosure.id ? 'Hide' : 'Read Full Text'}
                                        </Button>
                                    </div>

                                    {expandedDisclosure === disclosure.id && (
                                        <ScrollArea className='h-40 mb-4 p-3 border rounded bg-gray-50'>
                                            <div className='text-sm leading-relaxed whitespace-pre-wrap'>
                                                {disclosure.content}
                                            </div>
                                        </ScrollArea>
                                    )}

                                    <div className='flex items-center space-x-2'>
                                        <Checkbox
                                            id={disclosure.id}
                                            checked={watchedAcknowledgedDisclosures?.includes(disclosure.id) || false}
                                            onCheckedChange={checked =>
                                                handleDisclosureToggle(disclosure.id, checked as boolean)
                                            }
                                        />
                                        <Label
                                            htmlFor={disclosure.id}
                                            className='text-sm cursor-pointer'
                                        >
                                            I have read and acknowledge this disclosure
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Optional Disclosures */}
                {getOptionalDisclosures().length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg flex items-center gap-2'>
                                <FileText className='h-5 w-5' />
                                Additional Information
                            </CardTitle>
                            <p className='text-sm text-gray-600'>
                                Optional disclosures and additional information for your reference.
                            </p>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            {getOptionalDisclosures().map(disclosure => (
                                <div
                                    key={disclosure.id}
                                    className='border rounded-lg'
                                >
                                    <div className='p-4'>
                                        <div className='flex items-start space-x-3 mb-3'>
                                            <Badge
                                                variant='secondary'
                                                className='mt-1'
                                            >
                                                Optional
                                            </Badge>
                                            <div className='flex-1'>
                                                <h3 className='font-semibold text-base'>{disclosure.title}</h3>
                                            </div>
                                            <Button
                                                type='button'
                                                variant='outline'
                                                size='sm'
                                                onClick={() =>
                                                    setExpandedDisclosure(
                                                        expandedDisclosure === disclosure.id ? null : disclosure.id
                                                    )
                                                }
                                            >
                                                {expandedDisclosure === disclosure.id ? 'Hide' : 'Read Full Text'}
                                            </Button>
                                        </div>

                                        {expandedDisclosure === disclosure.id && (
                                            <ScrollArea className='h-40 mb-4 p-3 border rounded bg-gray-50'>
                                                <div className='text-sm leading-relaxed whitespace-pre-wrap'>
                                                    {disclosure.content}
                                                </div>
                                            </ScrollArea>
                                        )}

                                        <div className='flex items-center space-x-2'>
                                            <Checkbox
                                                id={disclosure.id}
                                                checked={
                                                    watchedAcknowledgedDisclosures?.includes(disclosure.id) || false
                                                }
                                                onCheckedChange={checked =>
                                                    handleDisclosureToggle(disclosure.id, checked as boolean)
                                                }
                                            />
                                            <Label
                                                htmlFor={disclosure.id}
                                                className='text-sm cursor-pointer'
                                            >
                                                I have read and acknowledge this disclosure
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {/* Electronic Consent */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Electronic Delivery Consent</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='p-4 bg-blue-50 rounded-lg'>
                            <h4 className='font-semibold mb-2'>Electronic Communications Agreement</h4>
                            <p className='text-sm text-gray-700 mb-4'>
                                By checking the box below, you consent to receive all account-related communications,
                                statements, confirmations, and other documents electronically via email or through our
                                secure client portal. You may withdraw this consent at any time by contacting us.
                            </p>
                            <div className='space-y-2'>
                                <div className='text-sm'>
                                    <strong>Benefits of Electronic Delivery:</strong>
                                </div>
                                <ul className='text-sm text-gray-600 list-disc list-inside space-y-1'>
                                    <li>Faster delivery of important documents</li>
                                    <li>Secure, encrypted communications</li>
                                    <li>24/7 access through our client portal</li>
                                    <li>Environmentally friendly paperless option</li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <Checkbox
                                id='electronicConsent'
                                checked={watchedElectronicConsent}
                                onCheckedChange={checked => setValue('electronicConsent', checked as boolean)}
                            />
                            <Label
                                htmlFor='electronicConsent'
                                className='cursor-pointer'
                            >
                                I consent to receive all communications electronically
                            </Label>
                        </div>
                        {errors.electronicConsent && (
                            <p className='text-red-500 text-sm'>{errors.electronicConsent.message}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Final Acknowledgment */}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-lg'>Final Acknowledgment</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <Alert>
                            <AlertTriangle className='h-4 w-4' />
                            <AlertDescription>
                                <div className='space-y-2'>
                                    <div className='font-semibold'>Important Final Acknowledgment</div>
                                    <div className='text-sm'>
                                        By checking the box below, you confirm that you have read and understood all
                                        disclosures, agreements, and terms presented during this onboarding process. You
                                        acknowledge that you are making informed investment decisions based on your
                                        personal financial situation and investment objectives.
                                    </div>
                                </div>
                            </AlertDescription>
                        </Alert>

                        <div className='flex items-center space-x-2'>
                            <Checkbox
                                id='finalAcknowledgment'
                                checked={watchedFinalAcknowledgment}
                                onCheckedChange={checked => setValue('finalAcknowledgment', checked as boolean)}
                            />
                            <Label
                                htmlFor='finalAcknowledgment'
                                className='cursor-pointer'
                            >
                                I acknowledge and agree to all terms, disclosures, and agreements
                            </Label>
                        </div>
                        {errors.finalAcknowledgment && (
                            <p className='text-red-500 text-sm'>{errors.finalAcknowledgment.message}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Progress Summary */}
                <Card className='bg-green-50'>
                    <CardContent className='p-4'>
                        <div className='space-y-2'>
                            <div className='flex justify-between items-center'>
                                <span className='font-medium'>Required Disclosures:</span>
                                <Badge variant={getAllRequiredAcknowledged() ? 'default' : 'destructive'}>
                                    {watchedAcknowledgedDisclosures?.filter(id =>
                                        getRequiredDisclosures().some(d => d.id === id)
                                    ).length || 0}{' '}
                                    / {getRequiredDisclosures().length}
                                </Badge>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='font-medium'>Electronic Consent:</span>
                                <Badge variant={watchedElectronicConsent ? 'default' : 'destructive'}>
                                    {watchedElectronicConsent ? 'Completed' : 'Pending'}
                                </Badge>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='font-medium'>Final Acknowledgment:</span>
                                <Badge variant={watchedFinalAcknowledgment ? 'default' : 'destructive'}>
                                    {watchedFinalAcknowledgment ? 'Completed' : 'Pending'}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {errors.acknowledgedDisclosures && (
                    <Alert variant='destructive'>
                        <AlertTriangle className='h-4 w-4' />
                        <AlertDescription>{errors.acknowledgedDisclosures.message}</AlertDescription>
                    </Alert>
                )}

                <div className='flex justify-between'>
                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => navigate(`/onboarding/documents?clientId=${clientId}`)}
                    >
                        Back
                    </Button>
                    <Button
                        type='submit'
                        className='px-8'
                        disabled={
                            !getAllRequiredAcknowledged() ||
                            !watchedElectronicConsent ||
                            !watchedFinalAcknowledgment ||
                            acknowledgeDisclosuresMutation.isPending ||
                            updateStepMutation.isPending
                        }
                    >
                        {acknowledgeDisclosuresMutation.isPending || updateStepMutation.isPending
                            ? 'Saving...'
                            : 'Continue to Review'}
                    </Button>
                </div>
            </form>
        </FormLayout>
    );
};
