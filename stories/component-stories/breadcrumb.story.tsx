import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '@/core/components/breadcrumb'

// Storybook metadata
const meta: Meta<typeof Breadcrumb> = {
  title: 'components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Breadcrumb navigation component with support for collapsing long paths into an ellipsis.
- Built with Radix Slot and Lucide icons.
- Accepts a pathname and generates breadcrumb links automatically.
- Supports custom ellipsis rendering.
        `,
      },
    },
  },
  argTypes: {
    pathname: {
      control: { type: 'text' },
      description: 'The full pathname to generate breadcrumbs from.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    ellipsis: {
      control: { type: 'number' },
      description: 'Custom node to render for the ellipsis.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '0' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

// Default story
export const Default: Story = {
  args: {
    pathname: 'app/docs/components/base-ui/button',
    ellipsis: 0,
  },
}
