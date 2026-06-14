import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, MapPin } from 'lucide-react'
import { SectionEyebrow } from './Primitives'
import { experience } from '../data/content'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-md mb-12"
      >
        <SectionEyebrow label="Experience" tag="Career" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Where the work
          <br />
          actually happened.
        </h2>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative md:pl-10"
            >
              <span className="hidden md:block absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#0c0c0c]" />
              <div className="liquid-glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-white/50" />
                      {job.role}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white/80">{job.period}</p>
                    <p className="text-xs text-white/40 flex items-center justify-end gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-white/60 leading-[1.6] mb-4">{job.summary}</p>

                <ul className="space-y-2 mb-4">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-[1.5]">
                      <span className="c3-check shrink-0" style={{ width: 20, height: 20, marginTop: 2 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
