"use client";

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import PillNav from './PillNav';
import PageLoader from './PageLoader';
import SiteFooter from './SiteFooter';
import { navCta, navItems } from '@/lib/site-content';
import SplashCursor from './SplashCursor';

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


        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#d084a9"
        />
        <PillNav
          logo="/logo.svg"
          logoAlt="Company Logo"
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
