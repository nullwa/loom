import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Indicator } from '@/core/shared/indicator'

const meta = {
  title: 'Shared/Indicator',
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away'],
      description: 'User status to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'online' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the indicator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof Indicator>

export default meta

type Story = StoryObj<typeof meta>

const statuses = ['online', 'offline', 'busy', 'away'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export const Playground: Story = {
  name: 'Status Variants',
  render: () => (
    <div className='flex flex-wrap gap-6 items-center'>
      {statuses.map((state) => (
        <div key={state} className='relative flex flex-col items-center gap-2'>
          <Indicator status={state} size='md' />
        </div>
      ))}
    </div>
  ),
}

export const PlaygroundOnline: Story = {
  name: 'Size Variants (Online)',
  render: () => (
    <div className='flex flex-wrap gap-6 items-center'>
      {sizes.map((size) => (
        <div key={size} className=' relative flex flex-col items-center gap-2'>
          <Indicator status='online' size={size} />
        </div>
      ))}
    </div>
  ),
}
