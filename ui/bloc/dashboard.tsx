'use client'

import { Constants } from '@/core/constants'
import Link from 'next/link'
import type { FC } from 'react'

interface ComponentProps {
  children: React.ReactNode
}

export const Dashboard: FC<ComponentProps> = ({ children }) => {
  return (
    <main className='h-screen min-h-screen w-full flex flex-row'>
      <aside className='h-full w-64 border-r border-r-secondary'>
        <header className='h-16 px-4 flex items-center'>{Constants.APP_NAME}</header>
        <section className='flex flex-col gap-2 p-2'>
          {NAV_ITEMS.map((nav) => (
            <Link key={nav.path} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </section>
      </aside>
      <article className='h-full flex-1 flex flex-col'>
        <header className='h-16 px-4 flex items-center border-b border-b-secondary'></header>
        <section className='flex-1 overflow-y-auto'>{children}</section>
      </article>
    </main>
  )
}

const NAV_ITEMS: Navigation[] = [
  { title: 'Home', path: '/' },
  { title: 'Documentation', path: '/documentation' },
  { title: 'Base UI', path: '/base-ui' },
]
