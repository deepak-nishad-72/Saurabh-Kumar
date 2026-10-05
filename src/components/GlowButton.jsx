import React from 'react';
import { motion } from 'framer-motion';

export const GlowButton = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'glass' | 'outline'
  icon: Icon,
  href,
  download,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] border border-sky-400/40';
      case 'secondary':
        return 'bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700/80 hover:border-slate-600 shadow-md';
      case 'glass':
        return 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-400/60 shadow-[0_0_20px_rgba(56,189,248,0.15)]';
      case 'outline':
        return 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500';
      default:
        return 'bg-blue-600 text-white';
    }
  };

  const content = (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer overflow-hidden ${getVariantStyles()} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {/* Subtle shine sweep on hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
      
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl"
      {...props}
    >
      {content}
    </button>
  );
};

export default GlowButton;
