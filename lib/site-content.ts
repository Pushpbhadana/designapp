/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SITE CONTENT — Edit this file to update copy across the whole website.
 * Each section is labeled so you can find and change text, links, and images
 * without digging through component files.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** ── BRAND & SEO ───────────────────────────────────────────────────────── */
export const siteMeta = {
  name: "blüm design",
  title: "blüm design | Boutique Web Design & Brand Studio",
  description:
    "Blüm Design is a boutique web design studio creating digital experiences inspired by nature's elegance — websites, brands, and e-commerce that feel alive.",
  tagline: "We design digital experiences that bloom.",
};

/** ── NAVIGATION ────────────────────────────────────────────────────────── */
export const navItems = [
  { label: "About", href: "/#about-home" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export const navCta = {
  label: "Connect",
  href: "#contact",
};

/** ── HERO (Home) ─────────────────────────────────────────────────────────── */
export const heroContent = {
  headlineFirst: "We Design digital",
  headlineSecond: "experiences that bloom.",
  subheadline:
    "Blending beauty, intuition, and strategy — we create websites and brands that feel alive.",
  thumbnailSrc: "/site.mp4",
  videoSrc: "/site.mp4",
  scrollHint: "Scroll down to explore ↓",
  primaryCta: { label: "View Our Work", href: "/#work" },
  secondaryCta: { label: "Start Your Project", href: "/contact" },
  readMoreLabel: "Start Your Project →",
  readMoreHref: "/contact",
  stats: [
    { value: "12", suffix: "+", label: "Projects" },
    { value: "97", suffix: "%", label: "Client Satisfaction" },
  ],
  studioLabel: "WEB DESIGN STUDIO",
  partnerTitle: "Your Partner in Business Growth",
  partnerCopy:
    "We don't just create websites — we craft digital experiences that grow your business and leave a lasting impression.",
  highlightValue: "50",
  highlightSuffix: "+",
  highlightLabel: "Brands Transformed",
  highlightCopy: "Helping businesses reach new heights through design.",
};

/** ── ABOUT (Home strip) ────────────────────────────────────────────────── */
export const aboutSection = {
  eyebrow: "About Us",
  headline: "Digital experiences inspired by nature's elegance.",
  body:
    "Blüm Design is a boutique web design studio that creates digital experiences inspired by nature's elegance. We draw from organic rhythms and harmonious contrasts to build intuitive interfaces.",
  body2: "We believe beautiful design isn't just decoration — it's strategy that connects brands with audiences. By blending grace with structure, we ensure every element serves a clear goal.",
  primaryCta: { label: "Get in Touch ➔", href: "#contact" },
};

/** ── INTRO STRIP (Home) ────────────────────────────────────────────────── */
export const introSection = {
  eyebrow: "Our Approach",
  headline: "Beautiful design isn't decoration — it's strategy.",
  body:
    "We build high-performance websites and brands with clean interaction systems, accessible defaults, and motion that supports the content instead of competing with it.",
  primaryCta: { label: "View Selected Work", href: "/#work" },
  secondaryCta: { label: "Start a Project", href: "/contact" },
};

/** ── GALLERY (Home) ──────────────────────────────────────────────────────── */
export const gallerySection = {
  title: "Selected Works",
  subtitle: "Portfolio highlights from recent projects",
};

/** ── SELECTED WORKS (Featured portfolio) ───────────────────────────────── */
export type SelectedWork = {
  title: string;
  caption: string;
  image: string;
  tags?: string[];
};

export const selectedWorks: SelectedWork[] = [
  {
    title: "Kohaku Water",
    caption: "Organic lifestyle e-commerce",
    image: "/project1.jpg",
    tags: ["E-commerce", "Lifestyle"],
  },
  {
    title: "True Life",
    caption: "Digital art platform & NFT gallery",
    image: "/project2.jpg",
    tags: ["Digital Art", "Web App"],
  },
  {
    title: "Nebula",
    caption: "Next-gen music experience",
    image: "/project3.jpg",
    tags: ["Mobile UI", "Music"],
  },
  {
    title: "GreenMotive",
    caption: "Eco-brand identity & website",
    image: "/project4.jpg",
    tags: ["Branding", "Sustainability"],
  },
  {
    title: "Desert Bloom",
    caption: "Artistic login & onboarding flow",
    image: "/project5.jpg",
    tags: ["UI/UX", "Creative"],
  },
];

/** ── SERVICES (Home cards) ───────────────────────────────────────────────── */
export const serviceCards = [
  {
    title: "Digital Design",
    copy: "Websites, apps, and interfaces that don't just look good — they feel right.",
  },
  {
    title: "Brand Identity",
    copy: "From logo to full visual language, we help your brand stand out naturally.",
  },
  {
    title: "E-commerce",
    copy: "Beautiful online stores that convert visitors into loyal customers.",
  },
  {
    title: "Art & Culture",
    copy: "Specializing in creative, artistic, and lifestyle projects.",
  },
];

/** ── SERVICE CATEGORIES (Detailed) ───────────────────────────────────────── */
export const serviceCategories = [
  {
    title: "Website Design & Development",
    items: [
      "Custom Website Design (UI/UX focused, responsive, fast-loading)",
      "Landing Page Design (high-conversion)",
      "E-commerce Websites (Shopify, custom, WooCommerce)",
      "Web App / SaaS Interfaces",
      "Redesign & Revamp (existing sites)",
    ],
  },
  {
    title: "Branding & Identity",
    items: [
      "Brand Strategy & Visual Identity",
      "Logo Design",
      "Brand Guidelines",
      "Typography & Color Systems",
    ],
  },
  {
    title: "Digital Products",
    items: [
      "Mobile App UI/UX Design (iOS & Android)",
      "Dashboard & Admin Panel Design",
      "Figma Prototypes & Animations",
    ],
  },
  {
    title: "Growth Services",
    items: [
      "SEO Optimization (Technical + On-page)",
      "Speed & Performance Optimization",
      "Basic Digital Marketing Setup (Google Analytics, Meta Pixel, etc.)",
      "Ongoing Maintenance & Support Plans",
    ],
  },
  {
    title: "Specialty",
    items: [
      "Artistic / Aesthetic Websites",
      "NFT / Digital Art Platforms",
      "Wellness, Beauty, Lifestyle & Creative brands",
    ],
  },
];

/** ── WHY CHOOSE ──────────────────────────────────────────────────────────── */
export const whyChooseSection = {
  eyebrow: "Why Choose Blüm Design?",
  items: [
    "Obsessed with beautiful, intentional design",
    "Fast delivery without sacrificing quality",
    "100% custom — no templates",
    "Strong focus on user experience & conversion",
    "We speak both aesthetics and business",
  ],
};

/** ── PROCESS ─────────────────────────────────────────────────────────────── */
export const processSection = {
  eyebrow: "Our Process",
  headline: "From discovery to growth — a clear path to launch.",
  steps: [
    { number: "01", title: "Discovery & Strategy", copy: "We learn your goals, audience, and vision." },
    { number: "02", title: "Moodboarding & Design", copy: "Visual direction, wireframes, and high-fidelity UI." },
    { number: "03", title: "Development & Animation", copy: "Pixel-perfect build with motion and performance." },
    { number: "04", title: "Testing & Launch", copy: "QA, SEO setup, and a smooth go-live." },
    { number: "05", title: "Growth & Support", copy: "Ongoing maintenance, updates, and optimization." },
  ],
};

/** ── TESTIMONIALS ────────────────────────────────────────────────────────── */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Blüm transformed our brand. The website feels like poetry.",
    author: "Founder",
    role: "Kohaku Water",
  },
  {
    quote: "They understood the artistic vision perfectly.",
    author: "Digital Artist",
    role: "True Life",
  },
];

