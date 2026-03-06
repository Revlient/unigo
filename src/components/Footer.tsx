'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
                >
                    {/* Brand */}
                    <motion.div variants={fadeInUp}>
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-white">Uni</span>
                            <span className="text-blue-400">Go</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            A strategic partner in recruitment and human capital.
                            Delivering intelligent recruitment and HR solutions worldwide.
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed mb-2">
                            📞 +91 7994885666
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed mb-4">
                            ✉ info@unigo.co
                        </p>
                        <div className="flex gap-3">
                            {[
                                { name: 'Facebook', icon: 'f' },
                                { name: 'Instagram', icon: '📷' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-500 text-sm hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-white font-semibold mb-5">Services</h4>
                        <ul className="space-y-3">
                            {['Global Talent Acquisition', 'Visa Process Assistance', 'Accommodation Services', 'HR Consulting'].map(
                                (service) => (
                                    <li key={service}>
                                        <a href="#services" className="text-gray-500 text-sm hover:text-blue-400 transition-colors duration-200">
                                            {service}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>

                    {/* Locations */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-white font-semibold mb-5">Our Locations</h4>
                        <ul className="space-y-3">
                            {['Kochi, India', 'Dubai, UAE', 'Poland', 'Bahrain'].map((location) => (
                                <li key={location}>
                                    <span className="text-gray-500 text-sm flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {location}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} UniGo. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-600 text-sm hover:text-blue-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-600 text-sm hover:text-blue-400 transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
