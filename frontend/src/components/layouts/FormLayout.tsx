import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ONBOARDING_STEPS } from '@/types/onboarding';

interface FormLayoutProps {
    children: ReactNode;
    currentStep: number;
    title: string;
    description?: string;
}

export const FormLayout = ({ children, currentStep, title, description }: FormLayoutProps) => {
    const progressPercentage = (currentStep / ONBOARDING_STEPS.length) * 100;

    return (
        <div className='min-h-screen bg-gray-50 py-8'>
            <div className='max-w-4xl mx-auto px-4'>
                {/* Progress Section */}
                <div className='mb-8'>
                    <div className='flex items-center justify-between mb-4'>
                        <h1 className='text-2xl font-bold text-gray-900'>Client Onboarding</h1>
                        <span className='text-sm text-gray-600'>
                            Step {currentStep} of {ONBOARDING_STEPS.length}
                        </span>
                    </div>
                    <Progress
                        value={progressPercentage}
                        className='h-2'
                    />

                    {/* Step indicators */}
                    <div className='flex justify-between mt-4'>
                        {ONBOARDING_STEPS.map(step => (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center text-xs ${
                                    step.id <= currentStep ? 'text-blue-600' : 'text-gray-400'
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-1 ${
                                        step.id <= currentStep
                                            ? 'border-blue-600 bg-blue-600 text-white'
                                            : 'border-gray-300 bg-white text-gray-400'
                                    }`}
                                >
                                    {step.id}
                                </div>
                                <span className='text-center max-w-20'>{step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <Card className='w-full'>
                    <CardHeader>
                        <CardTitle className='text-xl font-semibold'>{title}</CardTitle>
                        {description && <p className='text-gray-600 text-sm'>{description}</p>}
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    );
};
