'use client'

import { type FC, type InputHTMLAttributes } from 'react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { Check } from 'lucide-react'

type ComponentProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof styles> & {
  label?: string
  hint?: string
  bordered?: boolean
}

const Checkbox: FC<ComponentProps> = ({label, hint, bordered = false, variant = 'brand', disabled = false, className, ...rest}) => {
  return (
    <div className={tm('flex items-center select-none', bordered && 'border border-secondary rounded-xs bg-secondary')}>
      <label htmlFor={`${label}-checking-item`} className={tm('flex items-center gap-3 cursor-pointer py-3 px-4', disabled && 'cursor-not-allowed')}>
        <div className={tm('relative flex items-center justify-center')}>
          <input id={`${label}-checking-item`} type='checkbox' className={tm(styles({variant, className}))} disabled={disabled} {...rest} />
          <Check className={tm('absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none size-3.5', variant === 'default' ? 'text-black' : 'text-white')}/>
        </div>
        {label && (
          <div className='flex flex-col gap-1.5 cursor-pointer'>
            <p className='text-primary first-letter:uppercase font-medium'>{label}</p>
            {hint && <p className='text-tertiary first-letter:uppercase'>{hint}</p>}
          </div>
        )}
      </label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

const styles = cva(
  'w-4.5 h-4.5 peer cursor-pointer transition-all appearance-none rounded-xs shadow-xs border border-utility-gray-300 outline-none disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
  {
    variants: {
      variant: {
        brand: 'checked:bg-brand-solid checked:border-brand-800',
        default: 'checked:bg-gray-300 checked:border-gray-500',
        secondary: 'checked:bg-gray-600 checked:border-gray-800',
        error: 'checked:bg-error-solid checked:border-error-800',
        success: 'checked:bg-success-solid checked:border-success-800'
      }
    },
    defaultVariants: {
      variant: 'brand'
    }
  }
)

export { Checkbox }
