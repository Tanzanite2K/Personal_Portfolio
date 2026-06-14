import React from 'react'
import { motion } from 'motion/react'
import { SectionEyebrow } from './Primitives'
import { aboutMe } from '../data/content'

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label={aboutMe.eyebrow} tag={aboutMe.tag} />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            {aboutMe.heading1}
            <br />
            {aboutMe.heading2}
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">{aboutMe.paragraphs[1]}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Systems thinking', 'Clean pipelines', 'Open source', 'Problem solving'].map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="liquid-glass rounded-2xl p-5"
        >
          <p className="text-xs text-white/50 mb-4">By the numbers</p>
          <div className="grid grid-cols-2 gap-3">
            {aboutMe.stats.map((stat) => (
              <div key={stat.label} className="liquid-glass rounded-lg p-4">
                <p className="text-3xl font-semibold tracking-tight" style={{ color: '#A4F4FD' }}>
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-1.5 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
