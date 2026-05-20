"use client"
import { useState } from 'react';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          mb-8
        '>
          Get in Touch
        </h1>

        <p className='text-xl text-gray-400 mb-16 max-w-2xl'>
          Have a project in mind? Let's create something amazing together.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-400 mb-2 text-lg'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='
                    w-full
                    bg-gray-900
                    border
                    border-gray-800
                    rounded-lg
                    px-6
                    py-4
                    text-white
                    placeholder-gray-600
                    focus:outline-none
                    focus:border-gray-600
                    transition-colors
                    duration-300
                  '
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-400 mb-2 text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='
                    w-full
                    bg-gray-900
                    border
                    border-gray-800
                    rounded-lg
                    px-6
                    py-4
                    text-white
                    placeholder-gray-600
                    focus:outline-none
                    focus:border-gray-600
                    transition-colors
                    duration-300
                  '
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-400 mb-2 text-lg'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='
                    w-full
                    bg-gray-900
                    border
                    border-gray-800
                    rounded-lg
                    px-6
                    py-4
                    text-white
                    placeholder-gray-600
                    focus:outline-none
                    focus:border-gray-600
                    transition-colors
                    duration-300
                    resize-none
                  '
                  placeholder='Tell me about your project...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='
                  w-full
                  bg-white
                  text-black
                  font-bold
                  rounded-lg
                  px-8
                  py-4
                  hover:bg-gray-200
                  transition-colors
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                '
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className='text-green-500 text-lg text-center'>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl text-white font-bold mb-4'>
                Email
              </h3>
              <a
                href='mailto:hello@pushpraj.com'
                className='text-xl text-gray-400 hover:text-white transition-colors duration-300'
              >
                hello@pushpraj.com
              </a>
            </div>

            <div>
              <h3 className='text-2xl text-white font-bold mb-4'>
                Location
              </h3>
              <p className='text-xl text-gray-400'>
                Faridabad, India
              </p>
            </div>

            <div>
              <h3 className='text-2xl text-white font-bold mb-4'>
                Social
              </h3>
              <div className='space-y-3'>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-xl text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Twitter
                </a>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-xl text-gray-400 hover:text-white transition-colors duration-300'
                >
                  LinkedIn
                </a>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-xl text-gray-400 hover:text-white transition-colors duration-300'
                >
                  GitHub
                </a>
                <a
                  href='https://dribbble.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-xl text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
