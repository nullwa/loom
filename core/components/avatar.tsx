'use client'

import { type FC, type HTMLAttributes } from 'react'

import { Avatar as Primitive } from 'radix-ui'
import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Indicator } from '@/core/shared/indicator'
import { VerifiedTick } from '@/core/shared/verfied-tick'

type ComponentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles> & {
    src?: string
    fallback: string
    status?: 'online' | 'offline' | 'busy' | 'away'
    verfied?: boolean
  }

const Avatar: FC<ComponentProps> = ({ src, fallback, status = null, verfied = false, size = 'sm', radius = 'rounded', className, ...rest }) => {
  const isStatusSet: boolean = status != null && status != undefined

  return (
    <Primitive.Root data-slot='avatar' className={tm('select-none relative')} {...rest}>
      <div className={tm(styles({ size, radius, className }))}>
        <Primitive.Image data-slot='avatar-image' src={src} className='rounded-none' />
        <Primitive.Fallback data-slot='avatar-fallback' className={tm('bg-quaternary text-secondary flex size-full text-md items-center justify-center')}>
          {fallback}
        </Primitive.Fallback>
      </div>

      {isStatusSet ? <Indicator status={status} /> : verfied && <VerifiedTick position={isStatusSet ? 'left' : 'right'} />}
    </Primitive.Root>
  )
}

Avatar.displayName = 'Avatar'

const styles = cva(['overflow-hidden shrink-0 flex items-center justify-center cursor-pointer'], {
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-9',
      lg: 'size-10',
    },
    radius: {
      rounded: 'rounded-full',
      squared: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'rounded',
  },
})

export { Avatar }
