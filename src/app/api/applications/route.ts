import { NextRequest, NextResponse } from 'next/server';
import { sendApplicationEmail } from '@/lib/email';

// Demo jobs for looking up titles
const DEMO_JOBS: Record<number, string> = {
    1: 'Senior Software Engineer', 2: 'HR Business Partner', 3: 'Data Analyst',
    4: 'Project Manager', 5: 'UX/UI Designer', 6: 'DevOps Engineer',
    7: 'Marketing Manager', 8: 'Full Stack Developer',
};

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const fullName = formData.get('full_name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const location = formData.get('location') as string;
        const jobId = formData.get('job_id') as string;
        const experience = formData.get('experience') as string;
        const coverLetter = formData.get('cover_letter') as string;
        const resume = formData.get('resume') as File | null;

        if (!fullName || !email || !phone || !location || !jobId || !experience) {
            return NextResponse.json(
                { error: 'All required fields must be filled' },
                { status: 400 }
            );
        }

        // Get job title for the email
        let jobTitle = DEMO_JOBS[parseInt(jobId)] || `Job #${jobId}`;
        try {
            const { isVercelWithoutDb } = await import('@/lib/db');
            if (!isVercelWithoutDb) {
                const { getDb } = await import('@/lib/db');
                const db = getDb();
                const job = await db.prepare('SELECT title FROM jobs WHERE id = ?').get([parseInt(jobId)]);
                if (job?.title) jobTitle = job.title;
            }
        } catch {
            // Use demo job title
        }

        // Send email notification (non-blocking — don't let email failure crash the submission)
        try {
            await sendApplicationEmail({
                full_name: fullName,
                email,
                phone,
                location,
                job_title: jobTitle,
                experience,
                cover_letter: coverLetter,
                resume_name: resume?.name,
            });
        } catch (emailError) {
            console.error('Email sending failed (non-critical):', emailError);
            // Continue — don't fail the submission just because email failed
        }

        // Also save to DB if available
        try {
            const { isVercelWithoutDb } = await import('@/lib/db');
            if (!isVercelWithoutDb) {
                const { getDb } = await import('@/lib/db');
                const db = getDb();
                const stmt = db.prepare(
                    `INSERT INTO job_applications (full_name, email, phone, location, job_id, experience, resume_path, cover_letter) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                );
                await stmt.run([fullName, email, phone, location, parseInt(jobId), experience, '', coverLetter || '']);
            }
        } catch {
            console.log('DB save skipped (not configured)');
        }

        return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error handling application:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
