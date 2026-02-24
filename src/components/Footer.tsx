'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Brand */}
                    <motion.div variants={fadeInUp}>
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-white">Talent</span>
                            <span className="text-blue-400">Bridge</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Connecting exceptional talent with forward-thinking organizations since 2014.
                            Your trusted partner in recruitment and HR solutions.
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
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 text-sm"
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
                                        className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
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
                                        <a href="#services" className="text-gray-400 text-sm hover:text-primary transition-colors duration-200">
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
                                    <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} TalentBridge. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
