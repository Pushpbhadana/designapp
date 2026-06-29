'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  aboutSection,
  contactContent,
  siteMeta,
  socialLinks,
} from '@/lib/site-content';

export default function AboutSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteMeta.name,
    description: siteMeta.description,
    url: 'https://www.blumdesing.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Faridabad',
      addressRegion: 'HR',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactContent.phone,
      contactType: 'sales',
    },
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <section
      aria-label="About our agency"
      id="about-home"
      className="bg-[#fdfff5]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:px-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-black lg:w-1/2"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
            {aboutSection.eyebrow}
          </p>
          <h2 className="text-3xl font-normal tracking-tight md:text-4xl lg:text-5xl">
            {aboutSection.headline}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">{aboutSection.body}</p>
          <p className="text-lg leading-relaxed text-gray-700">{aboutSection.body2}</p>
          <Link
            href={aboutSection.primaryCta.href}
            className="inline-block rounded-full border border-black/20 bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-800"
          >
            {aboutSection.primaryCta.label}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="w-full lg:w-1/2"
        >
          <img  
            src="/1xx.png"
            alt="Showreel of web design, branding, and digital product projects"
            className="w-full object-cover bg-[#fdfff5]"
          />
        </motion.div>
      </div>
    </section>
  );
}
