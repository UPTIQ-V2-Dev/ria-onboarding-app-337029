import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Mail,
    Phone,
    Calendar,
    DollarSign,
    TrendingUp,
    FileText,
    User,
    Edit,
    MoreHorizontal,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { getClientById, updateClientStatus } from '@/services/client';
import { getClientDocuments } from '@/services/document';
import type { Client } from '@/types/client';

const statusColors = {
    pending: 'bg-yellow-500',
    in_progress: 'bg-blue-500',
    completed: 'bg-green-500',
    rejected: 'bg-red-500'
};

const statusLabels = {
    pending: 'Pending',
    in_progress: 'In Progress',
    completed: 'Completed',
    rejected: 'Rejected'
};

const riskProfileColors = {
    conservative: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    aggressive: 'bg-red-100 text-red-800'
};

const accountStatusColors = {
    active: 'bg-green-500',
    pending: 'bg-yellow-500',
    closed: 'bg-gray-500'
};

export const ClientDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const {
        data: client,
        isLoading,
        error
    } = useQuery({
        queryKey: ['client', id],
        queryFn: () => getClientById(id!),
        enabled: !!id
    });

    const { data: documents } = useQuery({
        queryKey: ['client-documents', id],
        queryFn: () => getClientDocuments(id!),
        enabled: !!id
    });

    const updateStatusMutation = useMutation({
        mutationFn: ({ status }: { status: Client['status'] }) => updateClientStatus(id!, { status }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['client', id] });
            queryClient.invalidateQueries({ queryKey: ['clients'] });
            toast({
                title: 'Success',
                description: 'Client status updated successfully'
            });
        },
        onError: () => {
            toast({
                title: 'Error',
                description: 'Failed to update client status',
                variant: 'destructive'
            });
        }
    });

    if (!id) {
        return <div>Client ID not found</div>;
    }

    if (error) {
        return (
            <div className='p-6'>
                <div className='text-center'>
                    <h3 className='text-lg font-semibold text-red-600'>Error loading client</h3>
                    <p className='text-gray-600'>Client not found or unable to load data.</p>
                    <Button
                        onClick={() => navigate('/clients')}
                        className='mt-4'
                    >
                        Back to Clients
                    </Button>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className='p-6 space-y-6'>
                <div className='flex items-center gap-4'>
                    <Skeleton className='h-10 w-10' />
                    <Skeleton className='h-8 w-48' />
                </div>
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <Skeleton className='h-32' />
                    <Skeleton className='h-32' />
                    <Skeleton className='h-32' />
                </div>
                <Skeleton className='h-64' />
            </div>
        );
    }

    if (!client) {
        return (
            <div className='p-6'>
                <div className='text-center'>
                    <h3 className='text-lg font-semibold'>Client not found</h3>
                    <p className='text-gray-600'>The requested client could not be found.</p>
                    <Button
                        onClick={() => navigate('/clients')}
                        className='mt-4'
                    >
                        Back to Clients
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className='p-6 space-y-6'>
            {/* Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => navigate('/clients')}
                    >
                        <ArrowLeft className='h-4 w-4' />
                    </Button>
                    <div>
                        <h1 className='text-3xl font-bold'>
                            {client.firstName} {client.lastName}
                        </h1>
                        <p className='text-gray-600'>Client Details</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Badge
                        variant='outline'
                        className={`${statusColors[client.status]} text-white`}
                    >
                        {statusLabels[client.status]}
                    </Badge>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline'>
                                <MoreHorizontal className='h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem onClick={() => updateStatusMutation.mutate({ status: 'pending' })}>
                                Mark as Pending
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateStatusMutation.mutate({ status: 'in_progress' })}>
                                Mark as In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateStatusMutation.mutate({ status: 'completed' })}>
                                Mark as Completed
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => updateStatusMutation.mutate({ status: 'rejected' })}
                                className='text-red-600'
                            >
                                Mark as Rejected
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Key Stats */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Card>
                    <CardContent className='p-6'>
                        <div className='flex items-center gap-2'>
                            <TrendingUp className='h-8 w-8 text-green-600' />
                            <div>
                                <p className='text-sm text-gray-600'>Total Assets</p>
                                <p className='text-2xl font-bold'>${client.totalAssets?.toLocaleString() || '0'}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className='p-6'>
                        <div className='flex items-center gap-2'>
                            <DollarSign className='h-8 w-8 text-blue-600' />
                            <div>
                                <p className='text-sm text-gray-600'>Account Value</p>
                                <p className='text-2xl font-bold'>${client.accountValue?.toLocaleString() || '0'}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className='p-6'>
                        <div className='flex items-center gap-2'>
                            <FileText className='h-8 w-8 text-purple-600' />
                            <div>
                                <p className='text-sm text-gray-600'>Progress</p>
                                <div className='flex items-center gap-2 mt-1'>
                                    <div className='w-16 bg-gray-200 rounded-full h-2'>
                                        <div
                                            className='bg-blue-500 h-2 rounded-full transition-all'
                                            style={{ width: `${client.progress}%` }}
                                        />
                                    </div>
                                    <span className='text-lg font-bold'>{client.progress}%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className='p-6'>
                        <div className='flex items-center gap-2'>
                            <User className='h-8 w-8 text-orange-600' />
                            <div>
                                <p className='text-sm text-gray-600'>Risk Profile</p>
                                <div className='mt-1'>
                                    {client.riskProfile ? (
                                        <Badge className={riskProfileColors[client.riskProfile]}>
                                            {client.riskProfile}
                                        </Badge>
                                    ) : (
                                        <span className='text-gray-400'>Not assessed</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className='grid gap-6 lg:grid-cols-3'>
                {/* Personal Information */}
                <div className='lg:col-span-2 space-y-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <div className='flex items-center gap-3'>
                                    <Mail className='h-5 w-5 text-gray-500' />
                                    <div>
                                        <p className='text-sm text-gray-600'>Email</p>
                                        <p className='font-medium'>{client.email}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Phone className='h-5 w-5 text-gray-500' />
                                    <div>
                                        <p className='text-sm text-gray-600'>Phone</p>
                                        <p className='font-medium'>{client.phone}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Calendar className='h-5 w-5 text-gray-500' />
                                    <div>
                                        <p className='text-sm text-gray-600'>Joined</p>
                                        <p className='font-medium'>{new Date(client.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Calendar className='h-5 w-5 text-gray-500' />
                                    <div>
                                        <p className='text-sm text-gray-600'>Last Updated</p>
                                        <p className='font-medium'>{new Date(client.updatedAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>

                            {client.assignedAdvisor && (
                                <>
                                    <Separator />
                                    <div>
                                        <p className='text-sm text-gray-600 mb-2'>Assigned Advisor</p>
                                        <div className='flex items-center gap-3'>
                                            <div className='h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center'>
                                                <User className='h-5 w-5 text-white' />
                                            </div>
                                            <div>
                                                <p className='font-medium'>{client.assignedAdvisor.name}</p>
                                                <p className='text-sm text-gray-600'>{client.assignedAdvisor.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {client.notes && client.notes.length > 0 && (
                                <>
                                    <Separator />
                                    <div>
                                        <p className='text-sm text-gray-600 mb-2'>Notes</p>
                                        <ul className='space-y-1'>
                                            {client.notes.map((note, index) => (
                                                <li
                                                    key={index}
                                                    className='text-sm text-gray-700 flex gap-2'
                                                >
                                                    <span className='text-gray-400'>•</span>
                                                    {note}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </CardContent>
                    </Card>

                    {/* Accounts */}
                    {client.accounts && client.accounts.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Accounts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='space-y-4'>
                                    {client.accounts.map(account => (
                                        <div
                                            key={account.id}
                                            className='flex items-center justify-between p-4 border rounded-lg'
                                        >
                                            <div className='flex items-center gap-3'>
                                                <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
                                                    <DollarSign className='h-5 w-5 text-blue-600' />
                                                </div>
                                                <div>
                                                    <p className='font-medium'>{account.type}</p>
                                                    <p className='text-sm text-gray-600'>{account.accountNumber}</p>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <p className='font-medium'>${account.balance.toLocaleString()}</p>
                                                <Badge
                                                    variant='outline'
                                                    className={`${accountStatusColors[account.status]} text-white text-xs`}
                                                >
                                                    {account.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Sidebar */}
                <div className='space-y-6'>
                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            <Button
                                variant='outline'
                                className='w-full justify-start'
                            >
                                <Mail className='mr-2 h-4 w-4' />
                                Send Email
                            </Button>
                            <Button
                                variant='outline'
                                className='w-full justify-start'
                            >
                                <Phone className='mr-2 h-4 w-4' />
                                Schedule Call
                            </Button>
                            <Button
                                variant='outline'
                                className='w-full justify-start'
                            >
                                <Edit className='mr-2 h-4 w-4' />
                                Edit Profile
                            </Button>
                            <Button
                                variant='outline'
                                className='w-full justify-start'
                            >
                                <Download className='mr-2 h-4 w-4' />
                                Export Data
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Documents */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Documents ({documents?.length || 0})</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {documents && documents.length > 0 ? (
                                <div className='space-y-2'>
                                    {documents.slice(0, 5).map(doc => (
                                        <div
                                            key={doc.id}
                                            className='flex items-center gap-3 p-2 border rounded hover:bg-gray-50'
                                        >
                                            <FileText className='h-4 w-4 text-gray-500' />
                                            <div className='flex-1 min-w-0'>
                                                <p className='text-sm font-medium truncate'>{doc.fileName}</p>
                                                <p className='text-xs text-gray-500'>
                                                    {doc.documentType.name} •{' '}
                                                    {new Date(doc.uploadedAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {documents.length > 5 && (
                                        <Button
                                            variant='ghost'
                                            size='sm'
                                            className='w-full'
                                            onClick={() => navigate(`/clients/${id}/documents`)}
                                        >
                                            View All Documents ({documents.length})
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <p className='text-sm text-gray-500 text-center py-4'>No documents uploaded</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Timeline Preview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-3'>
                                <div className='flex gap-3'>
                                    <div className='h-2 w-2 bg-blue-500 rounded-full mt-2'></div>
                                    <div>
                                        <p className='text-sm font-medium'>Status updated</p>
                                        <p className='text-xs text-gray-500'>
                                            {new Date(client.updatedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='h-2 w-2 bg-green-500 rounded-full mt-2'></div>
                                    <div>
                                        <p className='text-sm font-medium'>Client created</p>
                                        <p className='text-xs text-gray-500'>
                                            {new Date(client.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
