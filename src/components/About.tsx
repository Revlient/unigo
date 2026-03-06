'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-[#141414] rounded-3xl shadow-xl shadow-black/40 overflow-hidden border border-white/5"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image */}
                        <motion.div
                            variants={fadeInLeft}
                            className="relative min-h-[400px] md:min-h-full"
                        >
                            <img
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Professional team collaboration"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            variants={fadeInRight}
                            className="p-10 md:p-14 flex flex-col justify-center"
                        >
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="w-8 h-1 bg-blue-500 rounded-full" />
                                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">About Us</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Built on Trust.{' '}
                                <span className="text-blue-400">Driven by Precision.</span>
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-4">
                                UniGo partners with ambitious organizations to identify, attract, and secure
                                exceptional talent. We don&apos;t believe in volume hiring or transactional
                                recruitment. We believe in alignment; of vision, capability, and culture.
                            </p>

                            <p className="text-gray-400 leading-relaxed mb-4">
                                Every mandate we undertake is handled with strategic focus and discretion.
                                Our approach combines market intelligence, deep industry insight, and a
                                carefully cultivated professional network to deliver talent that creates
                                measurable impact.
                            </p>

                            <p className="text-gray-400 leading-relaxed mb-4">
                                From critical mid-management roles to senior leadership appointments, we
                                operate with clarity, confidentiality, and an uncompromising standard of quality.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-8 font-medium">
                                At UniGo, we bring ambitious talent and forward-thinking companies together.
                            </p>

                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { number: '100+', label: 'Clients Served' },
                                    { number: '5K+', label: 'Hiring Partners' },
                                    { number: '95%', label: 'Success Rate' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.number}</div>
                                        <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
