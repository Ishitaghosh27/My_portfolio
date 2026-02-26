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
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-slate-300 backdrop-blur-sm">
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Ishita Ghosh</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-slate-300 font-medium">
                            Computer Science Fresher <br className="hidden md:block" />
                            & Django Developer
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-xl leading-relaxed">
                            Enthusiastic developer with practical experience in Django, Python, and scalable web applications. Passionate about building secure, database-driven solutions.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl bg-primary hover:bg-violet-600 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/Ishita_Ghosh_Resume.jpg"
                                download="Ishita_Ghosh_Resume.jpg"
                                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium flex items-center gap-2 transition-colors"
                            >
                                Download Resume
                                <Download className="w-4 h-4" />
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-5 pt-6">
                            <a href="https://github.com/ishitaghosh27" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/ishita-ghosh-b1282366" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:ishitaghosh2117@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800">
                                <Mail className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border border-slate-700/50 -m-8 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-0 rounded-full border border-primary/30 -m-4 animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Profile Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl glass-panel group">
                                {/* Fallback image if user hasn't added theirs yet */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center">
                                    <span className="text-slate-500 font-medium">Profile Image</span>
                                </div>
                                {/* Replace src with /profile.jpg when available */}
                                <img
                                    src="/profile.jpg"
                                    alt="Ishita Ghosh"
                                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute bottom-4 -left-4 glass-panel px-4 py-3 rounded-2xl z-20 flex items-center gap-3"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                                <span className="text-sm font-medium">Available for work</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll Down</span>
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
                    animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0], top: ["0%", "50%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </section>
    );
}
