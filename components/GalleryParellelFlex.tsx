'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { gallerySection } from '@/lib/site-content';

gsap.registerPlugin(ScrollTrigger, Flip);

export default function GalleryParallaxFlip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const fullSizeImgRef = useRef<HTMLImageElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const floatWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop layout: side‑by‑side columns with parallax
    mm.add('(min-width: 768px)', () => {
      gsap.set(col2Ref.current, { clearProps: 'all' }); // reset any mobile styles
      gsap.set([col1Ref.current, col3Ref.current], { clearProps: 'all' });
      gsap.set(containerRef.current, { height: '120vw' });

      gsap.set(col2Ref.current, { yPercent: -100 });

      gsap.to([col1Ref.current, col3Ref.current], {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(col2Ref.current, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Mobile layout: stacked columns, each moving at a different speed
    mm.add('(max-width: 767px)', () => {
      // Ensure all GSAP inline styles are cleared
      gsap.set([col1Ref.current, col2Ref.current, col3Ref.current], { clearProps: 'all' });

      // Set container height to 3x the viewport height so the columns have room to scroll
      gsap.set(containerRef.current, { height: '300vh' });

      // Position the columns absolutely one on top of the other, full width
      gsap.set(col1Ref.current, { position: 'absolute', top: 0, left: 0, width: '100%' });
      gsap.set(col2Ref.current, { position: 'absolute', top: 0, left: 0, width: '100%' });
      gsap.set(col3Ref.current, { position: 'absolute', top: 0, left: 0, width: '100%' });

      // Initial vertical offsets so they start at different places
      gsap.set(col1Ref.current, { yPercent: 0 });
      gsap.set(col2Ref.current, { yPercent: 50 });
      gsap.set(col3Ref.current, { yPercent: 100 });

      // Animate each column at a different speed while scrolling
      gsap.to(col1Ref.current, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      gsap.to(col2Ref.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      gsap.to(col3Ref.current, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    // ---- FLIP animation (unchanged) ----
    const thumbnail = thumbnailRef.current;
    const fullSize = fullSizeImgRef.current;
    const floatWrap = floatWrapRef.current;

    if (!thumbnail || !fullSize || !floatWrap) return;

    const handleThumbnailClick = () => {
      const state = Flip.getState([fullSize, thumbnail], {
        props: 'borderRadius,padding,maxWidth,maxHeight',
      });
      fullSize.style.display = 'block';
      floatWrap.style.pointerEvents = 'auto';
      Flip.from(state, {
        targets: fullSize,
        duration: 1,
        ease: 'sine.inOut',
      });
    };

    const handleFullSizeClick = () => {
      floatWrap.style.pointerEvents = 'none';
      Flip.fit(fullSize, thumbnail, {
        duration: 1,
        props: 'padding,borderRadius,maxWidth,maxHeight',
        ease: 'sine.inOut',
        onComplete: () => {
          gsap.set(fullSize, { clearProps: 'transform' });
          fullSize.style.cssText = 'display: none';
        },
      });
    };

    thumbnail.addEventListener('click', handleThumbnailClick);
    fullSize.addEventListener('click', handleFullSizeClick);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      thumbnail.removeEventListener('click', handleThumbnailClick);
      fullSize.removeEventListener('click', handleFullSizeClick);
      mm.revert();
    };
  }, []);

  return (
    <>
      <div className="w-full h-0 bg-[#fdfff5]" />

      <section id="work" className="py-5 md:py-28 bg-[#fdfff5]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-black">
            {gallerySection.title}
          </h2>
          <div className="w-30 h-px bg-black/20 mx-auto" />
          <p className="text-gray-600 text-lg mt-3">
            {gallerySection.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery container */}
      <div
        ref={containerRef}
        className="w-full px-8 mx-auto bg-[#fdfff5] overflow-hidden relative"
      >
        {/* On mobile the columns are stacked absolutely, on desktop they are flex row */}
        <div className="flex flex-row md:relative">
          {/* Column 1 */}
          <div ref={col1Ref} className="will-change-transform flex-1 md:relative">
            <div className="imgSel">
              <img src="/project1.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img
                ref={thumbnailRef}
                className="thumbImg w-full p-1 rounded-[6%] cursor-pointer"
                data-flip-id="img05"
                src="/project2.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="imgSel">
              <img src="/project7.webp" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project4.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project5.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project6.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project7.webp" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project13.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project8.webp" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project3.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="will-change-transform flex-1 md:relative hidden md:block">
            {/* same images as before */}
            <div className="imgSel">
              <img src="/project5.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project6.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project1.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project1.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project2.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project1.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project9.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project10.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project14.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project8.webp" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
          </div>

          {/* Column 3 */}
          <div ref={col3Ref} className="will-change-transform flex-1 md:relative">
            <div className="imgSel">
              <img src="/project4.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project6.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project3.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project13.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project11.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project12.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project3.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
            <div className="imgSel">
              <img src="/project5.jpg" alt="gallery" className="w-full p-1 rounded-[6%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[0px] bg-[#fdfff5]" />

      {/* Full‑size overlay (unchanged) */}
      <div
        ref={floatWrapRef}
        className="fixed top-0 left-0 w-full h-screen bg-transparent pointer-events-none z-[999]"
      >
        <img
          ref={fullSizeImgRef}
          className="largeImg hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[480px] h-auto cursor-pointer"
          data-flip-id="img05"
          src="https://assets.codepen.io/181080/02-lrg.jpg"
          alt="full size"
        />
      </div>
    </>
  );
}