'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CanvasGrid } from './canvas-grid';

export function PricingCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-black border border-neutral-800 rounded-2xl p-6 overflow-hidden group">
      {/* Beam of light */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 70%, transparent 100%)',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      </motion.div>

      {/* Canvas Grid at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <CanvasGrid className="w-full h-full" />
      </div>

      {/* Browser Window Skeleton */}
      <motion.div
        className="bg-neutral-900 border border-neutral-700 rounded-lg mb-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Browser Header */}
        <div className="flex items-center gap-2 p-3 border-b border-neutral-700">
          <div className="flex gap-1.5">
            <motion.div
              className="w-2.5 h-2.5 bg-red-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            />
            <motion.div
              className="w-2.5 h-2.5 bg-yellow-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            />
            <motion.div
              className="w-2.5 h-2.5 bg-green-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, duration: 0.3 }}
            />
          </div>
          <div className="flex-1 bg-neutral-800 h-5 rounded ml-3"></div>
        </div>

        {/* Hero Section Mockup */}
        <div className="p-4 space-y-3">
          {/* Hero Title */}
          <motion.div
            className="bg-neutral-700 h-4 w-3/4 rounded"
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.div
            className="bg-neutral-700 h-4 w-1/2 rounded"
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />

          {/* Hero Subtitle */}
          <div className="space-y-1.5 mt-3">
            <motion.div
              className="bg-neutral-800 h-2 w-full rounded"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.6, duration: 0.3 }}
            />
            <motion.div
              className="bg-neutral-800 h-2 w-4/5 rounded"
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ delay: 1.7, duration: 0.3 }}
            />
            <motion.div
              className="bg-neutral-800 h-2 w-2/3 rounded"
              initial={{ width: 0 }}
              animate={{ width: '66%' }}
              transition={{ delay: 1.8, duration: 0.3 }}
            />
          </div>

          {/* CTA Button Mockup */}
          <motion.div
            className="bg-neutral-600 h-8 w-24 rounded mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.9, duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Title and Description */}
      <div className="relative z-10 mb-8">
        <motion.h3
          className="text-lg font-medium text-white mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Design & Development Studio
        </motion.h3>
        <motion.p
          className="text-lg text-neutral-400 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Crafting exceptional digital experiences that drive growth and engagement for forward-thinking brands.
        </motion.p>
      </div>

      {/* CTA Button */}
      <motion.div
        className="relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button
          className="relative w-full bg-black border border-neutral-700 rounded-lg px-6 py-3 text-white font-medium transition-all duration-300 hover:border-neutral-600 overflow-hidden group/btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Button background animation with clip-path */}
          <motion.div
            className="absolute inset-0 bg-neutral-800"
            style={{
              clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />

          {/* Yellow arrow container */}
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded flex items-center justify-center"
            animate={{
              x: isHovered ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Dotted arrow */}
            <div className="flex items-center gap-0.5">
              <motion.div
                className="w-1 h-1 bg-black rounded-full"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-1 h-1 bg-black rounded-full"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              />
              <motion.div
                className="w-1 h-1 bg-black rounded-full"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              />
              <svg className="w-2 h-2 ml-0.5" viewBox="0 0 8 8" fill="none">
                <path d="M0 4L6 4M4 2L6 4L4 6" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          {/* Button text */}
          <motion.span
            className="relative z-10 flex items-center justify-center"
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            View Pricing
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
}