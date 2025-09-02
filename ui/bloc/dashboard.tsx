'use client'

import { type FC, type ReactNode } from 'react'

import { cx } from '@/helpers/cx'
import Link from 'next/link'

interface ComponentProps {
  children: ReactNode
  layout?: boolean
}

export const Dashboard: FC<ComponentProps> = ({ children, layout = false }) => {
  return (
    <main className='h-screen w-screen min-h-screen max-w-screen flex flex-col'>
      <header className='h-16 px-6 flex items-center'>header</header>
      <article className={cx('flex-1 h-full', layout ? 'flex flex-col' : 'grid grid-cols-8')}>
        <aside className={cx('p-6', layout ? 'w-full' : 'col-span-1 flex flex-col space-y-4')}>
          <Link href='/'>Home</Link>
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/button'>buttons</Link>
        </aside>
        <section className={cx('h-full p-6', layout ? 'flex-1' : 'col-span-7')}>{children}</section>
      </article>
    </main>
  )
}
