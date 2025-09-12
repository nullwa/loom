import { useEffect } from 'react'
import { StoryContext } from '@storybook/nextjs'

const Wrapper = (Story, context: StoryContext) => {
  const { theme } = context.globals

  useEffect(() => {
    switch (theme) {
      case 'dark-mode':
        document.body.classList.add('dark-mode')
      case 'light-mode':
        document.body.classList.remove('dark-mode')
      case 'both':
        document.querySelector('#dark-preview')?.classList.add('dark-mode')
    }
  }, [theme])

  if (theme === 'both') {
    return (
      <div className='grid grid-cols-2 prose min-h-52'>
        <div
          id='light-preview'
          className='flex items-center justify-center bg-primary border-2 border-r-0 border-gray-iron-200 dark:border-gray-700 rounded-s-lg'>
          <Story />
        </div>
        <div
          id='dark-preview'
          className='flex items-center justify-center bg-primary border-2 border-l-0 border-gray-iron-200 dark:border-gray-700 rounded-e-lg'>
          <Story />
        </div>
      </div>
    )
  }

  return (
    <div className='prose flex items-center justify-center p-10 min-h-52 bg-primary border-2 border-gray-iron-200 dark:border-gray-700 rounded-lg'>
      <Story />
    </div>
  )
}

export default Wrapper
