import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email notification (non-blocking)
        try {
            await sendContactEmail({ name, email, phone, message });
        } catch (emailError) {
            console.error('Email sending failed (non-critical):', emailError);
        }

        // Also save to DB if available
        try {
            const { isVercelWithoutDb } = await import('@/lib/db');
            if (!isVercelWithoutDb) {
                const { getDb } = await import('@/lib/db');
                const db = getDb();
                const stmt = db.prepare(
                    'INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)'
                );
                await stmt.run([name, email, phone, message]);
            }
        } catch {
            console.log('DB save skipped (not configured)');
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
