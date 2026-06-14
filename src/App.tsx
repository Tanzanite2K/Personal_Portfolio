import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatusBar from './components/StatusBar'
import AboutMockup from './components/AboutMockup'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hackathons from './components/Hackathons'
import Publications from './components/Publications'
import Others from './components/Others'
import Engagements from './components/Engagements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      {/* Global SVG noise filter (root level, for shiny headline) */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
            />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Fixed full-screen background video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-[#0c0c0c]/40" />
      </div>

      {/* Vertical guide lines */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StatusBar />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AboutMockup />
        </div>

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Hackathons />
        <Publications />
        <Others />
        <Engagements />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
