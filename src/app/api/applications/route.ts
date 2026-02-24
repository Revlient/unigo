import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

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

        let resumePath = '';
        if (resume && resume.size > 0) {
            const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
            await mkdir(uploadsDir, { recursive: true });

            const timestamp = Date.now();
            const sanitizedName = resume.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const fileName = `${timestamp}_${sanitizedName}`;
            const filePath = path.join(uploadsDir, fileName);

            const bytes = await resume.arrayBuffer();
            const buffer = Buffer.from(bytes);
            await writeFile(filePath, buffer);

            resumePath = `/uploads/${fileName}`;
        }

        const db = getDb();
        const stmt = db.prepare(
            `INSERT INTO job_applications (full_name, email, phone, location, job_id, experience, resume_path, cover_letter) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        );
        await stmt.run([fullName, email, phone, location, parseInt(jobId), experience, resumePath, coverLetter || '']);

        return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error saving application:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
