import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Linkedin } from 'lucide-react';

const projects = [
    {
        title: "My Portfolio",
        date: "Feb 2026",
        description: "A personal portfolio website built with React and Vite to showcase projects and skills, featuring a responsive design and smooth navigation.",
        tech: ["React", "Vite", "Tailwind CSS"],
        github: "https://github.com/Ishitaghosh27/My_portfolio",
        demo: "http://localhost:5173/"
    },
    {
        title: "Music Player App",
        date: "Jan 2026",
        description: "A web-based music player application built with Django, allowing users to play, manage, and enjoy their music collections through a clean interface.",
        tech: ["Django", "Python", "SQLite", "JavaScript"],
        github: "https://github.com/Ishitaghosh27/music_player_app",
        demo: "#"
    },
    {
        title: "Snake and Ladder",
        date: "Dec 2025",
        description: "A classic 2-player Snake and Ladder board game featuring a 10x10 grid with interactive gameplay and visual representation of snakes and ladders.",
        tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
        github: "https://github.com/Ishitaghosh27/Snake_and_ladder",
        demo: "#"
    },
    {
        title: "Whack-A-Mole",
        date: "Nov 2025",
        description: "A classic Whack-a-Mole arcade game implementation where players hit moles to score points within a time limit.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Ishitaghosh27/Whack-AMole",
        demo: "#"
    },
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

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 rounded-[40px] group hover:border-primary/50 transition-all duration-500 flex flex-col h-full shimmer relative perspective-1000"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                rotateY: index % 2 === 0 ? 5 : -5,
                                rotateX: 2,
                                translateZ: 20
                            }}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 shadow-inner">
                                    <Folder className="w-7 h-7" />
                                </div>
                                <div className="flex gap-3">
                                    {[
                                        { icon: <Github className="w-5 h-5" />, href: project.github, color: "hover:text-white" },
                                        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/ishita-ghosh-b1282366", color: "hover:text-[#0A66C2]" },
                                        { icon: <ExternalLink className="w-5 h-5" />, href: project.demo, color: "hover:text-accent" }
                                    ].map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 ${link.color} transition-all duration-300 backdrop-blur-md border border-white/5 hover:border-white/20`}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors font-outfit tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[10px] text-primary font-bold font-mono uppercase tracking-[0.2em]">
                                    {project.date}
                                </p>
                                <p className="text-slate-400 leading-relaxed font-jakarta text-[15px]">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-primary/20 hover:text-white transition-colors cursor-default backdrop-blur-sm">
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
