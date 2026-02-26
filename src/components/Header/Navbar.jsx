import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="home" smooth={true} duration={500} className="cursor-pointer group flex items-center space-x-2">
                    <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Code2 className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Ishita.dev
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-primary font-medium"
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors font-medium text-sm"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-slate-300 hover:text-primary transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
