import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  addons: ['@storybook/addon-docs'],
  stories: ['../stories/**/*.story.mdx', '../stories/**/*.story.@(ts|tsx)'],
}

export default config
