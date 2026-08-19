import React from 'react'
import { BookOpen, Sparkles } from 'lucide-react'
import { EDUCATION, HOMELAB_DATA } from '../data/portfolioData'

export const EducationSection = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Panel */}
        <div className="surface-card p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-between shadow-lg hover:border-zinc-700 transition-all">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-500 w-6 h-6" aria-hidden="true" />
              <h3 className="font-heading font-bold text-2xl text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-heading font-bold text-lg text-white">{EDUCATION.institution}</h4>
                <p className="text-blue-400 text-sm font-semibold">{EDUCATION.degree}</p>
                <p className="text-zinc-400 text-sm mt-1">{EDUCATION.minor} • {EDUCATION.gradDate}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800/80 pt-6 flex flex-wrap gap-2">
            {EDUCATION.focusAreas.map(area => (
              <span key={area} className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/60">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Homelab & Interests Panel */}
        <div className="surface-card p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-between shadow-lg hover:border-zinc-700 transition-all">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-blue-500 w-6 h-6" aria-hidden="true" />
              <h3 className="font-heading font-bold text-2xl text-white">Interests & Homelab</h3>
            </div>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>{HOMELAB_DATA.description}</p>
              <p className="text-xs text-zinc-500 italic mt-2">{HOMELAB_DATA.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
