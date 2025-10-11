'use client'

import { type FC, type ReactNode } from 'react'

import { tm } from '@/helpers/tailwind-merge'
import { Tooltip as TooltipPrimitive } from 'radix-ui'

interface TooltipProps {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  arrow?: boolean
  delay?: number
  placement?: 'top' | 'right' | 'bottom' | 'left'
}

const Tooltip: FC<TooltipProps> = ({ title, description, children, arrow = false, delay = 300, placement = 'top' }) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button
            type='button'
            className={tm(
              'group relative flex h-max w-max cursor-pointer flex-col items-center gap-2 text-fg-quaternary outline-hidden transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover disabled:text-fg-disabled'
            )}>
            {children}
          </button>
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placement}
            align='center'
            sideOffset={6}
            className={tm(
              'z-50 flex max-w-xs flex-col items-start gap-0.5 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform',
              description ? 'py-3' : 'py-2',
              'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out',
              'data-[state=delayed-open]:fade-in data-[state=closed]:fade-out',
              'data-[side=top]:slide-in-from-bottom-0.5 data-[side=bottom]:slide-in-from-top-0.5',
              'data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5'
            )}>
            <span className='text-sm font-semibold text-white'>{title}</span>
            {description && <span className='text-xs text-tooltip-supporting-text'>{description}</span>}

            {arrow && <TooltipPrimitive.Arrow width={10} height={5} className='fill-bg-primary-solid' />}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip }
