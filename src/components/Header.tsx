'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/30'
                    : 'bg-white/20 backdrop-blur-md border-b border-white/30'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-2xl font-bold tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                        Talent
                    </span>
                    <span className={`transition-colors duration-300 ${scrolled ? 'text-blue-500' : 'text-blue-200'}`}>
                        Bridge
                    </span>
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <motion.a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${scrolled
                                        ? 'text-gray-700 hover:bg-primary hover:text-white'
                                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                            </motion.a>
                        </li>
                    ))}
                    <li>
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="ml-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
            >
                <ul className="px-6 py-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.header>
    );
}
