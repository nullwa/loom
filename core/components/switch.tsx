'use client'

import { type FC, useState } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'

type ComponentProps = VariantProps<typeof styles> & {
  label?: string
  hint?: string
  disabled?: boolean
  bordered?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch: FC<ComponentProps> = ({label, hint, bordered = false, variant = 'brand', radius = 'squared', disabled = false, checked: controlledChecked, onCheckedChange}) => {
  const [internalChecked, setInternalChecked] = useState(controlledChecked ?? false)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked

  const handleCheckedChange = (next: boolean) => {
    if (!isControlled) setInternalChecked(next)
    onCheckedChange?.(next)
  }

  return (
    <div className={tm('flex items-center select-none', bordered && 'border border-secondary rounded-xs bg-secondary')}>
      <label className={tm('flex items-center gap-3 cursor-pointer py-3 px-4', disabled && 'cursor-not-allowed')}>
        <SwitchPrimitive.Root className={tm(styles({variant, radius}))} disabled={disabled} checked={checked} onCheckedChange={handleCheckedChange}>
          <SwitchPrimitive.Thumb className="block w-4.5 h-4.5 bg-primary border border-secondary shadow-xs transition-transform duration-200 translate-x-[2px] data-[state=checked]:translate-x-[22px]"/>
        </SwitchPrimitive.Root>

        {label && (
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <p className="text-primary first-letter:uppercase font-medium">{label}</p>
            {hint && <p className="text-tertiary first-letter:uppercase">{hint}</p>}
          </div>
        )}
      </label>
    </div>
  )
}

Switch.displayName = 'Switch'

const styles = cva('cursor-pointer w-11 h-6 rounded-xs bg-secondary dark:bg-secondary-solid border border-secondary dark:border-primary',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-fg-secondary',
        brand: 'data-[state=checked]:bg-brand-solid data-[state=checked]:border-brand',
        error: 'data-[state=checked]:bg-error-solid data-[state=checked]:border-error'
      },
      radius: {
        squared: 'rounded-xs [&>span]:rounded-xs',
        pilled: 'rounded-full [&>span]:rounded-full'
      }
    },
    defaultVariants: {
      variant: 'brand',
      radius: 'squared'
    }
  }
)

export { Switch }
