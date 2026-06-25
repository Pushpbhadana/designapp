/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SITE CONTENT — Edit this file to update copy across the whole website.
 * Each section is labeled so you can find and change text, links, and images
 * without digging through component files.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** ── BRAND & SEO ───────────────────────────────────────────────────────── */
export const siteMeta = {
  name: "blüm desing",
  title: "blüm desing | Digital Designer & website Develope Studio",
  description:
    "Portfolio of blüm desing — Digital Designer & website Develope Studio working at the intersection of visual design, UX, and motion.",
  tagline: "Design interfaces with engineered restraint.",
};

/** ── NAVIGATION ────────────────────────────────────────────────────────── */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Tech", href: "/tech" },
  { label: "About", href: "/about" },
] as const;

export const navCta = {
  label: "Connect",
  href: "/contact",
};

/** ── HERO (Home) ─────────────────────────────────────────────────────────── */
export const heroContent = {
  headlineFirst: "UNLOCK YOUR",
  headlineSecond: "BUSINESS POTENTIAL",
  mainText: "UNLOCK YOUR BUSINESS POTENTIAL",
  thumbnailSrc: "/flowers.png",
  thumbnailAlt: "Project preview",
  videoSrc: "/site.mp4",
  scrollHint: "Scroll down to explore ↓",
  ctaTitle: "Together, We Build a Stronger Digital Presence.",
  ctaSubtitle: "Let's transform your vision into reality — get a quote today.",
  readMoreLabel: "Click here →",
  readMoreHref: "/contact",
  stats: [
    { value: "12", suffix: "+", label: "Projects" },
    { value: "97", suffix: "%", label: "Client Satisfaction" },
  ],
  studioLabel: "WEB DESIGN STUDIO",
  partnerTitle: "Your Partner in Business Growth",
  partnerCopy:
    "We don't just create websites — we craft digital experiences that grow your business and leave a lasting impression.",
  highlightValue: "S",
  highlightSuffix: "+",
  highlightLabel: "Brands Transformed",
  highlightCopy: "Helping businesses reach new heights through design.",
};

/** ── INTRO STRIP (Home) ────────────────────────────────────────────────── */
export const introSection = {
  eyebrow: "Front-End Engineering",
  headline: "Design interfaces with engineered restraint.",
  body:
    "I build high-performance web products with clean interaction systems, accessible defaults, and motion that supports the content instead of competing with it.",
  primaryCta: { label: "View Selected Work", href: "/projects" },
  secondaryCta: { label: "Start a Project", href: "/contact" },
};

/** ── GALLERY (Home) ──────────────────────────────────────────────────────── */
export const gallerySection = {
  title: "Our recent work",
  subtitle: "Selected projects from 2024–2026",
};

/** ── VIDEO REVEAL (Home) ─────────────────────────────────────────────────── */
export const videoSection = {
  /** Use a local file (/vide.mp4) or external HLS URL */
  videoSrc: "/site.mp4",
  alt: "Motion showcase reel",
};

/** ── CAPABILITIES (Home) ─────────────────────────────────────────────────── */
export const capabilityCards = [
  {
    title: "Interface Systems",
    copy: "Production-ready component systems with consistent interaction patterns and resilient states.",
  },
  {
    title: "Motion Direction",
    copy: "Intentional motion tuned for readability, hierarchy, and reduced-motion accessibility defaults.",
  },
  {
    title: "Performance Discipline",
    copy: "Core Web Vitals-first delivery with lean bundles, clean rendering paths, and measurable outcomes.",
  },
];

/** ── PROJECTS PAGE ───────────────────────────────────────────────────────── */
export const projectsPage = {
  eyebrow: "Selected Work",
  headline: "Projects built for clarity, speed, and impact.",
  body:
    "A curated set of client and personal builds — from brand sites to interactive product experiences.",
};

export type ProjectItem = {
  title: string;
  category: string;
  year: string;
  image: string;
  href?: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Creative Orion Agency",
    category: "Brand Website",
    year: "2025",
    image: "/firstbg.jpg",
    tags: ["Next.js", "GSAP", "Responsive"],
  },
  {
    title: "Studio Portfolio",
    category: "Portfolio",
    year: "2026",
    image: "/n.jpeg",
    tags: ["React", "Motion", "Tailwind"],
  },
  {
    title: "Product Launch",
    category: "Landing Page",
    year: "2025",
    image: "/mb.jpeg",
    tags: ["TypeScript", "Framer Motion"],
  },
  {
    title: "Motion Showcase",
    category: "Interactive",
    year: "2026",
    image: "/firstbg.png",
    tags: ["Three.js", "WebGL", "GSAP"],
  },
];

