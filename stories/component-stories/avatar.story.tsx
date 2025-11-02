import type { Meta, StoryObj } from '@storybook/nextjs'
import { Avatar } from '@/core/components/avatar'

import Template from '@/templates/avatar.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    fallback: {
      control: {type: 'text'},
      description: 'The fallback string where image not valid.'
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
      description: 'The size of the avatar element.'
    },
    radius: {
      control: {type: 'radio'},
      options: ['rounded', 'squared'],
      description: 'The border radius of the avatar element.'
    },
    src: {
      control: {type: 'text'},
      description: 'the source image.'
    },
    status: {
      control: {type: 'select'},
      options: ['online', 'offline', 'busy', 'away'],
      description: 'status of the user if enabled.'
    },
    verified: {
      control: {type: 'boolean'},
      description: 'the user shown is a verified user or not.'
    }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/213305469?v=4',
    fallback: 'S8',
    size: 'md',
    radius: 'rounded',
    status: undefined,
    verified: false
  }
}
