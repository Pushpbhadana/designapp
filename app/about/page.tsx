"use client"
import BubbleMenu from '@/components/BubbleMenu';
import TextCursor from '@/components/TextCursor';

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

export default function About() {
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

      <div className='
        min-h-screen
        text-2xl sm:text-4xl md:text-7xl 
        text-gray-300 
        leading-relaxed sm:leading-17 
        tracking-tighter 
        m-4 sm:m-5 
        flex flex-col 
        justify-around 
        gap-6 sm:gap-10
        pt-24
      '>
        <div className="px-2 sm:px-0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m a <span className='text-gray-600'>Pushp Bhadana</span> digital designer & Front-End developer working at the intersection of visual design, UX, and motion. I help brands and creative teams craft expressive websites that feel bold, intuitive, and built to stand out.
        </div>

        <div className='
          flex justify-start 
          flex-col 
          ms-0 sm:ms-20 md:ms-40 
          text-base sm:text-2xl md:text-3xl 
          tracking-tight 
          gap-3
        '>
          <img 
            src="https://cdn.prod.website-files.com/691b49cf9e65846bca53c594/692ad01f1921cfb2fab45e91_about-pf.avif" 
            alt="avatar"  
            className='w-32 sm:w-48 md:w-72 lg:w-[300px] h-auto rounded-lg'
          />
          <div>
            Pushpraj Bhadana [ 24 ]
            <br />
            Faridabad, India
          </div>
        </div>

        <div className='
          flex justify-end 
          me-0 sm:me-10 md:me-20 lg:me-40 
          text-base sm:text-2xl md:text-3xl 
          tracking-tight
        '>
          <video 
            src="https://vz-709d76e6-c36.b-cdn.net/643b8d32-4e9f-4056-837d-846757a0e9a1/playlist.m3u8" 
            autoPlay 
            loop 
            muted 
            className='w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:w-[900px] rounded-lg'
          />
        </div>

        <div className='
          flex justify-start 
          flex-col 
          ms-0 sm:ms-20 md:ms-40 
          text-base sm:text-2xl md:text-3xl 
          tracking-tight
        '>
          <img 
            src="https://cdn.prod.website-files.com/691b49cf9e65846bca53c594/692ad01f1921cfb2fab45e91_about-pf.avif" 
            alt="avatar"  
            className='w-full max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:w-[500px] h-auto rounded-lg'
          />
        </div>
      </div>
    </>
  );
}