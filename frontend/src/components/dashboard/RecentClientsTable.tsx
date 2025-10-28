import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import type { Client } from '@/types/client';

const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    in_progress: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    completed: 'bg-green-100 text-green-800 hover:bg-green-200',
    rejected: 'bg-red-100 text-red-800 hover:bg-red-200'
};

const statusLabels = {
    pending: 'Pending',
    in_progress: 'In Progress',
    completed: 'Completed',
    rejected: 'Rejected'
};

interface RecentClientsTableProps {
    clients: Client[];
}

export const RecentClientsTable = ({ clients }: RecentClientsTableProps) => {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='flex items-center gap-2'>
                    <Users className='h-5 w-5' />
                    Recent Clients
                </CardTitle>
                <Button
                    asChild
                    variant='outline'
                    size='sm'
                >
                    <Link to='/clients'>
                        View All
                        <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Progress</TableHead>
                            <TableHead>Updated</TableHead>
                            <TableHead className='w-[100px]'>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients.map(client => (
                            <TableRow key={client.id}>
                                <TableCell>
                                    <div>
                                        <div className='font-medium'>
                                            {client.firstName} {client.lastName}
                                        </div>
                                        <div className='text-sm text-muted-foreground'>{client.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant='secondary'
                                        className={statusColors[client.status]}
                                    >
                                        {statusLabels[client.status]}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className='w-full'>
                                        <div className='flex items-center justify-between text-sm mb-1'>
                                            <span>{client.progress}%</span>
                                        </div>
                                        <Progress
                                            value={client.progress}
                                            className='h-2'
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className='text-sm text-muted-foreground'>
                                    {formatDistanceToNow(new Date(client.updatedAt), { addSuffix: true })}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        asChild
                                        variant='ghost'
                                        size='sm'
                                    >
                                        <Link to={`/clients/${client.id}`}>
                                            <Eye className='h-4 w-4' />
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
