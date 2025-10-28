import { useQuery } from '@tanstack/react-query';
import { Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';

import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { ClientStatusChart } from '@/components/dashboard/ClientStatusChart';
import { RecentClientsTable } from '@/components/dashboard/RecentClientsTable';
import { dashboardService } from '@/services/dashboard';

export const DashboardPage = () => {
    const { data: stats, isLoading: statsLoading } = useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: dashboardService.getStats
    });

    const { data: recentClients, isLoading: clientsLoading } = useQuery({
        queryKey: ['recent-clients'],
        queryFn: dashboardService.getRecentClients
    });

    const { data: statusCounts, isLoading: statusLoading } = useQuery({
        queryKey: ['client-status-counts'],
        queryFn: dashboardService.getClientStatusCounts
    });

    if (statsLoading || clientsLoading || statusLoading) {
        return (
            <div className='space-y-6'>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className='h-32 bg-muted animate-pulse rounded-lg'
                        />
                    ))}
                </div>
                <div className='grid gap-6 md:grid-cols-2'>
                    <div className='h-96 bg-muted animate-pulse rounded-lg' />
                    <div className='h-96 bg-muted animate-pulse rounded-lg' />
                </div>
                <div className='h-96 bg-muted animate-pulse rounded-lg' />
            </div>
        );
    }

    if (!stats || !recentClients || !statusCounts) {
        return (
            <div className='flex items-center justify-center h-96'>
                <p className='text-muted-foreground'>Failed to load dashboard data</p>
            </div>
        );
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
                    <p className='text-muted-foreground'>
                        Welcome back! Here's what's happening with your client onboarding.
                    </p>
                </div>
            </div>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <StatsCard
                    title='Total Clients'
                    value={stats.totalClients}
                    icon={Users}
                    trend={{ value: 12, isPositive: true }}
                />
                <StatsCard
                    title='Pending Onboardings'
                    value={stats.pendingOnboardings}
                    icon={Clock}
                    description='Awaiting completion'
                />
                <StatsCard
                    title='Completed This Month'
                    value={stats.completedThisMonth}
                    icon={CheckCircle}
                    trend={{ value: 8, isPositive: true }}
                />
                <StatsCard
                    title='Avg. Completion Time'
                    value={`${stats.averageCompletionTime} days`}
                    icon={TrendingUp}
                    trend={{ value: -15, isPositive: true }}
                />
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
                <ClientStatusChart data={statusCounts} />
                <RecentActivity activities={stats.recentActivity} />
            </div>

            <RecentClientsTable clients={recentClients} />
        </div>
    );
};
