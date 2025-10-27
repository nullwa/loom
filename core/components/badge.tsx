'use client'

import { type FC } from 'react'
import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type ComponentProps = VariantProps<typeof styles> & {
  text?: string
  count?: number
  icon?: IconName
  removable?: boolean
  onRemove?: () => void
  onClick?: () => void
}

const Badge: FC<ComponentProps> = ({ text, icon, count, removable = false, variant = 'brand', radius = 'pilled', onRemove, onClick }) => {
  return (
    <div className={tm(styles({ variant, radius }))} onClick={onClick} aria-label={text ?? 'badge'}>
      {icon && <DynamicIcon name={icon} size={14} aria-hidden />}
      {text && <span className='text-sm'>{text}</span>}
      {typeof count === 'number' && <span className='text-sm font-medium'>{count}</span>}

      {removable && (
        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          aria-label='Remove badge'
          className='cursor-pointer rounded-full hover:bg-black/10 transition'>
          <DynamicIcon name='x' size={12} />
        </button>
      )}
    </div>
  )
}

Badge.displayName = 'Badge'

const styles = cva('select-none flex items-center gap-1 px-2 py-0.5 font-medium text-xs border cursor-pointer transition-colors hover:opacity-85 active:opacity-70', {
  variants: {
    variant: {
      primary: 'bg-fg-primary text-bg-primary border-fg-secondary',
      outline: 'bg-secondary text-primary border-secondary',
      ghost: 'bg-primary/10 text-primary border-transparent',
      error: 'bg-error-solid text-white border-error-700',
      success: 'bg-success-solid text-white border-success-700',
      warning: 'bg-warning-solid text-white border-warning-700',
      brand: 'bg-brand-solid text-white border-brand-solid_hover',
    },
    radius: {
      pilled: 'rounded-full',
      squared: 'rounded-md',
    },
  },
  defaultVariants: {
    variant: 'brand',
    radius: 'pilled',
  },
})

export { Badge }
