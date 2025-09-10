'use client'

import { useEffect, useState } from 'react'

/**
 * Default Tailwind CSS screen sizes.
 * These should match your Tailwind configuration.
 */
const SCREENS: Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

/**
 * Custom React hook to detect if the current viewport matches a Tailwind CSS breakpoint.
 *
 * @param size - One of Tailwind CSS's default breakpoints: 'sm', 'md', 'lg', 'xl', '2xl'.
 * @returns `true` if the viewport width is equal to or greater than the given breakpoint.
 *
 * @example
 * const isLarge = useBreakpoint('lg');
 * if (isLarge) {
 *   // Render desktop layout
 * }
 */
export const useBreakpoint = (size: keyof typeof SCREENS): boolean => {
  // Initialize state safely in SSR context (window may be undefined)
  const [matches, setMatches] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(`(min-width: ${SCREENS[size]})`).matches : true))

  useEffect(() => {
    // Create a MediaQueryList for the given breakpoint
    const mediaQuery = window.matchMedia(`(min-width: ${SCREENS[size]})`)

    // Update state immediately
    setMatches(mediaQuery.matches)

    // Define listener for viewport changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange)

    // Clean up listener on unmount or size change
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [size])

  return matches
}
