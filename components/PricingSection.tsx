'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  pricingAddons,
  pricingPackages,
  pricingSection,
  pricingTiers,
} from '@/lib/site-content';

export default function PricingSection() {
  return (
    <section id="pricing" className="border-b border-black/10 bg-[#fdfff5] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
          {pricingSection.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,6vw,3.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-black">
          {pricingSection.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          {pricingSection.subheadline}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg, i) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                pkg.popular
                  ? 'border-black/30 bg-gradient-to-b from-white to-gray-50 shadow-lg'
                  : 'border-black/10 bg-white shadow-sm'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-black px-3 py-0.5 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-medium text-black">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-normal tracking-tight text-black sm:text-4xl">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{pkg.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-black/50">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.ctaHref}
                className={`mt-8 block rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border border-black/20 text-black hover:bg-black/5'
                }`}
              >
                {pkg.ctaLabel}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto rounded-xl border border-black/10 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 bg-gray-50">
                <th className="px-4 py-3 font-medium text-black sm:px-6">Service</th>
                <th className="px-4 py-3 font-medium text-black sm:px-6">Price Range</th>
                <th className="px-4 py-3 font-medium text-black sm:px-6">Best For</th>
                <th className="px-4 py-3 font-medium text-black sm:px-6">Notes</th>
              </tr>
            </thead>
            <tbody>
              {pricingTiers.map((tier) => (
                <tr key={tier.service} className="border-b border-black/10 last:border-0">
                  <td className="px-4 py-3 text-black sm:px-6">{tier.service}</td>
                  <td className="px-4 py-3 text-gray-700 sm:px-6">{tier.priceRange}</td>
                  <td className="px-4 py-3 text-gray-600 sm:px-6">{tier.bestFor}</td>
                  <td className="px-4 py-3 text-gray-500 sm:px-6">{tier.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="text-sm text-gray-600">Add-ons:</span>
          {pricingAddons.map((addon) => (
            <span
              key={addon.name}
              className="rounded-full border border-black/20 bg-white px-4 py-1.5 text-sm text-gray-700"
            >
              {addon.name} — {addon.price}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
