import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "Personal Finance Dashboard",
        date: "Oct 2025 - Dec 2025",
        description: "Developed a full-stack expense tracking web application with secure authentication, database integration, and intuitive dashboard visualization for financial data.",
        tech: ["Django", "Python", "SQLite", "HTML/CSS"],
        github: "https://github.com/ishitaghosh27",
        demo: "#"
    },
    {
        title: "Job Portal Application",
        date: "Jun 2025 - Sep 2025",
        description: "Built a comprehensive full-stack job portal featuring secure user authentication, role-based access, and complete CRUD functionality for job postings and applications.",
        tech: ["Django", "Python", "MySQL", "Bootstrap"],
        github: "https://github.com/ishitaghosh27",
        demo: "#"
    },
    {
        title: "Weather Application",
        date: "Jul 2025 - Sep 2025",
        description: "Created a responsive weather application that integrates with external REST APIs to fetch and display accurate, real-time meteorological data.",
        tech: ["Django", "REST APIs", "JavaScript", "CSS"],
        github: "https://github.com/ishitaghosh27",
        demo: "#"
    },
    {
        title: "Transition Effects Web Page",
        date: "Aug 2024 - Sep 2024",
        description: "Designed and developed a highly responsive web interface focused on user experience, implementing interactive CSS animations and smooth page transitions.",
        tech: ["React", "CSS Animations", "JavaScript"],
        github: "https://github.com/ishitaghosh27",
        demo: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">Some of the core applications and prototypes I have built during my learning journey and internships.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Folder className="w-6 h-6" />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                            <p className="text-xs text-slate-500 font-mono mb-4">{project.date}</p>

                            <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-medium text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
