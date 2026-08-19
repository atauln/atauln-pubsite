// Portfolio Data Store

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { 
    label: 'Resume', 
    href: '/resume.pdf', 
    isExternal: true, 
    ariaLabel: 'View Resume PDF in Browser' 
  },
  { label: 'Contact', href: '#contact', isButton: true }
]

export const CONTACT_INFO = {
  email: 'ataulnoor75@gmail.com',
  phone: '(513) 582-6809',
  location: 'Rochester, NY',
  github: 'https://github.com/atauln',
  linkedin: 'https://linkedin.com/in/atanoor',
  resume: '/resume.pdf'
}

export const TECHNICAL_SNAPSHOT = {
  degree: 'BS Software Engineering @ RIT',
  minor: 'Minor in Database Design',
  classYear: 'RIT 2026',
  pillars: [
    'High-Load REST APIs & Microservices',
    'Semantic Discovery & Vector Pipelines',
    'Linux SysAdmin & Container Orchestration'
  ],
  primaryStack: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'LlamaIndex']
}

export const SKILLS = {
  Languages: ['Python', 'Java', 'C', 'Kotlin', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'Dart'],
  Frameworks: ['FastAPI', 'Spring Boot', 'LlamaIndex', 'React', 'Flask', 'Flutter', 'Express'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4J', 'Redis', 'Ceph'],
  Tools: ['Git', 'Docker', 'OpenShift/OKD', 'Azure', 'AWS (S3)', 'Gradle', 'VMware']
}

export const PROJECTS = [
  {
    name: 'PreconLeague',
    category: 'Full-Stack',
    url: 'https://github.com/atauln/PreconLeague',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Python', 'Scryfall API', 'Moxfield API'],
    description: 'Full-stack web application for Magic: The Gathering deck versioning and card discovery. Integrates Scryfall and Moxfield external APIs with local caching for low-latency queries.'
  },
  {
    name: 'PlayTracker',
    category: 'AI & ML',
    url: 'https://github.com/bobbykdhan/PlayTracker',
    tech: ['FastAPI', 'Gemini AI', 'Redis', 'Twilio', 'Python', 'PostgreSQL', 'Webhooks'],
    description: 'Automated trading workflow that leverages Gemini AI to parse free-form Discord trade signals into structured data orders. Executes pipelines via Redis streams, PostgreSQL, and SMS alerts.'
  },
  {
    name: 'just-another-health-app',
    category: 'AI & ML',
    url: 'https://github.com/atauln/just-another-health-app',
    tech: ['Kotlin', 'Java', 'Android SDK', 'HealthConnect API', 'Gemini LLM', 'Gradle'],
    description: 'Android application leveraging Samsung HealthConnect for daily activity and food logging analytics, paired with LLM processing to generate actionable health insights.'
  },
  {
    name: 'RITCRE',
    category: 'Backend & Systems',
    url: 'https://github.com/atauln/RITCRE',
    tech: ['Python', 'SQL', 'Database Design', 'Web Scraping', 'Algorithms'],
    description: 'Course recommendation engine built for Rochester Institute of Technology (RIT) students to optimize schedule planning and prerequisite path validation.'
  },
  {
    name: 'TigerWallet',
    category: 'Backend & Systems',
    url: 'https://github.com/atauln/TigerWallet',
    tech: ['Flask', 'Python', 'HTML', 'CSS', 'BeautifulSoup', 'Authentication'],
    description: "Web application parsing real-time account balances and meal plan spending metrics from RIT's TigerSpend campus portal."
  }
]

export const EXPERIENCE = [
  {
    role: 'Software Developer Intern',
    company: 'RIT Software Engineering',
    companyUrl: 'https://www.rit.edu/computing/department-software-engineering',
    duration: 'Fall 2025',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    bullets: [
      'Optimized user experience and achieved a 36% reduction in page load latency by driving end-to-end full-stack feature development.',
      'Containerized services and added orchestration manifests to streamline developer onboarding and CI workflows.'
    ]
  },
  {
    role: 'AI Engineering Intern',
    company: 'MITRE',
    companyUrl: 'https://www.mitre.org',
    duration: 'Summer 2024',
    tech: ['LlamaIndex', 'Spring Boot', 'React', 'MongoDB', 'Neo4J', 'OpenShift/OKD', 'Azure', 'Python', 'Java'],
    bullets: [
      'Architected an internal semantic search platform using OpenAI and LlamaIndex to coordinate AI discovery across enterprise data sources.',
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
  },
  {
    role: 'Student System Administrator',
    company: 'Rochester Institute of Technology',
    companyUrl: 'https://www.rit.edu',
    duration: 'Fall 2022 to August 2026',
    tech: ['Linux', 'Docker', 'Bash', 'Networking', 'VMware', 'Ceph'],
    bullets: [
      'Administer departmental Linux server clusters, hypervisors, and storage networks supporting hundreds of concurrent users.',
      'Automated service backups, configurations, and system health checks using Python and Bash scripts.',
      'Configured secure access logs, IAM policies, and local container orchestration pipelines.'
    ]
  }
]

export const EDUCATION = {
  institution: 'Rochester Institute of Technology',
  degree: 'BS, Software Engineering',
  minor: 'Minor in Database Design',
  gradDate: 'Class of 2026',
  focusAreas: ['Systems Engineering', 'Database Architectures', 'Software Modeling']
}

export const HOMELAB_DATA = {
  description: 'Outside of backend API engineering, I maintain a self-hosted systems environment, experiment with distributed database storage setups, analyze algorithmic trading flows, and build specialized automation tools.',
  note: '* Note: Former CSH member (2022 to 2025); early experience with OKD and Ceph clusters.'
}
