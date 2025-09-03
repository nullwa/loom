'use client'

import type { JSX } from 'react'

export default function Home(): JSX.Element {
  return (
    <main className='h-full w-full max-w-3/4 flex flex-col p-4 mx-auto space-y-6'>
      <div>
        <h3>Prizm Base components</h3>
        <p className='w-full max-w-2xl'>
          Prizm React is the world’s largest collection of open-source React components built with Tailwind CSS and React Aria. Everything you need to design
          and develop modern, beautiful interfaces and websites—fast. Just copy, paste, and build.
        </p>
      </div>
      <section className='w-full grid grid-cols-4 gap-4'>
        {[...Array(15)].map((_, i) => (
          <div key={i} className='bg-white ring-secondary ring-1 rounded-lg flex items-center justify-center h-52'>
            {i}
          </div>
        ))}
      </section>
    </main>
  )
}
