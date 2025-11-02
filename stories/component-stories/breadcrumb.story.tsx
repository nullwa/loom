import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '@/core/components/breadcrumb'

import Template from '@/templates/breadcrumb.template.mdx'

// Storybook metadata
const meta: Meta<typeof Breadcrumb> = {
  title: 'core/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    pathname: {
      control: {type: 'text'},
      description: 'The full pathname to generate breadcrumbs from.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '/'}
      }
    },
    ellipsis: {
      control: {type: 'number'},
      description: 'Custom node to render for the ellipsis.',
      table: {
        type: {summary: 'ReactNode'},
        defaultValue: {summary: '0'}
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

// Default story
export const Default: Story = {
  args: {
    pathname: 'app/docs/components/base-ui/button',
    ellipsis: 0
  }
}
