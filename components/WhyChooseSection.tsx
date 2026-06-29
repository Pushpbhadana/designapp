'use client';

import { motion } from 'motion/react';
import { whyChooseSection } from '@/lib/site-content';

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="border-b border-black/10 bg-[#fdfff5] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
          Trust
        </p>
        <h2 className="mt-4 text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[-0.03em] text-black">
          {whyChooseSection.eyebrow}
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseSection.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-gray-700 sm:text-base">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
