'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function Contact() {
    // Contact form state
    const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                                        <div className="font-semibold">+91 7994885666</div>
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
                                        <div className="font-semibold text-sm sm:text-base break-all">info@unigo.co</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200 mb-2">Locations</div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Kochi', 'Dubai', 'Poland', 'Bahrain'].map((loc) => (
                                                <span
                                                    key={loc}
                                                    className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium"
                                                >
                                                    {loc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-sm text-blue-200 mb-4">Follow us on</p>
                                <div className="flex gap-3">
                                    {[
                                        { name: 'Facebook', icon: 'f' },
                                        { name: 'Instagram', icon: '📷' },
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href="#"
                                            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 text-xs font-bold"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
