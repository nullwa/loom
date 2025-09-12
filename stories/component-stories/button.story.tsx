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
    children: '',
    icon: <Heart />,
    loading: true,
    size: 'sm',
  },
}

export const Secondary: Story = {
  args: {
    children: 'test',
    variant: 'secondary',
    // icon: <Heart className='size-5' />,
    loading: false,
    size: 'md',
    disabled: false,
  },
}

export const Tertiary: Story = {
  args: {
    children: 'click me',
    variant: 'secondary',
    icon: <Heart />,
    loading: true,
    size: 'lg',
    iconPosition: 'trailing',
  },
}

export const Fourth: Story = {
  args: {
    children: 'click me',
    icon: <Heart />,
    loading: true,
    size: 'xl',
  },
}
