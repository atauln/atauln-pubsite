import React from 'react'
import { Cpu } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolioData'

export const Navbar = ({ trackExternalLink }) => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-nav border-b border-zinc-800/80 bg-zinc-950/75 backdrop-blur-md px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#about" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-1">
          <Cpu className="text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
          <span className="font-heading font-bold text-lg tracking-wider text-white">ATA NOOR</span>
        </a>
        
        <div className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-zinc-400">
          {NAV_LINKS.map(link => {
            if (link.isButton) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 font-semibold"
                >
                  {link.label}
                </a>
              )
            }
            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackExternalLink && trackExternalLink('nav_resume', link.href)}
                  aria-label={link.ariaLabel}
                  className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
