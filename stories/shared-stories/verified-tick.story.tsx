import { type Meta, type StoryObj } from '@storybook/nextjs'

import { VerifiedTick } from '@/core/shared/verfied-tick'

const meta = {
  title: 'Shared/Verified-Tick',
  component: VerifiedTick,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The **VerifiedTick** component renders a checkmark badge. It supports multiple predefined sizes (`xs` → `4xl`) and accepts additional Tailwind classes via `className`.'
      }
    }
  },
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['brand', 'default', 'error', 'success', 'warning'],
      description: 'Variants of the tick icon',
      defaultValue: 'brand'
    },
    size: {
      control: {type: 'select'},
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the tick icon.',
      defaultValue: 'md'
    },
    position: {
      control: {type: 'select'},
      options: ['top', 'left', 'right'],
      description: 'Position of the tick icon.'
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes for styling.'
    }
  },
  args: {
    size: 'md'
  }
} satisfies Meta<typeof VerifiedTick>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    size: 'md',
    variant: 'brand',
    position: 'left',
    className: ''
  }
}
