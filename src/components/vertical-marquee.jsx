'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function VerticalMarquee({ children, direction = 'down', speed = 20, pauseOnHover = true, className = '' }) {
  // Calculate animation duration based on speed (lower number = faster)
  const duration = 100 / speed;

  // Define animation direction
  const animate = {
    y: direction === 'down' ? ['0%', '-50%'] : ['-50%', '0%']
  };

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <motion.div
        animate={animate}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration,
          ease: 'linear'
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
        className="flex flex-col"
      >
        {/* Original children */}
        {children}
        {/* Duplicate children to create seamless loop */}
        {children}
      </motion.div>
    </div>
  );
}
