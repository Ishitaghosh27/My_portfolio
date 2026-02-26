import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#030712]">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-foreground/80 backdrop-blur-md">
                                👋 Welcome to my Universe
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tighter font-outfit leading-none">
                            Hi, I'm <br />
                            <span className="text-gradient drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">Ishita Ghosh</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl text-slate-200 font-semibold font-jakarta tracking-tight">
                            Building <span className="text-accent underline decoration-accent/30 underline-offset-8">Scalable</span> <br className="hidden md:block" />
                            Digital Experiences.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-xl leading-relaxed font-jakarta">
                            Computer Science graduate specializing in <span className="text-slate-200 font-medium">Django & Python</span>. I craft secure, database-driven solutions with a focus on clean architecture and innovative design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-primary hover:bg-violet-600 text-white font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] group overflow-hidden relative"
                            >
                                <span className="relative z-10">Explore My Work</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </a>
                            <a
                                href="/Ishita_Ghosh_Resume.jpg"
                                download="Ishita_Ghosh_Resume.jpg"
                                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold flex items-center gap-3 transition-all backdrop-blur-sm"
                            >
                                Get Resume
                                <Download className="w-5 h-5" />
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
                            {[
                                { icon: <Github className="w-6 h-6" />, href: "https://github.com/ishitaghosh27" },
                                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/ishita-ghosh-b1282366" },
                                { icon: <Mail className="w-6 h-6" />, href: "mailto:ishitaghosh2117@gmail.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end pr-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    >
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                            {/* Modern Abstract Shapes */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl animate-pulse"></div>

                            {/* Animated Rings */}
                            <div className="absolute inset-[-20px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-[-40px] rounded-full border border-white/[0.02] animate-[spin_30s_linear_infinite_reverse]"></div>

                            {/* Main Frame */}
                            <motion.div
                                className="relative w-full h-full rounded-[60px] md:rounded-[80px] overflow-hidden border-2 border-white/10 p-4 bg-slate-900/50 backdrop-blur-3xl shadow-2xl"
                                whileHover={{ rotateY: 10, rotateX: -5 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <img
                                    src="/profile.jpg"
                                    alt="Ishita Ghosh"
                                    className="w-full h-full object-cover rounded-[40px] md:rounded-[60px] grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-110"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </motion.div>

                            {/* Interactive Floating Card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-3xl z-20 flex items-center gap-4 border-l-4 border-l-green-500"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-green-500 animate-ping"></div>
                                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Status</p>
                                    <p className="text-sm font-bold text-white whitespace-nowrap">Available for Hire</p>
                                </div>
                            </motion.div>

                            {/* Tech Stack Badge */}
                            <motion.div
                                className="absolute -top-6 -right-6 glass-panel px-6 py-4 rounded-3xl z-20 hidden md:flex flex-col items-center"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Expertise</p>
                                <div className="flex gap-2">
                                    <span className="text-xs font-bold text-white px-2 py-1 bg-white/5 rounded-lg border border-white/10">Django</span>
                                    <span className="text-xs font-bold text-white px-2 py-1 bg-white/5 rounded-lg border border-white/10">Python</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator refinement */}
            <motion.div
                className="absolute bottom-10 left-10 flex items-center gap-4 text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] vertical-text mb-2">Scroll</span>
                    <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
}
