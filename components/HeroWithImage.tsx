'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { heroContent } from '@/lib/site-content';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
];

gsap.registerPlugin(ScrollTrigger, Flip);

export default function HeroWithImageReveal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const smallImgInnerRef = useRef<HTMLDivElement>(null);
  const fullScreenImgContainerRef = useRef<HTMLDivElement>(null);
  const fullScreenWrapRef = useRef<HTMLDivElement>(null);

  const topLineFirstRef = useRef<HTMLHeadingElement>(null);
  const topLineSecondRef = useRef<HTMLHeadingElement>(null);
  const readMoreRef = useRef<HTMLAnchorElement>(null);
  const statsRefs = useRef<HTMLDivElement[]>([]);
  const partnerTitleRef = useRef<HTMLHeadingElement>(null);
  const partnerTextRef = useRef<HTMLParagraphElement>(null);
  const logoRefs = useRef<HTMLElement[]>([]);
  const futureTextRef = useRef<HTMLHeadingElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  const resizeTimerRef = useRef<gsap.core.Tween | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  const addToStatsRefs = (el: HTMLDivElement | null) => {
    if (el && !statsRefs.current.includes(el)) statsRefs.current.push(el);
  };

  const addToLogoRefs = (el: HTMLElement | null) => {
    if (el && !logoRefs.current.includes(el)) logoRefs.current.push(el);
  };

  const initAnimation = () => {
    if (ctxRef.current) ctxRef.current.revert();

    ctxRef.current = gsap.context(() => {
      const fullScreenImg = fullScreenImgContainerRef.current;
      const smallImg = smallImgInnerRef.current;
      const fullScreenWrap = fullScreenWrapRef.current;
      const hero = heroRef.current;
      if (!fullScreenImg || !smallImg || !fullScreenWrap || !hero) return;

      // Original Flip: small → fullscreen
      const flipTween = Flip.fit(fullScreenImg, smallImg, {
        duration: 1,
        ease: 'none',
        scale: true,
        absolute: true,
      });
      if (!flipTween || !('pause' in flipTween)) return;
      const flip = (flipTween as gsap.core.Tween).pause(0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
          onLeave: () => {
            gsap.set(fullScreenWrap, { display: 'none' });
            gsap.set(smallImg, { opacity: 1, clearProps: 'opacity' });
          },
          onEnterBack: () => {
            gsap.set(fullScreenWrap, { display: 'block' });
          },
        },
      });

      tl.add(flip.play());

      /* ── ALL TEXT ANIMATIONS END AT TIME = 1 ──
         Recalculated start positions so every tween finishes exactly
         when the video fully expands. */
      const DUR = 1; // flip duration

      // Headlines: slide in from left/right (duration 0.7 → start at 0.3)
      if (topLineFirstRef.current) {
        tl.from(topLineFirstRef.current, { xPercent: -250, ease: 'power1.in', duration: 0.7 }, DUR - 0.7);
      }
      if (topLineSecondRef.current) {
        tl.from(topLineSecondRef.current, { xPercent: 250, ease: 'power1.in', duration: 0.7 }, DUR - 0.7);
      }

      // Stats: rise up (duration 0.35 → start at 0.65)
      if (statsRefs.current.length) {
        tl.from(
          statsRefs.current,
          { y: 200, opacity: 0, stagger: 0.08, duration: 0.35, ease: 'power1.in' },
          DUR - 0.35
        );
      }

      // Partner title & text (both end at 1, same start)
      if (partnerTitleRef.current) {
        tl.from(partnerTitleRef.current, { y: 200, duration: 0.25, ease: 'power1.in' }, DUR - 0.25);
      }
      if (partnerTextRef.current) {
        tl.from(partnerTextRef.current, { y: 200, opacity: 0, duration: 0.2, ease: 'power1.in' }, DUR - 0.2);
      }

      // Logos (duration 0.5 → start at 0.5)
      if (logoRefs.current.length) {
        tl.from(logoRefs.current, { opacity: 0, x: -20, stagger: 0.07, duration: 0.5 }, DUR - 0.5);
      }

      // Future text (subheadline) (duration 0.5 → start at 0.5)
      if (futureTextRef.current) {
        tl.from(futureTextRef.current, { y: 200, opacity: 0, duration: 0.5 }, DUR - 0.5);
      }

      // Read more + CTA buttons (both end at 1)
      if (readMoreRef.current) {
        tl.from(readMoreRef.current, { scale: 0.8, opacity: 0, duration: 0.3 }, DUR - 0.3);
      }
      if (ctaButtonRef.current) {
        tl.from(ctaButtonRef.current, { scale: 0.9, opacity: 0, duration: 0.3 }, DUR - 0.3);
      }
    }, heroRef);

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    resizeTimerRef.current = gsap.delayedCall(0.2, initAnimation).pause();

    const handleResize = () => resizeTimerRef.current?.restart(true);
    window.addEventListener('resize', handleResize);
    initAnimation();

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeTimerRef.current?.kill();
      ctxRef.current?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative font-body" id='home'>
      {/* ── HERO (pinned) ── */}
      <div ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow flex flex-col justify-center px-6 md:px-14 py-10 md:py-0">
            <div className="max-w-7xl mx-auto w-full">

              {/* Eyebrow — cleaned up, Apple‑style */}
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <span className="h-px w-10 bg-black/20 hidden md:block" />
                <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] hidden md:block text-black/50">
                  {heroContent.studioLabel}
                </span>
              </div>

              {/* Headline row + video thumbnail */}
              <div className="flex flex-wrap items-center gap-4 md:gap-8">
                <h1
                  ref={topLineFirstRef}
                  className="font-display  text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight text-black"
                >
                  {heroContent.headlineFirst}
                </h1>

                {/* Video card – now a clean, subtle container */}
                <div className="relative w-[120px] h-[80px] sm:w-[170px] sm:h-[105px] md:w-[240px] md:h-[150px] mx-1 md:mx-2 hidden sm:block">
                  <div className="w-full h-full overflow-hidden border border-black/10 shadow-sm">
                    <div ref={smallImgInnerRef} className="w-full h-full overflow-hidden">
                      <video
                        src={heroContent.thumbnailSrc}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                  <p className="absolute left-0 top-full mt-2 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-black/30 whitespace-nowrap">
                    Motion Study
                  </p>
                </div>

                <h1
                  ref={topLineSecondRef}
                  className="font-display  text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight text-black"
                >
                  {heroContent.headlineSecond}
                </h1>
              </div>

              {/* Subheadline + CTAs */}
              <div
                ref={ctaButtonRef}
                className="mt-12 md:mt-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-t border-black/5 pt-8"
              >
                <div ref={futureTextRef} className="max-w-xl">
                  <p className="text-base md:text-lg leading-relaxed text-black/60">
                    {heroContent.subheadline}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={heroContent.primaryCta.href}
                    ref={readMoreRef}
                    className="inline-block rounded-none bg-black px-6 py-3 text-xs md:text-sm font-mono uppercase tracking-[0.14em] text-white transition-colors hover:bg-gray-800"
                  >
                    {heroContent.primaryCta.label}
                  </Link>
                  <Link
                    href={heroContent.secondaryCta.href}
                    className="inline-block rounded-none border border-black/30 px-6 py-3 text-xs md:text-sm font-mono uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
                  >
                    {heroContent.secondaryCta.label}
                  </Link>
                </div>
              </div>

              {/* Stats — light, minimal lines */}
              <div className="mt-10 md:mt-14 flex flex-wrap md:flex-nowrap gap-x-10 gap-y-6 border-y border-black/5 py-6">
                {heroContent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    ref={addToStatsRefs}
                    className="flex-1 min-w-[110px] border-l border-black/5 pl-5 first:border-l-0 first:pl-0"
                  >
                    <div className="font-mono text-2xl md:text-3xl font-medium text-black">
                      {stat.value}
                      <span className="text-black/30">{stat.suffix}</span>
                    </div>
                    <div className="mt-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner / positioning — cleaner card */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-14 md:mt-20">
                <div>
                  <h2
                    ref={partnerTitleRef}
                    className="font-display  text-3xl md:text-5xl text-black leading-[1.05]"
                  >
                    {heroContent.partnerTitle}
                  </h2>
                  <p
                    ref={partnerTextRef}
                    className="text-black/60 text-base md:text-lg mt-5 leading-relaxed max-w-md"
                  >
                    {heroContent.partnerCopy}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {techLogos.map((logo) => (
                      <a
                        key={logo.title}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={addToLogoRefs}
                        className="flex items-center gap-2 border border-black/10 px-3 py-1.5 text-black/60 hover:text-black hover:border-black/40 transition-colors"
                      >
                        <span className="text-sm">{logo.node}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                          {logo.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Field Note – subtle card */}
                <div className="border border-black/10 p-7 md:p-9">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Field Note
                  </div>
                  <div className="font-display text-6xl md:text-7xl text-black mt-3">
                    {heroContent.highlightValue}
                    <span className="text-2xl text-black/30">{heroContent.highlightSuffix}</span>
                  </div>
                  <p className="text-black/40 text-xs uppercase tracking-[0.14em] mt-2 font-mono">
                    {heroContent.highlightLabel}
                  </p>
                  <div className="h-px bg-black/5 my-5" />
                  <p className="text-black/60 leading-relaxed">{heroContent.highlightCopy}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen video – same Flip target, now with a cleaner overlay */}
      <div
        ref={fullScreenWrapRef}
        className="full-screen fixed inset-0 w-full h-screen z-20 pointer-events-none"
      >
        <div
          ref={fullScreenImgContainerRef}
          className="img-container w-full h-full overflow-hidden relative bg-black"
        >
          <video
            src={heroContent.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Minimal gradient overlay for subtle depth */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)' }}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-10 text-white text-center">
            <span className="w-px h-6 bg-white/40 mb-3" />
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em]">
              {heroContent.scrollHint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}