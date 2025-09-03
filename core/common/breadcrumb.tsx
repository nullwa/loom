'use client'

import { type FC, type ReactNode } from 'react'

import { cx, sortCx } from '@/helpers/cx'
import { ChevronRight, Home } from 'lucide-react'
import { Breadcrumbs as AriaBreadcrumbs, Breadcrumb as AriaBreadcrumb, Link as AriaLink } from 'react-aria-components'

const styles = sortCx({
  common: {
    root: 'flex flex-wrap items-center',
    item: 'flex items-center gap-2 transition-colors duration-200 ease-out',
    link: 'hover:text-primary',
    current: 'text-primary font-medium',
    separator: 'flex items-center select-none text-muted',
  },
  sizes: {
    sm: { root: 'text-sm gap-1', separator: 'h-3 w-3' },
    md: { root: 'text-md gap-1.5', separator: 'h-4 w-4' },
    lg: { root: 'text-base gap-2', separator: 'h-5 w-5' },
  },
  colors: {
    default: { link: 'text-fg-muted', current: 'text-fg-primary', separator: 'text-fg-muted' },
    brand: { link: 'text-brand-secondary hover:text-brand-secondary_hover', current: 'text-brand-primary', separator: 'text-fg-muted' },
  },
})

interface BreadcrumbItemType {
  label: ReactNode
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItemType[]
  size?: keyof typeof styles.sizes
  color?: keyof typeof styles.colors
  separator?: ReactNode
  className?: string
}

/**
 * Reusable Breadcrumb component using React Aria and Untitled UI styling logic
 */
const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  size = 'md',
  color = 'default',
  separator = <ChevronRight className={cx(styles.sizes[size].separator)} />,
  className,
}) => {
  return (
    <AriaBreadcrumbs className={cx(styles.common.root, styles.sizes[size].root, className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1

        return (
          <AriaBreadcrumb key={idx} className={styles.common.item}>
            {items[0].href === item.href ? <Home size={15} className='text-secondary' /> : null}
            {item.href && !isLast ? (
              <AriaLink href={item.href} className={cx(styles.common.link, styles.colors[color].link)}>
                {item.label}
              </AriaLink>
            ) : (
              <span aria-current={isLast ? 'page' : undefined} className={cx(styles.common.current, styles.colors[color].current)}>
                {item.label}
              </span>
            )}

            {!isLast && separator && (
              <span aria-hidden='true' className={styles.common.separator}>
                {separator}
              </span>
            )}
          </AriaBreadcrumb>
        )
      })}
    </AriaBreadcrumbs>
  )
}

/**
 * Optional sub-components for more control (like AlignUI)
 */
const BreadcrumbItemIcon: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cx('size-5', className)}>{children}</div>
)

const BreadcrumbArrowIcon: FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cx('flex size-5 select-none items-center justify-center text-fg-muted', className)}>{children}</div>
)

Breadcrumb.displayName = 'Breadcrumb'
BreadcrumbItemIcon.displayName = 'BreadcrumbItemIcon'
BreadcrumbArrowIcon.displayName = 'BreadcrumbArrowIcon'
export { Breadcrumb, BreadcrumbItemIcon, BreadcrumbArrowIcon }
