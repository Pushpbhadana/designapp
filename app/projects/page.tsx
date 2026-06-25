"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import PortfolioShell from '@/components/PortfolioShell';
import { projects, projectsPage } from '@/lib/site-content';

/**
 * ── PROJECTS / WORK PAGE ──────────────────────────────────────────────────
 * Grid of portfolio items. Edit projects[] in lib/site-content.ts.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function ProjectsPage() {
  return (
    <PortfolioShell>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 px-4 sm:px-8 md:px-16 text-white">
        <div className="mx-auto max-w-6xl">
          {/* ── Page header — edit projectsPage in site-content.ts ── */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7d8187] sm:text-sm">
              {projectsPage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              {projectsPage.headline}
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#dadbdf]">
              {projectsPage.body}
            </p>
          </motion.header>

          {/* ── Project grid — add/remove items in site-content.ts → projects ── */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 pb-8">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-[#212327] bg-[#191919]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
                    <span className="text-sm text-[#7d8187]">{project.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#7d8187]">{project.category}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#212327] px-3 py-1 text-xs text-[#dadbdf]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="mt-5 inline-block text-sm text-white underline-offset-4 hover:underline"
                    >
                      View case study →
                    </Link>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-2xl border border-[#212327] bg-[#191919] p-8 text-center"
          >
            <p className="text-lg text-[#dadbdf]">Ready to start your next project?</p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafaf7]"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </main>
    </PortfolioShell>
  );
}
