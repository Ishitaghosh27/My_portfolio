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
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Summary & Education */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="text-primary" /> Summary
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Enthusiastic Computer Science fresher with practical experience in Django, Python, and database-driven web applications. Skilled in developing secure and scalable applications with authentication, REST APIs, and relational databases. Seeking an entry-level Django Developer role to apply technical skills and grow professionally.
                            </p>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="text-accent" /> Education
                            </h3>

                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-hover:bg-accent text-slate-500 group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10">
                                        <span className="w-3 h-3 bg-accent rounded-full"></span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/50 shadow-sm ml-4 md:ml-0 md:group-odd:text-right group-hover:border-accent/50 transition-colors">
                                        <div className="flex items-center justify-between md:group-odd:flex-row-reverse space-x-2 mb-1">
                                            <div className="font-bold text-slate-200">Bachelor of Technology (B.Tech) - CS</div>
                                        </div>
                                        <div className="text-slate-400">Kalinga University, Naya Raipur</div>
                                        <time className="block mb-2 text-sm font-normal leading-none text-slate-500 mt-2">2022 - Present</time>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-hover:bg-primary text-slate-500 group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10">
                                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/50 shadow-sm ml-4 md:ml-0 md:group-odd:text-right group-hover:border-primary/50 transition-colors">
                                        <div className="flex items-center justify-between md:group-odd:flex-row-reverse space-x-2 mb-1">
                                            <div className="font-bold text-slate-200">High School Diploma</div>
                                        </div>
                                        <div className="text-slate-400">Pranavananda Academy, Raipur</div>
                                        <time className="block mb-2 text-sm font-normal leading-none text-slate-500 mt-2">2021</time>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 pl-4 border-l-4 border-primary">Technical Skills</h3>

                        <div className="grid gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    className="glass-panel p-6 rounded-2xl hover:border-slate-600 transition-colors"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-slate-800 rounded-lg">
                                            {skillGroup.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-slate-200">{skillGroup.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Soft Skills */}
                        <div className="mt-8 pt-8 border-t border-slate-700/50">
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Soft Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Problem-solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Leadership'].map((skill, i) => (
                                    <span key={i} className="text-sm text-slate-400 flex items-center gap-1.5 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent text-accent"></span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
