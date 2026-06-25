'use client';

import Link from 'next/link';
import { footerContent, siteMeta, socialLinks } from '@/lib/site-content';

/**
 * ── SITE FOOTER ───────────────────────────────────────────────────────────
 * Global footer rendered on every page via PortfolioShell.
 * Edit copy and links in lib/site-content.ts → footerContent & socialLinks.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-[#212327] bg-[#0a0a0a] px-4 py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        {/* Brand block — edit tagline in site-content.ts */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7d8187]">
            {siteMeta.name}
          </p>
          <p className="mt-3 max-w-sm text-lg leading-relaxed text-[#dadbdf]">
            {footerContent.tagline}
          </p>
        </div>

        {/* Quick links — edit footerContent.links in site-content.ts */}
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

        {/* Social links — edit socialLinks in site-content.ts */}
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
    </footer>
  );
}
