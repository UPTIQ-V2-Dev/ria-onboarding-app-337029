import { api } from '@/lib/api';
import type { Client } from '@/types/client';

export interface ClientFilters {
    status?: Client['status'];
    search?: string;
    riskProfile?: Client['riskProfile'];
    sortBy?: 'createdAt' | 'updatedAt' | 'lastName' | 'progress';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}

export interface ClientListResponse {
    clients: Client[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface UpdateClientStatusInput {
    status: Client['status'];
    notes?: string;
}

export interface ClientAccountSummary {
    id: string;
    type: string;
    accountNumber: string;
    balance: number;
    status: 'active' | 'pending' | 'closed';
    createdAt: string;
}

export interface ClientDetailResponse extends Client {
    accounts: ClientAccountSummary[];
    totalAssets: number;
    lastActivity: string;
    onboardingCompletedAt?: string;
    assignedAdvisor?: {
        id: string;
        name: string;
        email: string;
    };
    notes: string[];
}

export const getClients = async (filters?: ClientFilters): Promise<ClientListResponse> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClients } = await import('@/data/mockData');

        let filteredClients = [...mockClients];

        // Apply filters
        if (filters?.status) {
            filteredClients = filteredClients.filter(client => client.status === filters.status);
        }

        if (filters?.search) {
            const searchTerm = filters.search.toLowerCase();
            filteredClients = filteredClients.filter(
                client =>
                    client.firstName.toLowerCase().includes(searchTerm) ||
                    client.lastName.toLowerCase().includes(searchTerm) ||
                    client.email.toLowerCase().includes(searchTerm)
            );
        }

        if (filters?.riskProfile) {
            filteredClients = filteredClients.filter(client => client.riskProfile === filters.riskProfile);
        }

        // Apply sorting
        if (filters?.sortBy) {
            filteredClients.sort((a, b) => {
                const aValue = a[filters.sortBy!];
                const bValue = b[filters.sortBy!];

                if (filters.sortOrder === 'desc') {
                    return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
                }
                return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            });
        }

        // Apply pagination
        const page = filters?.page || 1;
        const limit = filters?.limit || 10;
        const startIndex = (page - 1) * limit;
        const paginatedClients = filteredClients.slice(startIndex, startIndex + limit);

        return {
            clients: paginatedClients,
            total: filteredClients.length,
            page,
            limit,
            totalPages: Math.ceil(filteredClients.length / limit)
        };
    }

    const queryParams = new URLSearchParams();
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.search) queryParams.append('search', filters.search);
    if (filters?.riskProfile) queryParams.append('riskProfile', filters.riskProfile);
    if (filters?.sortBy) queryParams.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) queryParams.append('sortOrder', filters.sortOrder);
    if (filters?.page) queryParams.append('page', filters.page.toString());
    if (filters?.limit) queryParams.append('limit', filters.limit.toString());

    const response = await api.get<ClientListResponse>(`/clients?${queryParams}`);
    return response.data;
};

export const getClientById = async (clientId: string): Promise<ClientDetailResponse> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClients } = await import('@/data/mockData');
        const client = mockClients.find(c => c.id === clientId);

        if (!client) {
            throw new Error('Client not found');
        }

        // Mock client detail data
        return {
            ...client,
            accounts: [
                {
                    id: 'acc_1',
                    type: 'Individual Taxable',
                    accountNumber: '****1234',
                    balance: 125000,
                    status: 'active',
                    createdAt: '2024-01-15T10:00:00Z'
                },
                {
                    id: 'acc_2',
                    type: 'Traditional IRA',
                    accountNumber: '****5678',
                    balance: 85000,
                    status: 'active',
                    createdAt: '2024-01-15T10:05:00Z'
                }
            ],
            totalAssets: 210000,
            lastActivity: '2024-01-20T14:30:00Z',
            onboardingCompletedAt: client.status === 'completed' ? '2024-01-16T16:00:00Z' : undefined,
            assignedAdvisor: {
                id: 'adv_1',
                name: 'Sarah Johnson',
                email: 'sarah.johnson@firm.com'
            },
            notes: [
                'Client prefers conservative investment approach',
                'Scheduled quarterly review meeting for Q2',
                'Interested in ESG investment options'
            ]
        };
    }

    const response = await api.get<ClientDetailResponse>(`/clients/${clientId}`);
    return response.data;
};

export const updateClientStatus = async (clientId: string, input: UpdateClientStatusInput): Promise<Client> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClients } = await import('@/data/mockData');
        const clientIndex = mockClients.findIndex(c => c.id === clientId);

        if (clientIndex === -1) {
            throw new Error('Client not found');
        }

        const updatedClient = {
            ...mockClients[clientIndex],
            status: input.status,
            updatedAt: new Date().toISOString()
        };

        mockClients[clientIndex] = updatedClient;
        return updatedClient;
    }

    const response = await api.put<Client>(`/clients/${clientId}/status`, input);
    return response.data;
};

export const deleteClient = async (clientId: string): Promise<void> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClients } = await import('@/data/mockData');
        const clientIndex = mockClients.findIndex(c => c.id === clientId);

        if (clientIndex === -1) {
            throw new Error('Client not found');
        }

        mockClients.splice(clientIndex, 1);
        return;
    }

    await api.delete(`/clients/${clientId}`);
};

export const bulkUpdateClientStatus = async (clientIds: string[], status: Client['status']): Promise<void> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const { mockClients } = await import('@/data/mockData');

        clientIds.forEach(clientId => {
            const clientIndex = mockClients.findIndex(c => c.id === clientId);
            if (clientIndex !== -1) {
                mockClients[clientIndex] = {
                    ...mockClients[clientIndex],
                    status,
                    updatedAt: new Date().toISOString()
                };
            }
        });

        return;
    }

    await api.put('/clients/bulk-status', { clientIds, status });
};

export const exportClientsData = async (filters?: ClientFilters): Promise<Blob> => {
    const queryParams = new URLSearchParams();
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.search) queryParams.append('search', filters.search);
    if (filters?.riskProfile) queryParams.append('riskProfile', filters.riskProfile);

    const response = await api.get(`/clients/export?${queryParams}`, {
        responseType: 'blob'
    });

    return response.data;
};
