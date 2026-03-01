'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

interface Job {
    id: number;
    title: string;
}

export default function Contact() {
    // Contact form state
    const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Application form state
    const [appForm, setAppForm] = useState({
        full_name: '',
        email: '',
        phone: '',
        location: '',
        job_id: '',
        experience: '',
        cover_letter: '',
    });
    const [resume, setResume] = useState<File | null>(null);
    const [appStatus, setAppStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch(console.error);
    }, []);

    // Listen for job selection from Jobs section
    useEffect(() => {
        const select = document.querySelector('#job-select') as HTMLSelectElement;
        if (select) {
            const handler = (e: Event) => {
                const target = e.target as HTMLSelectElement;
                setAppForm((prev) => ({ ...prev, job_id: target.value }));
            };
            select.addEventListener('change', handler);
            return () => select.removeEventListener('change', handler);
        }
    }, [jobs]);

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setContactStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm),
            });
            if (res.ok) {
                setContactStatus('success');
                setContactForm({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setContactStatus('idle'), 4000);
            } else {
                setContactStatus('error');
            }
        } catch {
            setContactStatus('error');
        }
    };

    const handleAppSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAppStatus('loading');
        try {
            const formData = new FormData();
            Object.entries(appForm).forEach(([key, val]) => formData.append(key, val));
            if (resume) formData.append('resume', resume);

            const res = await fetch('/api/applications', {
                method: 'POST',
                body: formData,
            });
            if (res.ok) {
                setAppStatus('success');
                setAppForm({ full_name: '', email: '', phone: '', location: '', job_id: '', experience: '', cover_letter: '' });
                setResume(null);
                setTimeout(() => setAppStatus('idle'), 4000);
            } else {
                setAppStatus('error');
            }
        } catch {
            setAppStatus('error');
        }
    };

    const inputClass =
        'w-full px-4 py-3.5 bg-white/5 border-2 border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300';

    return (
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-10 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Get In Touch</span>
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to work with us? Reach out and we&apos;ll get back to you promptly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* General Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                    >
                        <div className="bg-[#141414] rounded-3xl shadow-xl shadow-black/40 p-5 sm:p-8 md:p-10 h-full border border-white/5">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Send a Message</h3>
                                    <p className="text-sm text-gray-500">We&apos;d love to hear from you</p>
                                </div>
                            </div>

                            <form onSubmit={handleContactSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    className={inputClass}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    className={inputClass}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    value={contactForm.phone}
                                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                                    className={inputClass}
                                />
                                <textarea
                                    placeholder="Your Message"
                                    required
                                    rows={4}
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    className={`${inputClass} resize-none`}
                                />
                                <motion.button
                                    type="submit"
                                    disabled={contactStatus === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 disabled:opacity-60"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {contactStatus === 'loading' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
                                </motion.button>
                            </form>

                            <AnimatePresence>
                                {contactStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message sent successfully!
                                    </motion.div>
                                )}
                                {contactStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium"
                                    >
                                        Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-5 sm:p-8 md:p-10 h-full text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-blue-200 mb-10">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Phone</div>
                                        <div className="font-semibold">+91 98765 43210</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Email</div>
                                        <div className="font-semibold text-sm sm:text-base break-all">info@themagnateacademy.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Office</div>
                                        <div className="font-semibold text-sm leading-relaxed">1st Floor, Thykoottathil Square,<br />Civil Line Rd, opp. St. Joseph Church,<br />Vazhakkala, Kochi, Kakkanad,<br />Kerala 682030</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-sm text-blue-200 mb-4">Follow us on</p>
                                <div className="flex gap-3">
                                    {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 text-xs font-bold"
                                        >
                                            {social[0]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Job Application Form */}
                <motion.div
                    id="apply"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16"
                >
                    <div className="bg-[#141414] rounded-3xl shadow-xl shadow-black/40 p-5 sm:p-8 md:p-12 border border-white/5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Apply for a Job</h3>
                                <p className="text-sm text-gray-500">Submit your application and we&apos;ll be in touch</p>
                            </div>
                        </div>

                        <form onSubmit={handleAppSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    value={appForm.full_name}
                                    onChange={(e) => setAppForm({ ...appForm, full_name: e.target.value })}
                                    className={inputClass}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={appForm.email}
                                    onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                                    className={inputClass}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    value={appForm.phone}
                                    onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                                    className={inputClass}
                                />
                                <input
                                    type="text"
                                    placeholder="Your Location"
                                    required
                                    value={appForm.location}
                                    onChange={(e) => setAppForm({ ...appForm, location: e.target.value })}
                                    className={inputClass}
                                />
                                <select
                                    id="job-select"
                                    required
                                    value={appForm.job_id}
                                    onChange={(e) => setAppForm({ ...appForm, job_id: e.target.value })}
                                    className={inputClass}
                                >
                                    <option value="">Position Applying For</option>
                                    {jobs.map((job) => (
                                        <option key={job.id} value={job.id}>
                                            {job.title}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Experience (Years)"
                                    required
                                    value={appForm.experience}
                                    onChange={(e) => setAppForm({ ...appForm, experience: e.target.value })}
                                    className={inputClass}
                                />
                            </div>

                            {/* File Upload */}
                            <div className="relative">
                                <label className="block">
                                    <div className={`flex items-center gap-3 px-4 py-3.5 bg-white/5 border-2 ${resume ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/10'} rounded-xl cursor-pointer hover:border-blue-500/30 transition-all duration-300`}>
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium text-gray-300">
                                                {resume ? resume.name : 'Upload Resume'}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {resume ? `${(resume.size / 1024 / 1024).toFixed(2)} MB` : 'PDF, DOC, DOCX (Max 10MB)'}
                                            </div>
                                        </div>
                                        {resume && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setResume(null);
                                                }}
                                                className="text-gray-500 hover:text-red-400 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        onChange={(e) => setResume(e.target.files?.[0] || null)}
                                    />
                                </label>
                            </div>

                            <textarea
                                placeholder="Cover Letter (Optional)"
                                rows={4}
                                value={appForm.cover_letter}
                                onChange={(e) => setAppForm({ ...appForm, cover_letter: e.target.value })}
                                className={`${inputClass} resize-none`}
                            />

                            <motion.button
                                type="submit"
                                disabled={appStatus === 'loading'}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 disabled:opacity-60"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {appStatus === 'loading' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                    </span>
                                ) : 'Submit Application'}
                            </motion.button>
                        </form>

                        <AnimatePresence>
                            {appStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Application submitted successfully! We&apos;ll be in touch soon.
                                </motion.div>
                            )}
                            {appStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium"
                                >
                                    Failed to submit application. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
