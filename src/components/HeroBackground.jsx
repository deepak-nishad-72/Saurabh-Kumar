import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Subtle Base Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Primary Radial Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px]" />

      {/* Floating Animated Gradient Blob 1 - Electric Blue */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[20%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-transparent blur-[90px]"
      />

      {/* Floating Animated Gradient Blob 2 - Cyan / Deep Blue */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] right-[15%] w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-cyan-500/12 via-blue-700/10 to-transparent blur-[100px]"
      />

      {/* Subtle Floating Glass Circle 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[28%] right-[32%] w-24 h-24 rounded-full border border-sky-400/10 bg-sky-400/[0.02] backdrop-blur-[4px]"
      />

      {/* Subtle Floating Glass Circle 2 */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[55%] left-[18%] w-36 h-36 rounded-full border border-blue-400/10 bg-blue-500/[0.015] backdrop-blur-[3px]"
      />

      {/* Micro Glowing Sparkles / Particles */}
      {[
        { top: '15%', left: '25%', delay: 0 },
        { top: '22%', left: '75%', delay: 1.5 },
        { top: '45%', left: '15%', delay: 3 },
        { top: '65%', left: '80%', delay: 2 },
        { top: '38%', left: '50%', delay: 0.8 },
      ].map((star, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
          style={{ top: star.top, left: star.left }}
          className="absolute w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8]"
        />
      ))}

      {/* Gradient mask for seamless bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
    </div>
  );
};

export default HeroBackground;
