'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { heroContent } from '@/lib/site-content';

/**
 * ── HERO WITH IMAGE REVEAL ────────────────────────────────────────────────
 * Scroll-pinned hero: thumbnail flips to fullscreen video on scroll.
 * Edit all text, stats, and media paths in lib/site-content.ts → heroContent.
 * Animation logic below — only touch if changing motion behaviour.
 * ───────────────────────────────────────────────────────────────────────────
 */

/** Tech logos in the stats row — swap icons/links here */
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
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

  const initAnimation = () => {
    if (ctxRef.current) ctxRef.current.revert();

    ctxRef.current = gsap.context(() => {
      const fullScreenImg = fullScreenImgContainerRef.current;
      const smallImg = smallImgInnerRef.current;
      const fullScreenWrap = fullScreenWrapRef.current;
      const hero = heroRef.current;
      if (!fullScreenImg || !smallImg || !fullScreenWrap || !hero) return;

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

      if (topLineFirstRef.current) {
        tl.from(topLineFirstRef.current, { xPercent: -250, ease: 'power1.in', duration: 0.5 }, '0.5');
      }
      if (topLineSecondRef.current) {
        tl.from(topLineSecondRef.current, { xPercent: 250, ease: 'power1.in', duration: 0.5 }, '0.5');
      }
      if (readMoreRef.current) {
        tl.from(readMoreRef.current, { scale: 0.8, opacity: 0, duration: 0.4 }, '0.9');
      }
      if (statsRefs.current.length) {
        tl.from(
          statsRefs.current,
          { y: 200, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power1.in' },
          '0.65'
        );
      }
      if (partnerTitleRef.current) {
        tl.from(partnerTitleRef.current, { y: 200, duration: 0.1, ease: 'power1.in' }, '0.75');
      }
      if (partnerTextRef.current) {
        tl.from(partnerTextRef.current, { y: 200, opacity: 0, duration: 0.1, ease: 'power1.in' }, '0.8');
      }
      if (logoRefs.current.length) {
        tl.from(logoRefs.current, { opacity: 0, x: -20, stagger: 0.07, duration: 0.5 }, '0.9');
      }
      if (futureTextRef.current) {
        tl.from(futureTextRef.current, { y: 200, opacity: 0, duration: 0.5 }, '1.0');
      }
      if (ctaButtonRef.current) {
        tl.from(ctaButtonRef.current, { scale: 0.9, opacity: 0, duration: 0.4 }, '1.05');
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
    <div className="relative">
      {/* ── HERO: light background section (edit copy via heroContent) ── */}
      <div ref={heroRef} className="relative bg-[#fdfff5] min-h-screen overflow-hidden">

          <div className="absolute inset-0 top-1 left-0 z-10">
            <img
              src="/bghero3.png"
              alt="Flowers"
              className="w-full object-cover h-full"
            />
            {/* <div className="absolute inset-0 bg-black/40" /> overlay for readability */}
          </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow flex flex-col justify-center px-6 md:px-12 py-1 md:py-0 mt-20">
            <div className="max-w-7xl mx-auto w-full">

              {/* Headline row + thumbnail (Flip target) */}
              <div className="flex flex-wrap items-center gap-2 md:gap-5 mb-4 md:mb-6 mt-10">
                <h1
                  ref={topLineFirstRef}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold transform scale-y-[1.5] tracking-tight text-black"
                >
                  {heroContent.headlineFirst}
                </h1>

                <div className="relative w-[110px] h-[70px] sm:w-[160px] sm:h-[90px] md:w-[250px] md:h-[130px] mx-1 md:mx-3 rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 hidden sm:block">
                  <div ref={smallImgInnerRef} className="w-full h-full overflow-hidden">
                    <img
                      src={heroContent.thumbnailSrc}
                      alt={heroContent.thumbnailAlt}
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                </div>

                <h1
                  ref={topLineSecondRef}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold transform scale-y-[1.5] mt-10 tracking-tight text-black leading-none"
                >
                  {heroContent.headlineSecond}
                </h1>
              </div>

              {/* Bottom CTA block */}
              <div
                ref={ctaButtonRef}
                className="mt-16 md:mt-20 pb-5 flex flex-col md:flex-row justify-between items-center gap-6 pt-5 md:text-left"
              >
                <div ref={futureTextRef}>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {heroContent.ctaTitle}
                  </h3>
                  <p className="text-gray-500 mt-2">{heroContent.ctaSubtitle}</p>
                </div>
              </div>

              {/* Read-more pill — links to heroContent.readMoreHref */}
              <div className="mt-1">
                <Link
                  href={heroContent.readMoreHref}
                  ref={readMoreRef}
                  className="inline-block bg-black text-white text-sm md:text-base font-medium px-4 py-1.5 rounded-full tracking-wide hover:bg-gray-800 transition-colors"
                >
                  {heroContent.readMoreLabel}
                </Link>
              </div>

              {/* Stats row — edit heroContent.stats in site-content.ts */}
              <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-12 mt-16 md:mt-20 w-screen">
                {heroContent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    ref={addToStatsRefs}
                    className="transition-all hover:-translate-y-1 duration-300"
                  >
                    <div className="text-5xl md:text-6xl font-black text-black">
                      {stat.value}
                      <span className="text-3xl">{stat.suffix}</span>
                    </div>
                    <div className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}

                <div className="col-span-2 my-5 sm:mt-0 md:col-span-1">
                  <div className="text-xl md:text-2xl font-bold text-black border-l-4 border-black pl-4">
                    {heroContent.studioLabel}
                  </div>
                </div>

                {/* Tech logo loop */}
                <div className="text-black col-span-3 relative h-[100px] overflow-hidden">
                  <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#fdfff5"
                    ariaLabel="Technology partners"
                  />
                </div>
              </div>

              {/* Partner section */}
              <div className="grid md:grid-cols-2 gap-5 items-start my-3">
                <div>
                  <h2
                    ref={partnerTitleRef}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight"
                  >
                    {heroContent.partnerTitle}
                  </h2>
                  <p
                    ref={partnerTextRef}
                    className="text-gray-600 text-lg md:text-xl mt-4 leading-relaxed max-w-lg"
                  >
                    {heroContent.partnerCopy}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 md:p-8 rounded-3xl my-3">
                  <div className="text-6xl md:text-7xl font-black text-black">
                    {heroContent.highlightValue}
                    <span className="text-3xl">{heroContent.highlightSuffix}</span>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">
                    {heroContent.highlightLabel}
                  </p>
                  <hr className="my-4 border-gray-200" />
                  <p className="text-gray-700 font-medium">{heroContent.highlightCopy}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen video — Flip animation source (heroContent.videoSrc) */}
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
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center bg-black/20">
            <p className="text-xl md:text-3xl font-medium tracking-wide backdrop-blur-sm px-4 py-2 rounded-full">
              {heroContent.scrollHint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
