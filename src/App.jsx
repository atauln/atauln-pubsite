import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  // Helper to track external link clicks
  const trackExternalLink = (label, url) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'external_link_click', {
        event_category: 'Engagement',
        event_label: label,
        destination_url: url
      })
    }
  }

  return (
    <div className="min-h-screen relative font-body text-zinc-100 selection:bg-blue-600 selection:text-white pb-16">
      {/* Skip Navigation Link for Accessibility (WCAG / antislop R-32) */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:z-[100] focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Ambient Radial Glows & CSS Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-5%] left-[-10%] w-[55vw] h-[55vw] rounded-full ambient-glow-blue"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full ambient-glow-indigo"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[50vw] h-[50vw] rounded-full ambient-glow-violet"></div>

        <div className="ambient-particle ambient-particle-delay-1 w-2 h-2 top-[12%] left-[8%]"></div>
        <div className="ambient-particle ambient-particle-delay-2 w-1.5 h-1.5 top-[25%] left-[85%]"></div>
        <div className="ambient-particle ambient-particle-delay-3 w-2 h-2 top-[48%] left-[15%]"></div>
        <div className="ambient-particle ambient-particle-delay-4 w-1.5 h-1.5 top-[65%] left-[78%]"></div>
        <div className="ambient-particle ambient-particle-delay-5 w-2 h-2 top-[82%] left-[22%]"></div>
        <div className="ambient-particle ambient-particle-delay-2 w-1 h-1 top-[35%] left-[45%]"></div>
        <div className="ambient-particle ambient-particle-delay-4 w-2 h-2 top-[75%] left-[55%]"></div>
      </div>

      {/* Main App Layout Components */}
      <Navbar trackExternalLink={trackExternalLink} />
      <HeroSection trackExternalLink={trackExternalLink} />
      <SkillsSection />
      <ProjectsSection trackExternalLink={trackExternalLink} />
      <ExperienceSection trackExternalLink={trackExternalLink} />
      <EducationSection />
      <ContactSection />
      <Footer trackExternalLink={trackExternalLink} />
    </div>
  )
}
