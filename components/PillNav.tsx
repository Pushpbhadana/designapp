'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'; // 👈 import the plugin

// Register the plugin so GSAP can use it
gsap.registerPlugin(ScrollToPlugin);

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  connectButtonLabel?: string;
  logoSize?: string | number;
  logoWidth?: string | number;
  logoHeight?: string | number;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  connectButtonLabel = 'Get a Quote today!',
  logoSize,
  logoWidth,
  logoHeight,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const connectButtonRef = useRef<HTMLAnchorElement | null>(null);
  const connectButtonTweenRef = useRef<gsap.core.Tween | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const getLogoSize = (): { width: string; height: string } => {
    const defaultSize = 'var(--nav-h)';
    let w: string, h: string;

    if (logoWidth !== undefined) {
      w = typeof logoWidth === 'number' ? `${logoWidth}px` : logoWidth;
    } else if (logoSize !== undefined) {
      w = typeof logoSize === 'number' ? `${logoSize}px` : logoSize;
    } else {
      w = defaultSize;
    }

    if (logoHeight !== undefined) {
      h = typeof logoHeight === 'number' ? `${logoHeight}px` : logoHeight;
    } else if (logoSize !== undefined) {
      h = typeof logoSize === 'number' ? `${logoSize}px` : logoSize;
    } else {
      h = defaultSize;
    }

    return { width: w, height: h };
  };

  const logoContainerStyle = getLogoSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const setupPillAnimation = useCallback((circle: HTMLSpanElement, index: number) => {
    if (!circle?.parentElement) return;

    const pill = circle.parentElement as HTMLElement;
    const rect = pill.getBoundingClientRect();
    const { width: w, height: h } = rect;

    if (w === 0 || h === 0) return;

    const R = ((w * w) / 4 + h * h) / (2 * h);
    const D = Math.ceil(2 * R) + 2;
    const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
    const originY = D - delta;

    circle.style.width = `${D}px`;
    circle.style.height = `${D}px`;
    circle.style.bottom = `-${delta}px`;

    gsap.set(circle, {
      xPercent: -50,
      scale: 0,
      transformOrigin: `50% ${originY}px`
    });

    const label = pill.querySelector<HTMLElement>('.pill-label');
    const white = pill.querySelector<HTMLElement>('.pill-label-hover');

    if (label) gsap.set(label, { y: 0 });
    if (white) gsap.set(white, { y: h + 12, opacity: 0 });

    if (tlRefs.current[index]) {
      tlRefs.current[index]?.kill();
    }

    const tl = gsap.timeline({ paused: true });

    tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

    if (label) {
      tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
    }

    if (white) {
      gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
      tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
    }

    tlRefs.current[index] = tl;
  }, [ease]);

  const layout = useCallback(() => {
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        setupPillAnimation(circle, index);
      }
    });
  }, [setupPillAnimation]);

  useEffect(() => {
    if (!mounted) return;

    const timeoutId = setTimeout(() => {
      layout();
    }, 100);

    const onResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        layout();
      }, 150);
    };

    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => { });
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logoElement = logoRef.current;
      const navItemsElement = navItemsRef.current;
      const connectButton = connectButtonRef.current;

      if (logoElement) {
        gsap.set(logoElement, { scale: 0 });
        gsap.to(logoElement, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItemsElement) {
        gsap.set(navItemsElement, { width: 0, overflow: 'hidden' });
        gsap.to(navItemsElement, {
          width: 'auto',
          duration: 0.6,
          ease,
          onComplete: () => {
            if (navItemsElement) {
              gsap.set(navItemsElement, { clearProps: 'width' });
            }
          }
        });
      }

      if (connectButton) {
        gsap.set(connectButton, { scale: 0 });
        gsap.to(connectButton, {
          scale: 1,
          duration: 0.6,
          ease,
          delay: 0.2
        });
      }
    }

    return () => {
      clearTimeout(timeoutId);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', onResize);
      tlRefs.current.forEach(tl => tl?.kill());
      activeTweenRefs.current.forEach(tween => tween?.kill());
      logoTweenRef.current?.kill();
      connectButtonTweenRef.current?.kill();
    };
  }, [layout, ease, initialLoadAnimation, mounted]);

  useEffect(() => {
    if (mounted && items.length > 0) {
      layout();
    }
  }, [items, layout, mounted]);

  const handleEnter = useCallback((i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    if (activeTweenRefs.current[i]) {
      activeTweenRefs.current[i]?.kill();
    }
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  }, [ease]);

  const handleLeave = useCallback((i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    if (activeTweenRefs.current[i]) {
      activeTweenRefs.current[i]?.kill();
    }
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  }, [ease]);

  const handleConnectButtonEnter = useCallback(() => {
    const button = connectButtonRef.current;
    if (!button) return;

    if (connectButtonTweenRef.current) {
      connectButtonTweenRef.current.kill();
    }
    connectButtonTweenRef.current = gsap.to(button, {
      scale: 1.1,
      transition: 'all 0s ease',
      overwrite: 'auto',
      backgroundColor: '#000',
      color: '#fff'
    });
  }, [ease]);

  const handleConnectButtonLeave = useCallback(() => {
    const button = connectButtonRef.current;
    if (!button) return;

    if (connectButtonTweenRef.current) {
      connectButtonTweenRef.current.kill();
    }
    connectButtonTweenRef.current = gsap.to(button, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.inOut',
      overwrite: 'auto',
      backgroundColor: '#fff',
      color: '#000'
    });
  }, [ease]);

  // 👇 Smooth scroll function using GSAP ScrollToPlugin
  const scrollToHash = useCallback((hash: string) => {
    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 }, // 80px offset for fixed nav
        duration: 1.2,
        ease: 'power3.inOut' // ease-in-out motion
      });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            if (menu) {
              gsap.set(menu, { visibility: 'hidden' });
            }
          }
        });
      }
    }

    onMobileMenuClick?.();
  }, [isMobileMenuOpen, ease, onMobileMenuClick]);

  const isExternalLink = useCallback((href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:'), []);

  const isInternalLink = useCallback((href?: string) => href && !isExternalLink(href), [isExternalLink]);

  const isHashLink = useCallback((href: string) => href.startsWith('#') || href.startsWith('/#'), []);

  // Updated handlers to use smooth scroll
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHashLink(href)) {
      e.preventDefault();
      const elementId = href.startsWith('/#') ? href.substring(1) : href; // make it '#contact'
      scrollToHash(elementId);
    }
  }, [isHashLink, scrollToHash]);

  const handleMobileNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHashLink(href)) {
      e.preventDefault();
      const elementId = href.startsWith('/#') ? href.substring(1) : href;
      scrollToHash(elementId);
    }
    toggleMobileMenu();
  }, [isHashLink, scrollToHash, toggleMobileMenu]);

  // For the connect button (both desktop and mobile)
  const handleConnectClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToHash('#contact');
  }, [scrollToHash]);
  
  const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToHash('#home');
  }, [scrollToHash]);

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '42px',
    '--logo': '36px',
    '--pill-pad-x': '18px',
    '--pill-gap': '3px'
  } as React.CSSProperties;

  if (!mounted) {
    return null;
  }

  const [logoItem, ...menuItems] = items;

  return (
    <div className="fixed top-4 z-[1000] w-full flex justify-center px-4 md:px-10 backdrop-blur-[1px]">
      <div className="w-full md:w-auto">
        <nav
          className={`w-full md:w-auto flex items-center justify-between md:justify-center box-border ${className}`}
          aria-label="Primary"
          style={cssVars}
        >
          {/* Logo */}
          <div className="md:absolute md:left-4">
            <Link
              href='#home'
              onClick={handleHomeClick}
              aria-label="Home"
              ref={logoRef}
              className="inline-flex items-center justify-center overflow-hidden transition-transform hover:scale-105 w-[90px] md:w-[130px] lg:w-[180px]"
            >
              <h2 className="flex items-center gap-0 text-4xl tracking-[0px] md:text-5xl lg:text-6xl lowercase">
                bl
                <span className="text-red-500">ü</span>
                m
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            ref={navItemsRef}
            className="relative items-center rounded-full hidden md:flex mx-auto overflow-hidden"
            style={{
              height: 'var(--nav-h)',
              background: 'var(--base, #000)'
            }}
          >
            <ul
              role="menubar"
              className="list-none flex items-stretch m-0 p-[3px] h-full"
              style={{ gap: 'var(--pill-gap)' }}
            >
              {menuItems.map((item, i) => {
                const isActive = activeHref === item.href;

                const pillStyle: React.CSSProperties = {
                  background: 'var(--pill-bg, #fff)',
                  color: 'var(--pill-text, var(--base, #000))',
                  paddingLeft: 'var(--pill-pad-x)',
                  paddingRight: 'var(--pill-pad-x)'
                };

                const PillContent = (
                  <>
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{
                        background: 'var(--base, #000)',
                        willChange: 'transform'
                      }}
                      aria-hidden="true"
                      ref={el => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative inline-block leading-[1] z-[2]">
                      <span
                        className="pill-label relative z-[2] inline-block leading-[1]"
                        style={{ willChange: 'transform' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                        style={{
                          color: 'var(--hover-text, #fff)',
                          willChange: 'transform, opacity'
                        }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-1.5 h-1.5 rounded-full z-[4]"
                        style={{ background: 'var(--base, #000)' }}
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                const basePillClasses =
                  'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0 transition-all duration-200';

                return (
                  <li key={`${item.href}-${i}`} role="none" className="flex h-full">
                    {isHashLink(item.href) ? (
                      <a
                        role="menuitem"
                        href={item.href}
                        className={basePillClasses}
                        style={pillStyle}
                        aria-label={item.ariaLabel || item.label}
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {PillContent}
                      </a>
                    ) : isInternalLink(item.href) ? (
                      <Link
                        role="menuitem"
                        href={item.href}
                        className={basePillClasses}
                        style={pillStyle}
                        aria-label={item.ariaLabel || item.label}
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                      >
                        {PillContent}
                      </Link>
                    ) : (
                      <a
                        role="menuitem"
                        href={item.href}
                        className={basePillClasses}
                        style={pillStyle}
                        aria-label={item.ariaLabel || item.label}
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                      >
                        {PillContent}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect Button - Desktop */}
          <div className="hidden md:block md:absolute md:right-4">
            <a
              href="#contact"
              ref={connectButtonRef as any}
              onMouseEnter={handleConnectButtonEnter}
              onMouseLeave={handleConnectButtonLeave}
              onClick={handleConnectClick}
              className="rounded-full inline-flex items-center border-2 justify-center font-semibold text-[16px] uppercase tracking-[0.2px] whitespace-nowrap transition-all duration-200"
              style={{
                height: 'var(--nav-h)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
                background: pillColor,
                color: resolvedPillTextColor,
                transform: 'scale(1)',
                borderColor: resolvedPillTextColor
              }}
            >
              {connectButtonLabel}
            </a>
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative transition-all duration-200 hover:scale-105"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--base, #000)'
            }}
          >
            <span
              className="hamburger-line w-4 h-0.5 rounded-full origin-center transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ background: 'var(--pill-bg, #fff)' }}
            />
            <span
              className="hamburger-line w-4 h-0.5 rounded-full origin-center transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ background: 'var(--pill-bg, #fff)' }}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-[calc(4rem+4px)] left-4 right-4 rounded-2xl shadow-lg z-[998] origin-top backdrop-blur-xl"
          style={{
            ...cssVars,
            background: 'var(--base, #f0f0f0)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <ul className="list-none m-0 p-2 flex flex-col gap-1">
            {menuItems.map((item, index) => {
              const defaultStyle: React.CSSProperties = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, #fff)'
              };
              const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'var(--base)';
                e.currentTarget.style.color = 'var(--hover-text, #fff)';
              };
              const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'var(--pill-bg, #fff)';
                e.currentTarget.style.color = 'var(--pill-text, #fff)';
              };

              const linkClasses =
                'block py-3 px-4 text-[16px] font-medium rounded-full transition-all duration-200 text-center';

              return (
                <li key={`${item.href}-${index}`}>
                  {isHashLink(item.href) ? (
                    <a
                      href={item.href}
                      className={linkClasses}
                      style={defaultStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ) : isInternalLink(item.href) ? (
                    <Link
                      href={item.href}
                      className={linkClasses}
                      style={defaultStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={linkClasses}
                      style={defaultStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
            <li key="mobile-connect-button">
              <a
                href="#contact"
                className="block py-3 px-4 text-[16px] font-medium rounded-full transition-all duration-200 text-center"
                style={{
                  background: pillColor,
                  color: resolvedPillTextColor
                }}
                onClick={handleConnectClick}

              >
                {connectButtonLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PillNav;