import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BarChart3 } from 'lucide-react';
import type { ClientStatusCount } from '@/types/client';

const COLORS = {
    pending: '#f59e0b',
    in_progress: '#3b82f6',
    completed: '#10b981',
    rejected: '#ef4444'
};

const STATUS_LABELS = {
    pending: 'Pending',
    in_progress: 'In Progress',
    completed: 'Completed',
    rejected: 'Rejected'
};

interface ClientStatusChartProps {
    data: ClientStatusCount[];
}

export const ClientStatusChart = ({ data }: ClientStatusChartProps) => {
    const chartData = data.map(item => ({
        name: STATUS_LABELS[item.status],
        value: item.count,
        percentage: item.percentage,
        status: item.status
    }));

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className='bg-background border border-border rounded-lg shadow-lg p-3'>
                    <p className='font-medium'>{data.name}</p>
                    <p className='text-sm text-muted-foreground'>Count: {data.value}</p>
                    <p className='text-sm text-muted-foreground'>Percentage: {data.percentage.toFixed(1)}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <BarChart3 className='h-5 w-5' />
                    Client Status Distribution
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='h-80'>
                    <ResponsiveContainer
                        width='100%'
                        height='100%'
                    >
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx='50%'
                                cy='50%'
                                labelLine={false}
                                label={(props: any) => `${props.name}: ${props.percentage.toFixed(1)}%`}
                                outerRadius={80}
                                fill='#8884d8'
                                dataKey='value'
                            >
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[entry.status as keyof typeof COLORS]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};
