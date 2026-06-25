'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import Loader from './Loader';

// Register GSAP plugin
gsap.registerPlugin(MorphSVGPlugin);

interface PageLoaderProps {
  children?: React.ReactNode;
  onLoadingComplete?: () => void;
}

export default function PageLoader({ children, onLoadingComplete }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const maskPathRef = useRef<SVGPathElement>(null);
  const startShapeRef = useRef<SVGPathElement>(null);
  const endShapeRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Ensure all refs are available
    if (!maskPathRef.current || !startShapeRef.current || !endShapeRef.current) return;

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        onLoadingComplete?.();
      },
    });

    timelineRef.current = tl;

    // First morph: from initial rectangle to start shape (curved bottom)
    tl.to(maskPathRef.current, {
      duration: 0.4,
      morphSVG: startShapeRef.current,
      ease: 'power1.in',
    }, 0.7);

    // Second morph: from start shape to end shape (thin line)
    tl.to(maskPathRef.current, {
      duration: 1,
      morphSVG: endShapeRef.current,
      ease: 'power1.out',
    });

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [onLoadingComplete]);

  // If loading is complete, only render children
  if (!isLoading) {
    return <>{children}</>;
  }

  // Render loader overlay
  return (
    <>
      {/* Loader overlay */}
      <div
        className="fixed inset-0 z-[99] flex items-center justify-center bg-[#0e100f]"
        style={{
          clipPath: 'url(#page-loader__clip-path)',
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#fffce1] text-4xl md:text-6xl font-medium tracking-wide animate-pulse">
            <Loader /> 
          </div>
        </div>

        {/* SVG Mask Definition */}
        <svg
          className="absolute inset-0 h-full w-full"
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath
            id="page-loader__clip-path"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.000694444444444,0.0009765625)"
          >
            {/* Initial mask path (full screen rectangle) */}
            <path
              ref={maskPathRef}
              id="maskpath"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1440.02,0H.02l-.02,1024c22.06,0,447.62,0,720.02,0s691.96,0,719.98,0l.02-1024Z"
              fill="#D9D9D9"
            />
          </clipPath>

          {/* Morph target shape 1 - Curved bottom */}
          <path
            ref={startShapeRef}
            className="hidden"
            id="maskMorphShapeStart"
            d="M1440.02,0H.02l-.02,1024c41.36-101.95,447.62-246,720.02-246s678.62,144.05,719.98,246l.02-1024Z"
            fill="#D9D9D9"
          />

          {/* Morph target shape 2 - Thin line */}
          <path
            ref={endShapeRef}
            className="hidden"
            id="maskMorphShapeEnd"
            d="M0 1H1440V2H0V1Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>

      {/* Hide children content while loader is visible */}
      <div style={{ display: 'none' }}>{children}</div>
    </>
  );
}