import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Button } from '@/core/components/button'
import { Box } from 'lucide-react'

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Free and open-source React button components built for modern applications and websites. These buttons are styled with Tailwind CSS',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const variants = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'default'] as const
const sizes = ['sm', 'md', 'lg', 'xl'] as const

export const WithVariants: Story = {
  name: 'Variants',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} icon={<Box className='size-4' />}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const DisabledButtons: Story = {
  name: 'Disabled',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} icon={<Box className='size-4' />} disabled>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const LoadingWithVariants: Story = {
  name: 'Loading Variants',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} icon={<Box className='size-4' />} loading>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const OnlyIcons: Story = {
  name: 'Only icons',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} icon={<Box className='size-4' />} />
      ))}
    </div>
  ),
}

export const LoadingOnlyIcons: Story = {
  name: 'Loading Only icons',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} icon={<Box className='size-4' />} loading />
      ))}
    </div>
  ),
}

export const IconPosition: Story = {
  name: 'Icon Position',
  render: () => (
    <div className='grid gap-4'>
      <div className='flex flex-wrap gap-4'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} icon={<Box className='size-4' />} iconPosition='leading'>
            {variant}
          </Button>
        ))}
      </div>
      <div className='flex flex-wrap gap-4'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} icon={<Box className='size-4' />} iconPosition='trailing'>
            {variant}
          </Button>
        ))}
      </div>
    </div>
  ),
}

export const WithSizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className='grid grid-cols-4 gap-4'>
      {variants.map((variant) =>
        sizes.map((size) => (
          <Button key={`${variant} - ${size}`} variant={variant} size={size}>
            {`${size} Button`}
          </Button>
        ))
      )}
    </div>
  ),
}
