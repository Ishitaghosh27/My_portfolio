import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code, Database, Layout, Terminal } from 'lucide-react';

export default function About() {
    const skills = [
        { category: "Languages", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"], icon: <Code className="w-5 h-5 text-primary" /> },
        { category: "Frameworks & Libs", items: ["Django", "React", "Bootstrap"], icon: <Layout className="w-5 h-5 text-accent" /> },
        { category: "Databases", items: ["MySQL", "SQLite"], icon: <Database className="w-5 h-5 text-green-400" /> },
        { category: "Tools & Tech", items: ["Git", "GitHub", "VS Code", "REST APIs"], icon: <Terminal className="w-5 h-5 text-pink-400" /> },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#030712]">
            {/* Ambient background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="flex flex-col items-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Background</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white tracking-tighter">
                        Know <span className="text-gradient">Who I Am</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Summary - Major Column */}
                    <motion.div
                        className="md:col-span-8 glass-card p-10 rounded-[40px] flex flex-col justify-center relative overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-24 h-24 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 font-outfit flex items-center gap-3 text-white">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">01</span>
                            My Story
                        </h3>
                        <p className="text-xl text-slate-300 leading-relaxed font-jakarta">
                            Enthusiastic <span className="text-white font-semibold">Computer Science fresher</span> with a deep passion for the Python ecosystem. I specialize in building robust, <span className="text-primary">database-driven applications</span> using Django, focusing on security, scalability, and clean modular code. I thrive on solving complex backend challenges and translating them into seamless user experiences.
                        </p>
                    </motion.div>

                    {/* Quick Stats/Badge */}
                    <motion.div
                        className="md:col-span-4 glass-card p-8 rounded-[40px] flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                            <GraduationCap className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-white font-outfit mb-2">B.Tech CS</h4>
                        <p className="text-slate-400 font-jakarta text-sm">Graduating 2026</p>
                        <div className="mt-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                            Open for Roles
                        </div>
                    </motion.div>

                    {/* Skills - Bento Style */}
                    <motion.div
                        className="md:col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-8 rounded-[40px] group hover:border-primary/40 transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                        {skillGroup.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-100 font-outfit">{skillGroup.category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-bold text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Education Timeline - Compact Bento */}
                    <motion.div
                        className="md:col-span-12 lg:col-span-5 glass-card p-10 rounded-[40px] flex flex-col justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold mb-10 font-outfit flex items-center gap-3 text-white">
                            <GraduationCap className="text-accent" /> Academic Journey
                        </h3>

                        <div className="space-y-12 relative border-l-2 border-white/5 pl-8 ml-2">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(14,165,233,0.8)] border-4 border-[#030712]"></div>
                                <h4 className="text-lg font-bold text-white font-outfit leading-none mb-2">B.Tech in Computer Science</h4>
                                <p className="text-sm text-accent font-bold mb-3 uppercase tracking-wider">Kalinga University • 2022-Present</p>
                                <p className="text-sm text-slate-400 font-jakarta">Focusing on Full-Stack development and Database systems.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#030712]"></div>
                                <h4 className="text-lg font-bold text-slate-300 font-outfit leading-none mb-2">High School Diploma</h4>
                                <p className="text-sm text-slate-500 font-bold mb-3 uppercase tracking-wider">Pranavananda Academy • 2021</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Soft Skills Banner */}
                    <motion.div
                        className="md:col-span-12 glass-card p-8 rounded-[40px] flex flex-wrap items-center justify-between gap-6 overflow-hidden relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="p-3 bg-white/5 rounded-2xl">
                                <Terminal className="w-6 h-6 text-pink-400" />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.3em] font-outfit text-slate-500">Soft Skills</h4>
                        </div>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {['Problem-solving', 'Teamwork', 'Communication', 'Adaptability', 'Leadership'].map((skill, i) => (
                                <span key={i} className="text-sm font-bold text-slate-300 border border-white/5 bg-white/5 px-6 py-2 rounded-2xl hover:bg-primary/10 hover:border-primary/30 hover:text-white transition-all cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
