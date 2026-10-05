import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, User, AtSign, Sparkles, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import GlowButton from './GlowButton';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sendWhatsAppAlert: true,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
    sentDetails: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitted: false,
        loading: false,
        error: 'Please fill in all required fields (Name, Email, and Message).',
        sentDetails: null,
      });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: '', sentDetails: null });

    try {
      // Send real email to saurabhkumar62421@gmail.com using FormSubmit API
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🚀 New Portfolio Inquiry from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          Message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        const submittedData = { ...formData };

        setFormStatus({
          submitted: true,
          loading: false,
          error: '',
          sentDetails: submittedData,
        });

        // Trigger celebration confetti
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#38bdf8', '#3b82f6', '#10b981', '#a855f7'],
        });

        // If WhatsApp alert is checked, open WhatsApp chat with prefilled message
        if (formData.sendWhatsAppAlert) {
          const formattedPhone = personalInfo.phone.replace(/[^0-9]/g, '');
          const waPhone = formattedPhone.length === 10 ? `91${formattedPhone}` : formattedPhone;
          const waText = encodeURIComponent(
            `👋 Hi Saurabh,\n\nI have submitted the contact form on your portfolio website:\n\n👤 *Name*: ${formData.name}\n📧 *Email*: ${formData.email}\n📱 *Phone*: ${formData.phone || 'N/A'}\n💬 *Message*: ${formData.message}`
          );
          window.open(`https://api.whatsapp.com/send?phone=${waPhone}&text=${waText}`, '_blank');
        }

        // Reset form inputs
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          sendWhatsAppAlert: true,
        });
      } else {
        throw new Error(data.message || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Fallback: Still notify user and allow WhatsApp fallback
      setFormStatus({
        submitted: false,
        loading: false,
        error: 'Unable to send email directly. You can also contact directly via WhatsApp or Email below.',
        sentDetails: null,
      });
    }
  };

  const getWhatsAppDirectUrl = () => {
    const formattedPhone = personalInfo.phone.replace(/[^0-9]/g, '');
    const waPhone = formattedPhone.length === 10 ? `91${formattedPhone}` : formattedPhone;
    return `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent('Hi Saurabh, I visited your portfolio and would like to connect!')}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-slate-950/50">
      {/* Soft background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Work Together"
          subtitle="Have a project or opportunity in mind? Feel free to reach out via form, email, or WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Direct Communication Channels
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I am currently open to full-time engineering roles, freelance opportunities, and collaborative MERN stack projects. You can send a message below, email me, or chat on WhatsApp.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-xl flex items-center gap-4 transition-all duration-300 hover:bg-slate-900/90 shadow-md hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct Card */}
              <a
                href={getWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-xl flex items-center gap-4 transition-all duration-300 hover:bg-slate-900/90 shadow-md hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                    WhatsApp Message / Chat
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    +91 {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-xl flex items-center gap-4 transition-all duration-300 hover:bg-slate-900/90 shadow-md hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                    Direct Call
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    +91 {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location} (Open to Remote Worldwide)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-sky-500/20 text-xs font-mono text-slate-300 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Notifications are sent directly to email and phone.</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard glowEffect className="p-6 sm:p-8 bg-slate-900/70 border-slate-800">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Sends an instant notification to Saurabh's email and phone.
                </p>
              </div>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out! Saurabh has received your email notification at <span className="text-sky-300 font-mono text-xs">{personalInfo.email}</span>.
                    </p>
                  </div>

                  {/* Quick WhatsApp followup button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppDirectUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp (+91 {personalInfo.phone})
                    </a>

                    <button
                      onClick={() => setFormStatus({ submitted: false, loading: false, error: '', sentDetails: null })}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{formStatus.error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <AtSign className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Phone Number <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Message <span className="text-sky-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-slate-500">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Saurabh, I would like to discuss a project..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* WhatsApp instant alert option */}
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="sendWhatsAppAlert"
                      name="sendWhatsAppAlert"
                      checked={formData.sendWhatsAppAlert}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-emerald-500 bg-slate-900 border-slate-700 focus:ring-emerald-500 focus:ring-offset-slate-900"
                    />
                    <label htmlFor="sendWhatsAppAlert" className="text-xs text-slate-300 select-none cursor-pointer">
                      Also ping instant message on Saurabh's WhatsApp (+91 {personalInfo.phone})
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <GlowButton
                      type="submit"
                      variant="primary"
                      icon={formStatus.loading ? Loader2 : Send}
                      disabled={formStatus.loading}
                      className="w-full justify-center"
                    >
                      {formStatus.loading ? 'Sending to saurabhkumar62421@gmail.com...' : 'Send Message & Alert'}
                    </GlowButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

