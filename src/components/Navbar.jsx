import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`pointer-events-auto w-full max-w-full transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border border-sky-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.1)] py-3 px-5 sm:px-6'
            : 'bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Saurabh Kumar Nishad Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-[11px] text-slate-400 font-mono">
                {personalInfo.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-15 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/60 to-sky-500/60 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.35)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              onClick={(e) => {
                // In demo mode, trigger alert/friendly toast if empty
                if (personalInfo.resumeUrl.startsWith('#')) {
                  e.preventDefault();
                  alert(`Downloading ${personalInfo.resumeFileName} (Demo Resume)`);
                }
              }}
              className="relative hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600/50 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 group"
            >
              <Download className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sky-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-blue-600/20 text-sky-400 border border-blue-500/30 font-semibold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-sky-400" />}
                    </a>
                  );
                })}

                <div className="pt-2 mt-1 border-t border-white/5">
                  <a
                    href={personalInfo.resumeUrl}
                    download={personalInfo.resumeFileName}
                    onClick={(e) => {
                      if (personalInfo.resumeUrl.startsWith('#')) {
                        e.preventDefault();
                        alert(`Downloading ${personalInfo.resumeFileName} (Demo Resume)`);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
