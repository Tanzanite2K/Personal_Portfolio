import React from 'react'
import { motion } from 'motion/react'
import { GitBranch, ListChecks, Compass } from 'lucide-react'
import { SectionEyebrow } from './Primitives'
import { others } from '../data/content'

const Others: React.FC = () => {
  const cards = [
    {
      title: 'Open Source',
      icon: <GitBranch className="w-4 h-4" style={{ color: '#00d2ff' }} />,
      items: others.openSource.map((o) => ({ primary: o.name, secondary: o.contribution })),
    },
    {
      title: 'Practice & Other Skills',
      icon: <ListChecks className="w-4 h-4" style={{ color: '#A4F4FD' }} />,
      items: others.practice.map((p) => ({ primary: p, secondary: '' })),
    },
    {
      title: 'Currently Exploring',
      icon: <Compass className="w-4 h-4" style={{ color: '#10b981' }} />,
      items: [
        { primary: 'Graph Neural Networks for spatiotemporal forecasting', secondary: '' },
        { primary: 'Weakly supervised learning for video understanding', secondary: '' },
        { primary: 'Resilient, OAuth-secured full-stack integrations', secondary: '' },
      ],
    },
  ]

  return (
    <section id="others" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-md mb-12"
      >
        <SectionEyebrow label="Beyond the projects" tag="Misc" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Other things
          <br />
          I spend time on.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, ci) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: ci * 0.06 }}
            className="liquid-glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="liquid-glass rounded-lg p-2">{card.icon}</span>
              <p className="text-sm font-semibold text-white">{card.title}</p>
            </div>
            <ul className="space-y-3">
              {card.items.map((item, idx) => (
                <li key={idx}>
                  <p className="text-xs text-white/80 leading-[1.5]">{item.primary}</p>
                  {item.secondary && <p className="text-[11px] text-white/40 mt-0.5">{item.secondary}</p>}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Others