/** ── PRICING ─────────────────────────────────────────────────────────────── */
export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const pricingSection = {
  eyebrow: "Pricing",
  headline: "Packages that grow with you.",
  subheadline: "Transparent tiered pricing for startups, brands, and growing businesses.",
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Blossom Package",
    price: "$2,900",
    description: "Perfect for startups and personal brands launching their first presence.",
    features: [
      "One-page custom website",
      "Basic branding (colors, typography)",
      "2 revision rounds",
      "Mobile-responsive design",
    ],
    ctaLabel: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Bloom Package",
    price: "$5,900",
    description: "Our most popular — full website with brand refresh and launch support.",
    features: [
      "Multi-page custom website",
      "Logo refresh + brand assets",
      "SEO setup & analytics",
      "4 weeks post-launch support",
      "4 revision rounds",
    ],
    popular: true,
    ctaLabel: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Garden Package",
    price: "$9,900",
    description: "Complete brand and digital presence for established businesses.",
    features: [
      "Full custom website",
      "Complete brand identity package",
      "E-commerce integration",
      "3 months maintenance included",
      "Priority support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "#contact",
  },
];

export type PricingTier = {
  service: string;
  priceRange: string;
  bestFor: string;
  notes: string;
};

export const pricingTiers: PricingTier[] = [
  {
    service: "Basic Landing Page",
    priceRange: "$1,200 – $2,500",
    bestFor: "Startups, personal brands",
    notes: "1–2 weeks, 3 revisions",
  },
  {
    service: "Premium Custom Website",
    priceRange: "$4,500 – $8,500",
    bestFor: "Small-medium businesses",
    notes: "4–8 weeks, full design + dev",
  },
  {
    service: "E-commerce Website",
    priceRange: "$6,500 – $12,000",
    bestFor: "Online stores",
    notes: "Includes Shopify or custom",
  },
  {
    service: "Full Brand Identity Package",
    priceRange: "$3,000 – $6,000",
    bestFor: "New businesses",
    notes: "Logo + guidelines + website assets",
  },
  {
    service: "Mobile App UI/UX Design",
    priceRange: "$5,500 – $15,000+",
    bestFor: "Apps & SaaS",
    notes: "Per platform or both",
  },
  {
    service: "Website Redesign",
    priceRange: "$3,800 – $7,500",
    bestFor: "Existing sites",
    notes: "Faster turnaround",
  },
  {
    service: "Monthly Maintenance",
    priceRange: "$350 – $850 / mo",
    bestFor: "All clients",
    notes: "Updates, backups, security",
  },
  {
    service: "Retainer (Design + Dev)",
    priceRange: "$2,000 – $5,000 / mo",
    bestFor: "Ongoing partnership",
    notes: "10–30 hours/month",
  },
];

