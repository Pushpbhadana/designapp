"use client";

import GalleryParallaxFlip from '@/components/GalleryParellelFlex';
import HeroWithImageReveal from '@/components/HeroWithImage';
import PortfolioShell from '@/components/PortfolioShell';
import VideoScrollAnimation from '@/components/VideoReveal';
import Link from 'next/link';
import {
  capabilityCards,
  introSection,
  videoSection,
} from '@/lib/site-content';

/**
 * ── HOME PAGE ─────────────────────────────────────────────────────────────
 * Sections (top → bottom):
 *   1. HeroWithImageReveal  — scroll-pinned hero + video flip
 *   2. GalleryParallaxFlip  — parallax project gallery
 *   3. Intro strip          — headline + CTAs
 *   4. VideoScrollAnimation — scroll-expanding video
 *   5. Capabilities grid    — three service cards
 *
 * Edit copy in lib/site-content.ts. Component logic lives in each import.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function Home() {
  return (
    <PortfolioShell>
      <main className="w-full bg-[#0a0a0a] text-white">

        {/* ── SECTION 1: Hero — edit heroContent in site-content.ts ── */}
        <HeroWithImageReveal />

        {/* ── SECTION 2: Gallery — edit gallerySection in site-content.ts ── */}
        <GalleryParallaxFlip />

        {/* ── SECTION 3: Intro strip — edit introSection in site-content.ts ── */}
        <section className="bg-black px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#dadbdf] sm:text-sm">
              {introSection.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl text-[clamp(3rem,11vw,6rem)] font-normal leading-[0.94] tracking-[-0.04em] text-white">
              {introSection.headline}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#dadbdf] sm:text-lg">
              {introSection.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={introSection.primaryCta.href}
                className="rounded-full border border-white/25 px-5 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/10"
              >
                {introSection.primaryCta.label}
              </Link>
              <Link
                href={introSection.secondaryCta.href}
                className="rounded-full border border-white bg-white px-5 py-2 text-sm text-[#0a0a0a] transition-colors duration-200 hover:bg-[#fafaf7]"
              >
                {introSection.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Video reveal — edit videoSection in site-content.ts ── */}
        <section>
          <VideoScrollAnimation
            videoSrc={videoSection.videoSrc}
            alt={videoSection.alt}
            sectionBackground="bg-black"
            sectionClassName="pt-0"
          />
        </section>

        {/* ── SECTION 5: Capabilities — edit capabilityCards in site-content.ts ── */}
        <section className="border-b border-[#212327] px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7d8187] sm:text-sm">
              Capabilities
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {capabilityCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[#212327] bg-[#191919] p-6"
                >
                  <h2 className="text-[1.35rem] font-normal leading-tight tracking-[-0.02em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#dadbdf] sm:text-base">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PortfolioShell>
  );
}
