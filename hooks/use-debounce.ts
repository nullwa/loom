'use client'

import { useEffect, useState } from 'react'

/**
 * Custom React hook that debounces a value.
 * The debounced value will only reflect the latest value when the hook hasn't been called for the specified delay period.
 *
 * @template T - The type of the value being debounced
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 500ms)
 * @returns The debounced value
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearchTerm = useDebounce(searchTerm, 300)
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Perform search
 *   }
 * }, [debouncedSearchTerm])
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clean up the timer if the value changes before the delay has passed
    // This ensures that the debounced value is only updated after the delay period
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Re-run effect when value or delay changes

  return debouncedValue
}
