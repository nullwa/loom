import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.story.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.js',
    },
  },
  staticDirs: ['../public'],
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/x-icon" href="/loom-ui-blue.svg" />
  `,
  docs: {
    docsMode: true,
  },
}

export default config
