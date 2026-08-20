import React from 'react'
import { ArrowRight, FileText, MapPin, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './TechIcon'
import { TechnicalSnapshot } from './TechnicalSnapshot'
import { CONTACT_INFO } from '../data/portfolioData'

export const HeroSection = ({ trackExternalLink }) => {
  return (
    <header id="about" className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-16 flex flex-col md:flex-row gap-12 items-center relative z-10">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true"></span>
          Systems & Backend Engineer
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
          Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Backend Systems</span> & Cloud Infrastructure
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
          Hi, I'm <strong className="text-white">Ata Noor</strong>. Software engineering graduate from Rochester Institute of Technology (RIT) specializing in distributed API architectures, cloud infrastructure, and semantic search pipelines.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Get in Touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a 
            href={CONTACT_INFO.resume} 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => trackExternalLink && trackExternalLink('hero_resume', CONTACT_INFO.resume)} 
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-5 py-3 rounded-lg transition-colors font-medium text-zinc-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" 
            aria-label="Download Resume PDF"
          >
            <FileText className="w-5 h-5 text-blue-400" /> Resume
          </a>
          <a 
            href={CONTACT_INFO.github} 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => trackExternalLink && trackExternalLink('hero_github', CONTACT_INFO.github)} 
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-5 py-3 rounded-lg transition-colors font-medium text-zinc-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" 
            aria-label="Ata Noor's GitHub Profile"
          >
            <GithubIcon className="w-5 h-5 text-zinc-300" /> GitHub
          </a>
          <a 
            href={CONTACT_INFO.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => trackExternalLink && trackExternalLink('hero_linkedin', CONTACT_INFO.linkedin)} 
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-5 py-3 rounded-lg transition-colors font-medium text-zinc-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" 
            aria-label="Ata Noor's LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5 text-blue-400" /> LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-zinc-400">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" aria-hidden="true" /> {CONTACT_INFO.location}</span>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Mail className="w-4 h-4 text-blue-500" aria-hidden="true" /> {CONTACT_INFO.email}</a>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md">
        <TechnicalSnapshot />
      </div>
    </header>
  )
}
