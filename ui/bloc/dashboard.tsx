'use client'

import Link from 'next/link'
import { type FC, type ReactNode } from 'react'

import { cx } from '@/helpers/cx'
import { CONSTANTS } from '@/core/constants'

interface ComponentProps {
  children: ReactNode
  layout?: boolean
}

export const Dashboard: FC<ComponentProps> = ({ children, layout = false }) => {
  return (
    <main className='h-screen w-full min-h-screen flex flex-col'>
      <header className='h-16 px-4 flex items-center border-b border-b-secondary'>header</header>

      <article className={cx('flex-1 h-full flex', layout ? 'flex-col' : 'flex-row')}>
        <aside className={cx('flex gap-3 p-4  border-r border-r-secondary', layout ? 'w-full' : 'h-full w-xs', layout ? 'flex-row' : 'flex-col')}>
          {CONSTANTS.VerticalNavigation.map((nav) => (
            <Link key={nav.path} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </aside>

        <section className={cx('h-full flex-1')}>{children}</section>
      </article>
    </main>
  )
}
