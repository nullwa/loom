'use client'

import { type FC } from 'react'

import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'

const styles = cva('absolute right-0 bottom-0 rounded-full ring-[1.5px] ring-bg-primary', {
  variants: {
    status: {
      online: 'bg-fg-success-secondary',
      offline: 'bg-fg-disabled_subtle',
      busy: 'bg-fg-error-secondary',
      away: 'bg-fg-warning-secondary',
    },
    size: {
      xs: 'size-1.5',
      sm: 'size-2',
      md: 'size-2.5',
      lg: 'size-3',
      xl: 'size-3.5',
      '2xl': 'size-4',
      '3xl': 'size-4.5',
      '4xl': 'size-5',
    },
  },
  defaultVariants: {
    status: 'online',
    size: 'md',
  },
})

type ComponentProps = VariantProps<typeof styles> & {
  className?: string
}

const Indicator: FC<ComponentProps> = ({ status = 'online', size = 'md', className }) => <span className={tm(styles({ status, size, className }))} />

Indicator.displayName = 'Indicator'

export { Indicator }
