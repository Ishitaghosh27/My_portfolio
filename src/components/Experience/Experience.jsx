import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-[#030712]">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="flex flex-col items-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4">Professional Path</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white tracking-tighter">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-12 h-1 bg-accent rounded-full mt-6"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="glass-card p-10 md:p-14 rounded-[40px] relative overflow-hidden group shimmer perspective-1000"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{
                            rotateX: 2,
                            rotateY: -2,
                            scale: 1.01
                        }}
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12 border-b border-white/5 pb-10">
                            <div className="flex items-center gap-8">
                                <div className="w-20 h-20 rounded-[30px] bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                                    <Briefcase className="w-10 h-10 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-extrabold text-white font-outfit tracking-tight">Web Developer Intern</h3>
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-xl text-primary font-bold font-jakarta">Rays IT & Design World</h4>
                                        <span className="hidden md:inline px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary">Internship</span>
                                    </div>
                                    <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-medium pt-2">
                                        <span className="flex items-center gap-2 underline decoration-slate-800 underline-offset-4"><MapPin className="w-4 h-4 text-accent" /> Raipur, India</span>
                                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5"><Calendar className="w-4 h-4 text-primary" /> Jun 2025 - Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="md:col-span-12">
                                <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">Key Contributions</h5>
                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {[
                                        "Engineered secure Django systems with focus on modularity.",
                                        "Architected REST APIs for high-performance data exchange.",
                                        "Streamlined team workflows via advanced Git methodologies."
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-6 text-slate-300 font-jakarta text-lg group/item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                        >
                                            <div className="mt-2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(14,165,233,0.8)] shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                            <p className="group-hover/item:text-white transition-colors">{item}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
