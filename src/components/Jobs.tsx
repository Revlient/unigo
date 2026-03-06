'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const categories = [
    {
        title: 'Healthcare Professionals',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        positions: [
            'Nurses',
            'Ambulance Nurses',
            'Burn Unit Nurses',
            'Doctors',
            'Lab Technicians',
            'Aestheticians',
            'Care Givers',
        ],
    },
    {
        title: 'Skilled Workforce',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        positions: [
            'Electricians',
            'AC Technicians',
            'Welders',
            'Supervisors',
            'Pool Technicians',
            'Painters',
            'Masons',
            'Plumbers',
            'Truck Drivers',
        ],
    },
    {
        title: 'Essential Workforce',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        positions: [
            'Warehouse Associates',
            'Delivery Drivers',
            'Construction Workers',
            'Packaging Staff',
            'Automotive Manufacturing Workers',
        ],
    },
];

export default function Jobs() {
    return (
        <section id="jobs" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
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
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Careers</span>
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Open Positions
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We recruit across diverse industries and skill levels. Explore the categories
                        below to find where your expertise fits.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeInUp}
                            className="group"
                        >
                            <div className="h-full p-8 bg-[#141414] rounded-3xl border-2 border-white/5 hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Positions List */}
                                <ul className="space-y-3">
                                    {category.positions.map((position) => (
                                        <li
                                            key={position}
                                            className="flex items-center gap-3 text-gray-400 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0" />
                                            {position}
                                        </li>
                                    ))}
                                </ul>

                                {/* Count Badge */}
                                <div className="mt-6 pt-4 border-t border-white/5">
                                    <span className="text-xs font-medium text-gray-500">
                                        {category.positions.length} positions available
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