/** ── TECH PAGE ───────────────────────────────────────────────────────────── */
export const techPage = {
  eyebrow: "Stack & Process",
  headline: "Tools I use to ship polished, performant interfaces.",
  body:
    "From design handoff to production deploy — a focused stack built for speed, maintainability, and motion-rich UX.",
};

export const techCategories = [
  {
    title: "Core",
    items: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4"],
  },
  {
    title: "Motion & 3D",
    items: ["GSAP + ScrollTrigger", "Framer Motion", "Three.js", "Locomotive Scroll"],
  },
  {
    title: "Quality",
    items: ["WCAG 2.1", "Core Web Vitals", "Jest + RTL", "Lighthouse audits"],
  },
  {
    title: "Workflow",
    items: ["Figma", "Git / GitHub", "Vercel", "REST APIs"],
  },
];

/** ── ABOUT PAGE ──────────────────────────────────────────────────────────── */
export const aboutContent = {
  eyebrow: "About",
  headline: "Design + Front-End, powered by motion",
  bio: "I'm a Creative digital designer & Front-End developer working at the intersection of visual design, UX, and motion. I build expressive websites that feel bold, intuitive, and built to stand out—while keeping accessibility and Core Web Vitals in mind.",
  profileImage: "/mb.jpeg",
  profileFallback: "/logonobg.png",
  name: "Pushpraj Bhadana",
  role: "Front-End Developer • Faridabad, India",
};

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Accessibility (WCAG 2.1)",
  "Core Web Vitals",
  "REST APIs",
  "Jest + React Testing Library",
];

export const experiences = [
  {
    period: "December 2025 – Present",
    title: "Freelance Front-End Developer",
    org: "Self-Employed",
    bullets: [
      "Redesigned UI/UX for 3+ client projects, boosting user engagement by 40%.",
      "Built modular React component libraries, reducing feature delivery time by 35%.",
      "Optimised Lighthouse scores from 55 to 90+ via lazy loading, code-splitting, and CDN strategies.",
      "Integrated third-party REST APIs (CMS, maps) and managed async flows with Axios and custom hooks.",
    ],
  },
  {
    period: "September 2025 – February 2026",
    title: "Front-End Web Developer",
    org: "Creative Orion Branding Agency (Young IT Minds Pvt. Ltd.)",
    bullets: [
      "Delivered 4+ client projects ahead of schedule; improved satisfaction by 25%.",
      "Increased mobile conversion by 50% with responsive design + cross-device QA.",
      "Collaborated in Figma to translate wireframes into production-ready interfaces with sub-pixel accuracy.",
      "Reduced average load time by 28% through image optimisation and asset minification.",
    ],
  },
  {
    period: "April 2025 – August 2025",
    title: "Intern Front-End Developer",
    org: "Creative Orion",
    bullets: [
      "Migrated a legacy jQuery codebase to React, reducing bundle size by 42%.",
      "Built dynamic dashboards consuming RESTful APIs with Redux Toolkit.",
      "Implemented WCAG 2.1 standards and maintained 80%+ Jest/RTL test coverage on critical UI modules.",
      "Helped establish coding standards, component docs (Storybook), and peer-review practices.",
    ],
  },
];

export const education = [
  {
    title: "B.Sc. Computer Science",
    org: "P.T. Jawaharlal Nehru College, Faridabad",
    period: "April 2025",
  },
  {
    title: "Front-End Development Bootcamp",
    org: "Udemy — HTML, CSS, JS, React, Responsive Design",
    period: "May 2025",
  },
  {
    title: "Basic Programming — C / C++",
    org: "One Tick Solution, Faridabad",
    period: "January 2022",
  },
];

/** ── CONTACT PAGE ────────────────────────────────────────────────────────── */
export const contactContent = {
  headline: "Get in Touch",
  body: "Have a project in mind? Let's create something amazing together.",
  email: "pushpbhadana@gmail.com",
  phone: "+91 99112 90075",
  phoneHref: "tel:+919911290075",
  location: "Faridabad, India",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pushpraj-bhadana" },
  { label: "GitHub", href: "https://github.com/pushprajbhadana" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

/** ── FOOTER ──────────────────────────────────────────────────────────────── */
export const footerContent = {
  tagline: "Building digital experiences that perform.",
  copyright: `© ${new Date().getFullYear()} ${siteMeta.name}. All rights reserved.`,
  links: [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
