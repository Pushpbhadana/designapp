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

const blogPosts = [
  {
    title: 'The Future of Web Design',
    excerpt: 'Exploring emerging trends and technologies shaping the future of digital experiences',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Design',
    color: '#3b82f6'
  },
  {
    title: 'Mastering CSS Grid',
    excerpt: 'A comprehensive guide to building complex layouts with CSS Grid',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Development',
    color: '#10b981'
  },
  {
    title: 'Animation Best Practices',
    excerpt: 'Creating smooth, performant animations that enhance user experience',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Motion',
    color: '#f59e0b'
  },
  {
    title: 'Building Accessible Interfaces',
    excerpt: 'Practical tips for creating inclusive web experiences for all users',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Accessibility',
    color: '#ef4444'
  },
  {
    title: 'The Art of Micro-interactions',
    excerpt: 'How small details make a big impact on user engagement',
    date: '2023-12-20',
    readTime: '4 min read',
    category: 'UX',
    color: '#8b5cf6'
  },
  {
    title: 'Performance Optimization',
    excerpt: 'Techniques to make your web applications lightning fast',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Development',
    color: '#ec4899'
  }
];

export default function Blog() {
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
          Thoughts & Ideas
        </h1>

        <div className='space-y-8'>
          {blogPosts.map((post, index) => (
            <article
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
                hover:scale-[1.02]
                hover:shadow-2xl
                cursor-pointer
                border
                border-gray-800
                hover:border-gray-700
              '
            >
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300'
                style={{ backgroundColor: post.color }}
              />
              
              <div className='relative z-10'>
                <div className='flex items-center gap-4 mb-4'>
                  <span
                    className='
                      px-3 py-1
                      text-sm
                      rounded-full
                      text-white
                      font-medium
                    '
                    style={{ backgroundColor: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className='text-gray-500 text-sm'>
                    {post.date}
                  </span>
                  <span className='text-gray-500 text-sm'>
                    •
                  </span>
                  <span className='text-gray-500 text-sm'>
                    {post.readTime}
                  </span>
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
                  {post.title}
                </h2>
                
                <p className='
                  text-lg 
                  text-gray-400 
                  group-hover:text-gray-300
                  transition-colors
                  duration-300
                '>
                  {post.excerpt}
                </p>
              </div>

              <div
                className='
                  absolute
                  bottom-8
                  right-8
                  w-10
                  h-10
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
                style={{ backgroundColor: post.color }}
              >
                <span className='text-white text-lg'>→</span>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-500 text-lg'>
            More articles coming soon...
          </p>
        </div>
      </div>
    </>
  );
}
