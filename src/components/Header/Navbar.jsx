import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-5xl`}>
            <div className={`glass-panel px-6 py-4 rounded-[32px] flex items-center justify-between border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${scrolled ? 'bg-slate-900/60' : 'bg-slate-900/40'}`}>
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                        <span className="font-bold text-xl font-outfit">I</span>
                    </div>
                    <span className="text-xl font-bold tracking-tighter font-outfit text-white group-hover:text-primary transition-colors">
                        ISHITA<span className="text-primary group-hover:text-white">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="px-6 py-2.5 text-sm font-bold text-slate-400 cursor-pointer transition-all duration-300 relative group font-jakarta"
                            activeClass="!text-white bg-white/5 rounded-full"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <motion.span
                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 rounded-full"
                            ></motion.span>
                        </Link>
                    ))}
                    <div className="ml-4 pl-4 border-l border-white/10 flex gap-4">
                        <a href="https://github.com/ishitaghosh27" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/ishita-ghosh-b1282366" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 transition-colors border border-white/5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-0 right-0 glass-panel mt-2 p-6 rounded-[32px] border-white/10 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-lg font-bold text-slate-300 hover:text-primary transition-colors font-outfit"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-6 pt-4 border-t border-white/10">
                                <a href="https://github.com/ishitaghosh27" target="_blank" rel="noreferrer" className="text-slate-400">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/in/ishita-ghosh-b1282366" target="_blank" rel="noreferrer" className="text-slate-400">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
