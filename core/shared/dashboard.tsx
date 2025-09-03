'use client'

import Link from 'next/link'
import type { FC } from 'react'

import { Constants } from '@/core/constants'

interface ComponentProps {
  children: React.ReactNode
}

export const Dashboard: FC<ComponentProps> = ({ children }) => {
  return (
    <main className='grid grid-cols-8'>
      <aside className='col-span-1 border-r border-r-secondary'>
        <header className='sticky top-0 bg-primary border-b border-b-secondary z-10 h-16 px-4 flex items-center'>{Constants.APP_NAME}</header>
        <section className='sticky top-16 flex flex-col gap-2 p-2'>
          {NAV_ITEMS.map((nav) => (
            <Link key={nav.path} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </section>
      </aside>
      <article className='col-span-7'>
        <header className='sticky top-0 bg-primary z-10 h-16 px-4 flex items-center border-b border-b-secondary'></header>
        <section className='flex-1'>{children}</section>
      </article>
    </main>
  )
}

const NAV_ITEMS: Navigation[] = [
  { title: 'Home', path: '/' },
  { title: 'Documentation', path: '/documentation' },
  { title: 'Base UI', path: '/base-ui' },
]
