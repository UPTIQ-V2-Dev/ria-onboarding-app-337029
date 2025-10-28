import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';
import { UserPlus, CheckCircle, Upload, Shield, Clock } from 'lucide-react';
import type { ActivityItem } from '@/types/client';

const activityIcons = {
    client_registered: UserPlus,
    onboarding_completed: CheckCircle,
    document_uploaded: Upload,
    compliance_approved: Shield
};

const activityColors = {
    client_registered: 'bg-blue-500',
    onboarding_completed: 'bg-green-500',
    document_uploaded: 'bg-orange-500',
    compliance_approved: 'bg-purple-500'
};

interface RecentActivityProps {
    activities: ActivityItem[];
}

export const RecentActivity = ({ activities }: RecentActivityProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <Clock className='h-5 w-5' />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className='h-80'>
                    <div className='space-y-4'>
                        {activities.map((activity, index) => {
                            const Icon = activityIcons[activity.type];
                            const colorClass = activityColors[activity.type];

                            return (
                                <div
                                    key={activity.id}
                                    className='flex items-start gap-3'
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full ${colorClass} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <Icon className='h-4 w-4 text-white' />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-sm font-medium'>{activity.clientName}</p>
                                            <span className='text-xs text-muted-foreground'>
                                                {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                                            </span>
                                        </div>
                                        <p className='text-xs text-muted-foreground'>{activity.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
