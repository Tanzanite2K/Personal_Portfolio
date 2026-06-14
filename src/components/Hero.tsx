import React from 'react'
import { motion } from 'motion/react'
import { ResumeButton, gradientStyle } from './Primitives'
import { profile } from '../data/content'

const Hero: React.FC = () => {
  return (
    <section id="top" className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <span className="block text-white">{profile.tagline1}</span>
        <span className="block animate-shiny" style={gradientStyle}>
          {profile.taglineAccent}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <ResumeButton label="View Resume" />
        <span className="text-xs text-white/40">{profile.role} — {profile.location}</span>
      </motion.div>
    </section>
  )
}

export default Hero
