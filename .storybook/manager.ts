import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  showPanel: true,
  panelPosition: 'right',
  theme: create({
    base: 'dark',
    brandTitle: 'Loom',
    brandUrl: 'https://github.com/nullwa/loom',
    brandImage: '/loom-ui-full-white.svg',
  }),
})
