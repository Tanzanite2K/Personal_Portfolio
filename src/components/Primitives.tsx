import React from 'react'
import { ChevronRight } from 'lucide-react'

/* ---------- GitHubMark ----------
   Replaces AppleLogo from the source brief. Inline SVG GitHub mark,
   used on the resume/download-style CTA button. */
export const GitHubMark: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 496 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-31.1-36.3 0 0-25.6-17.5 1.8-17.2 0 0 27.9 2.3 43.3 28.4 22.6 38.6 67.6 32.4 84.7 28.4 1.8-9.6 5.5-25.4 7.6-29.4-65-13.5-93.8-65.9-93.8-99.9 0-9.4-1.3-23.7 7.6-39.7-26.4-13.5-25.7-31.3-26.3-41.3-.5-9.2 4.8-23.2 6.2-29.4 5.6-13.5 24.8-29.8 24.8-29.8 4.5-5.6 0-23.1 0-23.1-1.3-15.2 0-23.1 0-23.1 19.7-5.6 39.9 4.5 39.9 4.5 19.7-9.6 39.9-4.5 39.9-4.5 0 0-4.5 9.6 0 23.1 0 0 4.5 17.5 0 23.1 0 0 19.2 16.3 24.8 29.8 1.4 6.2 6.7 20.2 6.2 29.4-.6 10-.0 27.8-26.3 41.3 8.9 16 7.6 30.3 7.6 39.7 0 34-28.8 86.4-93.8 99.9 2.1 4 5.8 19.8 7.6 29.4 17.1 4 62.1 10.2 84.7-28.4 15.4-26.1 43.3-28.4 43.3-28.4 27.4-.3 1.8 17.2 1.8 17.2-19.7 7.2-31.1 36.3-31.1 36.3-14.7 44.8-84.7 29.8-84.7 29.8 0 21 .3 55.2.3 61.4 0 6.5 4.5 14.4 17.3 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
  </svg>
)

/* ---------- LogoMark ----------
   Same abstract 4-quadrant curve mark from the brief, used as the
   personal monogram in the navbar. */
export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 256 256" fill="#fff" className={className} aria-hidden="true">
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
)

/* ---------- ResumeButton ----------
   Equivalent of AppleButton: rounded-full white pill with GitHub mark,
   label, and a chevron that nudges on hover. */
export const ResumeButton: React.FC<{ label?: string; full?: boolean; href?: string }> = ({
  label = 'Download Resume',
  full = false,
  href = '/resume.pdf',
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
      full ? 'w-full' : ''
    }`}
  >
    <GitHubMark className="w-4 h-4" />
    {label}
    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
  </a>
)

/* ---------- SectionEyebrow ---------- */
export const SectionEyebrow: React.FC<{ label: string; tag?: string }> = ({ label, tag }) => (
  <div className="inline-flex items-center gap-3">
    <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      {label}
    </span>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">{tag}</span>
    )}
  </div>
)

/* ---------- gradientStyle ----------
   Shiny gradient used on headline accent words. */
export const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}
