import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-provider'
import { Dashboard } from '@/ui/bloc/dashboard'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Prizm',
  description: 'A modern, responsive, and customizable templating ui library built with Next.js and Tailwind CSS. from @nullwa',
}

export const viewport: Viewport = {
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased prose bg-primary overscroll-none`}>
        <ThemeProvider>
          <Dashboard>{children}</Dashboard>
        </ThemeProvider>
      </body>
    </html>
  )
}
