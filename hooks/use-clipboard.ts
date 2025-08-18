'use client'

import { useCallback, useState } from 'react'

const DEFAULT_TIMEOUT = 2000 // Duration (ms) for which `copied` state remains true

/**
 * The return type of `useClipboard` hook
 */
type UseClipboardReturnType = {
  /**
   * Indicates whether the text has been copied.
   * - `false` if nothing has been copied or the timeout expired.
   * - `true` if a text was copied without specifying an id.
   * - A string identifier if provided when copying.
   */
  copied: boolean | string

  /**
   * Copies text to the clipboard.
   * Uses the modern Clipboard API if available; falls back to `execCommand` otherwise.
   *
   * @param text - The text to copy
   * @param id - Optional identifier to track which text was copied
   * @returns Promise resolving to an object containing:
   *  - `success`: whether the copy succeeded
   *  - `error`: error object if the copy failed
   */
  copy: (text: string, id?: string) => Promise<{ success: boolean; error?: Error }>
}

/**
 * Custom React hook for copying text to the clipboard.
 * Provides a `copied` state to indicate success and a `copy` function.
 *
 * @example
 * const { copied, copy } = useClipboard();
 *
 * <button onClick={() => copy("Hello World")}>
 *   {copied ? "Copied!" : "Copy"}
 * </button>
 */
export const useClipboard = (): UseClipboardReturnType => {
  const [copied, setCopied] = useState<boolean | string>(false)

  /**
   * Fallback copy method for older browsers.
   */
  const fallbackCopy = (text: string, id?: string) => {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'absolute'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()

      const success = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (success) {
        setCopied(id || true)
        setTimeout(() => setCopied(false), DEFAULT_TIMEOUT)
        return { success: true }
      } else {
        return { success: false, error: new Error('execCommand returned false') }
      }
    } catch (err) {
      return { success: false, error: err instanceof Error ? err : new Error('Fallback copy failed') }
    }
  }

  /**
   * Main copy function using Clipboard API with fallback.
   */
  const copy = useCallback(async (text: string, id?: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(id || true)
        setTimeout(() => setCopied(false), DEFAULT_TIMEOUT)
        return { success: true }
      } catch {
        return fallbackCopy(text, id)
      }
    }
    return fallbackCopy(text, id)
  }, [])

  return { copied, copy }
}
