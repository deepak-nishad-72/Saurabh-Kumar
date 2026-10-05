import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowEffect = false,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -5,
              transition: { duration: 0.25, ease: 'easeOut' }
            }
          : undefined
      }
      onClick={onClick}
      className={`relative rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 shadow-xl overflow-hidden transition-colors duration-300 ${
        hoverEffect ? 'hover:border-blue-500/40 hover:bg-slate-900/60' : ''
      } ${
        glowEffect
          ? 'shadow-[0_0_30px_-5px_rgba(56,189,248,0.15)] border-blue-500/30'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Subtle top glare highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
