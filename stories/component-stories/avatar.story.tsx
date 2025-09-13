import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Avatar } from '@/core/components/avatar'
import { User } from 'lucide-react'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    src: { control: 'text', description: 'Image URL for the avatar' },
    alt: { control: 'text', description: 'Alt text for image' },
    initials: { control: 'text', description: 'Initials to display if no image' },
    status: {
      control: 'select',
      options: ['online', 'offline'],
      description: 'Online/offline status indicator',
    },
    verified: { control: 'boolean', description: 'Show verified badge' },
    placeholderIcon: { control: false, description: 'Custom placeholder icon component' },
    placeholder: { control: false, description: 'Custom placeholder node' },
    contrastBorder: { control: 'boolean', description: 'Add border for contrast' },
    focusable: { control: 'boolean', description: 'Enable focus outline' },
    className: { control: 'text', description: 'Custom Tailwind classes' },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
const statuses = ['online', 'offline'] as const

export const SizeVariants: Story = {
  name: 'Size Variants',
  render: () => (
    <div className='flex flex-wrap gap-6 items-center'>
      {sizes.map((size) => (
        <div key={size} className='flex flex-col items-center gap-2'>
          <Avatar size={size} initials='WS' />
          <span className='text-xs'>{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const StatusVariants: Story = {
  name: 'Status Variants',
  render: () => (
    <div className='flex flex-wrap gap-6 items-center'>
      {statuses.map((status) => (
        <div key={status} className='flex flex-col items-center gap-2'>
          <Avatar size='md' status={status} initials='WS' />
          <span className='text-xs'>{status}</span>
        </div>
      ))}
    </div>
  ),
}

export const Verified: Story = {
  name: 'Verified Badge',
  render: () => (
    <div className='flex flex-wrap gap-6 items-center'>
      {sizes.map((size) => (
        <div key={size} className='flex flex-col items-center gap-2'>
          <Avatar size={size} verified initials='WS' />
          <span className='text-xs'>{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const WithImage: Story = {
  name: 'Avatar with Image',
  args: {
    size: 'md',
    src: 'https://via.placeholder.com/40',
    alt: 'User Avatar',
  },
}

export const PlaceholderIcon: Story = {
  name: 'Custom Placeholder Icon',
  args: {
    size: 'md',
    placeholderIcon: User,
  },
}

export const Focusable: Story = {
  name: 'Focusable Avatar',
  args: {
    size: 'md',
    initials: 'WS',
    focusable: true,
  },
}
