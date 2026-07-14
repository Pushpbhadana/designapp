// components/ContactSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  contactContent,
  siteMeta,
  socialLinks,
} from '@/lib/site-content';

// ---------- Icons (inline SVGs) ----------
const PhoneIcon = () => (
  <svg
    className="w-5 h-5  text-gray-200 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-5 h-5  text-gray-200 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5  text-gray-200 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Register ScrollTrigger plugin (client‑side only)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactSectionProps {
  // Video properties
  videoSrc: string;
  alt?: string;

  // Video options
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;

  // Animation properties (desktop only — mobile always renders full-width, auto-height)
  initialWidth?: string;
  expandedWidth?: string;

  // Container properties
  className?: string;
  containerClassName?: string;

  // Section properties
  sectionClassName?: string;
  sectionBackground?: string;

  // Animation triggers
  startTrigger?: string;
  endTrigger?: string;
  scrub?: boolean | number;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  videoSrc,
  alt = 'Animated video',
  muted = true,
  loop = true,
  autoPlay = true,
  playsInline = true,
  initialWidth = '60vw',
  expandedWidth = '100vw',
  className = '',
  containerClassName = '',
  sectionClassName = '',
  sectionBackground = '',
  startTrigger = 'top 100%',
  endTrigger = 'bottom bottom',
  scrub = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ---------- GSAP scroll animation ----------
  // Scoped to desktop (lg+) with gsap.matchMedia(), which is hydration-safe
  // (no server/client mismatch) and automatically re-evaluates on resize,
  // cleaning up the tween/ScrollTrigger when the viewport drops below lg.
  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tween = gsap.to(containerRef.current, {
        width: expandedWidth,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: startTrigger,
          end: endTrigger,
          scrub: scrub,
          markers: false, // set to true for debugging
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [expandedWidth, startTrigger, endTrigger, scrub]);

  // ---------- Form state ----------
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate an API call – replace with your own logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- JSON‑LD Structured Data ----------
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

  // ---------- Render ----------
  return (
    <section
      ref={sectionRef}
      className={`${sectionBackground} ${sectionClassName}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`flex justify-center items-center ${containerClassName}`}>
        <div
          ref={containerRef}
          className={`relative z-0 w-full min-h-[100dvh] overflow-hidden rounded-tl-2xl rounded-tr-2xl shadow-lg lg:h-screen lg:w-[var(--initial-w)] ${className}`}
          // Full width on mobile always (the `w-full` class wins there).
          // On lg+, `lg:w-[var(--initial-w)]` kicks in and reads this var,
          // then GSAP's ScrollTrigger tween (scoped to lg+ via matchMedia)
          // animates the actual `width` inline style toward expandedWidth.
          // Pure CSS breakpoint switch — no JS state, no hydration mismatch.
          style={{ ['--initial-w' as any]: initialWidth }}
        >
          {/* Background video — absolutely positioned so it always fills
              whatever height the container ends up at (100dvh+ on mobile
              once content grows it, or h-screen on desktop), on every
              screen size. */}
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={videoSrc}
            muted={muted}
            loop={loop}
            autoPlay={autoPlay}
            playsInline={playsInline}
            controls={false}
            aria-label={alt}
          />

          <div className="relative z-10 flex min-h-[100dvh] items-center justify-center backdrop-blur-sm bg-black/60 lg:min-h-screen lg:bg-black/50">
            <div className="flex w-full flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:px-20 lg:py-24">
              {/* ----- Left Column – Contact Form ----- */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
                  Get in Touch
                </p>
                <h2 className="mt-2 text-3xl font-normal tracking-tight  text-white md:text-4xl lg:text-5xl">
                  Let’s work together
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                  Have a project in mind? Drop us a message and we’ll get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-3  placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-100">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block w-full rounded-full border border-black/20 bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm font-medium">
                      ✓ Message sent successfully!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm font-medium">
                      ✗ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </motion.div>

              {/* ----- Right Column – Contact Info ----- */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="w-full space-y-8 lg:w-1/2 lg:pl-12"
              >
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em]  text-gray-200">
                    Contact Info
                  </h3>
                  <ul className="mt-6 space-y-6">
                    <li className="flex items-start gap-4">
                      <PhoneIcon />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Phone</p>
                        <a
                          href={`tel:${contactContent.phone}`}
                          className="text-lg  text-white hover:underline"
                        >
                          {contactContent.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <EmailIcon />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Email</p>
                        <a
                          href={`mailto:${contactContent.email}`}
                          className="text-lg  text-white hover:underline"
                        >
                          {contactContent.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <LocationIcon />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Address</p>
                        <address className="text-lg not-italic  text-white">
                          {contactContent.address || 'Faridabad, HR, India'}
                        </address>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm  text-gray-400">
                    Or find us on:{' '}
                    {socialLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-white underline-offset-2 hover:underline"
                      >
                        {link.label}
                        {idx < socialLinks.length - 1 && ', '}
                      </Link>
                    ))}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;