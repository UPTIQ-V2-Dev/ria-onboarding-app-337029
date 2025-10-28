import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Home, FileText, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const SuccessPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const submissionId = searchParams.get('submissionId');

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-b from-green-50 to-white py-8'>
            <div className='max-w-4xl mx-auto px-4'>
                {/* Success Header */}
                <div className='text-center mb-8'>
                    <div className='mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                        <CheckCircle className='w-12 h-12 text-green-600' />
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Application Submitted Successfully!</h1>
                    <p className='text-gray-600'>
                        Thank you for completing your client onboarding. Your application is now under review.
                    </p>
                </div>

                {/* Submission Details */}
                <Card className='mb-8'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Submission Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <div className='font-medium text-gray-700'>Submission ID</div>
                                <div className='text-lg font-mono bg-gray-100 px-3 py-1 rounded'>
                                    {submissionId || 'SUB-' + Date.now()}
                                </div>
                            </div>
                            <div>
                                <div className='font-medium text-gray-700'>Submission Date</div>
                                <div className='text-lg'>
                                    {new Date().toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                            <div>
                                <div className='font-medium text-gray-700'>Status</div>
                                <Badge
                                    variant='default'
                                    className='bg-yellow-100 text-yellow-800'
                                >
                                    Under Review
                                </Badge>
                            </div>
                            <div>
                                <div className='font-medium text-gray-700'>Expected Response</div>
                                <div className='text-lg'>2-3 business days</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* What Happens Next */}
                <Card className='mb-8'>
                    <CardHeader>
                        <CardTitle className='text-lg'>What Happens Next?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                    <span className='text-blue-600 font-semibold text-sm'>1</span>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>Application Review</h3>
                                    <p className='text-gray-600 text-sm'>
                                        Our compliance team will review your application and uploaded documents within
                                        2-3 business days.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                    <span className='text-blue-600 font-semibold text-sm'>2</span>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>Document Verification</h3>
                                    <p className='text-gray-600 text-sm'>
                                        We'll verify your identity documents and funding information. You may receive a
                                        request for additional documentation if needed.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                    <span className='text-blue-600 font-semibold text-sm'>3</span>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>Account Approval</h3>
                                    <p className='text-gray-600 text-sm'>
                                        Once approved, your investment accounts will be opened and you'll receive
                                        welcome materials with account details.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                    <span className='text-blue-600 font-semibold text-sm'>4</span>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>Fund Transfer</h3>
                                    <p className='text-gray-600 text-sm'>
                                        Your initial funding will be processed according to the methods you specified
                                        during onboarding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Important Reminders */}
                <Alert className='mb-8'>
                    <FileText className='h-4 w-4' />
                    <AlertDescription>
                        <div className='space-y-2'>
                            <div className='font-semibold'>Important Reminders:</div>
                            <ul className='text-sm space-y-1 list-disc list-inside'>
                                <li>Check your email regularly for updates on your application status</li>
                                <li>Keep your submission ID for reference when contacting support</li>
                                <li>Ensure funds are available in your designated funding accounts</li>
                                <li>Additional documentation may be requested during the review process</li>
                            </ul>
                        </div>
                    </AlertDescription>
                </Alert>

                {/* Contact Information */}
                <Card className='mb-8'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Need Help or Have Questions?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='flex items-center gap-3'>
                                <Phone className='h-5 w-5 text-blue-600' />
                                <div>
                                    <div className='font-medium'>Phone Support</div>
                                    <div className='text-gray-600'>1-800-555-0123</div>
                                    <div className='text-sm text-gray-500'>Mon-Fri, 8 AM - 6 PM EST</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className='h-5 w-5 text-blue-600' />
                                <div>
                                    <div className='font-medium'>Email Support</div>
                                    <div className='text-gray-600'>support@riafirm.com</div>
                                    <div className='text-sm text-gray-500'>24-48 hour response time</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                        onClick={() => navigate('/dashboard')}
                        size='lg'
                        className='flex items-center gap-2'
                    >
                        <Home className='h-4 w-4' />
                        Go to Dashboard
                    </Button>
                    <Button
                        variant='outline'
                        onClick={() => window.print()}
                        size='lg'
                        className='flex items-center gap-2'
                    >
                        <FileText className='h-4 w-4' />
                        Print Confirmation
                    </Button>
                </div>

                {/* Footer Note */}
                <div className='text-center mt-8 text-sm text-gray-500'>
                    <p>
                        This confirmation serves as proof of your application submission. Please save this page or your
                        submission ID for your records.
                    </p>
                </div>
            </div>
        </div>
    );
};
