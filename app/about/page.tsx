"use client";

import { motion } from 'motion/react';
import BlurText from '@/components/BlurText';
import PortfolioShell from '@/components/PortfolioShell';
import {
  aboutContent,
  education,
  experiences,
  skills,
} from '@/lib/site-content';

/**
 * ── ABOUT PAGE ────────────────────────────────────────────────────────────
 * Profile, skills, experience timeline, education.
 * Edit all content in lib/site-content.ts (aboutContent, skills, etc.).
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function About() {
  return (
    <PortfolioShell>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 px-4 sm:px-8 md:px-16 text-white">
        <div className="mx-auto max-w-6xl">
          {/* ── Intro — edit aboutContent in site-content.ts ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="text-gray-400 text-sm font-medium">{aboutContent.eyebrow}</div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              {aboutContent.headline}
            </h1>
            <div className="max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed">
              <BlurText
                text={aboutContent.bio}
                delay={20}
                animateBy="words"
                direction="top"
              />
            </div>
          </motion.div>

          {/* ── Profile + skills grid ── */}
          <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <img
                  src={aboutContent.profileImage}
                  alt={aboutContent.name}
                  className="w-full h-auto object-cover max-h-[420px]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = aboutContent.profileFallback;
                  }}
                />
                <div className="p-5">
                  <div className="text-xl font-semibold">{aboutContent.name}</div>
                  <div className="text-gray-400 mt-1">{aboutContent.role}</div>
                </div>
              </div>
            </motion.aside>

            <motion.section
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* ── Experience — edit experiences[] in site-content.ts ── */}
          <section className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Experience</h2>
            <div className="mt-8 space-y-6">
              {experiences.map((role, idx) => (
                <motion.article
                  key={role.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                    <div>
                      <div className="text-white text-xl font-semibold">{role.title}</div>
                      <div className="text-gray-400">{role.org}</div>
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">{role.period}</div>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-300 leading-relaxed">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ── Education — edit education[] in site-content.ts ── */}
          <section className="mt-16 pb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Education & Certifications
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {education.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-white text-xl font-semibold">{item.title}</div>
                  <div className="mt-1 text-gray-400">{item.org}</div>
                  <div className="mt-3 text-gray-400 text-sm">{item.period}</div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PortfolioShell>
  );
}
