import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");
        const formData = new FormData(event.target);

        try {
            // 🚨 Replace 'YOUR_FORM_ID' with the Form ID you get from Formspree.io
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setResult("Message Sent Successfully!");
                event.target.reset();
            } else {
                setResult("Failed to send message. Please try again.");
            }
        } catch (error) {
            setResult("Something went wrong! Please try again.");
        }
        setIsSubmitting(false);
    };
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#030712]">
            {/* Dynamic Background Glows */}
            <motion.div
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="flex flex-col items-center mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Availability</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white tracking-tighter">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full mt-6 mb-8"></div>
                    <p className="text-slate-400 max-w-xl font-jakarta text-lg">
                        Currently seeking <span className="text-white font-semibold italic">entry-level Django Developer</span> roles. Let's collaborate and build something spectacular!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                    {/* Contact Info - Glass Style */}
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card p-10 md:p-14 rounded-[40px] relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-10 text-white font-outfit">Contact Details</h3>

                            <div className="space-y-8">
                                <a href="mailto:ishitaghosh2117@gmail.com" className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                                        <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</h4>
                                        <p className="font-extrabold text-xl text-slate-200 group-hover:text-white transition-colors">ishitaghosh2117@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919109556689" className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-lg">
                                        <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</h4>
                                        <p className="font-extrabold text-xl text-slate-200 group-hover:text-white transition-colors">+91 9109556689</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Located In</h4>
                                        <p className="font-extrabold text-xl text-slate-200">Raipur, Chhattisgarh, IN</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-14 pt-10 border-t border-white/5 flex items-center gap-8">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/ishitaghosh27" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://linkedin.com/in/ishita-ghosh-b1282366" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Futuristic Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="space-y-8" onSubmit={onSubmit}>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white text-xl focus:outline-none focus:border-primary transition-all peer placeholder-transparent font-jakarta"
                                    placeholder="Name"
                                />
                                <label htmlFor="name" className="absolute left-0 -top-2 text-xs font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs">
                                    Your Full Name
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white text-xl focus:outline-none focus:border-accent transition-all peer placeholder-transparent font-jakarta"
                                    placeholder="Email"
                                />
                                <label htmlFor="email" className="absolute left-0 -top-2 text-xs font-bold text-accent uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-accent peer-focus:text-xs">
                                    Your Email Address
                                </label>
                            </div>

                            <div className="relative group">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="1"
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white text-xl focus:outline-none focus:border-primary transition-all peer placeholder-transparent resize-none font-jakarta overflow-hidden"
                                    placeholder="Message"
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                ></textarea>
                                <label htmlFor="message" className="absolute left-0 -top-2 text-xs font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs">
                                    Message Details
                                </label>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 rounded-2xl text-white font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all relative overflow-hidden group/btn ${isSubmitting ? 'bg-slate-800' : 'bg-white text-black hover:text-white'}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {!isSubmitting && (
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                )}
                                <span className="relative z-10">{isSubmitting ? 'Transmitting...' : 'Send Transmission'}</span>
                                {!isSubmitting && <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                            </motion.button>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-6 p-5 rounded-2xl text-center font-bold flex items-center justify-center gap-3 border ${result.includes('Success') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}
                                >
                                    {result.includes('Success') && <CheckCircle className="w-6 h-6" />}
                                    <span className="text-sm">{result.includes('Success') ? "TRANSMISSION SUCCESSFUL: Connection Established." : result}</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-32 border-t border-white/5 pt-12 pb-12 text-center relative z-10 bg-[#020617]/50 backdrop-blur-md">
                <p className="font-outfit text-slate-500 text-sm tracking-widest font-bold uppercase">
                    Digitally Crafted By <span className="text-primary hover:text-accent transition-colors cursor-crosshair">Ishita Ghosh</span> &copy; {new Date().getFullYear()}
                </p>
                <p className="text-[10px] text-slate-700 mt-2 tracking-[0.4em] uppercase">Built with Precision & Innovation</p>
            </footer>
        </section>
    );
}
