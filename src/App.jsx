import React, { useState, useEffect, useRef } from 'react'
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Layers, 
  BookOpen, 
  Users, 
  Send,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Code,
  Database,
  Sliders,
  Sparkles,
  Award
} from 'lucide-react'

// Custom Brand Icons since they are deprecated/removed from core lucide-react
const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Expanded Projects Mapped directly from Github MCP results with detailed skills
const PROJECTS = [
  {
    name: 'PreconLeague',
    url: 'https://github.com/atauln/PreconLeague',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Scryfall API', 'Moxfield API', 'Caching'],
    description: 'Launched a full-stack FastAPI/React web app for Magic: The Gathering versioning and discovery; integrated external APIs (Scryfall/Moxfield) with local data caching to ensure low-latency queries.'
  },
  {
    name: 'PlayTracker',
    url: 'https://github.com/bobbykdhan/PlayTracker',
    tech: ['FastAPI', 'Gemini AI', 'Redis', 'Twilio', 'Python', 'PostgreSQL', 'Systems Design', 'Webhooks'],
    description: 'Engineered an automated trading workflow orchestrating Gemini AI to parse free-form Discord trade signals into structured data orders. Built execution pipelines using Redis streams, PostgreSQL storage, and Twilio SMS.'
  },
  {
    name: 'just-another-health-app',
    url: 'https://github.com/atauln/just-another-health-app',
    tech: ['Kotlin', 'Java', 'Android SDK', 'HealthConnect API', 'Gemini LLM', 'Data Analytics', 'Gradle'],
    description: 'A Samsung health app that leverages HealthConnect to provide analytics on daily food and exercise logging and uses LLM processing to provide actionable insights.'
  },
  {
    name: 'RITCRE',
    url: 'https://github.com/atauln/RITCRE',
    tech: ['Python', 'SQL', 'Database Design', 'Web Scraping', 'Algorithms'],
    description: 'A course recommendation engine specifically built for Rochester Institute of Technology (RIT) campus to guide student schedules.'
  },
  {
    name: 'TigerWallet',
    url: 'https://github.com/atauln/TigerWallet',
    tech: ['Flask', 'Python', 'HTML', 'CSS', 'Web Scraping', 'BeautifulSoup', 'Authentication'],
    description: "Flask application to parse and display real-time account balances and meal plan spending details from RIT's TigerSpend portal."
  }
]

// Core Technical Skills Dictionary
const SKILLS = {
  Languages: ['Python', 'Java', 'C', 'Kotlin', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'Dart'],
  Frameworks: ['FastAPI', 'Spring Boot', 'LlamaIndex', 'React', 'Flask', 'Flutter', 'Express'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4J', 'Redis', 'Ceph'],
  Tools: ['Git', 'Docker', 'OpenShift/OKD', 'Azure', 'AWS (S3)', 'Gradle', 'VMware']
}

const EXPERIENCE = [
  {
    role: 'Student System Administrator',
    company: 'Rochester Institute of Technology',
    companyUrl: 'https://www.rit.edu',
    duration: 'Fall 2022 – Present',
    tech: ['Linux', 'Docker', 'Bash', 'Networking', 'VMware', 'Ceph'],
    bullets: [
      'Administered departmental Linux server clusters, hypervisors, and storage networks supporting hundreds of concurrent users.',
      'Automated service backups, configurations, and system health checks using Python and Bash scripts.',
      'Configured secure access logs, IAM policies, and local container orchestration pipelines.'
    ]
  },
  {
    role: 'Software Developer Intern',
    company: 'RIT Software Engineering',
    companyUrl: 'https://www.rit.edu/computing/department-software-engineering',
    duration: 'Fall 2025',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    bullets: [
      'Optimized user experience and achieved a 36% reduction in page load latency by driving autonomous, end-to-end full-stack feature development.',
      'Containerized services and added orchestration manifests to streamline developer onboarding and CI workflows.'
    ]
  },
  {
    role: 'AI Engineering Intern',
    company: 'MITRE',
    companyUrl: 'https://www.mitre.org',
    duration: 'Summer 2024',
    tech: ['LlamaIndex', 'Spring Boot', 'React', 'MongoDB', 'Neo4J', 'OpenShift/OKD', 'Azure', 'Python', 'Java', 'JavaScript'],
    bullets: [
      'Architected an internal semantic search platform using OpenAI and LlamaIndex to orchestrate autonomous AI agent discovery across multi-source enterprise data.',
      'Designed and implemented a unified data layer aggregating multiple API sources into a Neo4J graph to enable cross-source queries for networking.',
      'Accelerated deployment velocity by 60% through container automation and system observability hooks within OpenShift/OKD manifests.'
    ]
  },
  {
    role: 'Innovation Intern & Developer',
    company: 'MITRE',
    companyUrl: 'https://www.mitre.org',
    duration: 'Summer 2023',
    tech: ['Spring Boot', 'MongoDB', 'Java', 'AWS (S3)'],
    bullets: [
      'Engineered RESTful backend APIs and microservices using Spring Boot and MongoDB to power a real-time internal talent and project marketplace.',
      'Designed scalable backend infrastructure supporting 20,000+ active users by provisioning cloud database architectures and integrating AWS S3-compatible storage layers.'
    ]
  }
]

// Custom Hook for Scroll Animations (Helix effect) - triggers only once
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Disconnect after entering once to prevent layout lock-ups on scrolling back up
        if (elementRef.current) {
          observer.unobserve(elementRef.current)
        }
      }
    }, { threshold: 0.1, ...options })

    const currentEl = elementRef.current
    if (currentEl) {
      observer.observe(currentEl)
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl)
      }
    }
  }, [options])

  return [elementRef, isVisible]
}

