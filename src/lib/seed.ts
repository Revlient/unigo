import { getDb } from './db';

const DEMO_JOBS = [
    {
        title: 'Senior Software Engineer',
        location: 'Bangalore, India',
        experience: '5-8 Years',
        description: 'Lead the development of scalable microservices and cloud-native applications. Work with modern tech stacks including React, Node.js, and AWS to deliver enterprise-grade solutions.'
    },
    {
        title: 'HR Business Partner',
        location: 'Mumbai, India',
        experience: '4-6 Years',
        description: 'Partner with business leaders to develop and implement HR strategies. Drive talent management, organizational development, and employee engagement initiatives.'
    },
    {
        title: 'Data Analyst',
        location: 'Hyderabad, India',
        experience: '2-4 Years',
        description: 'Analyze large datasets to extract actionable business insights. Build dashboards and reports using tools like Tableau, Power BI, and SQL to support data-driven decisions.'
    },
    {
        title: 'Project Manager',
        location: 'Delhi NCR, India',
        experience: '6-10 Years',
        description: 'Oversee end-to-end project delivery for enterprise clients. Manage cross-functional teams, budgets, and timelines while ensuring alignment with business objectives.'
    },
    {
        title: 'UX/UI Designer',
        location: 'Pune, India',
        experience: '3-5 Years',
        description: 'Design intuitive and visually stunning user experiences for web and mobile platforms. Conduct user research, create wireframes, prototypes, and high-fidelity designs.'
    },
    {
        title: 'DevOps Engineer',
        location: 'Chennai, India',
        experience: '3-6 Years',
        description: 'Build and maintain CI/CD pipelines, automate infrastructure provisioning, and ensure high availability of production systems using Docker, Kubernetes, and Terraform.'
    },
    {
        title: 'Marketing Manager',
        location: 'Bangalore, India',
        experience: '5-8 Years',
        description: 'Develop and execute comprehensive marketing strategies across digital and traditional channels. Drive brand awareness, lead generation, and revenue growth.'
    },
    {
        title: 'Full Stack Developer',
        location: 'Remote, India',
        experience: '2-4 Years',
        description: 'Build responsive web applications using React, Next.js, and Node.js. Collaborate with design and product teams to deliver high-quality features on schedule.'
    }
];

export async function seedDatabase() {
    const db = getDb();
    const res = await db.prepare('SELECT COUNT(*) as count FROM jobs').get();
    const count = res.count;

    if (count === 0) {
        const insert = db.prepare(
            'INSERT INTO jobs (title, location, experience, description) VALUES (?, ?, ?, ?)'
        );

        // For simplicity, we loop instead of using a transaction in the hybrid layer
        for (const job of DEMO_JOBS) {
            await insert.run([job.title, job.location, job.experience, job.description]);
        }
        console.log(`Seeded ${DEMO_JOBS.length} demo jobs`);
    }
}
