import React from 'react'
import { Code, Cpu, Database, Layers, Sliders } from 'lucide-react'
import { TechBadge } from './TechBadge'
import { SKILLS } from '../data/portfolioData'

const getSkillCategoryIcon = (category) => {
  switch (category) {
    case 'Languages':
      return <Code className="w-5 h-5 text-blue-400" aria-hidden="true" />
    case 'Frameworks':
      return <Cpu className="w-5 h-5 text-indigo-400" aria-hidden="true" />
    case 'Databases':
      return <Database className="w-5 h-5 text-violet-400" aria-hidden="true" />
    case 'Tools':
      return <Layers className="w-5 h-5 text-sky-400" aria-hidden="true" />
    default:
      return <Sliders className="w-5 h-5 text-blue-400" aria-hidden="true" />
  }
}

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-heading font-extrabold text-white mb-3">Technical Skills</h2>
        <p className="text-zinc-400">Core languages, frameworks, database architectures, and systems tooling.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {Object.entries(SKILLS).map(([category, list]) => (
          <div 
            key={category} 
            className="surface-card p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/5 h-full"
          >
            <div>
              <h3 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2.5">
                {getSkillCategoryIcon(category)} {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map(skill => (
                  <TechBadge key={skill} name={skill} size="md" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
