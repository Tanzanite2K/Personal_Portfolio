import React from 'react'
import { motion } from 'motion/react'
import { SectionEyebrow } from './Primitives'
import { skills } from '../data/content'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-5">
          <SectionEyebrow label="Skills" tag="Toolbox" />
        </div>
        <p className="text-xs uppercase tracking-widest text-white/40">
          Languages, frameworks, and infrastructure I reach for daily
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
            className="liquid-glass rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-wider text-white/40 mb-4">{cat.title}</p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
