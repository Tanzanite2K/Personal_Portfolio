import React from 'react'
import { motion } from 'motion/react'
import { GraduationCap, BadgeCheck } from 'lucide-react'
import { SectionEyebrow } from './Primitives'
import { others, certifications } from '../data/content'

const Publications: React.FC = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="Education" tag="Background" />
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.02] mb-6">
            Where it all
            <br />
            started.
          </h2>

          <div className="space-y-4">
            {others.education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="liquid-glass rounded-xl p-4 flex items-start gap-3"
              >
                <span className="liquid-glass rounded-lg p-2 mt-0.5">
                  <GraduationCap className="w-4 h-4" style={{ color: '#A4F4FD' }} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white leading-snug">{edu.title}</p>
                  <p className="text-xs text-white/50 mt-1">{edu.place}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-white/70">{edu.detail}</span>
                    <span className="text-xs text-white/40">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SectionEyebrow label="Certifications" tag="Credentials" />
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.02] mb-6">
            Formal proof,
            <br />
            for what it's worth.
          </h2>

          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="liquid-glass rounded-xl p-4 flex items-center gap-3"
              >
                <span className="liquid-glass rounded-lg p-2">
                  <BadgeCheck className="w-4 h-4" style={{ color: '#10b981' }} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white leading-snug">{cert.name}</p>
                  <p className="text-xs text-white/50 mt-1">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
