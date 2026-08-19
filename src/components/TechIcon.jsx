import React from 'react'
import { Cpu, Database, Layers, Code, Sliders, Sparkles } from 'lucide-react'

// Custom Brand Icons
export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Comprehensive Technology SVG Icon Helper
export const TechIcon = ({ name, className = "w-4 h-4" }) => {
  switch (name) {
    case 'Python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11.87 2c-4.22 0-3.95 1.83-3.95 1.83l.01 1.9h3.99v.57H6.38S2 5.8 2 10.02c0 4.23 2.55 4.08 2.55 4.08h1.52v-2.14s-.08-2.55 2.5-2.55h4.27s2.4-.04 2.4-2.35V4.38S15.7 2 11.87 2zm-2.14 1.34a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB"/>
          <path d="M12.13 22c4.22 0 3.95-1.83 3.95-1.83l-.01-1.9h-3.99v-.57h5.54S22 18.2 22 13.98c0-4.23-2.55-4.08-2.55-4.08h-1.52v2.14s.08 2.55-2.5 2.55h-4.27s-2.4.04-2.4 2.35v2.67S8.3 22 12.13 22zm2.14-1.34a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B"/>
        </svg>
      )
    case 'Java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#EA2D2E" aria-hidden="true">
          <path d="M4 19c0 .6 4 1 8 1s8-.4 8-1-4-1-8-1-8 .4-8 1zm4-3c0 .5 2.7.9 6 .9s6-.4 6-.9-2.7-.9-6-.9-6 .4-6 .9zm-3-4c.4 1 3.5 1.9 7 1.9s6.6-.9 7-1.9c-2 .5-4.5.8-7 .8s-5-.3-7-.8zm11-6.5C16 3.5 14 2 12 2S8 3.5 8 5.5c0 1.8 1.8 2.7 4 3 2.2-.3 4-1.2 4-3z" />
        </svg>
      )
    case 'C':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#A8B9CC" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 13.8c-1 .8-2.2 1.2-3.5 1.2-3 0-5.5-2.2-5.5-5s2.5-5 5.5-5c1.3 0 2.5.4 3.5 1.2l-1.4 1.8c-.6-.5-1.3-.8-2.1-.8-1.7 0-3 1.3-3 2.8s1.3 2.8 3 2.8c.8 0 1.5-.3 2.1-.8l1.4 1.8z" />
        </svg>
      )
    case 'C#':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#239120" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-3H8v-2h3V8h2v3h3v2h-3v3z" />
        </svg>
      )
    case 'Kotlin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#7F52FF" aria-hidden="true">
          <path d="M2 2h20L12 12l10 10H2V2z" />
        </svg>
      )
    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M14.5 17.5c.8.5 1.7.8 2.5.8 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.1-1.9l-.7-.3c-1.8-.7-3-1.7-3-3.6 0-2.1 1.7-3.7 4.4-3.7 1.3 0 2.4.3 3.1.8l-.9 2c-.6-.4-1.4-.7-2.3-.7-1 0-1.6.5-1.6 1.2 0 .9.7 1.2 2 1.7l.7.3c2.1.8 3.3 1.8 3.3 3.8 0 2.3-1.8 3.8-4.7 3.8-1.5 0-2.8-.4-3.6-1l1-2zm-7.6.2c.6.4 1.3.6 2.1.6 1.1 0 1.8-.5 1.8-1.8V7.8h2.8v8.8c0 2.7-1.6 3.9-4.2 3.9-1.4 0-2.6-.4-3.4-1l.9-2z" fill="#000000"/>
        </svg>
      )
    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3178C6" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <path d="M15 17.5c.8.5 1.7.8 2.5.8 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.1-1.9l-.7-.3c-1.8-.7-3-1.7-3-3.6 0-2.1 1.7-3.7 4.4-3.7 1.3 0 2.4.3 3.1.8l-.9 2c-.6-.4-1.4-.7-2.3-.7-1 0-1.6.5-1.6 1.2 0 .9.7 1.2 2 1.7l.7.3c2.1.8 3.3 1.8 3.3 3.8 0 2.3-1.8 3.8-4.7 3.8-1.5 0-2.8-.4-3.6-1l1-2zm-6.2-7.3H6.2V7.8h7.9v2.4h-2.6v10.3H8.8V10.2z" fill="#FFFFFF"/>
        </svg>
      )
    case 'SQL':
    case 'Database Design':
      return <Database className={`${className} text-violet-400`} aria-hidden="true" />
    case 'HTML':
    case 'HTML5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E34F26" aria-hidden="true">
          <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14 6H8.5l.3 3H17l-.7 7-4.3 1.2-4.3-1.2-.3-3.5h2.5l.1 1.5 2 .5 2-.5.2-2.5H6l-.8-9H17V8z" />
        </svg>
      )
    case 'CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1572B6" aria-hidden="true">
          <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14 6H8.5l.3 3H17l-.7 7-4.3 1.2-4.3-1.2-.3-3.5h2.5l.1 1.5 2 .5 2-.5.2-2.5H6l-.8-9H17V8z" />
        </svg>
      )
    case 'Dart':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0175C2" aria-hidden="true">
          <path d="M4.5 11.5L11.5 4.5l8 4-5.5 5.5h-5l-4.5-2.5zm0 0L2 14l5 8h5l9-9-4-2.5-7.5 7.5h-3L4.5 11.5z" />
        </svg>
      )
    case 'FastAPI':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#059669" aria-hidden="true">
          <path d="M12 2L2 19h9v3l10-17h-9V2z" />
        </svg>
      )
    case 'Spring Boot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#6DB33F" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      )
    case 'LlamaIndex':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#8B5CF6" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 6v11l10 5 10-5V6l-10 5z" />
        </svg>
      )
    case 'React':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      )
    case 'Flask':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" aria-hidden="true">
          <path d="M9 3h6v3H9V3zm1 3v6l-5 9h14l-5-9V6h-4z" />
        </svg>
      )
    case 'Flutter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#02569B" aria-hidden="true">
          <path d="M14 2L4 12l3 3 10-10H14zm0 8l-5 5 5 5h3l-5-5 5-5h-3z" />
        </svg>
      )
    case 'Express':
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#339933" aria-hidden="true">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm1 14.5l-5-2.8v-5.4l5 2.8v5.4zm-1-7.1L7.1 6.6 12 3.8l4.9 2.8-4.9 2.8z" />
        </svg>
      )
    case 'PostgreSQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#336791" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      )
    case 'MySQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00758F" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.48 10-10S17.5 2 12 2zm3 14h-6v-2h6v2zm1-4H8V7h8v5z" />
        </svg>
      )
    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47A248" aria-hidden="true">
          <path d="M12 2s-5 6.5-5 11c0 3 2 5.5 5 5.5s5-2.5 5-5.5C17 8.5 12 2 12 2zm0 14.5V4.5s3.5 4.5 3.5 8.5c0 2.2-1.5 3.5-3.5 3.5z" />
        </svg>
      )
    case 'Neo4J':
    case 'Neo4j':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#008CC1" aria-hidden="true">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M8.5 10.8l7-3.6M8.5 13.2l7 3.6" stroke="#008CC1" strokeWidth="2" />
        </svg>
      )
    case 'Redis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#DC382D" aria-hidden="true">
          <path d="M21 7l-9-5-9 5 9 5 9-5zm-9 7l-9-5v6l9 5 9-5v-6l-9 5z" />
        </svg>
      )
    case 'Ceph':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="#F05032" strokeWidth="2" fill="none" />
          <path d="M9 12h6M12 9v6" stroke="#F05032" strokeWidth="2" />
        </svg>
      )
    case 'Git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
          <path d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0L8.7 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.5.7.7.8 1.7.4 2.5l3.4 3.4c.8-.4 1.8-.3 2.5.4.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.5-2.5l-3.2-3.2v4.8c.3.2.5.5.6.9.4.9 0 2-1 2.4-1 .4-2 0-2.4-1-.3-.7-.2-1.5.3-2.1v-5.2c-.5-.5-.6-1.4-.3-2.1l-3.3-3.3L2.4 10.8c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8-8c.8-.8.8-2 0-2.8z" />
        </svg>
      )
    case 'Docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED" aria-hidden="true">
          <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm9 6h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2zm-3 0h2v2H4v-2zm-2 5c.8 4 4.5 7 9.5 7 6.5 0 10-4.5 10.5-8.5H1v1.5z" />
        </svg>
      )
    case 'OpenShift/OKD':
    case 'OpenShift':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#EE0000" aria-hidden="true">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3.2L5 8.8v6.4l7 3.6 7-3.6V8.8L12 5.2z" />
        </svg>
      )
    case 'Azure':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0089D6" aria-hidden="true">
          <path d="M12 2L3 17h6l3-5 3 5h6L12 2z" />
        </svg>
      )
    case 'AWS (S3)':
    case 'AWS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF9900" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 6v11l10 5 10-5V6l-10 5z" />
        </svg>
      )
    case 'Gradle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#02303A" stroke="#02303A" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="#02303A" />
          <path d="M8 12l3 3 5-5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'VMware':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#607D8B" aria-hidden="true">
          <rect x="3" y="4" width="7" height="7" rx="1" />
          <rect x="14" y="4" width="7" height="7" rx="1" />
          <rect x="3" y="13" width="7" height="7" rx="1" />
          <rect x="14" y="13" width="7" height="7" rx="1" />
        </svg>
      )
    case 'Linux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FCC624" aria-hidden="true">
          <path d="M12 2c-3.3 0-6 2.7-6 6v5c0 2 1.5 3.5 3 4.5L7 20h10l-2-2.5c1.5-1 3-2.5 3-4.5V8c0-3.3-2.7-6-6-6z" />
        </svg>
      )
    case 'Bash':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#4EAA25" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="3" fill="#18181b" stroke="#4EAA25" strokeWidth="1.5" />
          <path d="M6 9l3 3-3 3M12 15h5" stroke="#4EAA25" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'Networking':
      return <Layers className={`${className} text-sky-400`} aria-hidden="true" />
    case 'Webhooks':
      return <Code className={`${className} text-indigo-400`} aria-hidden="true" />
    case 'Twilio':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F22F46" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    case 'Gemini AI':
    case 'Gemini LLM':
      return <Sparkles className={`${className} text-indigo-400`} aria-hidden="true" />
    case 'Scryfall API':
    case 'Moxfield API':
      return <Layers className={`${className} text-blue-400`} aria-hidden="true" />
    case 'Android SDK':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3DDC84" aria-hidden="true">
          <path d="M6 18h12V10H6v8zm-2-9h16v10H4V9zm4-5l1.5 2.5M16 4l-1.5 2.5" stroke="#3DDC84" strokeWidth="2" />
        </svg>
      )
    case 'HealthConnect API':
      return <Cpu className={`${className} text-emerald-400`} aria-hidden="true" />
    case 'BeautifulSoup':
    case 'Web Scraping':
      return <Sliders className={`${className} text-blue-400`} aria-hidden="true" />
    default:
      return <Code className={`${className} text-blue-400`} aria-hidden="true" />
  }
}
