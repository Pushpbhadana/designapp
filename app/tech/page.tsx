"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import LogoLoop from '@/components/LogoLoop';
import PortfolioShell from '@/components/PortfolioShell';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiThreedotjs } from 'react-icons/si';
import { techCategories, techPage } from '@/lib/site-content';

/** Tech logos for the marquee — swap icons/links here or in site-content.ts */
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
];

/**
 * ── TECH PAGE ─────────────────────────────────────────────────────────────
 * Stack overview + logo marquee + process cards.
 * Edit techPage & techCategories in lib/site-content.ts.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function TechPage() {
  return (
    <PortfolioShell>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 px-4 sm:px-8 md:px-16 text-white">
        <div className="mx-auto max-w-6xl">
          {/* ── Page header — edit techPage in site-content.ts ── */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7d8187] sm:text-sm">
              {techPage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              {techPage.headline}
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#dadbdf]">
              {techPage.body}
            </p>
          </motion.header>

          {/* ── Logo marquee — edit techLogos array above ── */}
          <section className="relative mt-14 h-[100px] overflow-hidden rounded-2xl border border-[#212327] bg-[#191919]">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#191919"
              ariaLabel="Technology stack"
            />
          </section>

          {/* ── Stack categories — edit techCategories in site-content.ts ── */}
          <section className="mt-14 grid gap-6 sm:grid-cols-2">
            {techCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="rounded-2xl border border-[#212327] bg-[#191919] p-6"
              >
                <h2 className="text-xl font-semibold tracking-tight">{category.title}</h2>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#dadbdf]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>

          {/* ── Process strip ── */}
          <section className="mt-14 pb-8">
            <h2 className="text-2xl font-semibold tracking-tight">How I work</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { step: "01", title: "Discover", copy: "Align on goals, audience, and constraints before touching pixels." },
                { step: "02", title: "Design & Build", copy: "Prototype in Figma, ship in React with motion and accessibility baked in." },
                { step: "03", title: "Launch & Iterate", copy: "Measure Core Web Vitals, refine interactions, and hand off clean docs." },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="rounded-2xl border border-[#212327] bg-[#191919] p-6"
                >
                  <span className="font-mono text-xs text-[#7d8187]">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#dadbdf]">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="mb-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-white/25 px-6 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              Discuss your stack needs →
            </Link>
          </div>
        </div>
      </main>
    </PortfolioShell>
  );
}
