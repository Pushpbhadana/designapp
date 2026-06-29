"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import PortfolioShell from '@/components/PortfolioShell';
import { contactContent, socialLinks } from '@/lib/site-content';

/**
 * ── CONTACT PAGE ────────────────────────────────────────────────────────────
 * Contact form + details. Edit copy & links in lib/site-content.ts.
 * Form currently simulates submission — wire handleSubmit to your API/email service.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /** Replace setTimeout with Formspree, Resend, or your own API route */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PortfolioShell>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 px-4 sm:px-8 md:px-16 text-white">
        {/* ── Page header — edit contactContent in site-content.ts ── */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl text-gray-300 font-bold tracking-tighter mb-8">
          {contactContent.headline}
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">{contactContent.body}</p>

        <a
          href={contactContent.calendlyUrl}
          className="inline-block mb-16 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
        >
          {contactContent.calendlyLabel}
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-8">
          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold rounded-lg px-8 py-4 hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-500 text-lg text-center">
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>

          {/* ── Contact details — edit contactContent & socialLinks in site-content.ts ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">Email</h3>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-xl text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {contactContent.email}
                </a>
              </div>

              <div>
                <h3 className="text-2xl text-white font-bold mb-4">Phone</h3>
                <a
                  href={contactContent.phoneHref}
                  className="text-xl text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {contactContent.phone}
                </a>
              </div>

              <div>
                <h3 className="text-2xl text-white font-bold mb-4">Location</h3>
                <p className="text-xl text-gray-400">{contactContent.location}</p>
              </div>

              <div>
                <h3 className="text-2xl text-white font-bold mb-4">Social</h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </PortfolioShell>
  );
}
