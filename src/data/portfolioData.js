export const personalInfo = {
  name: "Saurabh Kumar Nishad",
  shortName: "Saurabh",
  initials: "SKN",
  primaryTitle: "Full Stack Developer",
  subtitle: "MERN Stack Developer",
  tagline: "I build modern, responsive and scalable web experiences using the MERN stack.",
  bio: "I'm Saurabh Kumar Nishad, a passionate web developer focused on building modern and user-friendly web applications. I work primarily with the MERN stack and enjoy transforming ideas into clean, functional digital experiences.",
  avatar: "/profile.jpg",
  availability: "Available for opportunities",
  location: "India",
  email: "saurabhkumar62421@gmail.com",
  phone: "7408965449",
  resumeUrl: "#resume", // Placeholder or direct download
  resumeFileName: "Saurabh_Kumar_Nishad_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:saurabhkumar62421@gmail.com",
    phone: "tel:7408965449"
  },
  stats: [
    { label: "Core Stack", value: "MERN" },
    { label: "Frontend & Backend", value: "Full Stack" },
    { label: "Focus", value: "Modern Web Apps" },
    { label: "Commitment", value: "100% Quality" }
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const skillsData = [
  {
    name: "React",
    category: "Frontend",
    icon: "Atom",
    color: "#38bdf8",
    description: "Component Architecture, Hooks, State Management & Modern SPA development."
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "Server",
    color: "#22c55e",
    description: "Scalable asynchronous RESTful APIs, microservices and runtime services."
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "Cpu",
    color: "#94a3b8",
    description: "Fast, unopinionated, robust web server frameworks and API routing."
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "Database",
    color: "#10b981",
    description: "NoSQL schema modeling, aggregation pipelines, and high-performance data storage."
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "FileCode2",
    color: "#facc15",
    description: "ES6+, asynchronous programming, closures, DOM manipulation & modern syntax."
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "Palette",
    color: "#06b6d4",
    description: "Utility-first modern design systems, glassmorphism & responsive styling."
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: "Layout",
    color: "#f97316",
    description: "Semantic web structure, SEO best practices, accessibility & clean markup."
  },
  {
    name: "CSS",
    category: "Styling",
    icon: "Sparkles",
    color: "#3b82f6",
    description: "Modern layout systems (Flexbox/Grid), keyframe animations & responsive design."
  },
  {
    name: "Git",
    category: "Tools",
    icon: "GitBranch",
    color: "#f43f5e",
    description: "Distributed version control, branching strategies, and collaborative workflow."
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "Github",
    color: "#a855f7",
    description: "Repository management, CI/CD actions, pull requests, and open source collaboration."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Dummy Project",
    tagline: "Full-Stack Web Application",
    description: "A modern web application demonstrating responsive UI, reusable components and full-stack development concepts.",
    longDescription: "Engineered a high-performance web platform featuring secure authentication, dynamic data visualization, and glassmorphic micro-interactions. Built with modular architecture, robust API error handling, and optimized MongoDB queries.",
    image: "/project-dummy.webp",
    featured: true,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/dummy-project",
    highlights: [
      "End-to-end full stack architecture with MERN",
      "Seamless responsive design with sleek glass UI",
      "Fast API response time and state synchronization"
    ]
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    tagline: "Cloud Metrics & Real-time Insights",
    description: "A sleek, dark-themed analytical web application providing real-time data streaming and interactive dashboard metrics.",
    longDescription: "Developed an interactive telemetry dashboard with smooth framer-motion transitions, JWT authentication, and customizable user workspace settings.",
    image: "/project-analytics.webp",
    featured: false,
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/example/saas-dashboard",
    highlights: [
      "Real-time interactive metric widgets",
      "Dynamic filtering and custom reporting",
      "Ultra-responsive modern glassmorphic layout"
    ]
  },
  {
    id: 3,
    title: "TaskFlow Collaborative App",
    tagline: "Agile Project & Workflow Management",
    description: "An intuitive collaborative workspace for agile development teams to manage sprints, tasks, and team milestones.",
    longDescription: "Features drag-and-drop kanban boards, instant notifications, team permission roles, and persistent database storage.",
    image: "/project-taskflow.webp",
    featured: false,
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/example/taskflow-app",
    highlights: [
      "Optimistic UI updates for high responsiveness",
      "Role-based access control (RBAC)",
      "Clean RESTful API backend with Express"
    ]
  }
];
