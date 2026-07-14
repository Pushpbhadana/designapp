'use client';

import Testimonials from "./Testimonial";

// import { motion } from 'motion/react';
// import { testimonials } from '@/lib/site-content';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#fdfff5] px-4 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 sm:text-sm">
          Testimonials
        </p>
        <h2 className="mt-4 text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[-0.03em] text-black">
          What clients say
        </h2>
        {/* <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-black/10 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-black">{item.author}</span>
                  <span className="mt-0.5 block text-sm text-gray-600">{item.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div> */}

        <Testimonials />
        
      </div>
    </section>
  );
}
