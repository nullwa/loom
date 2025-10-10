import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/core/components/button'

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Free and open-source React button components built for modern applications and websites. These buttons are styled with Tailwind CSS.',
      },
    },
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'error', 'success', 'warning', 'brand', 'ghost'],
      description: 'The variant style of the button.',
      defaultValue: 'default',
    },
    children: {
      control: { type: 'text' },
      description: 'The text to be displayed inside the button.',
    },
    isFancy: {
      control: { type: 'boolean' },
      description: 'Whether to apply a fancy border style to the button.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
    },
    radius: {
      control: { type: 'radio' },
      options: ['rounded', 'pilled'],
      description: 'The border radius of the button.',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Defafult: Story = {
  args: {
    variant: 'brand',
    children: 'click me',
    isFancy: false,
    size: 'sm',
    radius: 'rounded',
  },
}
