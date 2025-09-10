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
        { value: 'light-mode', title: 'Light Theme', default: true },
        { value: 'dark-mode', title: 'Dark Theme' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}
