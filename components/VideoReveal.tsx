import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface VideoScrollAnimationProps {
  // Video properties
  videoSrc: string;
  alt?: string;
  
  // Video options
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;
  
  // Animation properties
  initialWidth?: string;
  expandedWidth?: string;
  
  // Container properties
  className?: string;
  containerClassName?: string;
  
  // Section properties
  sectionClassName?: string;
  sectionBackground?: string;
  
  // Animation triggers
  startTrigger?: string;
  endTrigger?: string;
  scrub?: boolean | number;
}

const VideoScrollAnimation: React.FC<VideoScrollAnimationProps> = ({
  videoSrc,
  alt = 'Animated video',
  muted = true,
  loop = true,
  autoPlay = true,
  playsInline = true,
  initialWidth = '60vw',
  expandedWidth = '100vw',
  className = '',
  containerClassName = '',
  sectionClassName = '',
  sectionBackground = '',
  startTrigger = 'top 80%',
  endTrigger = 'bottom bottom',
  scrub = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        width: expandedWidth,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: startTrigger,
          end: endTrigger,
          scrub: scrub,
          markers: false, // Set to true for debugging
        },
      });
    });

    return () => ctx.revert();
  }, [expandedWidth, startTrigger, endTrigger, scrub]);

  return (
    <section
      ref={sectionRef}
      className={`${sectionBackground} ${sectionClassName}`}
    >
      <div className={`flex justify-center items-center ${containerClassName}`}>
        <div
          ref={containerRef}
          className={`relative z-0 h-screen overflow-hidden rounded-2xl shadow-lg ${className}`}
          style={{
            width: initialWidth,
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            muted={muted}
            loop={loop}
            autoPlay={autoPlay}
            playsInline={playsInline}
            controls={false}
            aria-label={alt}
            onError={(e) => {
              console.error('Video failed to load:', e);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoScrollAnimation;