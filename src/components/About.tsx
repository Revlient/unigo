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
                                Your Trusted Partner in{' '}
                                <span className="text-blue-400">Talent Acquisition</span>
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                With over a decade of experience in the recruitment industry, UniGo has
                                been at the forefront of connecting exceptional professionals with leading
                                organizations across India and beyond. Our deep understanding of diverse
                                industries enables us to find the perfect match every time.
                            </p>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                We believe that the right talent can transform organizations. Our team of
                                experienced recruiters leverages cutting-edge technology and a vast network
                                of professionals to deliver results that exceed expectations. From entry-level
                                positions to C-suite placements, we handle it all with precision and care.
                            </p>

                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { number: '500+', label: 'Clients Served' },
                                    { number: '10K+', label: 'Placements' },
                                    { number: '98%', label: 'Success Rate' },
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
