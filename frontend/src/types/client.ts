export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: 'pending' | 'in_progress' | 'completed' | 'rejected';
    createdAt: string;
    updatedAt: string;
    progress: number;
    riskProfile?: 'conservative' | 'moderate' | 'aggressive';
    accountValue?: number;
    firmId: string;
}

export interface DashboardStats {
    totalClients: number;
    pendingOnboardings: number;
    completedThisMonth: number;
    averageCompletionTime: number;
    recentActivity: ActivityItem[];
}

export interface ActivityItem {
    id: string;
    type: 'client_registered' | 'onboarding_completed' | 'document_uploaded' | 'compliance_approved';
    clientName: string;
    timestamp: string;
    description: string;
}

export interface ClientStatusCount {
    status: Client['status'];
    count: number;
    percentage: number;
}
