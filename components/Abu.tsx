'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import SplitText from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(Observer, SplitText);

const AnimatedSections = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const outerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const splitHeadingsRef = useRef<SplitText[]>([]);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);

  const sections = [
    { bg: "url('https://assets.codepen.io/16327/site-landscape-1.jpg')", heading: "Scroll down" },
    { bg: "url('https://assets.codepen.io/16327/site-landscape-2.jpg')", heading: "Animated with GSAP" },
    { bg: "url('https://assets.codepen.io/16327/site-landscape-3.jpg')", heading: "GreenSock" },
    { bg: "url('https://assets.codepen.io/16327/site-landscape-4.jpg')", heading: "Animation platform" },
    { bg: "url('https://assets.codepen.io/16327/site-landscape-5.jpg')", heading: "Keep scrolling" },
  ];

  const wrap = (value: number, min: number, max: number) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  };

  const gotoSection = (index: number, direction: number) => {
    const wrappedIndex = wrap(index, 0, sections.length);
    animatingRef.current = true;
    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;
    
    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => { animatingRef.current = false; }
    });

    if (currentIndexRef.current >= 0) {
      gsap.set(sectionsRef.current[currentIndexRef.current], { zIndex: 0 });
      tl.to(imagesRef.current[currentIndexRef.current], { yPercent: -15 * dFactor })
        .set(sectionsRef.current[currentIndexRef.current], { autoAlpha: 0 });
    }

    gsap.set(sectionsRef.current[wrappedIndex], { autoAlpha: 1, zIndex: 1 });
    
    tl.fromTo([outerWrappersRef.current[wrappedIndex], innerWrappersRef.current[wrappedIndex]], {
      yPercent: (i: number) => i ? -100 * dFactor : 100 * dFactor
    }, {
      yPercent: 0
    }, 0)
    .fromTo(imagesRef.current[wrappedIndex], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
    .fromTo(splitHeadingsRef.current[wrappedIndex].chars, {
      autoAlpha: 0,
      yPercent: 150 * dFactor
    }, {
      autoAlpha: 1,
      yPercent: 0,
      duration: 1,
      ease: "power2",
      stagger: {
        each: 0.02,
        from: "random"
      }
    }, 0.2);

    currentIndexRef.current = wrappedIndex;
  };

  useEffect(() => {
    // Initialize all refs
    sectionsRef.current = sectionsRef.current.slice(0, sections.length);
    imagesRef.current = imagesRef.current.slice(0, sections.length);
    headingsRef.current = headingsRef.current.slice(0, sections.length);
    outerWrappersRef.current = outerWrappersRef.current.slice(0, sections.length);
    innerWrappersRef.current = innerWrappersRef.current.slice(0, sections.length);

    // Initialize SplitText for each heading
    splitHeadingsRef.current = headingsRef.current.map(heading => 
      heading ? new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" }) : null
    ).filter((split): split is SplitText => split !== null);

    // Set initial positions
    gsap.set(outerWrappersRef.current, { yPercent: 100 });
    gsap.set(innerWrappersRef.current, { yPercent: -100 });

    // Create observer for scroll/touch events
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
      onUp: () => !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    // Start with first section
    gotoSection(0, 1);

    // Cleanup
    return () => {
      observer.kill();
      splitHeadingsRef.current.forEach(split => split.revert());
    };
  }, []);

  return (
    <>
      <header className="fixed flex items-center justify-between px-[5%] w-full z-[3] h-[7em] text-[clamp(0.66rem,2vw,1rem)] tracking-[0.5em] text-white">
        <div>Animated Sections</div>
        <div>
          <a 
            href="https://codepen.io/BrianCross/pen/PoWapLP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            Original Inspiration
          </a>
        </div>
      </header>

      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={el => { sectionsRef.current[idx] = el; }}
          className="h-full w-full top-0 fixed invisible"
        >
          <div className="outer w-full h-full overflow-y-hidden" ref={el => { outerWrappersRef.current[idx] = el; }}>
            <div className="inner w-full h-full overflow-y-hidden" ref={el => { innerWrappersRef.current[idx] = el; }}>
              <div
                ref={el => { imagesRef.current[idx] = el; }}
                className="bg absolute h-full w-full top-0 flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), ${section.bg}`,
                  backgroundPosition: idx === 4 ? '50% 45%' : 'center'
                }}
              >
                <h2
                  ref={el => { headingsRef.current[idx] = el; }}
                  className="text-[clamp(1rem,6vw,10rem)] font-semibold leading-[1.2] text-center w-[90vw] max-w-[1200px] text-white z-[999]"
                >
                  {section.heading}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}

      <style jsx>{`
        .clip-text {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default AnimatedSections;