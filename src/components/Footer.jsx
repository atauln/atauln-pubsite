import React from 'react'
import { CONTACT_INFO } from '../data/portfolioData'

export const Footer = ({ trackExternalLink }) => {
  return (
    <footer className="max-w-6xl mx-auto px-6 pt-12 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
      <p>© 2026 Ata Noor. All rights reserved.</p>
      <div className="flex gap-6">
        <a 
          href={CONTACT_INFO.github} 
          target="_blank" 
          rel="noreferrer" 
          onClick={() => trackExternalLink && trackExternalLink('footer_github', CONTACT_INFO.github)} 
          className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" 
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a 
          href={CONTACT_INFO.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          onClick={() => trackExternalLink && trackExternalLink('footer_linkedin', CONTACT_INFO.linkedin)} 
          className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" 
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a 
          href={`mailto:${CONTACT_INFO.email}`} 
          onClick={() => trackExternalLink && trackExternalLink('footer_email', `mailto:${CONTACT_INFO.email}`)} 
          className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" 
          aria-label="Send Email"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
