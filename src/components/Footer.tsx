import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { LogoMark } from './Primitives'
import { profile } from '../data/content'

const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <LogoMark className="w-5 h-5" />
        <span className="text-sm text-white/50">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </span>
      </div>
      <div className="flex items-center gap-4 text-white/50">
        <a href={`https://${profile.github}`} aria-label="GitHub" className="hover:text-white">
          <Github className="w-4 h-4" />
        </a>
        <a href={`https://${profile.linkedin}`} aria-label="LinkedIn" className="hover:text-white">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
