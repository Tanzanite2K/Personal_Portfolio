import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { SectionEyebrow } from './Primitives'
import { projects } from '../data/content'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-md mb-12"
      >
        <SectionEyebrow label="Projects" tag="Selected" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Things I built
          <br />
          and kept building.
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6]">
          A mix of open-source tools and side projects — most started as a fix for my own workflow, then
          grew into something other people use too.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={`https://${project.link}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="liquid-glass rounded-2xl p-6 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-black"
                  style={{ background: project.color }}
                >
                  {project.name.slice(0, 1)}
                </span>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </div>

            <p className="text-sm text-white/70 leading-[1.6] mb-2">{project.description}</p>
            <p className="text-sm text-white/45 leading-[1.6] mb-5">{project.longDescription}</p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/50 shrink-0 ml-3">
                <Sparkles className="w-3.5 h-3.5" style={{ color: project.color }} />
                {project.stats.label}: {project.stats.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Projects
