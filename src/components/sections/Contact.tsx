import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sreyangshusarkar@gmail.com', href: 'mailto:sreyangshusarkar@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/sreyangshusarkar', href: 'https://www.linkedin.com/in/sreyangshusarkar/' },
  { icon: Github, label: 'GitHub', value: '@sreyangshu05', href: 'https://github.com/sreyangshu05' },
  { icon: Phone, label: 'Phone', value: '+91 93304 11615', href: 'tel:+919330411615' },
  { icon: MapPin, label: 'Location', value: 'Kolkata, India', href: '' },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">07 — Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight mb-6">
            <span className="gradient-text-blue">Let's Build Something</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-200 mb-6 font-['Space_Grotesk']">Get In Touch</h3>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-2 font-['Space_Grotesk']">Message Sent!</h4>
                  <p className="text-slate-500">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-400 font-medium mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-2 text-sm">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                      placeholder="Tell me about your project or just say hi..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-3.5 rounded-full font-semibold text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-200 mb-6 font-['Space_Grotesk']">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-400" size={18} />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs font-['Space_Grotesk']">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-200 font-medium hover:text-blue-400 transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-slate-200 font-medium text-sm">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-sm font-['Space_Grotesk'] font-medium">Currently Available</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open to full-time roles, internships, freelance projects, and collaboration opportunities.
                  Let's connect and build something amazing together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center pt-16 mt-16 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-600 text-sm font-['Space_Grotesk']">
            Sreyangshu Sarkar. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
