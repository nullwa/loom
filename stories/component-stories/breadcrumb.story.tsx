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
      control: 'text',
      description: 'The full pathname to generate breadcrumbs from.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    ellipsisLevel: {
      control: 'number',
      description: 'Path depth after which items collapse into an ellipsis.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    ellipsis: {
      control: 'boolean',
      description: 'Custom node to render for the ellipsis.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<MoreHorizontal />' },
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
  },
  parameters: {
    docs: {
      description: {
        story: 'The default breadcrumb navigation with full path display.',
      },
    },
  },
}

// With ellipsis
export const WithEllipsis: Story = {
  args: {
    pathname: 'app/docs/components/base-ui/button',
    ellipsisLevel: 5,
    ellipsis: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb where intermediate items collapse into an ellipsis after the first level.',
      },
    },
  },
}
