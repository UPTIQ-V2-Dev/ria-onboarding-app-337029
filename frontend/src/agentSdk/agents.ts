import { type ZodSchema, z } from 'zod';

type TriggerEvent =
    | {
          type: 'async';
          name: string;
          description: string;
      }
    | {
          type: 'sync';
          name: string;
          description: string;
          outputSchema: ZodSchema;
      };

export type AgentConfig = {
    id: string;
    name: string;
    description: string;
    triggerEvents: TriggerEvent[];
    config: {
        appId: string;
        accountId: string;
        widgetKey: string;
    };
};

const treasuryRecommendationSchema = z.object({
    recommendations: z.array(
        z.object({
            product: z.string(),
            description: z.string(),
            reasoning: z.string(),
            priority: z.enum(['high', 'medium', 'low'])
        })
    )
});

export const AGENT_CONFIGS: AgentConfig[] = [
    {
        id: '37cff143-f7d2-4204-878f-020620e7697e',
        name: 'Treasury Solution Advisor',
        description: 'An AI agent designed to analyze spending patterns and recommend optimal treasury products.',
        triggerEvents: [
            {
                type: 'sync',
                name: 'Bank-Statement-Uploaded',
                description: 'Analyze uploaded bank statements and recommend treasury products',
                outputSchema: treasuryRecommendationSchema
            }
        ],
        config: {
            appId: 'd6e8f2b5-0865-485a-a63e-d083fad36462',
            accountId: '55f2743c-dc89-44ef-b653-4a1c11cca5aa',
            widgetKey: 'EN0WR1DfmOnYTFwUzQjPEICvgXYdVDbOAzo12Xmj'
        }
    }
];
