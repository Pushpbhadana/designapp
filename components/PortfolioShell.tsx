"use client";

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import PillNav from './PillNav';
import PageLoader from './PageLoader';
import SiteFooter from './SiteFooter';
import { navCta, navItems } from '@/lib/site-content';

/**
 * ── PORTFOLIO SHELL ───────────────────────────────────────────────────────
 * Wraps every page with: loader → nav → page content → footer.
 * Nav items & CTA are driven by lib/site-content.ts.
 * ───────────────────────────────────────────────────────────────────────────
 */
export default function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <PageLoader>
        {/* ── Global navigation — edit items in lib/site-content.ts ── */}

        <PillNav
          items={[
            { label: 'Logo', href: '/' },
            ...navItems.map((item) => ({ label: item.label, href: item.href })),
          ]}
          activeHref={pathname}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={false}
          connectButtonLabel={navCta.label}
          connectButtonHref={navCta.href}
        />

        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>

        {/* ── Global footer — edit copy in lib/site-content.ts ── */}
        <SiteFooter />
      </PageLoader>
    </>
  );
}
