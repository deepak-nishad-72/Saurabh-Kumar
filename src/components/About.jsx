import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, Code, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import GlowButton from './GlowButton';

export const About = () => {
  const infoItems = [
    {
      label: 'Name',
      value: personalInfo.name,
      icon: User,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10 border-sky-500/20'
    },
    {
      label: 'Role',
      value: personalInfo.subtitle,
      icon: Briefcase,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      label: 'Focus',
      value: 'Web Development',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      label: 'Location',
      value: personalInfo.location,
      icon: MapPin,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  const highlights = [
    'Specialized in creating responsive, single-page MERN applications.',
    'Focused on clean architecture, modular code, and reusable UI components.',
    'Committed to smooth animations, high performance, and SEO optimization.'
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Who I Am"
          title="About Me"
          subtitle="A passionate developer dedicated to building impactful digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-100">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether creating interactive frontend interfaces with React & Tailwind CSS or architecting scalable backend REST APIs with Node.js, Express, and MongoDB, my goal is always to engineer fast, resilient, and visually captivating solutions.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-4">
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
                Download Resume (PDF)
              </GlowButton>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard
              glowEffect
              className="p-6 sm:p-8 relative bg-slate-900/60 border-slate-700/60"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Personal Details
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Developer Profile Summary
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sky-400 hidden sm:block">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>


              {/* Information Grid */}
              <div className="space-y-4">
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg border ${item.bgColor} ${item.color}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-white text-right">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status footer pill inside card */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Status:</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready for Hiring & Freelance
                </span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