export const pricingAddons = [
  { name: "Motion / Animations", price: "+$800 – $2,000" },
  { name: "Advanced SEO", price: "+$1,500" },
  { name: "3D / Interactive elements", price: "+$2,000+" },
];

/** ── VIDEO REVEAL (Home) ─────────────────────────────────────────────────── */
export const videoSection = {
  videoSrc: "/bgvid.mp4",
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
    title: "Kohaku Water",
    category: "E-commerce",
    year: "2025",
    image: "/project1.jpg",
    tags: ["Shopify", "Lifestyle", "Responsive"],
  },
  {
    title: "True Life",
    category: "Digital Art Platform",
    year: "2025",
    image: "/project2.jpg",
    tags: ["NFT", "Web App", "Motion"],
  },
  {
    title: "Nebula",
    category: "Music App UI",
    year: "2026",
    image: "/project3.jpg",
    tags: ["Mobile UI", "Figma", "Animation"],
  },
  {
    title: "GreenMotive",
    category: "Eco Brand",
    year: "2025",
    image: "/project4.jpg",
    tags: ["Branding", "Next.js", "GSAP"],
  },
  {
    title: "Desert Bloom",
    category: "Creative UI",
    year: "2026",
    image: "/project5.jpg",
    tags: ["UI/UX", "Art Direction"],
  },
  {
    title: "Motion Showcase",
    category: "Interactive",
    year: "2026",
    image: "/project8.webp",
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
  headline: "Design + strategy, inspired by nature",
  bio: "Blüm Design is a boutique web design studio that creates digital experiences inspired by nature's elegance. We believe beautiful design isn't just decoration — it's strategy that connects. We build expressive websites and brands that feel bold, intuitive, and built to stand out — while keeping accessibility and Core Web Vitals in mind.",
  profileImage: "/mb.jpeg",
  profileFallback: "/logonobg.png",
  name: "Pushpraj Bhadana",
  role: "Creative Director • Faridabad, India",
};

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "UI/UX Design",
  "Brand Identity",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Accessibility (WCAG 2.1)",
  "Core Web Vitals",
  "Figma",
  "E-commerce (Shopify)",
];

export const experiences = [
  {
    period: "December 2025 – Present",
    title: "Freelance Front-End Developer & Designer",
    org: "Blüm Design",
    bullets: [
      "Redesigned UI/UX for 3+ client projects, boosting user engagement by 40%.",
      "Built modular React component libraries, reducing feature delivery time by 35%.",
      "Optimised Lighthouse scores from 55 to 90+ via lazy loading, code-splitting, and CDN strategies.",
      "Delivered full brand identity packages including logo, guidelines, and website assets.",
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
  body: "Ready to make something beautiful? Let's create a digital presence that grows with you.",
  email: "pushpbhadana@gmail.com",
  phone: "+91 99112 90075",
  phoneHref: "tel:+919911290075",
  location: "Faridabad, India",
  calendlyUrl: "/contact",
  calendlyLabel: "Book a Discovery Call",
  address: "Faridabad, Haryana, India",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pushpraj-bhadana" },
  { label: "GitHub", href: "https://github.com/pushprajbhadana" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

/** ── FOOTER ──────────────────────────────────────────────────────────────── */
export const footerContent = {
  tagline: "Let's create a digital presence that grows with you.",
  ctaHeadline: "Ready to make something beautiful?",
  ctaButton: { label: "Book a Discovery Call", href: "#contact" },
  copyright: `© ${new Date().getFullYear()} ${siteMeta.name}. All rights reserved.`,
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
