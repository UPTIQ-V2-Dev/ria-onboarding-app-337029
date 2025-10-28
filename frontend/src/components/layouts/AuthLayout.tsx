import { Card, CardContent } from '@/components/ui/card';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4'>
            <div className='w-full max-w-md'>
                <div className='text-center mb-6'>
                    <div className='flex items-center justify-center mb-4'>
                        <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center'>
                            <span className='text-primary-foreground font-bold text-xl'>R</span>
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-foreground'>{title}</h1>
                    {subtitle && <p className='text-muted-foreground mt-2'>{subtitle}</p>}
                </div>

                <Card className='border-0 shadow-lg'>
                    <CardContent className='p-6'>{children}</CardContent>
                </Card>

                <div className='text-center mt-6 text-sm text-muted-foreground'>
                    <p>© 2024 RIA Client Onboarding. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};