// Standard layout wrapper - simplified to ensure native scroll physics
function ScrollSection({ children, id, className = '' }) {
  return (
    <section
      id={id}
      className={`transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </section>
  )
}

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Parallax & Float loop states
  const [scrollY, setScrollY] = useState(0)
  const [idleTime, setIdleTime] = useState(0)

  // Terminal State
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Ata Noor Systems OS [Version 1.0.4]', type: 'system' },
    { text: 'Type “help” to see available commands.', type: 'system' },
    { text: '', type: 'empty' }
  ])
  const terminalConsoleRef = useRef(null)

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Particle list configuration (25 small glowing transparent particles)
  const [particles] = useState(() => {
    return Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      top: `${10 + Math.random() * 80}%`,
      left: `${5 + Math.random() * 90}%`,
      speedX: 0.2 + Math.random() * 0.4,
      speedY: 0.2 + Math.random() * 0.4,
      parallaxSpeed: -(0.05 + Math.random() * 0.2),
      size: idx % 3 === 0 ? 'w-2 h-2' : idx % 3 === 1 ? 'w-1.5 h-1.5' : 'w-1 h-1',
      phaseOffset: Math.random() * Math.PI * 2
    }))
  })

  // Monitor Window Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // requestAnimationFrame loop for floating idle movement
  useEffect(() => {
    let animId
    const loop = (timestamp) => {
      setIdleTime(timestamp * 0.001) // Convert to seconds
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Scroll only the terminal box interior, NOT the window viewport
  const scrollTerminal = () => {
    if (terminalConsoleRef.current) {
      terminalConsoleRef.current.scrollTop = terminalConsoleRef.current.scrollHeight
    }
  }

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

  // Handle Terminal Commands
  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    // Track command execution in Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'terminal_command', {
        event_category: 'Engagement',
        event_label: cmd
      })
    }

    let newHistory = [...terminalHistory, { text: `~$ ${terminalInput}`, type: 'input' }]

    switch (cmd) {
      case 'help':
        newHistory.push({ text: 'Available commands:', type: 'system' })
        newHistory.push({ text: '  help       – Display this assistance list', type: 'info' })
        newHistory.push({ text: '  skills     – Show core technical competencies', type: 'info' })
        newHistory.push({ text: '  projects   – Print major GitHub project list', type: 'info' })
        newHistory.push({ text: '  neofetch   – Display system hardware / developer info', type: 'info' })
        newHistory.push({ text: '  sudo       – Elevate privileges for easter egg', type: 'info' })
        newHistory.push({ text: '  clear      – Clear the terminal screen', type: 'info' })
        break
      case 'skills':
        newHistory.push({ text: 'CORE CAPABILITIES:', type: 'system' })
        Object.entries(SKILLS).forEach(([category, list]) => {
          newHistory.push({ text: `  [${category}]: ${list.join(', ')}`, type: 'info' })
        })
        break
      case 'projects':
        newHistory.push({ text: 'PRIMARY DEVELOPMENTS:', type: 'system' })
        PROJECTS.forEach(p => {
          newHistory.push({ text: `  • ${p.name} - ${p.description.slice(0, 75)}…`, type: 'info' })
        });
        break
      case 'neofetch':
        newHistory.push({ text: '      .---.       ata@ata-noor-portfolio', type: 'info' })
        newHistory.push({ text: '     /     \\      ----------------------', type: 'info' })
        newHistory.push({ text: '     \\_.._/       OS: Ubuntu 24.04 LTS x86_64', type: 'info' })
        newHistory.push({ text: '     //   \\\\      Host: RIT Systems Cluster', type: 'info' })
        newHistory.push({ text: '    ((     ))     Kernel: Linux 6.8.0-sys-design', type: 'info' })
        newHistory.push({ text: '    `\\_.._/`      Uptime: 2026 days, 5 hours', type: 'info' })
        newHistory.push({ text: '                  Shell: bash 5.2.21', type: 'info' })
        newHistory.push({ text: '                  Education: BS Software Engineering (Class of 2026)', type: 'info' })
        newHistory.push({ text: '                  Primary Tech: Python, Java, Spring Boot, FastAPI, Docker', type: 'info' })
        break
      case 'sudo':
        newHistory.push({ text: 'Accessing secret directory…', type: 'warning' })
        newHistory.push({ text: 'PASSWORD REQUIRED: ENTERING MOCK DIAGNOSTICS…', type: 'warning' })
        newHistory.push({ text: '==================================================', type: 'success' })
        newHistory.push({ text: 'ACCESS GRANTED: SYSTEMS ONLINE', type: 'success' })
        newHistory.push({ text: '  - Database Latency: 1.2ms (Optimal)', type: 'success' })
        newHistory.push({ text: '  - Cluster Health: Green', type: 'success' })
        newHistory.push({ text: '  - Current Location: Rochester, NY', type: 'success' })
        newHistory.push({ text: '  - Favorite Tool: Docker / LlamaIndex / FastAPI', type: 'success' })
        newHistory.push({ text: '==================================================', type: 'success' })
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        newHistory.push({ text: `command not found: ${cmd}. Type “help” for a list of commands.`, type: 'error' })
    }

    setTerminalHistory(newHistory)
    setTerminalInput('')
    setTimeout(scrollTerminal, 50)
  }

  // Handle Contact Form Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'All fields are required.' })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'
      if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        // Force simulation mode locally if no key is configured
        throw new Error('Simulation Mode')
      }

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Message'
        })
      })

      // Track contact success
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_submit_success', {
          event_category: 'Engagement'
        })
      }

      setFormStatus({ type: 'success', message: 'Message sent successfully! Thank you for reaching out.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      if (err.message === 'Simulation Mode') {
        // Track simulated contact success
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_submit_simulated', {
            event_category: 'Engagement'
          })
        }
        setFormStatus({ type: 'success', message: 'Message sent successfully! (Simulated submission in local/offline environment)' })
      } else {
        // Track contact failure
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_submit_failed', {
            event_category: 'Engagement',
            error_message: err.message
          })
        }
        setFormStatus({ type: 'error', message: 'Failed to send message. Please configure a valid Web3Forms access key.' })
      }
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSkillConnectedToProject = (skill, project) => {
    if (!project) return false
    return project.tech.some(t => t.toLowerCase() === skill.toLowerCase())
  }

  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null)
    } else {
      setSelectedSkill(skill)
      setSelectedProject(null)
      // Track skill click in Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'skill_click', {
          event_category: 'Engagement',
          event_label: skill
        })
      }
    }
  }

  const handleProjectClick = (projName) => {
    const project = PROJECTS.find(p => p.name === projName)
    if (selectedProject?.name === projName) {
      setSelectedProject(null)
    } else {
      setSelectedProject(project)
      setSelectedSkill(null)
      // Track project click in Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'project_click', {
          event_category: 'Engagement',
          event_label: projName
        })
      }
    }
  }

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

  return (
    <div className="min-h-screen relative font-body text-zinc-100 selection:bg-blue-600 selection:text-white pb-16">
      {/* Skip Navigation Link for Accessibility */}
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:z-[100] focus:font-semibold">
        Skip to main content
      </a>

      {/* Background visual elements wrapper to prevent extra scroll space past the footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background Large Drifting Atmospheric Blobs */}
        <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-blue-900/25 blur-[120px] pointer-events-none animate-blob-slow"></div>
        <div className="absolute bottom-[20%] right-[-15%] w-[65vw] h-[65vw] rounded-full bg-indigo-900/20 blur-[140px] pointer-events-none animate-blob-slower"></div>
        <div className="absolute top-[35%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-violet-900/15 blur-[110px] pointer-events-none animate-blob-slowest"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-blue-950/20 blur-[130px] pointer-events-none animate-blob-slow"></div>

        {/* Membrane Parallax Floating Particles - Transparent, glowing, with idle floating dynamics */}
        {particles.map(p => {
          // Calculate dynamic idle floating offsets using sine wave phases
          const idleX = Math.sin(idleTime * p.speedX + p.phaseOffset) * 20
          const idleY = Math.cos(idleTime * p.speedY + p.phaseOffset) * 20
          // Combine scroll parallax (right to left) with idle drift offsets
          const totalX = scrollY * p.parallaxSpeed + idleX
          const totalY = idleY

          return (
            <div
              key={p.id}
              className="absolute rounded-full bg-blue-400/15 shadow-[0_0_8px_rgba(96,165,250,0.3)] border border-blue-300/5 pointer-events-none transition-transform duration-75 ease-out"
              style={{
                width: p.size.includes('w-2') ? '8px' : p.size.includes('w-1.5') ? '6px' : '4px',
                height: p.size.includes('w-2') ? '8px' : p.size.includes('w-1.5') ? '6px' : '4px',
                top: p.top,
                left: p.left,
                transform: `translate3d(${totalX}px, ${totalY}px, 0)`
              }}
            ></div>
          )
        })}
      </div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full glass-panel border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md px-6 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Cpu className="text-blue-500 w-6 h-6 animate-pulse" aria-hidden="true" />
            <span className="font-heading font-bold text-lg tracking-wider text-white">ATA NOOR</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400">
            <a href="#about" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1">About</a>
            <a href="#terminal" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1">Console</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1">Experience</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero & Intro Section */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-16 flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" aria-hidden="true"></span>
            Systems & Backend Specialist
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-snug pb-2 text-wrap: balance">
            Designing High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500">Backend Systems</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Hi, I'm <strong className="text-white">Ata Noor</strong>. I engineer scalable backend architectures, containerized cloud infrastructure, and autonomous semantic discovery layers. Currently pursuing Software Engineering at RIT.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
              Get in Touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://github.com/atauln" target="_blank" rel="noreferrer" onClick={() => trackExternalLink('hero_github', 'https://github.com/atauln')} className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-lg transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" aria-label="Ata Noor's GitHub Profile">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/atanoor" target="_blank" rel="noreferrer" onClick={() => trackExternalLink('hero_linkedin', 'https://linkedin.com/in/atanoor')} className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-lg transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" aria-label="Ata Noor's LinkedIn Profile">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" aria-hidden="true" /> Rochester, NY</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" aria-hidden="true" /> ataulnoor75@gmail.com</span>
          </div>
        </div>

        {/* Floating Header Card Visualizer */}
        <div className="flex-1 w-full max-w-md">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 relative">
            <div className="absolute top-2 right-4 flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <h3 className="font-heading font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <TerminalIcon className="text-blue-500 w-5 h-5" aria-hidden="true" /> quick_bio.json
            </h3>
            <pre className="text-xs md:text-sm font-mono text-zinc-400 overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`{
  "name": "Ata Noor",
  "education": "BS SE @ RIT (2026)",
  "specialties": [
    "High-load APIs", 
    "Semantic Search Systems", 
    "DevOps & Cluster Orchestration"
  ],
  "interests": [
    "Algorithmic Trading",
    "Self-Hosted Homelabs",
    "Distributed Data Layers"
  ]
}`}
            </pre>
          </div>
        </div>
      </header>

      {/* Terminal Widget Section */}
      <ScrollSection id="terminal" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-heading font-extrabold text-white mb-3 flex items-center justify-center gap-2">
            <TerminalIcon className="text-blue-500" aria-hidden="true" /> Systems Command Terminal
          </h2>
          <p className="text-zinc-400">Interact with my background directly via command line diagnostics.</p>
        </div>

        <div className="max-w-3xl mx-auto glass-panel rounded-xl overflow-hidden border border-zinc-800 bg-black/80 shadow-2xl">
          <div className="bg-zinc-900/90 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-blue-500" aria-hidden="true" />
              <span className="font-mono text-xs text-zinc-400">ata@rit-systems-node:~</span>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-red-500/30"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/30"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/30"></span>
            </div>
          </div>

          <div 
            ref={terminalConsoleRef}
            className="p-4 h-80 overflow-y-hidden font-mono text-sm leading-relaxed space-y-1 whitespace-pre-wrap"
          >
            {terminalHistory.map((line, idx) => {
              let color = 'text-zinc-300'
              if (line.type === 'input') color = 'text-blue-400 font-semibold'
              if (line.type === 'system') color = 'text-zinc-500'
              if (line.type === 'info') color = 'text-zinc-300'
              if (line.type === 'success') color = 'text-green-400'
              if (line.type === 'warning') color = 'text-yellow-400 animate-pulse'
              if (line.type === 'error') color = 'text-red-400'
              return (
                <div key={idx} className={color}>
                  {line.text}
                </div>
              )
            })}
          </div>

          <form onSubmit={handleTerminalSubmit} className="flex border-t border-zinc-800 bg-zinc-950/60">
            <span className="pl-4 py-3 font-mono text-sm text-blue-500 font-bold">~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none focus:ring-0 text-white font-mono text-sm py-3 px-2 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900 rounded-md"
              placeholder='Type “help” and press Enter…'
              aria-label="Terminal input command"
            />
          </form>
        </div>
      </ScrollSection>

      {/* Interactive Dependency Graph Board */}
      <ScrollSection id="projects" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-heading font-extrabold text-white mb-3">Interactive Skill-Project Graph</h2>
          <p className="text-zinc-400">Click on any core technical skill or project card below to highlight and track the structural links between them.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Layers className="text-blue-500 w-5 h-5" aria-hidden="true" /> 1. Skills Category
            </h3>

            {Object.entries(SKILLS).map(([category, list]) => (
              <div key={category} className="glass-panel p-5 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                  {getSkillCategoryIcon(category)} {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {list.map(skill => {
                    const isHighlighted = selectedSkill === skill || 
                      (selectedProject && isSkillConnectedToProject(skill, selectedProject))
                    return (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                          isHighlighted
                            ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105'
                            : 'bg-zinc-800/80 border-zinc-700/60 text-zinc-400 hover:border-zinc-500 hover:text-white'
                        }`}
                      >
                        {skill}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Connector Visual */}
          <div className="hidden lg:flex lg:col-span-2 h-full flex-col justify-center items-center gap-1 opacity-70" aria-hidden="true">
            <div className="w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 flex-1"></div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest py-2">connections</div>
            <div className="w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500 flex-1"></div>
          </div>

          {/* Projects Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Code className="text-blue-500 w-5 h-5" aria-hidden="true" /> 2. Projects Showcase
            </h3>

            <div className="space-y-4">
              {PROJECTS.map(project => {
                const isHighlighted = selectedProject?.name === project.name ||
                  (selectedSkill && isSkillConnectedToProject(selectedSkill, project))
                return (
                  <button
                    key={project.name}
                    onClick={() => handleProjectClick(project.name)}
                    className={`w-full text-left glass-panel p-5 rounded-xl border transition-all cursor-pointer active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 block ${
                      isHighlighted
                        ? 'border-blue-500/80 bg-blue-950/20 shadow-[0_0_20px_rgba(37,99,235,0.15)] ring-1 ring-blue-500'
                        : 'border-zinc-800 bg-zinc-900/30'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-heading font-bold text-lg text-white">{project.name}</h4>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-zinc-500 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded p-0.5" 
                        onClick={(e) => {
                          e.stopPropagation();
                          trackExternalLink(`project_github_${project.name}`, project.url);
                        }}
                        aria-label={`View ${project.name} GitHub Repository`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => {
                        const tagIsSkill = selectedSkill === t
                        return (
                          <span
                            key={t}
                            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                              tagIsSkill
                                ? 'bg-blue-600 text-white'
                                : 'bg-zinc-800 text-zinc-400'
                            }`}
                          >
                            {t}
                          </span>
                        )
                      })}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Experience Section */}
      <div id="experience" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-extrabold text-white mb-3">Work History</h2>
          <p className="text-zinc-400">My engineering experience spanning backend architectures, cloud configurations, and systems administration.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-800">
          {EXPERIENCE.map((exp, idx) => (
            <ScrollSection key={idx} className="relative flex flex-col md:flex-row gap-8">
              {/* Timeline circle marker */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-blue-500 flex items-center justify-center transform -translate-x-3.5 z-10" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>

              {/* Left Side */}
              <div className={`flex-1 md:text-right ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2 md:pl-8'}`}>
                {idx % 2 === 0 && (
                  <div className="pl-12 md:pl-0 md:pr-8">
                    <span className="text-sm font-semibold text-blue-400">{exp.duration}</span>
                    <h3 className="font-heading font-bold text-xl text-white mt-1">{exp.role}</h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-zinc-400 hover:text-blue-400 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                      onClick={() => trackExternalLink(`experience_company_${exp.company}`, exp.companyUrl)}
                      aria-label={`Visit ${exp.company} website`}
                    >
                      {exp.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Side */}
              <div className={`flex-1 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:text-right md:pr-8'}`}>
                {idx % 2 !== 0 && (
                  <div className="mb-4 md:mb-0">
                    <span className="text-sm font-semibold text-blue-400">{exp.duration}</span>
                    <h3 className="font-heading font-bold text-xl text-white mt-1">{exp.role}</h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-zinc-400 hover:text-blue-400 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                      onClick={() => trackExternalLink(`experience_company_${exp.company}`, exp.companyUrl)}
                      aria-label={`Visit ${exp.company} website`}
                    >
                      {exp.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
                
                <div className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 text-left mt-3">
                  <ul className="list-disc list-outside text-sm text-zinc-400 pl-4 space-y-2 mb-4">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>

      {/* Education & Activities Section */}
      <ScrollSection className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Panel */}
          <div className="glass-panel p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-500 w-6 h-6" aria-hidden="true" />
                <h3 className="font-heading font-bold text-2xl text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Rochester Institute of Technology</h4>
                  <p className="text-blue-400 text-sm">BS, Software Engineering</p>
                  <p className="text-zinc-500 text-sm mt-1">Minor in Database Design • Class of 2026</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-zinc-800/80 pt-6 flex flex-wrap gap-2">
              <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">Systems Engineering</span>
              <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">Database Architectures</span>
              <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">Software Modeling</span>
            </div>
          </div>

          {/* Activities/Interests Panel */}
          <div className="glass-panel p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-blue-500 w-6 h-6" aria-hidden="true" />
                <h3 className="font-heading font-bold text-2xl text-white">Interests & Homelab</h3>
              </div>
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <p>
                  When I'm not coding backend APIs, I maintain a local systems environment, explore distributed database setups, research algorithmic trading flows, and build customized web services.
                </p>
                <p className="text-xs text-zinc-500 italic mt-2">
                  * Note: Former CSH member (2022–2025); gained early experience with OKD and Ceph clusters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Contact Section */}
      <ScrollSection id="contact" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/30 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">Let's Connect</h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-wrap: pretty">
                Are you looking to hire a systems/backend developer, collaborate on distributed infrastructure, or just chat about homelabs and APIs? Drop me a message, and I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <a href="mailto:ataulnoor75@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" aria-label="Email Address">
                  <Mail className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  <span>ataulnoor75@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  <span>(513) 582 6809</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  <span>Rochester, NY</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              {formStatus.message && (
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                  formStatus.type === 'error' 
                    ? 'bg-red-950/20 border-red-500/50 text-red-200' 
                    : 'bg-green-950/20 border-green-500/50 text-green-200'
                }`} aria-live="polite">
                  {formStatus.type === 'error' ? <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> : <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
                  <span className="text-sm font-medium">{formStatus.message}</span>
                </div>
              )}

              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Name</label>
                <input
                  id="name-input"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Ata Noor"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Email Address</label>
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g., ataulnoor75@gmail.com"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Message</label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Say hello…"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'} <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© 2026 Ata Noor. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/atauln" target="_blank" rel="noreferrer" onClick={() => trackExternalLink('footer_github', 'https://github.com/atauln')} className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" aria-label="GitHub Profile">GitHub</a>
          <a href="https://linkedin.com/in/atanoor" target="_blank" rel="noreferrer" onClick={() => trackExternalLink('footer_linkedin', 'https://linkedin.com/in/atanoor')} className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" aria-label="LinkedIn Profile">LinkedIn</a>
          <a href="mailto:ataulnoor75@gmail.com" onClick={() => trackExternalLink('footer_email', 'mailto:ataulnoor75@gmail.com')} className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1" aria-label="Send Email">Email</a>
        </div>
      </footer>
    </div>
  )
}
