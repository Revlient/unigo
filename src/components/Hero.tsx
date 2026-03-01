'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Hero() {
    const handleExploreJobs = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { size: 80, left: 15, top: 20, duration: 5.2, delay: 0.3 },
                    { size: 120, left: 45, top: 60, duration: 6.8, delay: 1.1 },
                    { size: 65, left: 75, top: 35, duration: 4.5, delay: 0.7 },
                    { size: 95, left: 30, top: 80, duration: 7.2, delay: 1.8 },
                    { size: 110, left: 85, top: 10, duration: 5.8, delay: 0.5 },
                    { size: 70, left: 55, top: 50, duration: 6.1, delay: 1.4 },
                ].map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500/5"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                        },
                    }}
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-block mb-4 sm:mb-6 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                        <span className="text-xs sm:text-sm font-medium text-blue-400 tracking-wider uppercase">
                            Premier HR Solutions
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    >
                        Connecting Talent
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            With Opportunity
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-sm sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We specialize in bridging the gap between exceptional talent and forward-thinking
                        organizations. Your next career milestone starts here.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
                        <motion.button
                            onClick={handleExploreJobs}
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-2xl text-base sm:text-lg font-semibold overflow-hidden shadow-2xl shadow-blue-600/20"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Explore Jobs</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>

                        <motion.a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
