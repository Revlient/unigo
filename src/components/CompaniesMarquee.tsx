'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const companies = [
    { name: 'Google', logo: 'G' },
    { name: 'Infosys', logo: 'I' },
    { name: 'TCS', logo: 'T' },
    { name: 'Wipro', logo: 'W' },
    { name: 'Amazon', logo: 'A' },
    { name: 'Microsoft', logo: 'M' },
    { name: 'Accenture', logo: 'Ac' },
    { name: 'Deloitte', logo: 'D' },
    { name: 'IBM', logo: 'IB' },
    { name: 'HCL Tech', logo: 'H' },
    { name: 'Cognizant', logo: 'C' },
    { name: 'Capgemini', logo: 'Ca' },
];

function CompanyLogo({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="flex-shrink-0 mx-6 group cursor-default">
            <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-blue-50 flex items-center justify-center text-primary font-bold text-sm">
                    {logo}
                </div>
                <span className="text-gray-700 font-semibold whitespace-nowrap">{name}</span>
            </div>
        </div>
    );
}

export default function CompaniesMarquee() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-primary rounded-full" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners</span>
                        <div className="w-8 h-1 bg-primary rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Companies We Recruit For
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                    {[...companies, ...companies].map((company, i) => (
                        <CompanyLogo key={`row1-${i}`} name={company.name} logo={company.logo} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 (reverse) */}
            <div className="relative group mt-6">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
                    {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, i) => (
                        <CompanyLogo key={`row2-${i}`} name={company.name} logo={company.logo} />
                    ))}
                </div>
            </div>
        </section>
    );
}
