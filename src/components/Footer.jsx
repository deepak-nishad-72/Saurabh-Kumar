import React from 'react';
import { Mail, Phone, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-12 sm:py-16 overflow-hidden">
      {/* Subtle top glare glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-black text-xs text-sky-400">
                  {personalInfo.initials}
                </div>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white tracking-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-xs font-mono text-sky-400">
                  {personalInfo.subtitle}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Crafting scalable, high-performance web applications using the modern MERN stack. Available for engineering roles and collaborations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-400/40 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-400/40 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-400/40 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-emerald-400/40 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(link.href.substring(1));
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Contact Saurabh
            </h5>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-slate-400 hover:text-sky-300 transition-colors truncate"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-slate-400 hover:text-emerald-300 transition-colors"
              >
                +91 {personalInfo.phone}
              </a>
              <p className="text-xs text-slate-500 font-mono pt-1">
                India (IST / UTC+5:30)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Saurabh Kumar Nishad. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              Built with React & MERN Focus
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-400/50 text-slate-400 hover:text-white transition-all group focus:outline-none"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
