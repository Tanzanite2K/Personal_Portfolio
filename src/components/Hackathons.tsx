import React from 'react'
import { motion } from 'motion/react'
import { Trophy } from 'lucide-react'
import { SectionEyebrow } from './Primitives'
import { hackathons } from '../data/content'

const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-md mb-12"
      >
        <SectionEyebrow label="Hackathons" tag="Weekends well spent" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Built under
          <br />
          a deadline.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {hackathons.map((hack, i) => (
          <motion.figure
            key={hack.name + hack.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="liquid-glass rounded-2xl p-6 md:col-span-1 md:max-w-xl"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" style={{ color: '#A4F4FD' }} />
                <span className="text-sm font-semibold text-white">{hack.placement}</span>
              </div>
              <span className="text-xs text-white/40">{hack.year}</span>
            </div>
            <p className="text-base font-semibold text-white mb-1">{hack.project}</p>
            <p className="text-xs text-white/50 mb-3">{hack.name}</p>
            <p className="text-sm text-white/70 leading-[1.6]">{hack.description}</p>
            <figcaption className="mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              {hack.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default Hackathons
