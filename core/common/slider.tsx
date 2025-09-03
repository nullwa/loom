'use client'

import type { FC } from 'react'

import {
  Label as AriaLabel,
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  type SliderProps as AriaSliderProps,
} from 'react-aria-components'

import { cx, sortCx } from '@/helpers/cx'

const styles = sortCx({
  default: 'hidden',
  bottom: 'absolute top-2 left-1/2 -translate-x-1/2 translate-y-full text-md font-medium text-primary',
  'top-floating':
    'absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-secondary shadow-lg ring-1 ring-secondary_alt',
})

interface ComponentProps extends AriaSliderProps {
  labelPosition: keyof typeof styles
  labelFormatter: (value: number) => string
}

const Slider: FC<Partial<ComponentProps>> = ({ labelPosition = 'default', minValue = 0, maxValue = 100, labelFormatter, formatOptions, ...rest }) => {
  const defaultFormatOptions: Intl.NumberFormatOptions = {
    style: 'percent',
    maximumFractionDigits: 0,
  }

  return (
    <AriaSlider {...rest} {...{ minValue, maxValue }} formatOptions={formatOptions ?? defaultFormatOptions}>
      <AriaLabel />
      <AriaSliderTrack className='relative h-6 w-full'>
        {({ state: { values, getThumbValue, getThumbPercent, getFormattedValue } }) => {
          const left = values.length === 1 ? 0 : getThumbPercent(0)
          const width = values.length === 1 ? getThumbPercent(0) : getThumbPercent(1) - left

          return (
            <>
              <span className='absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-quaternary' />
              <span
                className='absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-brand-solid'
                style={{
                  left: `${left * 100}%`,
                  width: `${width * 100}%`,
                }}
              />
              {values.map((_, index) => {
                return (
                  <AriaSliderThumb
                    key={index}
                    index={index}
                    className={({ isFocusVisible, isDragging }) =>
                      cx(
                        'top-1/2 box-border size-6 cursor-grab rounded-full bg-slider-handle-bg shadow-md ring-2 ring-slider-handle-border ring-inset',
                        isFocusVisible && 'outline-2 outline-offset-2 outline-focus-ring',
                        isDragging && 'cursor-grabbing'
                      )
                    }>
                    <AriaSliderOutput className={cx('whitespace-nowrap', styles[labelPosition])}>
                      {labelFormatter ? labelFormatter(getThumbValue(index)) : getFormattedValue(getThumbValue(index) / 100)}
                    </AriaSliderOutput>
                  </AriaSliderThumb>
                )
              })}
            </>
          )
        }}
      </AriaSliderTrack>
    </AriaSlider>
  )
}

Slider.displayName = 'Slider'
export { Slider }
