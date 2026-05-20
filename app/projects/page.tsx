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

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce experience with seamless checkout and product discovery',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#3b82f6'
  },
  {
    title: 'Portfolio Website',
    description: 'Creative portfolio showcasing design and development work',
    tags: ['TypeScript', 'GSAP', 'Framer Motion'],
    color: '#10b981'
  },
  {
    title: 'Dashboard Application',
    description: 'Analytics dashboard with real-time data visualization',
    tags: ['React', 'D3.js', 'Node.js'],
    color: '#f59e0b'
  },
  {
    title: 'Mobile App UI',
    description: 'Cross-platform mobile application with intuitive user experience',
    tags: ['React Native', 'Expo', 'Firebase'],
    color: '#ef4444'
  },
  {
    title: 'Brand Identity System',
    description: 'Complete brand identity including logo, typography, and guidelines',
    tags: ['Figma', 'Illustrator', 'Design System'],
    color: '#8b5cf6'
  },
  {
    title: 'SaaS Landing Page',
    description: 'High-converting landing page for B2B software product',
    tags: ['Next.js', 'Webflow', 'Copywriting'],
    color: '#ec4899'
  }
];

export default function Projects() {
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

      <div className='min-h-screen pt-24 px-4 sm:px-8 md:px-16'>
        <h1 className='
          text-5xl sm:text-7xl md:text-9xl 
          text-gray-300 
          font-bold 
          tracking-tighter 
          mb-16
        '>
          Selected Work
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='
                group
                relative
                bg-gray-900
                rounded-2xl
                p-8
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
                cursor-pointer
                border
                border-gray-800
                hover:border-gray-700
              '
              style={{
                minHeight: '300px'
              }}
            >
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'
                style={{ backgroundColor: project.color }}
              />
              
              <div className='relative z-10'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='
                        px-3 py-1
                        text-sm
                        rounded-full
                        bg-gray-800
                        text-gray-400
                        group-hover:text-white
                        transition-colors
                        duration-300
                      '
                      style={{ 
                        borderColor: project.color,
                        borderWidth: '1px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className='
                  text-3xl sm:text-4xl 
                  text-white 
                  font-bold 
                  mb-4
                  group-hover:translate-x-2
                  transition-transform
                  duration-300
                '>
                  {project.title}
                </h2>
                
                <p className='
                  text-lg 
                  text-gray-400 
                  group-hover:text-gray-300
                  transition-colors
                  duration-300
                '>
                  {project.description}
                </p>
              </div>

              <div
                className='
                  absolute
                  bottom-4
                  right-4
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  transform
                  group-hover:scale-100
                  scale-0
                '
                style={{ backgroundColor: project.color }}
              >
                <span className='text-white text-xl'>→</span>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-500 text-lg'>
            More projects coming soon...
          </p>
        </div>
      </div>
    </>
  );
}
