"use client";

import GalleryParallaxFlip from '@/components/GalleryParellelFlex';
import HeroWithImageReveal from '@/components/HeroWithImage';
import PortfolioShell from '@/components/PortfolioShell';
import VideoScrollAnimation from '@/components/VideoReveal';
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import {
  introSection,
  videoSection,
} from '@/lib/site-content';

export default function Home() {
  return (
    <PortfolioShell>
      <main className="w-full bg-[#fdfff5] text-black">

        {/* Hero — edit heroContent in site-content.ts */}
        <HeroWithImageReveal />

        {/* About strip */}
        <AboutSection />

        {/* Services — cards + detailed categories */}
        <ServicesSection />

        {/* Parallax gallery */}
        <GalleryParallaxFlip />

        {/* Why choose us */}
        <WhyChooseSection />

        {/* Process steps */}
        <ProcessSection />

        {/* Intro / approach strip */}
        <section id="approach" className="bg-[#fdfff5] px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
              {introSection.eyebrow}
            </p>
            <h2 className="mt-6 max-w-5xl text-[clamp(2rem,8vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.04em] text-black">
              {introSection.headline}
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
              {introSection.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={introSection.primaryCta.href}
                className="rounded-full border border-black/20 bg-black px-5 py-2 text-sm text-white transition-colors duration-200 hover:bg-gray-800"
              >
                {introSection.primaryCta.label}
              </Link>
              <Link
                href={introSection.secondaryCta.href}
                className="rounded-full border border-black bg-transparent px-5 py-2 text-sm text-black transition-colors duration-200 hover:bg-black/5"
              >
                {introSection.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing packages + tier table */}
        <PricingSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Video showcase */}
        <section id="video-showcase">
          <VideoScrollAnimation
            videoSrc={videoSection.videoSrc}
            alt={videoSection.alt}
            sectionBackground="bg-[#fdfff5]"
            sectionClassName="pt-0"
          />
        </section>

      </main>
    </PortfolioShell>
  );
}
