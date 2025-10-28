import { PrismaClient, Role } from '../generated/prisma/index.js';
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

    for (const clientData of sampleClients) {
        const client = await prisma.client.upsert({
            where: { email: clientData.email },
            update: {},
            create: clientData
        });
        console.log('✅ Created client:', client.email);
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
}

main()
    .catch(e => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
