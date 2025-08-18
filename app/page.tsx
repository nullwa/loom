'use client'

import { useTheme } from '@/providers/theme-provider'
import type { JSX } from 'react'

export default function Home(): JSX.Element {
  const { theme, toggleTheme } = useTheme()
  return (
    <main className='bg-brand-400 dark:bg-red-400 h-screen'>
      <button onClick={() => toggleTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode')}>
        {theme === 'dark-mode' ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </main>
  )
}
