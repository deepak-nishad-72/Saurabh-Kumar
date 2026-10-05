import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Layers, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GlowButton from './GlowButton';
import HeroBackground from './HeroBackground';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Availability Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-300 tracking-wide">
                  {personalInfo.availability}
                </span>
              </div>
            </motion.div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-sm md:text-base font-mono font-medium text-sky-400 tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2"
              >
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>Hello, World! I am</span>
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                <span className="block">{personalInfo.name}</span>
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.primaryTitle}
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="inline-block mt-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-300 text-sm md:text-base font-mono"
              >
                &lt;{personalInfo.subtitle} /&gt;
              </motion.div>
            </div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <GlowButton
                variant="primary"
                href="#projects"
                icon={ArrowRight}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </GlowButton>

              <GlowButton
                variant="glass"
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                icon={Download}
                onClick={(e) => {
                  if (personalInfo.resumeUrl.startsWith('#')) {
                    e.preventDefault();
                    alert(`Downloading ${personalInfo.resumeFileName} (Demo Resume)`);
                  }
                }}
              >
                Download Resume
              </GlowButton>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm text-center lg:text-left"
                >
                  <p className="text-xs text-slate-400 font-mono">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-100">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphic Profile Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96"
            >
              {/* Soft Pulsing Ambient Glow Behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-cyan-400/20 blur-3xl animate-pulse-slow pointer-events-none" />

              {/* Decorative Concentric Rings */}
              <div className="absolute -inset-4 rounded-full border border-sky-400/20 border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-blue-500/10" />

              {/* Glassmorphic Circular Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-b from-sky-400/30 via-slate-800/40 to-blue-600/30 backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(56,189,248,0.25)] flex items-center justify-center overflow-hidden group">
                
                {/* Inner Profile Image / Visual Presentation */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-slate-950">
                  {/* Real Profile Photo */}
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />

                  {/* Soft Blue Glass Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-sky-500/10 pointer-events-none" />

                  {/* Bottom glass badge on photo */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-sky-400/40 backdrop-blur-md text-[11px] font-semibold text-sky-300 shadow-lg">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      MERN Developer
                    </span>
                  </div>

                  {/* Inner top glare ring */}
                  <div className="absolute inset-0 rounded-full border border-sky-400/20 pointer-events-none" />
                </div>
              </div>


              {/* Floating Tech Badge 1: React (Top Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-2 sm:right-6 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-sky-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-xs font-bold text-sky-300">React 19</span>
              </motion.div>

              {/* Floating Tech Badge 2: Node.js (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 left-0 sm:left-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">Node.js</span>
              </motion.div>

              {/* Floating Tech Badge 3: MongoDB (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-10 -right-4 sm:-right-2 px-3 py-1 rounded-xl bg-slate-900/90 border border-green-500/40 backdrop-blur-xl shadow-lg flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-bold text-green-300">MongoDB</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
