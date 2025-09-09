import type { Preview, ReactRenderer } from '@storybook/nextjs'
import { withThemeByClassName } from '@storybook/addon-themes'

import '../styles/globals.css'

const preview: Preview = {
  //   @params
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  //   @decorators
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light-mode',
        dark: 'dark-mode',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
  ],
}

export default preview
