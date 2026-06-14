import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { MapPin, Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content'

const formatNow = () => {
  const now = new Date()
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const day = now.getDate()
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  return `${weekday} ${month} ${day}, ${time} IST`
}

const StatusBar: React.FC = () => {
  const [now, setNow] = useState(formatNow())

  useEffect(() => {
    const id = setInterval(() => setNow(formatNow()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4 text-white/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            {profile.email}
          </span>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <a href={`https://${profile.github}`} className="hidden md:flex items-center gap-1.5 hover:text-white">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a href={`https://${profile.linkedin}`} className="hidden md:flex items-center gap-1.5 hover:text-white">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <span>{now}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default StatusBar
