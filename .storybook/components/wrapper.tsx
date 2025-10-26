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
    <div id='light-preview' className={`prose p-4 flex items-center justify-center ${theme === 'dark' && 'dark-mode'} bg-primary`}>
      <Story />
    </div>
  )
}

export default Wrapper
