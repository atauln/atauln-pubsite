import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { TechBadge } from './TechBadge'
import { PROJECTS } from '../data/portfolioData'

export const ProjectsSection = ({ trackExternalLink }) => {
  const [projectFilter, setProjectFilter] = useState('All')

  const categories = ['All', 'Backend & Systems', 'AI & ML', 'Full-Stack']

  const filteredProjects = projectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      {/* Split Header Composition for Visual Rhythm (R-05 & RHYTHM 2) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-800/80">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">Portfolio</span>
          <h2 className="text-3xl font-heading font-extrabold text-white">Featured Projects</h2>
          <p className="text-zinc-400 max-w-lg mt-2 text-sm leading-relaxed">
            Production software developments spanning backend APIs, AI integrations, and system tools.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setProjectFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                projectFilter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map(project => (
          <div
            key={project.name}
            className="surface-card p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/5 group h-full"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-800/90 text-blue-400 border border-zinc-700">
                  {project.category}
                </span>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1" 
                  onClick={() => trackExternalLink && trackExternalLink(`project_github_${project.name}`, project.url)}
                  aria-label={`View ${project.name} GitHub Repository`}
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">{project.name}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
              {project.tech.map(t => (
                <TechBadge key={t} name={t} size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
