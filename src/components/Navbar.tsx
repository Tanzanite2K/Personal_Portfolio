import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { LogoMark, ResumeButton } from './Primitives'

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Hackathons', 'Education', 'Contact']

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between"
    >
      <a href="#top" aria-label="Home">
        <LogoMark className="w-8 h-8" />
      </a>

      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            {link}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:block">
        <ResumeButton />
      </div>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 right-6 left-6 liquid-glass rounded-2xl p-4 flex flex-col gap-3 z-30"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm font-medium hover:text-white py-1"
            >
              {link}
            </a>
          ))}
          <ResumeButton full />
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
