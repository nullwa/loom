'use client'

import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import type { Theme, ThemeModeProvider } from '@/providers/stores/theme-provider.store'

/**
 * ThemeProviderProps
 *
 * Provides theme state and functions to the React tree.
 * Attaches a CSS class (`light-mode` or `dark-mode`) to the <html> element
 * and persists the user’s choice in `localStorage`.
 */
export const ThemeProviderProps: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light-mode')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const initial = saved || 'light-mode'
    setTheme(initial)
    document.documentElement.classList.add(initial)
  }, [])

  /**
   * Toggle between light and dark themes.
   */
  const toggleTheme = (mode: Theme) => {
    _updateThemeMode(mode)
  }

  /**
   * Set a new theme and persist it in both state and localStorage.
   */
  const _updateThemeMode = (mode: Theme) => {
    document.documentElement.classList.remove('light-mode', 'dark-mode')
    document.documentElement.classList.add(mode)
    setTheme(mode)
    localStorage.setItem('theme', mode)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

/**
 * React Context used to store the current theme and expose methods
 * for updating it across the application.
 *
 * - `theme`: current theme (`light-mode` or `dark-mode`)
 * - `setTheme`: function to set a specific theme
 * - `toggleTheme`: function to switch between light and dark
 */
const ThemeContext = createContext<ThemeModeProvider | undefined>(undefined)

/**
 * Custom hook for accessing the current theme context.
 *
 * Throws an error if called outside of a <ThemeProviderProps>.
 *
 * Usage:
 * ```tsx
 * const { theme, setTheme, toggleTheme } = useTheme()
 * ```
 */
export const useTheme = (): ThemeModeProvider => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
