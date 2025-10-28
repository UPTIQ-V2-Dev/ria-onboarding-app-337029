import type { PaginatedResponse } from '@/types/api';
import type { AuthResponse, User } from '@/types/user';
import type { Client } from '@/types/client';

export const mockUser: User = {
    id: 1,
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockAdminUser: User = {
    id: 2,
    email: 'admin@example.com',
    name: 'Jane Smith',
    role: 'ADMIN',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockUsers: User[] = [mockUser, mockAdminUser];

export const mockAuthResponse: AuthResponse = {
    user: mockUser,
    tokens: {
        access: {
            token: 'mock-access-token',
            expires: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        },
        refresh: {
            token: 'mock-refresh-token',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }
    }
};

export const mockPaginatedUsers: PaginatedResponse<User> = {
    results: mockUsers,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 2
};

export const mockClients: Client[] = [
    {
        id: 'client_1',
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@email.com',
        phone: '+1 (555) 123-4567',
        status: 'completed',
        createdAt: '2024-01-10T09:00:00Z',
        updatedAt: '2024-01-16T16:00:00Z',
        progress: 100,
        riskProfile: 'moderate',
        accountValue: 125000,
        firmId: 'firm_1'
    },
    {
        id: 'client_2',
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@email.com',
        phone: '+1 (555) 234-5678',
        status: 'in_progress',
        createdAt: '2024-01-12T10:30:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        progress: 75,
        riskProfile: 'conservative',
        accountValue: 85000,
        firmId: 'firm_1'
    },
    {
        id: 'client_3',
        firstName: 'Carol',
        lastName: 'Davis',
        email: 'carol.davis@email.com',
        phone: '+1 (555) 345-6789',
        status: 'pending',
        createdAt: '2024-01-15T08:45:00Z',
        updatedAt: '2024-01-15T08:45:00Z',
        progress: 25,
        riskProfile: 'aggressive',
        accountValue: 250000,
        firmId: 'firm_1'
    },
    {
        id: 'client_4',
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@email.com',
        phone: '+1 (555) 456-7890',
        status: 'completed',
        createdAt: '2024-01-08T11:15:00Z',
        updatedAt: '2024-01-14T15:20:00Z',
        progress: 100,
        riskProfile: 'moderate',
        accountValue: 180000,
        firmId: 'firm_1'
    },
    {
        id: 'client_5',
        firstName: 'Eva',
        lastName: 'Brown',
        email: 'eva.brown@email.com',
        phone: '+1 (555) 567-8901',
        status: 'in_progress',
        createdAt: '2024-01-18T13:20:00Z',
        updatedAt: '2024-01-21T10:15:00Z',
        progress: 60,
        riskProfile: 'conservative',
        accountValue: 95000,
        firmId: 'firm_1'
    },
    {
        id: 'client_6',
        firstName: 'Frank',
        lastName: 'Miller',
        email: 'frank.miller@email.com',
        phone: '+1 (555) 678-9012',
        status: 'rejected',
        createdAt: '2024-01-05T16:30:00Z',
        updatedAt: '2024-01-06T09:45:00Z',
        progress: 40,
        firmId: 'firm_1'
    }
];
