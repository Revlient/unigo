'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const services = [
    {
        title: 'Global Talent Acquisition',
        description: 'We identify, attract, and secure exceptional talent across borders. Our strategic approach combines market intelligence and deep industry insight to match the right professionals with the right organizations worldwide.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Visa Process Assistance',
        description: 'End-to-end visa processing and documentation support for international placements. We handle the complexities of work permits, immigration requirements, and compliance across multiple jurisdictions.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: 'Accommodation Services',
        description: 'Comprehensive accommodation and relocation support for deployed workforce. We ensure smooth transitions with pre-arranged housing, local orientation, and ongoing support for international placements.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        title: 'HR Consulting',
        description: 'Expert guidance on HR strategy, organizational design, compensation planning, and workforce optimization. We help build high-performing teams aligned with your business objectives and culture.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">What We Do</span>
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We offer a comprehensive suite of recruitment and HR solutions designed to connect
                        exceptional professionals with ambitious enterprises across the globe.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={fadeInUp}
                            className="group"
                        >
                            <div className="h-full p-8 bg-[#141414] rounded-3xl border-2 border-white/5 hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
