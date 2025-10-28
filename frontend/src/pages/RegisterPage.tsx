import { AuthLayout } from '@/components/layouts/AuthLayout';
import { RegisterForm } from '@/components/forms/RegisterForm';

export const RegisterPage = () => {
    return (
        <AuthLayout
            title='Create Account'
            subtitle='Join our platform to start onboarding your clients'
        >
            <RegisterForm />
        </AuthLayout>
    );
};
