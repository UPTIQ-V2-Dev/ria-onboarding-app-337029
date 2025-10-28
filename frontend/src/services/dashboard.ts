import { api } from '@/lib/api';
import { mockApiDelay } from '@/lib/utils';
import { mockDashboardStats, mockRecentClients, mockClientStatusCounts } from '@/data/dashboardMockData';
import type { DashboardStats, Client, ClientStatusCount } from '@/types/client';

export const dashboardService = {
    getStats: async (): Promise<DashboardStats> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getStats ---');
            await mockApiDelay();
            return mockDashboardStats;
        }
        const response = await api.get('/dashboard/stats');
        return response.data;
    },

    getRecentClients: async (): Promise<Client[]> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getRecentClients ---');
            await mockApiDelay();
            return mockRecentClients;
        }
        const response = await api.get('/clients/recent');
        return response.data;
    },

    getClientStatusCounts: async (): Promise<ClientStatusCount[]> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getClientStatusCounts ---');
            await mockApiDelay();
            return mockClientStatusCounts;
        }
        const response = await api.get('/dashboard/client-status-counts');
        return response.data;
    }
};
