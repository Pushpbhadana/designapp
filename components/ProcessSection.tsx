'use client';

import { motion } from 'motion/react';
import { processSection } from '@/lib/site-content';

export default function ProcessSection() {
  return (
    <section id="process" className="border-b border-black/10 bg-[#fdfff5] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
          {processSection.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(1.75rem,5vw,2.75rem)] font-normal leading-tight tracking-[-0.03em] text-black">
          {processSection.headline}
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSection.steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative rounded-xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <span className="font-mono text-xs text-gray-600">{step.number}</span>
              <h3 className="mt-2 text-base font-medium text-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.copy}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
