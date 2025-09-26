'use client'

import { type FC, type ReactNode } from 'react'

import { tm } from '@/helpers/tailwind-merge'
import {
  type TooltipProps as AriaTooltipProps,
  type TooltipTriggerComponentProps as AriaTooltipTriggerComponentProps,
  Button as AriaButton,
  Tooltip as AriaTooltip,
  OverlayArrow as AriaOverlayArrow,
  TooltipTrigger as AriaTooltipTrigger,
} from 'react-aria-components'

interface ComponentProps extends AriaTooltipTriggerComponentProps, Omit<AriaTooltipProps, 'children'> {
  title: ReactNode
  description?: ReactNode
  arrow?: boolean
  delay?: number
}

const Tooltip: FC<ComponentProps> = ({
  title,
  description,
  children,
  arrow = false,
  delay = 300,
  closeDelay = 0,
  trigger,
  isDisabled,
  isOpen,
  defaultOpen,
  offset = 6,
  crossOffset,
  placement = 'top',
  onOpenChange,
  ...rest
}) => {
  const isTopOrBottomLeft = ['top left', 'top end', 'bottom left', 'bottom end'].includes(placement)
  const isTopOrBottomRight = ['top right', 'top start', 'bottom right', 'bottom start'].includes(placement)
  // Set negative cross offset for left and right placement to visually balance the tooltip.
  const calculatedCrossOffset = isTopOrBottomLeft ? -12 : isTopOrBottomRight ? 12 : 0

  return (
    <AriaTooltipTrigger {...{ trigger, delay, closeDelay, isDisabled, isOpen, defaultOpen, onOpenChange }}>
      <AriaButton className='h-max w-max outline-hidden group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover'>
        {children}
      </AriaButton>

      <AriaTooltip
        {...rest}
        offset={offset}
        placement={placement}
        crossOffset={crossOffset ?? calculatedCrossOffset}
        className={({ isEntering, isExiting }) => tm(isEntering && 'ease-out animate-in', isExiting && 'ease-in animate-out')}>
        {({ isEntering, isExiting }) => (
          <div
            className={tm(
              'z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-0.5 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform',
              description ? 'py-3' : 'py-2',
              isEntering &&
                'ease-out animate-in fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5',
              isExiting &&
                'ease-in animate-out fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5'
            )}>
            <span className='text-sm font-semibold text-white'>{title}</span>
            {description && <span className='text-xs text-tooltip-supporting-text'>{description}</span>}

            {arrow && (
              <AriaOverlayArrow>
                <svg
                  viewBox='0 0 100 100'
                  className='size-2.5 fill-bg-primary-solid in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 in-placement-bottom:rotate-180'>
                  <path d='M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z' />
                </svg>
              </AriaOverlayArrow>
            )}
          </div>
        )}
      </AriaTooltip>
    </AriaTooltipTrigger>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip }
