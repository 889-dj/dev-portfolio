export const portfolioData = {
  seo: {
    title: "Dev Jain | Full Stack Developer",
    description:
      "Portfolio of Dev Jain, a passionate full stack developer specializing in React, Node.js, and modern web technologies.",
  },
  navbar: {
    logo: "DJ",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Dev Jain",
    title: "Full Stack Developer",
    description: "I build exceptional digital experiences for the web.",
    cta: [
      { text: "View Projects", href: "#projects", primary: true },
      { text: "Contact Me", href: "#contact", primary: false },
    ],
  },
  about: {
    title: "About Me",
    image: "/placeholder.svg?height=400&width=400",
    bio: "I'm a full stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.",
    skills: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
      { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
    ],
    experience: [
      {
        company: "Reewild",
        position: "Software Developer Intern",
        period: "2025 - Present",
        description: "Leading development of web applications using React and Node.js.",
      },
      {
        company: "PSS Techno Service pvt. ltd.",
        position: "Web Developer",
        period: "2024 - 2024",
        description: "Built and maintained various client projects using modern web technologies.",
      },
    ],
  },
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment processing and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: [
        { type: "github", url: "https://github.com/889-dj" },
        { type: "external", url: "https://example.com" },
      ],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      links: [
        { type: "github", url: "https://github.com/889-dj" },
        { type: "external", url: "https://example.com" },
      ],
    },
    {
      title: "Portfolio Website",
      description: "A custom portfolio website with animations and interactive elements.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      links: [
        { type: "github", url: "https://github.com/889-dj" },
        { type: "external", url: "https://example.com" },
      ],
    },
  ],
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind or just want to chat? Feel free to reach out!",
    email: "devniaj@gmail.com",
    socials: [
      { platform: "GitHub", url: "https://github.com/889-dj", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/dev-jain1", icon: "linkedin" },
      { platform: "Twitter", url: "https://x.com/Devjtwt786", icon: "twitter" },
    ],
  },
  footer: {
    text: "Designed & Built by Dev Jain",
    links: [
      { name: "GitHub", href: "https://github.com/889-dj" },
      { name: "LinkedIn", href: "https://linkedin.com/in/dev-jain1" },
      { name: "Twitter", href: "https://x.com/Devjtwt786" },
    ],
  },
}
