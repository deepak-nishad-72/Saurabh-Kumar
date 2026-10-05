import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Server,
  Cpu,
  Database,
  FileCode2,
  Palette,
  Layout,
  Sparkles,
  GitBranch,
  CheckCircle,
  Layers
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { skillsData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

// Icon mapper helper
const iconMap = {
  Atom: Atom,
  Server: Server,
  Cpu: Cpu,
  Database: Database,
  FileCode2: FileCode2,
  Palette: Palette,
  Layout: Layout,
  Sparkles: Sparkles,
  GitBranch: GitBranch,
  Github: GithubIcon,
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden bg-slate-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tech Stack"
          title="Skills & Technologies"
          subtitle="Web Development — MERN Stack. High-performance modern web technologies I specialize in."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 hover:cursor-pointer rounded-full text-xs font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-sky-400/50 scale-105'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || FileCode2;

            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="group relative rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 p-5 sm:p-6 transition-all duration-300 hover:border-sky-500/50 hover:cursor-pointer hover:bg-slate-900/80 hover:shadow-[0_10px_30px_-5px_rgba(56,189,248,0.2),0_0_20px_rgba(37,99,235,0.15)] flex flex-col items-center text-center justify-between min-h-[160px]"
              >
                {/* Subtle top glare highlight on card */}
                <div className=" absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent  via-sky-400/20 to-transparent group-hover:via-sky-400/60  transition-colors duration-300" />

                {/* Tech Icon Container */}
                <div className="relative mb-3 ">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300  group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      border: `1px solid ${skill.color}35`,
                    }}
                  >
                    <IconComponent
                      className="w-7 h-7 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>

                {/* Tech Name & Category */}
                <div >
                  <h3 className="font-bold text-base text-slate-100 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mt-1">
                    {skill.category}
                  </span>
                </div>

                {/* Bottom micro indicator */}
                <div className="w-6 h-0.5 rounded-full bg-slate-800 group-hover:bg-sky-400 group-hover:w-12 transition-all duration-300 mt-3" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-blue-950/40 border border-sky-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Full-Stack MERN Architecture Mastery</h4>
              <p className="text-xs sm:text-sm text-slate-400">From intuitive UI workflows to optimized REST endpoints and database models.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 shrink-0">
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Ready for Production</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
