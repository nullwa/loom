import type { Meta, StoryObj } from '@storybook/nextjs'
import { Avatar } from '@/core/components/avatar'

const meta = {
  title: 'components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Free and open-source React avatar components built for modern applications and websites. These avatars are styled with Tailwind CSS.',
      },
    },
  },

  argTypes: {
    fallback: {
      control: { type: 'text' },
      description: 'The fallback string where image not valid.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the avatar element.',
    },
    radius: {
      control: { type: 'radio' },
      options: ['rounded', 'squared'],
      description: 'The border radius of the avatar element.',
    },
    src: {
      control: { type: 'text' },
      description: 'the source image.',
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'busy', 'away'],
      description: 'status of the user if enabled.',
    },
    verfied: {
      control: { type: 'boolean' },
      description: 'the user shown is a verified user or not.',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/213305469?v=4',
    fallback: 'S8',
    size: 'sm',
    radius: 'rounded',
    status: undefined,
    verfied: false,
  },
}
