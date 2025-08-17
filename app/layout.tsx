import './globals.css'

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'halo',
  description: 'the next annoying social media app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
