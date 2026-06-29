'use client';

import Link from 'next/link';
import { footerContent, siteMeta, socialLinks } from '@/lib/site-content';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#212327] bg-[#0a0a0a]">
      <div className="border-b border-[#212327] px-4 py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-normal tracking-[-0.03em] text-white">
              {footerContent.ctaHeadline}
            </h2>
            <p className="mt-3 max-w-md text-base text-[#9a9da3]">{footerContent.tagline}</p>
          </div>
          <Link
            href={footerContent.ctaButton.href}
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafaf7]"
          >
            {footerContent.ctaButton.label}
          </Link>
        </div>
      </div>

      <div className="px-4 py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7d8187]">
              {siteMeta.name}
            </p>
            <p className="mt-3 max-w-sm text-lg leading-relaxed text-[#dadbdf]">
              {siteMeta.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerContent.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#dadbdf] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7d8187] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-6xl text-xs text-[#7d8187]">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
