import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { getClients, updateClientStatus, bulkUpdateClientStatus, exportClientsData } from '@/services/client';
import type { Client } from '@/types/client';
import type { ClientFilters } from '@/services/client';

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

export const ClientsPage = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [filters, setFilters] = useState<ClientFilters>({
        page: 1,
        limit: 10,
        sortBy: 'createdAt',
        sortOrder: 'desc'
    });
    const [selectedClients, setSelectedClients] = useState<string[]>([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ['clients', filters],
        queryFn: () => getClients(filters)
    });

    const updateStatusMutation = useMutation({
        mutationFn: ({ clientId, status }: { clientId: string; status: Client['status'] }) =>
            updateClientStatus(clientId, { status }),
        onSuccess: () => {
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

    const bulkUpdateMutation = useMutation({
        mutationFn: ({ clientIds, status }: { clientIds: string[]; status: Client['status'] }) =>
            bulkUpdateClientStatus(clientIds, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] });
            setSelectedClients([]);
            toast({
                title: 'Success',
                description: 'Client statuses updated successfully'
            });
        },
        onError: () => {
            toast({
                title: 'Error',
                description: 'Failed to update client statuses',
                variant: 'destructive'
            });
        }
    });

    const handleSearch = (search: string) => {
        setFilters(prev => ({ ...prev, search, page: 1 }));
    };

    const handleStatusFilter = (status: Client['status'] | 'all') => {
        setFilters(prev => ({
            ...prev,
            status: status === 'all' ? undefined : status,
            page: 1
        }));
    };

    const handleRiskProfileFilter = (value: string) => {
        const riskProfile = value as Client['riskProfile'] | 'all';
        setFilters(prev => ({
            ...prev,
            riskProfile: riskProfile === 'all' ? undefined : riskProfile,
            page: 1
        }));
    };

    const handleSort = (sortBy: ClientFilters['sortBy']) => {
        setFilters(prev => ({
            ...prev,
            sortBy,
            sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc',
            page: 1
        }));
    };

    const handlePageChange = (page: number) => {
        setFilters(prev => ({ ...prev, page }));
    };

    const handleSelectClient = (clientId: string, checked: boolean) => {
        if (checked) {
            setSelectedClients(prev => [...prev, clientId]);
        } else {
            setSelectedClients(prev => prev.filter(id => id !== clientId));
        }
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked && data?.clients) {
            setSelectedClients(data.clients.map(client => client.id));
        } else {
            setSelectedClients([]);
        }
    };

    const handleBulkStatusUpdate = (status: Client['status']) => {
        if (selectedClients.length === 0) return;
        bulkUpdateMutation.mutate({ clientIds: selectedClients, status });
    };

    const handleExport = async () => {
        try {
            const blob = await exportClientsData(filters);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `clients-${new Date().toISOString().split('T')[0]}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);

            toast({
                title: 'Success',
                description: 'Client data exported successfully'
            });
        } catch {
            toast({
                title: 'Error',
                description: 'Failed to export client data',
                variant: 'destructive'
            });
        }
    };

    if (error) {
        return (
            <div className='p-6'>
                <div className='text-center'>
                    <h3 className='text-lg font-semibold text-red-600'>Error loading clients</h3>
                    <p className='text-gray-600'>Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='p-6 space-y-6'>
            <div>
                <h1 className='text-3xl font-bold'>Client Management</h1>
                <p className='text-gray-600'>Manage and monitor your client onboarding processes</p>
            </div>

            {/* Filters and Search */}
            <Card>
                <CardContent className='p-6'>
                    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                        <div className='flex flex-1 gap-4'>
                            <div className='relative flex-1 max-w-md'>
                                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400' />
                                <Input
                                    placeholder='Search clients...'
                                    className='pl-10'
                                    value={filters.search || ''}
                                    onChange={e => handleSearch(e.target.value)}
                                />
                            </div>
                            <Select
                                value={filters.status || 'all'}
                                onValueChange={handleStatusFilter}
                            >
                                <SelectTrigger className='w-[150px]'>
                                    <Filter className='h-4 w-4 mr-2' />
                                    <SelectValue placeholder='Status' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='all'>All Status</SelectItem>
                                    <SelectItem value='pending'>Pending</SelectItem>
                                    <SelectItem value='in_progress'>In Progress</SelectItem>
                                    <SelectItem value='completed'>Completed</SelectItem>
                                    <SelectItem value='rejected'>Rejected</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select
                                value={filters.riskProfile || 'all'}
                                onValueChange={handleRiskProfileFilter}
                            >
                                <SelectTrigger className='w-[150px]'>
                                    <SelectValue placeholder='Risk Profile' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='all'>All Risk Profiles</SelectItem>
                                    <SelectItem value='conservative'>Conservative</SelectItem>
                                    <SelectItem value='moderate'>Moderate</SelectItem>
                                    <SelectItem value='aggressive'>Aggressive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex gap-2'>
                            {selectedClients.length > 0 && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant='outline'>Actions ({selectedClients.length})</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => handleBulkStatusUpdate('pending')}>
                                            Mark as Pending
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleBulkStatusUpdate('in_progress')}>
                                            Mark as In Progress
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleBulkStatusUpdate('completed')}>
                                            Mark as Completed
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleBulkStatusUpdate('rejected')}>
                                            Mark as Rejected
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            <Button
                                variant='outline'
                                onClick={handleExport}
                            >
                                <Download className='h-4 w-4 mr-2' />
                                Export
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Clients Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Clients ({data?.total || 0})</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-12'>
                                    <Checkbox
                                        checked={data?.clients && selectedClients.length === data.clients.length}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead
                                    className='cursor-pointer hover:text-blue-600'
                                    onClick={() => handleSort('lastName')}
                                >
                                    Name
                                </TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Risk Profile</TableHead>
                                <TableHead>Account Value</TableHead>
                                <TableHead>Progress</TableHead>
                                <TableHead
                                    className='cursor-pointer hover:text-blue-600'
                                    onClick={() => handleSort('createdAt')}
                                >
                                    Created
                                </TableHead>
                                <TableHead className='w-12'></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Skeleton className='h-4 w-4' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-32' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-48' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-32' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-20' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-20' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-24' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-16' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-20' />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className='h-4 w-4' />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : data?.clients?.length ? (
                                data.clients.map(client => (
                                    <TableRow key={client.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedClients.includes(client.id)}
                                                onCheckedChange={checked =>
                                                    handleSelectClient(client.id, checked as boolean)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className='font-medium'>
                                            <Link
                                                to={`/clients/${client.id}`}
                                                className='text-blue-600 hover:text-blue-800'
                                            >
                                                {client.firstName} {client.lastName}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>{client.phone}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant='outline'
                                                className={`${statusColors[client.status]} text-white`}
                                            >
                                                {statusLabels[client.status]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {client.riskProfile ? (
                                                <Badge className={riskProfileColors[client.riskProfile]}>
                                                    {client.riskProfile}
                                                </Badge>
                                            ) : (
                                                <span className='text-gray-400'>-</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {client.accountValue ? (
                                                `$${client.accountValue.toLocaleString()}`
                                            ) : (
                                                <span className='text-gray-400'>-</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-16 bg-gray-200 rounded-full h-2'>
                                                    <div
                                                        className='bg-blue-500 h-2 rounded-full transition-all'
                                                        style={{ width: `${client.progress}%` }}
                                                    />
                                                </div>
                                                <span className='text-sm text-gray-600'>{client.progress}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{new Date(client.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant='ghost'
                                                        className='h-8 w-8 p-0'
                                                    >
                                                        <MoreHorizontal className='h-4 w-4' />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align='end'>
                                                    <DropdownMenuItem asChild>
                                                        <Link to={`/clients/${client.id}`}>
                                                            <Eye className='mr-2 h-4 w-4' />
                                                            View Details
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            updateStatusMutation.mutate({
                                                                clientId: client.id,
                                                                status:
                                                                    client.status === 'completed'
                                                                        ? 'in_progress'
                                                                        : 'completed'
                                                            })
                                                        }
                                                    >
                                                        <Edit className='mr-2 h-4 w-4' />
                                                        Update Status
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className='text-red-600'
                                                        onClick={() =>
                                                            updateStatusMutation.mutate({
                                                                clientId: client.id,
                                                                status: 'rejected'
                                                            })
                                                        }
                                                    >
                                                        <Trash2 className='mr-2 h-4 w-4' />
                                                        Reject
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={10}
                                        className='text-center py-8 text-gray-500'
                                    >
                                        No clients found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    {data && data.totalPages > 1 && (
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='text-sm text-gray-500'>
                                Showing {(data.page - 1) * data.limit + 1} to{' '}
                                {Math.min(data.page * data.limit, data.total)} of {data.total} results
                            </div>
                            <div className='flex items-center gap-2'>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    onClick={() => handlePageChange(data.page - 1)}
                                    disabled={data.page <= 1}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    onClick={() => handlePageChange(data.page + 1)}
                                    disabled={data.page >= data.totalPages}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
