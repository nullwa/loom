import { useEffect } from 'react'
import { StoryContext } from '@storybook/nextjs'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Wrapper = (Story, context: StoryContext) => {
  const { theme } = context.globals

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <div className='grid grid-cols-1 prose'>
      <div id='light-preview' className='px-4 py-16 flex items-center justify-center bg-primary'>
        <Story />
      </div>
      <div id='dark-preview' className='dark-mode px-4 py-16 flex items-center justify-center bg-primary'>
        <Story />
      </div>
    </div>
  )
}

export default Wrapper
