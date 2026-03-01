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
                            Connecting exceptional talent with forward-thinking organizations.
                            Your trusted partner in recruitment and HR solutions.
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed mb-4">
                            1st Floor, Thykoottathil Square, Civil Line Rd,
                            opp. St. Joseph Church, Vazhakkala, Kochi, Kakkanad, Kerala 682030
                        </p>
                        <p className="text-gray-500 text-xs">
                            ✉ info@themagnateacademy.com
                        </p>
                        <div className="flex gap-3">
                            {[
                                { name: 'LinkedIn', icon: 'in' },
                                { name: 'Twitter', icon: '𝕏' },
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
                            {['Home', 'About Us', 'Services', 'Open Jobs', 'Contact'].map((link) => (
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
                            {['Talent Acquisition', 'Executive Hiring', 'Campus Recruitment', 'HR Consulting', 'Staffing Solutions'].map(
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

                    {/* Legal */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-white font-semibold mb-5">Legal</h4>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 text-sm hover:text-blue-400 transition-colors duration-200">
                                        {item}
                                    </a>
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
                        <a href="#" className="text-gray-600 text-sm hover:text-blue-400 transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
