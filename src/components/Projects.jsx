import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import GlowButton from './GlowButton';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Projects"
          subtitle="Explore some of my recent web applications, full-stack systems, and client solutions."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlassCard
                glowEffect={project.featured}
                className="h-full flex flex-col justify-between group cursor-pointer border-slate-800 hover:border-sky-500/40"
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail / Image Showcase Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/40 p-4 flex flex-col justify-between border-b border-white/10">
                  {/* Decorative Project Mockup UI */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Browser mockup header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/60 border border-white/10 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] font-mono text-slate-400 ml-1.5 truncate max-w-[120px]">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                      </span>
                    </div>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-semibold">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Mockup visual center */}
                  <div className="relative z-10 my-auto text-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="inline-block p-4 rounded-2xl bg-slate-900/80 border border-sky-400/20 shadow-xl backdrop-blur-md">
                      <Layers className="w-8 h-8 text-sky-400 mx-auto mb-1 group-hover:rotate-6 transition-transform" />
                      <span className="text-xs font-mono font-medium text-slate-300">
                        {project.tagline || 'Interactive Full-Stack Web App'}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                    <span className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-white/5 text-[11px] font-mono text-sky-300/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.liveUrl.startsWith('https://example.com')) {
                          e.preventDefault();
                          alert(`Demo link clicked for "${project.title}". You can configure your live domain in src/data/portfolioData.js!`);
                        }
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-sky-500/30 text-sky-300 text-xs font-semibold transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.githubUrl.startsWith('https://github.com/example')) {
                          e.preventDefault();
                          alert(`GitHub link clicked for "${project.title}". You can configure your repository URL in src/data/portfolioData.js!`);
                        }
                      }}
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Modal for Extended Project Preview */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-950/60">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-xs font-mono text-sky-400">{selectedProject.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.highlights && (
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-sky-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-white/10 bg-slate-950/80 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (selectedProject.liveUrl.startsWith('https://example.com')) {
                        e.preventDefault();
                        alert(`Demo link clicked for "${selectedProject.title}". You can configure your live domain in src/data/portfolioData.js!`);
                      }
                    }}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold shadow-lg hover:shadow-sky-500/30 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
