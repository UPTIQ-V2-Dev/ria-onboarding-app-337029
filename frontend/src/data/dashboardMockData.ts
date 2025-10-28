import type { DashboardStats, Client, ClientStatusCount } from '@/types/client';

export const mockDashboardStats: DashboardStats = {
    totalClients: 156,
    pendingOnboardings: 23,
    completedThisMonth: 12,
    averageCompletionTime: 5.2,
    recentActivity: [
        {
            id: '1',
            type: 'client_registered',
            clientName: 'Sarah Johnson',
            timestamp: '2024-10-28T14:30:00Z',
            description: 'New client registration completed'
        },
        {
            id: '2',
            type: 'onboarding_completed',
            clientName: 'Michael Chen',
            timestamp: '2024-10-28T13:15:00Z',
            description: 'Client onboarding process completed'
        },
        {
            id: '3',
            type: 'document_uploaded',
            clientName: 'Emily Davis',
            timestamp: '2024-10-28T11:45:00Z',
            description: 'Identity documents uploaded and verified'
        },
        {
            id: '4',
            type: 'compliance_approved',
            clientName: 'Robert Wilson',
            timestamp: '2024-10-28T10:20:00Z',
            description: 'Compliance review approved'
        },
        {
            id: '5',
            type: 'client_registered',
            clientName: 'Lisa Thompson',
            timestamp: '2024-10-27T16:30:00Z',
            description: 'New client registration completed'
        }
    ]
};

export const mockRecentClients: Client[] = [
    {
        id: '1',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1-555-0123',
        status: 'in_progress',
        createdAt: '2024-10-28T14:30:00Z',
        updatedAt: '2024-10-28T14:30:00Z',
        progress: 65,
        riskProfile: 'moderate',
        firmId: 'firm-1'
    },
    {
        id: '2',
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'michael.chen@email.com',
        phone: '+1-555-0124',
        status: 'completed',
        createdAt: '2024-10-27T09:15:00Z',
        updatedAt: '2024-10-28T13:15:00Z',
        progress: 100,
        riskProfile: 'aggressive',
        accountValue: 150000,
        firmId: 'firm-1'
    },
    {
        id: '3',
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily.davis@email.com',
        phone: '+1-555-0125',
        status: 'in_progress',
        createdAt: '2024-10-26T11:45:00Z',
        updatedAt: '2024-10-28T11:45:00Z',
        progress: 80,
        riskProfile: 'conservative',
        firmId: 'firm-1'
    },
    {
        id: '4',
        firstName: 'Robert',
        lastName: 'Wilson',
        email: 'robert.wilson@email.com',
        phone: '+1-555-0126',
        status: 'pending',
        createdAt: '2024-10-25T10:20:00Z',
        updatedAt: '2024-10-28T10:20:00Z',
        progress: 25,
        firmId: 'firm-1'
    },
    {
        id: '5',
        firstName: 'Lisa',
        lastName: 'Thompson',
        email: 'lisa.thompson@email.com',
        phone: '+1-555-0127',
        status: 'in_progress',
        createdAt: '2024-10-24T16:30:00Z',
        updatedAt: '2024-10-27T16:30:00Z',
        progress: 45,
        riskProfile: 'moderate',
        firmId: 'firm-1'
    }
];

export const mockClientStatusCounts: ClientStatusCount[] = [
    { status: 'pending', count: 23, percentage: 14.7 },
    { status: 'in_progress', count: 45, percentage: 28.8 },
    { status: 'completed', count: 78, percentage: 50.0 },
    { status: 'rejected', count: 10, percentage: 6.4 }
];
