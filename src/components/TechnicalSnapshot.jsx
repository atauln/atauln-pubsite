import React from 'react'
import { Server, Check } from 'lucide-react'
import { TechBadge } from './TechBadge'
import { TECHNICAL_SNAPSHOT } from '../data/portfolioData'

export const TechnicalSnapshot = () => {
  return (
    <div className="surface-card p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 shadow-xl space-y-5">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-2.5">
          <Server className="w-5 h-5 text-blue-400" aria-hidden="true" />
          <h2 className="font-heading font-bold text-lg text-white">Technical Snapshot</h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950/60 text-blue-400 border border-blue-800/50">
          {TECHNICAL_SNAPSHOT.classYear}
        </span>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Education</span>
          <p className="text-zinc-200 font-medium">{TECHNICAL_SNAPSHOT.degree}</p>
          <p className="text-xs text-zinc-400">{TECHNICAL_SNAPSHOT.minor}</p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-1.5">Focus Pillars</span>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {TECHNICAL_SNAPSHOT.pillars.map((pillar, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-2">Primary Stack</span>
          <div className="flex flex-wrap gap-2">
            {TECHNICAL_SNAPSHOT.primaryStack.map(name => (
              <TechBadge key={name} name={name} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
