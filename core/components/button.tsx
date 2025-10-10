'use client'

import { type FC, type ButtonHTMLAttributes } from 'react'

import { Slot } from 'radix-ui'
import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & {
    children: string
  }

const Button: FC<ComponentProps> = ({ children, variant, isFancy, size, radius, className, ...rest }) => {
  const hasText = children && typeof children === 'string' && children.trim().length > 0

  return (
    <Slot.Root data-slot='button' className={tm(styles({ variant, isFancy, size, radius, className }), !hasText && 'px-0')} {...rest}>
      <div className='flex items-center justify-between'>{children}</div>
    </Slot.Root>
  )
}

Button.displayName = 'Button'

const styles = cva(
  [
    'capitalize contain-content select-none group flex items-center justify-center text-box relative cursor-pointer outline-none transition duration-100 ease-linear focus-within:outline-2 focus-within:outline-offset-2',
    'disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
  ],
  {
    variants: {
      variant: {
        default: 'bg-fg-primary text-bg-primary shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-fg-secondary_hover',
        outline: 'bg-primary text-primary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover',
        error: 'bg-error-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-error-700 dark:hover:bg-error-500',
        success: 'bg-success-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-success-700 dark:hover:bg-success-500',
        warning: 'bg-warning-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-warning-700 dark:hover:bg-warning-500',
        brand: 'bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover',
        ghost: 'bg-primary text-primary ring-1 ring-transparent ring-inset hover:bg-secondary_hover',
      },
      isFancy: {
        true: 'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
        false: null,
      },
      size: {
        sm: 'h-8 min-w-8 px-3 text-sm',
        md: 'h-9 min-w-9 px-4 text-md',
        lg: 'h-10 min-w-10 px-5 text-lg',
      },
      radius: {
        rounded: 'rounded-sm before:rounded-[3px]',
        pilled: 'rounded-full before:rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      isFancy: false,
      radius: 'rounded',
    },
  }
)

export { Button }
