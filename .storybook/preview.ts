import '../styles/globals.css'
import Wrapper from './wrapper'

import { Decorator, Parameters } from '@storybook/nextjs'

export const parameters: Parameters = {
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
      order: ['Introduction', ['Components', 'Utils', 'Helpers', 'Changelog']],
    },
  },
}

export const decorators: Decorator[] = [Wrapper]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light-mode', title: 'Light Theme' },
        { value: 'dark-mode', title: 'Dark Theme' },
        { value: 'both', title: 'Both Themes', default: true },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}
