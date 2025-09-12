'use client'

import { type FC, type ReactNode, type ButtonHTMLAttributes, isValidElement } from 'react'

import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Disc3 } from 'lucide-react'

const styles = cva(
  [
    'group relative inset-ring-utility-green-50 h-max cursor-pointer outline-brand transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:cursor-not-allowed disabled:text-fg-disabled',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover',
          'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
          'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        ].join(' '),
        secondary: [
          'bg-primary text-secondary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover',
          'disabled:shadow-xs disabled:ring-disabled_subtle',
        ].join(' '),
        error: [
          'bg-error-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset outline-error hover:bg-error-solid/90',
          'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
          'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        ].join(' '),
        success: [
          'bg-success-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset outline-success-500 hover:bg-success-25',
          'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
          'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        ],
      },
      size: {
        sm: 'rounded-md h-8  min-w-8  px-2 text-sm font-semibold before:rounded-[5px]',
        md: 'rounded-md h-10 min-w-10 px-2.5 text-md font-semibold before:rounded-[5px]',
        lg: 'rounded-md h-11 min-w-12 px-3 text-lg font-semibold before:rounded-[5px]',
        xl: 'rounded-md h-13 min-w-13 px-5 text-xl font-semibold before:rounded-[5px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const sizeGapMap: Record<string, string> = {
  sm: 'gap-1',
  md: 'gap-1',
  lg: 'gap-1.5',
  xl: 'gap-2',
}

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & {
    children?: string
    icon?: ReactNode
    iconPosition?: 'trailing' | 'leading'
    loading?: boolean
  }

const Button: FC<ComponentProps> = ({
  children,
  icon: Icon = null,
  loading = false,
  iconPosition = 'leading',
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}) => {
  const hasText = children && typeof children === 'string' && children.trim().length > 0

  return (
    <button
      data-slot='button'
      data-loading={loading || undefined}
      className={tm(styles({ variant, size, className }), !hasText && 'px-0', !loading && iconPosition === 'trailing' && 'flex-row-reverse')}
      {...rest}>
      <div className={tm('relative z-10 flex items-center justify-center', sizeGapMap[size ?? 'md'])}>
        {!loading && isValidElement(Icon) && <span>{Icon}</span>}
        {loading && <Disc3 data-icon='loading' className='animate-spin size-5 opacity-85' />}
        {hasText && <span className='first-letter:uppercase'>{children}</span>}
      </div>
    </button>
  )
}

Button.displayName = 'BUTTON'

export { Button }
