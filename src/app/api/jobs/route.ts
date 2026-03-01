import { NextResponse } from 'next/server';
import { isVercelWithoutDb } from '@/lib/db';

const DEMO_JOBS = [
    {
        id: 1, title: 'Senior Software Engineer', location: 'Bangalore, India', experience: '5-8 Years',
        description: 'Lead the development of scalable microservices and cloud-native applications. Work with modern tech stacks including React, Node.js, and AWS to deliver enterprise-grade solutions.'
    },
    {
        id: 2, title: 'HR Business Partner', location: 'Mumbai, India', experience: '4-6 Years',
        description: 'Partner with business leaders to develop and implement HR strategies. Drive talent management, organizational development, and employee engagement initiatives.'
    },
    {
        id: 3, title: 'Data Analyst', location: 'Hyderabad, India', experience: '2-4 Years',
        description: 'Analyze large datasets to extract actionable business insights. Build dashboards and reports using tools like Tableau, Power BI, and SQL to support data-driven decisions.'
    },
    {
        id: 4, title: 'Project Manager', location: 'Delhi NCR, India', experience: '6-10 Years',
        description: 'Oversee end-to-end project delivery for enterprise clients. Manage cross-functional teams, budgets, and timelines while ensuring alignment with business objectives.'
    },
    {
        id: 5, title: 'UX/UI Designer', location: 'Pune, India', experience: '3-5 Years',
        description: 'Design intuitive and visually stunning user experiences for web and mobile platforms. Conduct user research, create wireframes, prototypes, and high-fidelity designs.'
    },
    {
        id: 6, title: 'DevOps Engineer', location: 'Chennai, India', experience: '3-6 Years',
        description: 'Build and maintain CI/CD pipelines, automate infrastructure provisioning, and ensure high availability of production systems using Docker, Kubernetes, and Terraform.'
    },
    {
        id: 7, title: 'Marketing Manager', location: 'Bangalore, India', experience: '5-8 Years',
        description: 'Develop and execute comprehensive marketing strategies across digital and traditional channels. Drive brand awareness, lead generation, and revenue growth.'
    },
    {
        id: 8, title: 'Full Stack Developer', location: 'Remote, India', experience: '2-4 Years',
        description: 'Build responsive web applications using React, Next.js, and Node.js. Collaborate with design and product teams to deliver high-quality features on schedule.'
    }
];

export async function GET() {
    try {
        // If deployed on Vercel without Postgres, return demo data
        if (isVercelWithoutDb) {
            return NextResponse.json(DEMO_JOBS);
        }

        const { getDb } = await import('@/lib/db');
        const { seedDatabase } = await import('@/lib/seed');
        await seedDatabase();
        const db = getDb();
        const jobs = await db.prepare('SELECT * FROM jobs ORDER BY created_at DESC').all();
        return NextResponse.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        // Fallback to demo data on any DB error
        return NextResponse.json(DEMO_JOBS);
    }
}
