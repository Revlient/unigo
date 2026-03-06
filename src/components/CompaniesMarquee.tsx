'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const countries = [
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'Luxemburg', flag: '🇱🇺' },
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Azerbaijan', flag: '🇦🇿' },
];

function CountryCard({ name, flag }: { name: string; flag: string }) {
    return (
        <div className="flex-shrink-0 mx-6 group cursor-default">
            <div className="flex items-center gap-3 px-8 py-4 bg-[#141414] rounded-2xl shadow-sm border border-white/5 hover:shadow-md hover:border-blue-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl">
                    {flag}
                </div>
                <span className="text-gray-300 font-semibold whitespace-nowrap">{name}</span>
            </div>
        </div>
    );
}

export default function CompaniesMarquee() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Our Global Footprint</span>
                        <div className="w-8 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Countries We Recruit For
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                    {[...countries, ...countries].map((country, i) => (
                        <CountryCard key={`row1-${i}`} name={country.name} flag={country.flag} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 (reverse) */}
            <div className="relative group mt-6">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
                    {[...countries.slice().reverse(), ...countries.slice().reverse()].map((country, i) => (
                        <CountryCard key={`row2-${i}`} name={country.name} flag={country.flag} />
                    ))}
                </div>
            </div>
        </section>
    );
}
