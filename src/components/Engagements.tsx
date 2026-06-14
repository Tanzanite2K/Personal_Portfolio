import React, { useState } from 'react'
import { engagements, profile } from '../data/content'

const Check: React.FC = () => (
  <span className="c3-check">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const Engagements: React.FC = () => {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="engagements" className="c3-pricing-section">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.075" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Let's work</span>
          <span className="c3-watermark-line-2">together</span>
        </div>
      </div>

      <div className="c3-grid">
        {engagements.plans.map((plan) => (
          <div key={plan.tier} className={`c3-card ${plan.featured ? 'c3-card-pro' : ''}`}>
            <p className="c3-tier-small">{plan.tier}</p>
            <p className="c3-tier-large" style={{ fontSize: '1.5rem', lineHeight: 1.3 }}>
              {yearly ? plan.availability.onsite : plan.availability.remote}
            </p>
            <p className="c3-desc">{plan.description}</p>
            <ul className="c3-list">
              {plan.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a href={`mailto:${profile.email}`} className="c3-btn">
              Get in touch
            </a>
          </div>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{engagements.toggleLabel}</span>
        <button
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          onClick={() => setYearly((v) => !v)}
          aria-pressed={yearly}
          aria-label="Toggle pricing display"
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  )
}

export default Engagements
