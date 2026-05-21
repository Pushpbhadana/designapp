"use client"
import BlurText from '@/components/BlurText';
import BubbleMenu from '@/components/BubbleMenu';
import MagicRings from '@/components/MagicRings';
import SideSlider from '@/components/SideSlider';
import TextCursor from '@/components/TextCursor';
import VideoReveal from '@/components/VideoReveal';

const items = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '/blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function Home() {
  return (
    <>
      <TextCursor
        text="😶"
        spacing={80}
        followMouseDirection
        randomFloat
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />

      <BubbleMenu
        className='sticky top-0'
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      {/* Hero Section - Responsive */}
      <div className='
        text-gray-400
          flex flex-col items-center 
          py-10 md:py-22 
          text-[clamp(2rem,5vw+3vh,5rem)] md:text-[clamp(2.5rem,7vw+5vh,7rem)] 
          leading-[1.1] md:leading-[0.8] 
          tracking-tighter md:tracking-tighter
          cursor-default
          text-center
          px-4
          z-5
          relative
'>
        {/* MagicRings as background */}
        <div className='absolute inset-0 z-0'>
          <MagicRings
            color="#fcfcfc"
            colorTwo="#6babb1"
            ringCount={10}
            speed={1}
            attenuation={12.5}
            lineThickness={1}
            baseRadius={1}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={2}
            noiseAmount={0}
            rotation={0}
            ringGap={1.5}
            fadeIn={1}
            fadeOut={2}
            followMouse
            mouseInfluence={0.2}
            hoverScale={1.45}
            parallax={0.06}
            clickBurst
          />
        </div>

        {/* Text content - appears above MagicRings */}
        <div className='relative z-10'>
          I build sites
          <div className='text-gray-100 text-[clamp(3rem,8vw+3vh,8rem)] md:text-[clamp(4rem,11vw+5vh,12rem)] z-10 tracking-tighter mt-2'>
          standOUT
          </div>
        </div>
      </div>

      {/* Video Reveal Component */}
      <VideoReveal
        videoSrc="https://vz-709d76e6-c36.b-cdn.net/643b8d32-4e9f-4056-837d-846757a0e9a1/playlist.m3u8"
        alt='novideo'
      />

      {/* About Section - Responsive */}
      <div className='
        text-xl sm:text-4xl md:text-6xl 
        text-gray-300 
        leading-relaxed sm:leading-17 
        tracking-tighter 
        m-4 sm:m-5 
        min-h-screen 
        flex flex-col 
        justify-around 
        gap-6 sm:gap-10
      '>
        {/* Bio Text */}

        <BlurText
          text="I&apos;m a Pushp Bhadana digital designer & Front-End developer working at the intersection of visual design, UX, and motion. I help brands and creative teams craft expressive websites that feel bold, intuitive, and built to stand out."
          delay={80}
          animateBy="words"
          direction="top"
          className='mt-10 md:mt-25'
        />


        {/* Info Card - Mobile First */}
        <div className='
          flex justify-end 
          me-0 sm:me-20 md:me-40 
          text-base sm:text-2xl md:text-3xl 
          tracking-tight 
          gap-2
        '>
          <div>
            <img
              src="/my.jpeg"
              alt="Pushpraj Bhadana avatar"
              className='w-100 md:w-72 lg:w-[300px] h-auto rounded-lg'
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/placeholder-avatar.png';
              }}
            />
            <BlurText
              text="Pushpraj Bhadana [ 24 ]"
              delay={80}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="Faridabad, India"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>
        </div>

        {/* Video Section - Responsive */}
        <div className='
          flex justify-start 
          ms-0 sm:ms-10 md:ms-20 lg:ms-40 
          text-base sm:text-2xl md:text-3xl 
          tracking-tight
        '>
          <video
            src="https://vz-709d76e6-c36.b-cdn.net/643b8d32-4e9f-4056-837d-846757a0e9a1/playlist.m3u8"
            autoPlay
            loop
            muted
            playsInline
            className='w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:w-[900px] rounded-lg'
            onError={(e) => {
              console.error('Video failed to load:', e);
            }}
          />
        </div>
      </div>

      {/* Side Slider */}
        <SideSlider />
      
    </>
  );
}