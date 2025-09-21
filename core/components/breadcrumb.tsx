'use client'

import { type FC, type ReactNode, type HTMLAttributes, Fragment, useMemo } from 'react'
import Link from 'next/link'

import { tm } from '@/helpers/tailwind-merge'
import { getBreadcrumbItems } from '@/helpers/array-of-paths'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

type ComponentProps = HTMLAttributes<HTMLDivElement> & {
  pathname: string
  ellipsisLevel?: number
  ellipsis?: boolean
}

const Breadcrumb: FC<ComponentProps> = ({ pathname, ellipsisLevel = 0, ellipsis, className, ...props }) => {
  const items = useMemo(() => getBreadcrumbItems(pathname), [pathname])

  // Number of middle items to hide (non-negative integer)
  const hideCount = Math.max(0, Math.floor(ellipsisLevel ?? 0))
  const total = items.length

  // Build visibleItems: default = all items
  let visibleItems = items

  // Only apply collapse when there are middle items to hide and at least 3 items total (first + middle + last)
  if (hideCount > 0 && total > 2) {
    const middleCount = total - 2
    if (hideCount >= middleCount) visibleItems = [items[0], { label: '__ellipsis__', href: '#' }, items[total - 1]]
    else visibleItems = [items[0], { label: '__ellipsis__', href: '#' }, ...items.slice(1 + hideCount, total)]
  }

  return (
    <nav aria-label='breadcrumb' data-slot='breadcrumb' className={tm('flex items-center text-sm select-none', className)} {...props}>
      <ol className='flex flex-wrap items-center gap-1.5 sm:gap-2.5 list-none m-0 p-0'>
        {visibleItems.map((item: { label: ReactNode; href: string }, idx: number) => {
          const isLast = idx === visibleItems.length - 1
          const isEllipsis = item.label === '__ellipsis__'

          return (
            <Fragment key={idx}>
              <li className='list-none inline-flex items-center gap-1.5'>
                {isEllipsis ? (
                  <button
                    type='button'
                    data-slot='breadcrumb-ellipsis'
                    aria-hidden='false'
                    aria-label='Show more breadcrumb items'
                    className='flex size-9 items-center justify-center'>
                    {ellipsis && <MoreHorizontal className='size-4' />}
                    <span className='sr-only'>More</span>
                  </button>
                ) : isLast ? (
                  <span data-slot='breadcrumb-page' role='link' aria-disabled='true' aria-current='page' className='text-primary font-semibold'>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} data-slot='breadcrumb-link' className='hover:text-primary font-semibold transition-colors'>
                    {item.label}
                  </Link>
                )}
              </li>

              {!isLast && (
                <li data-slot='breadcrumb-separator' role='presentation' aria-hidden='true' className='list-none [&>svg]:size-3.5'>
                  <ChevronRight />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'

export { Breadcrumb }
