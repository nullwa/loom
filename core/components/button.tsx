'use client'

import { type FC, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Disc3 } from 'lucide-react'

const buttonVariants = cva(
  [
    'contain-content capitalize group relative flex cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:cursor-not-allowed disabled:text-fg-disabled',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover',
          "before:content-[''] before:pointer-events-none before:absolute before:inset-px before:border before:border-white/25 before:mask-b-from-0% before:z-[-1]",
          'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        ].join(' '),
        secondary: [
          'bg-primary text-secondary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover',
          'disabled:shadow-xs disabled:ring-disabled_subtle',
        ].join(' '),
      },
      size: {
        sm: 'rounded-lg h-8  min-w-8  px-2   text-sm font-semibold before:rounded-[7px] gap-1',
        md: 'rounded-lg h-10 min-w-10 px-2.5 text-sm font-semibold before:rounded-[7px] gap-1',
        lg: 'rounded-lg h-11 min-w-12 px-3   text-md font-semibold before:rounded-[7px] gap-1.5',
        xl: 'rounded-lg h-13 min-w-13 px-5   text-lg font-semibold before:rounded-[7px] gap-1.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: string
    icon?: ReactNode
    iconPosition?: 'trailing' | 'leading'
    loading?: boolean
  }

const Button: FC<ComponentProps> = ({
  children,
  loading = false,
  icon = null,
  iconPosition = 'leading',
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}) => {
  // Check if we have actual text content
  const hasText = children && children.trim().length > 0

  return (
    <button
      data-slot='button'
      data-loading={loading || undefined}
      className={tm(buttonVariants({ variant, size, className }), !loading && iconPosition === 'trailing' && 'flex-row-reverse', !hasText && 'px-0 gap-0')}
      {...rest}>
      {!loading && icon && icon}
      {loading && <Disc3 data-icon='loading' className='animate-spin size-5 opacity-85' />}
      {children}
    </button>
  )
}

export { Button }
