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
import { loginSchema } from '@/lib/validation';
import type { LoginFormData } from '@/types/auth';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const rememberMe = watch('rememberMe');

    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess: () => {
            navigate('/dashboard');
        }
    });

    const onSubmit = (data: LoginFormData) => {
        loginMutation.mutate({
            email: data.email,
            password: data.password
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
        >
            <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    {...register('email')}
                    className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className='text-sm text-destructive'>{errors.email.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
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

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <Checkbox
                        id='rememberMe'
                        checked={rememberMe || false}
                        onCheckedChange={checked => setValue('rememberMe', checked as boolean)}
                    />
                    <Label
                        htmlFor='rememberMe'
                        className='text-sm font-normal'
                    >
                        Remember me
                    </Label>
                </div>
                <Link
                    to='/forgot-password'
                    className='text-sm text-primary hover:underline'
                >
                    Forgot password?
                </Link>
            </div>

            {loginMutation.error && (
                <Alert variant='destructive'>
                    <AlertDescription>
                        {loginMutation.error.message || 'Login failed. Please try again.'}
                    </AlertDescription>
                </Alert>
            )}

            <Button
                type='submit'
                className='w-full'
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Sign In
            </Button>

            <div className='text-center'>
                <span className='text-sm text-muted-foreground'>
                    Don't have an account?{' '}
                    <Link
                        to='/register'
                        className='text-primary hover:underline'
                    >
                        Sign up
                    </Link>
                </span>
            </div>
        </form>
    );
};
