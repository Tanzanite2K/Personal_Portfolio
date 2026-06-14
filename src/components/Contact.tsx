import React from 'react'
import { motion } from 'motion/react'
import { ChevronRight, Mail, Phone, Github, Linkedin } from 'lucide-react'
import { ResumeButton } from './Primitives'
import { profile } from '../data/content'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3,
          }}
        />

        <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
          Let's build
          <br />
          something next.
        </h2>
        <p className="relative mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
          Whether it's an internship, a project collaboration, or a full-time role starting in 2026 — I'd
          love to hear from you.
        </p>

        <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ResumeButton label="View Resume" />
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email me
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="w-3.5 h-3.5" />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-white">
            <Phone className="w-3.5 h-3.5" />
            {profile.phone}
          </a>
          <a href={`https://${profile.github}`} className="flex items-center gap-1.5 hover:text-white">
            <Github className="w-3.5 h-3.5" />
            {profile.github}
          </a>
          <a href={`https://${profile.linkedin}`} className="flex items-center gap-1.5 hover:text-white">
            <Linkedin className="w-3.5 h-3.5" />
            {profile.linkedin}
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
