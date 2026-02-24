'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Job {
    id: number;
    title: string;
    location: string;
    experience: string;
    description: string;
}

export default function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleApply = (jobId: number) => {
        const contactSection = document.querySelector('#apply');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            // Set the job in the dropdown after scrolling
            setTimeout(() => {
                const select = document.querySelector('#job-select') as HTMLSelectElement;
                if (select) {
                    select.value = String(jobId);
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }, 800);
        }
    };

    return (
        <section id="jobs" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-primary rounded-full" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Careers</span>
                        <div className="w-8 h-1 bg-primary rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Open Positions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover exciting career opportunities with leading organizations. Find your perfect role
                        and take the next step in your professional journey.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {jobs.map((job) => (
                            <motion.div
                                key={job.id}
                                variants={fadeInUp}
                                className="group"
                            >
                                <div className="h-full p-6 bg-white rounded-3xl border-2 border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                    <div className="flex-1">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 flex items-center justify-center text-primary mb-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {job.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {job.experience}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {job.description}
                                        </p>
                                    </div>

                                    <motion.button
                                        onClick={() => handleApply(job.id)}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-primary to-blue-700 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
