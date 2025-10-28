import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';

import { authService } from '@/services/auth';
import { registerSchema } from '@/lib/validation';
import type { RegisterFormData } from '@/types/auth';

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    const agreeToTerms = watch('agreeToTerms');

    const registerMutation = useMutation({
        mutationFn: authService.register,
        onSuccess: () => {
            navigate('/dashboard');
        }
    });

    const onSubmit = (data: RegisterFormData) => {
        registerMutation.mutate({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            firmName: data.firmName,
            phone: data.phone
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
        >
            <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input
                        id='firstName'
                        placeholder='John'
                        {...register('firstName')}
                        className={errors.firstName ? 'border-destructive' : ''}
                    />
                    {errors.firstName && <p className='text-sm text-destructive'>{errors.firstName.message}</p>}
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input
                        id='lastName'
                        placeholder='Doe'
                        {...register('lastName')}
                        className={errors.lastName ? 'border-destructive' : ''}
                    />
                    {errors.lastName && <p className='text-sm text-destructive'>{errors.lastName.message}</p>}
                </div>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    {...register('email')}
                    className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className='text-sm text-destructive'>{errors.email.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label htmlFor='firmName'>Firm Name</Label>
                <Input
                    id='firmName'
                    placeholder='ABC Investment Advisors'
                    {...register('firmName')}
                    className={errors.firmName ? 'border-destructive' : ''}
                />
                {errors.firmName && <p className='text-sm text-destructive'>{errors.firmName.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                    id='phone'
                    type='tel'
                    placeholder='+1 (555) 123-4567'
                    {...register('phone')}
                    className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && <p className='text-sm text-destructive'>{errors.phone.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Create a secure password'
                        {...register('password')}
                        className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
                    />
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.password && <p className='text-sm text-destructive'>{errors.password.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <div className='relative'>
                    <Input
                        id='confirmPassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirm your password'
                        {...register('confirmPassword')}
                        className={errors.confirmPassword ? 'border-destructive pr-10' : 'pr-10'}
                    />
                    <button
                        type='button'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.confirmPassword && <p className='text-sm text-destructive'>{errors.confirmPassword.message}</p>}
            </div>

            <div className='flex items-center space-x-2'>
                <Checkbox
                    id='agreeToTerms'
                    checked={agreeToTerms || false}
                    onCheckedChange={checked => setValue('agreeToTerms', checked as boolean)}
                />
                <Label
                    htmlFor='agreeToTerms'
                    className='text-sm font-normal'
                >
                    I agree to the{' '}
                    <Link
                        to='/terms'
                        className='text-primary hover:underline'
                    >
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                        to='/privacy'
                        className='text-primary hover:underline'
                    >
                        Privacy Policy
                    </Link>
                </Label>
            </div>
            {errors.agreeToTerms && <p className='text-sm text-destructive'>{errors.agreeToTerms.message}</p>}

            {registerMutation.error && (
                <Alert variant='destructive'>
                    <AlertDescription>
                        {registerMutation.error.message || 'Registration failed. Please try again.'}
                    </AlertDescription>
                </Alert>
            )}

            <Button
                type='submit'
                className='w-full'
                disabled={registerMutation.isPending || !agreeToTerms}
            >
                {registerMutation.isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Create Account
            </Button>

            <div className='text-center'>
                <span className='text-sm text-muted-foreground'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='text-primary hover:underline'
                    >
                        Sign in
                    </Link>
                </span>
            </div>
        </form>
    );
};
