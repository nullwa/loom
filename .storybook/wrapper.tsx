import { useEffect } from 'react'
import { StoryContext } from '@storybook/nextjs'

const Wrapper = (Story, context: StoryContext) => {
  const { theme } = context.globals

  useEffect(() => {
    if (theme === 'dark-mode') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [theme])

  return (
    <div className='contain-content flex items-center justify-center flex-col p-10 min-h-52 bg-primary border-2 border-gray-iron-200 dark:border-gray-700 rounded-lg'>
      <Story />
    </div>
  )
}

export default Wrapper
