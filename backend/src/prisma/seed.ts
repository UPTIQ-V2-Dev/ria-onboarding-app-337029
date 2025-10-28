import { Role } from '../config/constants.ts';
import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            password: adminPassword,
            role: Role.ADMIN,
            isEmailVerified: true
        }
    });

    console.log('✅ Created admin user:', admin.email);

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 12);
    const regularUser = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'John Doe',
            password: userPassword,
            role: Role.USER,
            isEmailVerified: true
        }
    });

    console.log('✅ Created regular user:', regularUser.email);

    // Create sample clients for the admin user
    const sampleClients = [
        {
            firstName: 'Sarah',
            lastName: 'Johnson',
            email: 'sarah.johnson@email.com',
            phone: '+1-555-0123',
            status: 'in_progress',
            progress: 65,
            riskProfile: 'moderate',
            accountValue: 50000,
            firmId: 'firm-1',
            userId: admin.id
        },
        {
            firstName: 'Michael',
            lastName: 'Davis',
            email: 'michael.davis@email.com',
            phone: '+1-555-0124',
            status: 'pending',
            progress: 10,
            riskProfile: 'conservative',
            accountValue: 25000,
            firmId: 'firm-1',
            userId: admin.id
        },
        {
            firstName: 'Jennifer',
            lastName: 'Wilson',
            email: 'jennifer.wilson@email.com',
            phone: '+1-555-0125',
            status: 'completed',
            progress: 100,
            riskProfile: 'aggressive',
            accountValue: 100000,
            firmId: 'firm-2',
            userId: admin.id
        }
    ];

    const createdClients = [];
    for (const clientData of sampleClients) {
        const client = await prisma.client.upsert({
            where: { email: clientData.email },
            update: {},
            create: clientData
        });
        createdClients.push(client);
        console.log('✅ Created client:', client.email);
    }

    // Create sample investment objectives for some clients
    const investmentObjectivesData = [
        {
            clientId: createdClients[0].id, // Sarah Johnson
            primaryGoal: 'growth',
            specificGoals: ['Retirement', 'Long-term wealth building'],
            targetAmount: 500000,
            timeHorizon: 20,
            monthlyContribution: 1500,
            riskComfort: 7
        },
        {
            clientId: createdClients[2].id, // Jennifer Wilson
            primaryGoal: 'income',
            specificGoals: ['Generate passive income', 'Preserve capital'],
            targetAmount: 250000,
            timeHorizon: 10,
            monthlyContribution: 3000,
            riskComfort: 8
        }
    ];

    for (const investmentData of investmentObjectivesData) {
        const investmentObjectives = await prisma.investmentObjectives.upsert({
            where: { clientId: investmentData.clientId },
            update: {},
            create: investmentData
        });
        console.log('✅ Created investment objectives for client ID:', investmentObjectives.clientId);
    }

    // Create sample activities
    const sampleActivities = [
        {
            type: 'client_registered',
            clientName: 'Sarah Johnson',
            description: 'New client registration completed',
            clientId: null
        },
        {
            type: 'document_uploaded',
            clientName: 'Michael Davis',
            description: 'Identity documents uploaded and pending review',
            clientId: null
        },
        {
            type: 'kyc_completed',
            clientName: 'Jennifer Wilson',
            description: 'KYC verification process completed successfully',
            clientId: null
        },
        {
            type: 'account_funded',
            clientName: 'Jennifer Wilson',
            description: 'Initial account funding of $100,000 received',
            clientId: null
        },
        {
            type: 'risk_assessment',
            clientName: 'Sarah Johnson',
            description: 'Risk profile assessment completed - moderate risk tolerance',
            clientId: null
        }
    ];

    for (const activityData of sampleActivities) {
        const activity = await prisma.activity.upsert({
            where: { id: `activity-${activityData.type}-${activityData.clientName.replace(' ', '').toLowerCase()}` },
            update: {},
            create: {
                ...activityData,
                id: `activity-${activityData.type}-${activityData.clientName.replace(' ', '').toLowerCase()}`
            }
        });
        console.log('✅ Created activity:', activity.type, 'for', activity.clientName);
    }

    // Create document types
    const documentTypes = [
        {
            id: 'id-verification',
            name: 'ID Verification',
            description: "Government-issued photo ID (driver's license, passport, state ID)",
            required: true,
            category: 'identity',
            acceptedFormats: 'image/jpeg,image/png,application/pdf',
            maxFileSize: 5242880 // 5MB
        },
        {
            id: 'proof-of-address',
            name: 'Proof of Address',
            description: 'Utility bill, bank statement, or lease agreement dated within 3 months',
            required: true,
            category: 'identity',
            acceptedFormats: 'image/jpeg,image/png,application/pdf',
            maxFileSize: 5242880 // 5MB
        },
        {
            id: 'bank-statement',
            name: 'Bank Statement',
            description: 'Recent bank statements (last 3 months)',
            required: true,
            category: 'financial',
            acceptedFormats: 'application/pdf,image/jpeg,image/png',
            maxFileSize: 10485760 // 10MB
        },
        {
            id: 'tax-return',
            name: 'Tax Return',
            description: 'Most recent tax return or tax transcript',
            required: false,
            category: 'financial',
            acceptedFormats: 'application/pdf',
            maxFileSize: 10485760 // 10MB
        },
        {
            id: 'employment-verification',
            name: 'Employment Verification',
            description: 'Pay stubs, employment letter, or contract',
            required: false,
            category: 'financial',
            acceptedFormats: 'application/pdf,image/jpeg,image/png',
            maxFileSize: 5242880 // 5MB
        },
        {
            id: 'investment-account',
            name: 'Investment Account Statement',
            description: 'Statements from other investment accounts',
            required: false,
            category: 'financial',
            acceptedFormats: 'application/pdf,image/jpeg,image/png',
            maxFileSize: 10485760 // 10MB
        },
        {
            id: 'w9-form',
            name: 'W-9 Form',
            description: 'Completed and signed W-9 tax form',
            required: true,
            category: 'tax',
            acceptedFormats: 'application/pdf',
            maxFileSize: 5242880 // 5MB
        }
    ];

    for (const docTypeData of documentTypes) {
        const docType = await prisma.documentType.upsert({
            where: { id: docTypeData.id },
            update: {},
            create: docTypeData
        });
        console.log('✅ Created document type:', docType.name);
    }

    // Create account types
    const accountTypes = [
        {
            id: 'traditional-ira',
            name: 'Traditional IRA',
            description: 'Tax-deferred retirement account that allows you to contribute pre-tax dollars',
            taxAdvantaged: true,
            minimumBalance: 1000,
            annualFee: 25,
            transactionFee: 0
        },
        {
            id: 'roth-ira',
            name: 'Roth IRA',
            description: 'Tax-free retirement account funded with after-tax dollars',
            taxAdvantaged: true,
            minimumBalance: 1000,
            annualFee: 25,
            transactionFee: 0
        },
        {
            id: 'taxable-brokerage',
            name: 'Taxable Brokerage',
            description: 'Standard investment account with no contribution limits',
            taxAdvantaged: false,
            minimumBalance: 0,
            annualFee: 0,
            transactionFee: 0
        },
        {
            id: '401k-rollover',
            name: '401(k) Rollover IRA',
            description: 'IRA account specifically for rolling over 401(k) funds',
            taxAdvantaged: true,
            minimumBalance: 0,
            annualFee: 25,
            transactionFee: 0
        },
        {
            id: 'sep-ira',
            name: 'SEP IRA',
            description: 'Simplified Employee Pension IRA for self-employed individuals and small business owners',
            taxAdvantaged: true,
            minimumBalance: 0,
            annualFee: 25,
            transactionFee: 0
        },
        {
            id: 'simple-ira',
            name: 'SIMPLE IRA',
            description: 'Savings Incentive Match Plan for Employees IRA for small businesses',
            taxAdvantaged: true,
            minimumBalance: 0,
            annualFee: 25,
            transactionFee: 0
        },
        {
            id: 'trust-account',
            name: 'Trust Account',
            description: 'Investment account for trust entities and estate planning',
            taxAdvantaged: false,
            minimumBalance: 10000,
            annualFee: 100,
            transactionFee: 0
        },
        {
            id: 'custodial-account',
            name: 'Custodial Account (UGMA/UTMA)',
            description: 'Investment account for minors managed by a custodian',
            taxAdvantaged: false,
            minimumBalance: 500,
            annualFee: 25,
            transactionFee: 0
        }
    ];

    for (const accountTypeData of accountTypes) {
        const accountType = await prisma.accountType.upsert({
            where: { id: accountTypeData.id },
            update: {},
            create: accountTypeData
        });
        console.log('✅ Created account type:', accountType.name);
    }

    // Create compliance disclosures
    const disclosures = [
        {
            id: 'investment_risks',
            title: 'Investment Risk Disclosure',
            content:
                'Investment involves risk, including potential loss of principal. Past performance does not guarantee future results. All investments carry some level of risk, and there is always the potential that you may lose money when you invest. You should carefully consider your risk tolerance and investment objectives before making any investment decisions.',
            required: true
        },
        {
            id: 'privacy_policy',
            title: 'Privacy Policy',
            content:
                'This privacy policy describes how we collect and use your personal information. We collect personal information that you provide to us when you register for an account, use our services, or contact us. We use this information to provide, maintain, and improve our services, process transactions, and communicate with you.',
            required: true
        },
        {
            id: 'terms_of_service',
            title: 'Terms of Service',
            content:
                'These terms of service govern your use of our platform and services. By using our services, you agree to these terms. Our services are provided "as is" without warranties of any kind. We reserve the right to modify these terms at any time with notice to users.',
            required: true
        },
        {
            id: 'fee_disclosure',
            title: 'Fee Disclosure Statement',
            content:
                'This document outlines all fees associated with your account and investment services. Management fees, transaction fees, and other charges may apply. Please review this document carefully and contact us if you have any questions about the fees associated with your account.',
            required: true
        },
        {
            id: 'market_volatility',
            title: 'Market Volatility Notice',
            content:
                'Securities markets can be volatile and investment values may fluctuate significantly. Market volatility can result from various factors including economic conditions, political events, and market sentiment. You should be prepared for the possibility that your investments may lose value during periods of market volatility.',
            required: true
        },
        {
            id: 'regulatory_disclosure',
            title: 'Regulatory Disclosure',
            content:
                'Our firm is registered with the Securities and Exchange Commission (SEC) and is subject to regulatory oversight. We are required to act in your best interest when providing investment advice. This disclosure provides information about our regulatory status, business practices, and potential conflicts of interest.',
            required: true
        },
        {
            id: 'electronic_communications',
            title: 'Electronic Communications Agreement',
            content:
                'By agreeing to this electronic communications consent, you agree to receive account statements, confirmations, legal notices, and other communications electronically rather than in paper format. You can withdraw your consent at any time by contacting us.',
            required: false
        },
        {
            id: 'data_sharing',
            title: 'Data Sharing and Third-Party Services',
            content:
                'We may share your information with third-party service providers to help us operate our business and serve you better. These providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.',
            required: false
        }
    ];

    for (const disclosureData of disclosures) {
        const disclosure = await prisma.disclosure.upsert({
            where: { id: disclosureData.id },
            update: {},
            create: disclosureData
        });
        console.log('✅ Created disclosure:', disclosure.title);
    }

    // Create sample compliance agreements for some clients
    const complianceAgreements = [
        {
            clientId: createdClients[2].id, // Jennifer Wilson (completed client)
            disclosureId: 'investment_risks',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-15T10:00:00Z')
        },
        {
            clientId: createdClients[2].id, // Jennifer Wilson
            disclosureId: 'privacy_policy',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-15T10:00:00Z')
        },
        {
            clientId: createdClients[2].id, // Jennifer Wilson
            disclosureId: 'terms_of_service',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-15T10:00:00Z')
        },
        {
            clientId: createdClients[2].id, // Jennifer Wilson
            disclosureId: 'fee_disclosure',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-15T10:00:00Z')
        },
        {
            clientId: createdClients[0].id, // Sarah Johnson (in progress)
            disclosureId: 'investment_risks',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-20T14:30:00Z')
        },
        {
            clientId: createdClients[0].id, // Sarah Johnson
            disclosureId: 'privacy_policy',
            acknowledged: true,
            acknowledgedAt: new Date('2024-10-20T14:30:00Z')
        }
    ];

    for (const agreementData of complianceAgreements) {
        const agreement = await prisma.complianceAgreement.upsert({
            where: {
                clientId_disclosureId: {
                    clientId: agreementData.clientId,
                    disclosureId: agreementData.disclosureId
                }
            },
            update: {},
            create: agreementData
        });
        console.log(
            '✅ Created compliance agreement for client:',
            agreement.clientId,
            'disclosure:',
            agreement.disclosureId
        );
    }
}

main()
    .catch(e => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
