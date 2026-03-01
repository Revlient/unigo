const CONTACT_EMAIL = 'info@themagnateacademy.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export async function sendContactEmail(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
}) {
    const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            _subject: `New Contact: ${data.name} — UniGo Website`,
            _template: 'table',
        }),
    });

    const result = await response.json().catch(() => null);
    if (!response.ok) {
        console.error('FormSubmit error:', result);
        throw new Error('Failed to send email');
    }

    return { success: true };
}

export async function sendApplicationEmail(data: {
    full_name: string;
    email: string;
    phone: string;
    location: string;
    job_title: string;
    experience: string;
    cover_letter?: string;
    resume_name?: string;
}) {
    // Use JSON POST (not FormData) for reliability on serverless
    const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'Full Name': data.full_name,
            'Email': data.email,
            'Phone': data.phone,
            'Location': data.location,
            'Position Applied': data.job_title,
            'Experience': data.experience,
            'Cover Letter': data.cover_letter || 'Not provided',
            'Resume': data.resume_name || 'Not attached',
            _subject: `Job Application: ${data.full_name} — ${data.job_title}`,
            _template: 'table',
        }),
    });

    const result = await response.json().catch(() => null);
    if (!response.ok) {
        console.error('FormSubmit error:', result);
        throw new Error('Failed to send application email');
    }

    return { success: true };
}
