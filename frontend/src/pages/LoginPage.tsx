import { AuthLayout } from '@/components/layouts/AuthLayout';
import { LoginForm } from '@/components/forms/LoginForm';

export const LoginPage = () => {
    return (
        <AuthLayout
            title='Welcome Back'
            subtitle='Sign in to your RIA account to continue'
        >
            <LoginForm />
        </AuthLayout>
    );
};
