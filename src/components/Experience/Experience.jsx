import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-slate-800/30">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-slate-700/50 pb-8">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center shrink-0">
                                    <Briefcase className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
                                    <h4 className="text-xl text-primary font-medium mb-2">Rays IT & Design World</h4>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Raipur, Chhattisgarh</span>
                                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Jun 2025 - Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 font-medium">Internship</span>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Developed and maintained Django-based web applications, ensuring high performance and responsiveness.",
                                "Designed and integrated RESTful APIs and secure user authentication systems.",
                                "Collaborated with team members using Git for version control and efficient project management."
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-4 text-slate-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
