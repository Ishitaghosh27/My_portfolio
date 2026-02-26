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
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">Currently seeking an entry-level Django Developer role. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="mailto:ishitaghosh2117@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Email</h4>
                                        <p className="font-semibold text-lg">ishitaghosh2117@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919109556689" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Phone</h4>
                                        <p className="font-semibold text-lg">+91 9109556689</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-slate-300 group">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Location</h4>
                                        <p className="font-semibold text-lg">Raipur, Chhattisgarh(C.G)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-700/50">
                                <h4 className="text-sm font-medium text-slate-500 mb-4">Social Profiles</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/ishitaghosh27" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#333] transition-all group">
                                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="https://linkedin.com/in/ishita-ghosh-b1282366" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all group">
                                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="glass-panel p-8 md:p-10 rounded-3xl space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none font-sans"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all group ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-4 rounded-xl text-center font-medium flex items-center justify-center gap-2 ${result.includes('Success') ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                >
                                    {result.includes('Success') && <CheckCircle className="w-5 h-5" />}
                                    {result}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-24 border-t border-slate-800 pt-8 pb-8 text-center text-slate-500 relative z-10">
                <p>Designed & Built by Ishita Ghosh &copy; {new Date().getFullYear()}</p>
            </footer>
        </section>
    );
}
