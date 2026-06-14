import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Trophy,
  Mail,
  Search,
  MapPin,
  Link as LinkIcon,
  Github,
  Linkedin,
  Circle,
} from 'lucide-react'
import { aboutMe, profile } from '../data/content'

type NavItem = {
  key: string
  label: string
  icon: React.ReactNode
  count?: number
}

const NAV_ITEMS: NavItem[] = [
  { key: 'about', label: 'About Me', icon: <User className="w-4 h-4" />, count: 1 },
  { key: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" />, count: 2 },
  { key: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, count: 5 },
  { key: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  { key: 'hackathons', label: 'Hackathons', icon: <Trophy className="w-4 h-4" />, count: 1 },
]

const LABEL_COLORS: { name: string; color: string }[] = [
  { name: 'AI / ML', color: '#00d2ff' },
  { name: 'Full-Stack', color: '#A4F4FD' },
  { name: 'IoT', color: '#f59e0b' },
  { name: 'Open Source', color: '#10b981' },
]

const FILES = [
  {
    id: 'about',
    name: profile.name,
    subject: 'about-me.md',
    preview: aboutMe.paragraphs[0].slice(0, 64) + '…',
    time: 'Pinned',
    unread: true,
    active: true,
  },
  {
    id: 'exp',
    name: 'SRM University AP',
    subject: 'AI/ML Developer — Academic Role',
    preview: 'Building CNNs, 3D CNNs (I3D), and ST-GAT for image, video, and spatiotemporal tasks…',
    time: '2025 — Now',
    unread: true,
  },
  {
    id: 'proj1',
    name: 'ST-GAT Traffic Predictor',
    subject: 'Spatial-Temporal Graph Attention Network',
    preview: 'Forecasts traffic speed across Bengaluru using spatial + temporal attention.',
    time: 'PyTorch',
  },
  {
    id: 'proj2',
    name: 'Video Anomaly Detection',
    subject: 'Weakly supervised MIL with 3D CNN (I3D)',
    preview: 'Binary + multi-class anomaly detection across 13 categories in surveillance video.',
    time: '13 classes',
  },
  {
    id: 'hack',
    name: 'Hack SRM 4.0',
    subject: 'Bolt - The Salvation — Winner',
    preview: 'IoT-driven EV battery safety system with real-time sensor analysis.',
    time: '2025',
  },
  {
    id: 'contact',
    name: 'Get in touch',
    subject: 'Open to internships & full-time roles',
    preview: `${profile.email}`,
    time: 'Always',
  },
]

const AboutMockup: React.FC = () => {
  const [activeNav, setActiveNav] = useState('about')
  const [activeFile, setActiveFile] = useState('about')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
    >
      {/* Header bar */}
      <div className="h-12 flex items-center justify-between px-4 sm:px-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="text-sm font-semibold text-white">{profile.name}</span>
          <span className="hidden sm:inline text-xs text-white/40">/ About Me</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-white/50 px-2.5 py-1 rounded-full border border-white/10">
          <Circle className="w-2 h-2 fill-current" style={{ color: '#10b981' }} />
          Available for work
        </span>
      </div>

      <div className="grid grid-cols-12 h-[520px]">
        {/* Sidebar */}
        <div className="col-span-12 sm:col-span-3 border-r border-white/10 bg-black/30 p-4 hidden sm:flex sm:flex-col overflow-y-auto">
          <a
            href="#contact"
            className="rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 inline-flex items-center justify-center gap-2 mb-4"
          >
            <Mail className="w-3.5 h-3.5" />
            Say Hello
          </a>

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveNav(item.key)}
                className={`flex items-center justify-between rounded-md px-2.5 py-2 text-sm transition-colors ${
                  activeNav === item.key
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {item.count !== undefined && (
                  <span className="text-xs text-white/40">{item.count}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 px-2.5">Focus Areas</p>
            <div className="flex flex-col gap-1.5">
              {LABEL_COLORS.map((label) => (
                <div key={label.name} className="flex items-center gap-2 px-2.5 py-1 text-xs text-white/60">
                  <span className="w-2 h-2 rounded-full" style={{ background: label.color }} />
                  {label.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 flex items-center gap-3 text-white/50">
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
        </div>

        {/* File / item list */}
        <div className="col-span-12 sm:col-span-4 border-r border-white/10 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-white/40 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Search profile</span>
          </div>
          {FILES.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFile(f.id)}
              className={`text-left px-4 py-3 border-b border-white/5 transition-colors ${
                activeFile === f.id ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${f.unread ? 'text-white' : 'text-white/80'}`}>
                  {f.name}
                </span>
                <span className="text-[11px] text-white/40">{f.time}</span>
              </div>
              <p className={`text-xs mb-0.5 ${f.unread ? 'text-white/90' : 'text-white/60'}`}>{f.subject}</p>
              <p className="text-xs text-white/40 truncate">{f.preview}</p>
            </button>
          ))}
        </div>

        {/* Reader pane */}
        <div className="col-span-12 sm:col-span-5 flex flex-col overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-sm font-semibold">
                {profile.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{profile.name}</p>
                <p className="text-xs text-white/50">{profile.role}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/60">
                Available
              </span>
            </div>

            <div className="liquid-glass rounded-lg p-3 mb-5 flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5" style={{ color: '#A4F4FD' }} />
              <div>
                <p className="text-xs font-semibold text-white mb-1">{profile.location}</p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Open to remote-first roles and on-site opportunities across India.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-white/70 leading-[1.6]">
              {aboutMe.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {aboutMe.facts.map((fact) => (
                <div key={fact.label} className="liquid-glass rounded-lg p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{fact.label}</p>
                  <p className="text-xs font-medium text-white">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-xs text-white/60">
              <LinkIcon className="w-3.5 h-3.5" />
              {profile.email}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMockup
