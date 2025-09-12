import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Button } from '@/core/components/button'
import { Heart } from 'lucide-react'

const meta = {
  title: 'components/button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'test',
    icon: <Heart />,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'test',
    icon: <Heart />,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'click me',
    icon: <Heart />,
    variant: 'error',
  },
}

export const Fourth: Story = {
  args: {
    children: 'click me',
    icon: <Heart />,
    variant: 'success',
  },
}
