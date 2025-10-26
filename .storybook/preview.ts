import '../styles/globals.css'
import Wrapper from './wrapper'

import { type Preview } from '@storybook/nextjs'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', ['Components', 'Shared', 'Utils', 'Helpers', 'Changelog']],
      },
    },
    docs: {
      layout: 'fullscreen',
    },
    backgrounds: null,
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Light mode' },
          { value: 'dark', icon: 'moon', title: 'Dark mode' },
        ],
        showName: false,
        dynamicTitle: false,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [Wrapper],
}

export default preview
