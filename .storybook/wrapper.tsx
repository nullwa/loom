import { useEffect } from 'react'
import { StoryContext } from '@storybook/nextjs'

const Wrapper = (Story, context: StoryContext) => {
  const { theme } = context.globals

  useEffect(() => {
    if (theme === 'dark-mode') document.body.classList.add('dark-mode')
    if (theme === 'light-mode') document.body.classList.remove('dark-mode')
    if (theme === 'both') document.querySelector('#dark-preview')?.classList.add('dark-mode')
  }, [theme])

  if (theme === 'both') {
    return (
      <div className='grid grid-cols-1 prose'>
        <div
          id='light-preview'
          className='px-4 py-16 flex items-center justify-center bg-primary border-2 border-b-0 border-gray-iron-200 dark:border-gray-700 rounded-t-lg'>
          <Story />
        </div>
        <div
          id='dark-preview'
          className='px-4 py-16 flex items-center justify-center bg-primary border-2 border-t-0 border-gray-iron-200 dark:border-gray-700 rounded-b-lg'>
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
