'use client'

import { type FC, type ReactNode, useState } from 'react'
import { User } from 'lucide-react'

import { tm } from '@/helpers/tailwind-merge'

import { Indicator } from '@/core/shared/indicator'
import { VerifiedTick } from '@/core/shared/verfied-tick'

type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type AvatarProps = {
  size?: AvatarSize
  className?: string
  src?: string | null
  alt?: string
  contrastBorder?: boolean
  badge?: ReactNode
  status?: 'online' | 'offline'
  verified?: boolean
  initials?: string
  placeholderIcon?: FC<{ className?: string }>
  placeholder?: ReactNode
  focusable?: boolean
}

const styles = {
  xxs: { root: 'size-4 outline-[0.5px] -outline-offset-[0.5px]', initials: 'text-xs font-semibold', icon: 'size-3' },
  xs: { root: 'size-6 outline-[0.5px] -outline-offset-[0.5px]', initials: 'text-xs font-semibold', icon: 'size-4' },
  sm: { root: 'size-8 outline-[0.75px] -outline-offset-[0.75px]', initials: 'text-sm font-semibold', icon: 'size-5' },
  md: { root: 'size-10 outline-1 -outline-offset-1', initials: 'text-md font-semibold', icon: 'size-6' },
  lg: { root: 'size-12 outline-1 -outline-offset-1', initials: 'text-lg font-semibold', icon: 'size-7' },
  xl: { root: 'size-14 outline-1 -outline-offset-1', initials: 'text-xl font-semibold', icon: 'size-8' },
  '2xl': { root: 'size-16 outline-1 -outline-offset-1', initials: 'text-display-xs font-semibold', icon: 'size-8' },
}

const Avatar: FC<AvatarProps> = ({
  contrastBorder = true,
  size = 'md',
  src,
  alt,
  initials,
  placeholder,
  placeholderIcon: PlaceholderIcon,
  badge,
  status,
  verified,
  focusable = false,
  className,
}) => {
  const [isFailed, setIsFailed] = useState(false)

  const renderMainContent = () => {
    if (src && !isFailed) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img data-avatar-img className='size-full rounded-full object-cover' src={src} alt={alt} onError={() => setIsFailed(true)} />
    }

    if (initials) {
      return <span className={tm('text-quaternary', styles[size].initials)}>{initials}</span>
    }

    if (PlaceholderIcon) {
      return <PlaceholderIcon className={tm('text-fg-quaternary', styles[size].icon)} />
    }

    return placeholder || <User className={tm('text-fg-quaternary', styles[size].icon)} />
  }

  const renderBadgeContent = () => {
    if (status) {
      return <Indicator status={status} size={size === 'xxs' ? 'xs' : size} />
    }

    if (verified) {
      return (
        <VerifiedTick
          size={size === 'xxs' ? 'xs' : size}
          className={tm('absolute right-0 bottom-0', (size === 'xxs' || size === 'xs') && '-right-px -bottom-px')}
        />
      )
    }

    return badge
  }

  return (
    <div
      data-avatar
      className={tm(
        'relative inline-flex shrink-0 items-center justify-center rounded-full bg-avatar-bg outline-transparent',
        // Focus styles
        focusable && 'group-outline-focus-ring group-focus-visible:outline-2 group-focus-visible:outline-offset-2',
        contrastBorder && 'outline outline-avatar-contrast-border',
        styles[size].root,
        className
      )}>
      {renderMainContent()}
      {renderBadgeContent()}
    </div>
  )
}

Avatar.displayName = 'Avatar'

export { Avatar }
