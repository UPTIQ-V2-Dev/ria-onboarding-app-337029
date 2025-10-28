import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
    title: string;
    description?: string;
}

export const ComingSoonPage = ({ title, description }: ComingSoonPageProps) => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4'>
            <Card className='w-full max-w-md text-center'>
                <CardHeader className='pb-4'>
                    <div className='mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                        <Construction className='w-6 h-6 text-primary' />
                    </div>
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                    <CardDescription className='text-base'>
                        {description ||
                            "This feature is coming soon. We're working hard to bring you the best experience."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        asChild
                        variant='outline'
                        className='w-full'
                    >
                        <Link to='/dashboard'>
                            <ArrowLeft className='mr-2 h-4 w-4' />
                            Back to Dashboard
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};
