import React from 'react'
import { ExternalLink } from 'lucide-react'
import { TechBadge } from './TechBadge'
import { EXPERIENCE } from '../data/portfolioData'

export const ExperienceSection = ({ trackExternalLink }) => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20 relative z-10">
      {/* Left-Aligned Section Header for Timeline Alignment (R-05 Layout Rhythm) */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">Career History</span>
        <h2 className="text-3xl font-heading font-extrabold text-white mb-3">Work History</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Engineering experience spanning backend architectures, cloud platforms, and systems administration.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-800">
        {EXPERIENCE.map((exp, idx) => {
          const isEven = idx % 2 === 0

          return (
            <div key={idx} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
              {/* Timeline Center Dot Marker */}
              <div 
                className="absolute left-4 md:left-1/2 w-7 h-7 rounded-full bg-zinc-950 border-2 border-blue-500 flex items-center justify-center transform -translate-x-3 md:-translate-x-3.5 z-10 shadow-md shadow-blue-500/20" 
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>

              {/* Left Column */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-10 text-left md:text-right">
                {isEven ? (
                  // Even item: Header info on Left
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 inline-block mb-2">
                      {exp.duration}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white">{exp.role}</h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-zinc-400 hover:text-blue-400 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 mt-1 transition-colors"
                      onClick={() => trackExternalLink && trackExternalLink(`experience_company_${exp.company}`, exp.companyUrl)}
                      aria-label={`Visit ${exp.company} website`}
                    >
                      {exp.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  // Odd item: Card on Left
                  <div className="surface-card p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-left shadow-lg hover:border-zinc-700 transition-all">
                    <ul className="list-disc list-outside text-sm text-zinc-300 pl-4 space-y-2 mb-4">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                      {exp.tech.map(t => (
                        <TechBadge key={t} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 pl-12 md:pl-10 text-left">
                {isEven ? (
                  // Even item: Card on Right
                  <div className="surface-card p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-left shadow-lg hover:border-zinc-700 transition-all">
                    <ul className="list-disc list-outside text-sm text-zinc-300 pl-4 space-y-2 mb-4">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                      {exp.tech.map(t => (
                        <TechBadge key={t} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                ) : (
                  // Odd item: Header info on Right
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 inline-block mb-2">
                      {exp.duration}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white">{exp.role}</h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-zinc-400 hover:text-blue-400 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 mt-1 transition-colors"
                      onClick={() => trackExternalLink && trackExternalLink(`experience_company_${exp.company}`, exp.companyUrl)}
                      aria-label={`Visit ${exp.company} website`}
                    >
                      {exp.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
