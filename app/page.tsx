'use client'

import Image from 'next/image'
import type { JSX } from 'react'

import { useTheme } from '@/providers/theme-provider'

export default function Home(): JSX.Element {
  const { theme } = useTheme()
  return (
    <main className='w-full max-w-4/5 flex flex-col p-4 mx-auto space-y-6'>
      {/* Header for base components */}
      <h4 className='mt-0'>Base components</h4>
      <p className='w-full max-w-3xl'>
        A React is the world’s largest collection of open-source React components built with Tailwind CSS and React Aria. Everything you need to design and
        develop modern, beautiful interfaces and websites—fast. Just copy, paste, and build.
      </p>
      {/* list of base components */}
      <section className='w-full grid grid-cols-5 gap-4'>
        {COMPONENT_ITEMS.map((elem, index) => (
          <div key={index} className='bg-primary border border-secondary rounded-lg items-center justify-center h-42 px-1 py-1.25 cursor-pointer'>
            <div className='relative w-full h-3/4 border bg-secondary border-secondary overflow-hidden rounded-md'>
              {elem.image && (
                <Image
                  fill
                  loading='lazy'
                  alt={elem.title || 'preview'}
                  src={theme === 'dark-mode' ? elem.image.replace('.webp', '-1.webp') : elem.image}
                  className='object-cover object-center transition-transform duration-300 hover:scale-110'
                  style={{ margin: '0px 0px', borderRadius: '0px' }}
                />
              )}
            </div>
            <div className='p-1 capitalize'>{elem.title}</div>
          </div>
        ))}
      </section>
    </main>
  )
}

const COMPONENT_ITEMS: Navigation[] = [
  { title: 'featured icons', path: '/base-ui/featured-icons', image: '/assets/images/featured-icons.webp' },
  { title: 'button', path: '/base-ui/button', image: '/assets/images/buttons.webp' },
  { title: 'social buttons', path: '/base-ui/social-buttons', image: '/assets/images/social-buttons.webp' },
  { title: 'mobile app store buttons', path: '/base-ui/mobile-app-store-buttons', image: '/assets/images/mobile-app-store-buttons.webp' },
  { title: 'utility buttons', path: '/base-ui/utility-buttons', image: '/assets/images/utility-buttons.webp' },
  { title: 'button groups', path: '/base-ui/button-groups', image: '/assets/images/button-groups.webp' },
  { title: 'badges', path: '/base-ui/badges', image: '/assets/images/badges.webp' },
  { title: 'badge groups', path: '/base-ui/badge-groups', image: '/assets/images/badge-groups.webp' },
  { title: 'tags', path: '/base-ui/tags', image: '/assets/images/tags.webp' },
  { title: 'dropdowns', path: '/base-ui/dropdowns', image: '/assets/images/dropdowns.webp' },
  { title: 'select', path: '/base-ui/select', image: '/assets/images/select.webp' },
  { title: 'input', path: '/base-ui/input', image: '/assets/images/inputs.webp' },
  { title: 'textareas', path: '/base-ui/textareas', image: '/assets/images/textarea.webp' },
  { title: 'verification code inputs', path: '/base-ui/verification-code-inputs', image: '/assets/images/verification-code-inputs.webp' },
  { title: 'rich text editors', path: '/base-ui/rich-text-editors', image: '/assets/images/text-editors.webp' },
  { title: 'toggle', path: '/base-ui/toggle', image: '/assets/images/toggles.webp' },
  { title: 'checkbox', path: '/base-ui/checkbox', image: '/assets/images/checkboxes.webp' },
  { title: 'radio buttons', path: '/base-ui/radio', image: '/assets/images/radio-buttons.webp' },
  { title: 'radio groups', path: '/base-ui/radio-groups', image: '/assets/images/radio-groups.webp' },
  { title: 'avatars', path: '/base-ui/avatars', image: '/assets/images/avatars.webp' },
  { title: 'tooltips', path: '/base-ui/tooltips', image: '/assets/images/tooltips.webp' },
  { title: 'progress indicators', path: '/base-ui/progress-indicators', image: '/assets/images/progress-indicators.webp' },
  { title: 'slider', path: '/base-ui/slider', image: '/assets/images/sliders.webp' },
  { title: 'video players', path: '/base-ui/video-players', image: '/assets/images/video-players.webp' },
  { title: 'credit cards', path: '/base-ui/credit-cards', image: '/assets/images/credit-cards.webp' },
  { title: 'qr codes', path: '/base-ui/qr-codes', image: '/assets/images/qr-code.webp' },
  { title: 'illustrations', path: '/base-ui/illustrations', image: '/assets/images/illustrations.webp' },
  { title: 'rating badge and stars', path: '/base-ui/rating-badge-and-stars', image: '/assets/images/rating-badge-and-stars.webp' },
]
