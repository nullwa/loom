'use client'

import { type FC } from 'react'

import { Button } from '@/core/common/button'
import { useTheme } from '@/providers/theme-provider'

import { Moon, Sun } from 'lucide-react'

interface ComponentProps {}

export const ThemeSwitcher: FC<ComponentProps> = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      size='sm'
      color='link-gray'
      aria-label='switch theme'
      iconLeading={theme === 'dark-mode' ? <Sun size={18} /> : <Moon size={18} />}
      onClick={() => (theme === 'light-mode' ? toggleTheme('dark-mode') : toggleTheme('light-mode'))}
    />
  )
}
