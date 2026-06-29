'use client';

import { motion } from 'motion/react';
import { serviceCards, serviceCategories } from '@/lib/site-content';

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-black/10 bg-[#fdfff5] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
          Services
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,6vw,3.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-black">
          What we create
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {serviceCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="mb-4 h-px w-8 bg-black/30 transition-all duration-300 group-hover:w-12" />
              <h3 className="text-xl font-normal tracking-[-0.02em] text-black sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                {card.copy}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-black/10 bg-white p-5 sm:p-6 shadow-sm"
            >
              <h4 className="text-base font-medium text-black sm:text-lg">{category.title}</h4>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-gray-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
