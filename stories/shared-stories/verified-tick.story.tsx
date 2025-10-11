import { type Meta, type StoryObj } from '@storybook/nextjs'

import { VerifiedTick } from '@/core/shared/verfied-tick'

const meta = {
  title: 'Shared/Verified-Tick',
  component: VerifiedTick,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The **VerifiedTick** component renders a checkmark badge. It supports multiple predefined sizes (`xs` → `4xl`) and accepts additional Tailwind classes via `className`.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the tick icon.',
      defaultValue: 'md',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'left', 'right'],
      description: 'Position of the tick icon.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes for styling.',
    },
  },
  args: {
    size: 'md',
  },
} satisfies Meta<typeof VerifiedTick>

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const colors = ['brand', 'default', 'error', 'success', 'warning'] as const

export const Playground: Story = {
  name: 'Variants',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {colors.map((variant) => (
        <VerifiedTick key={variant} variant={variant} size='md' />
      ))}
    </div>
  ),
}

export const AllSizesBrand: Story = {
  name: 'Brand Variant',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {sizes.map((size) => (
        <VerifiedTick key={size} variant='brand' size={size} />
      ))}
    </div>
  ),
}

export const AllSizesDefault: Story = {
  name: 'Default Variant',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {sizes.map((size) => (
        <VerifiedTick key={size} variant='default' size={size} />
      ))}
    </div>
  ),
}

export const AllSizesError: Story = {
  name: 'Error Variant',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {sizes.map((size) => (
        <VerifiedTick key={size} variant='error' size={size} />
      ))}
    </div>
  ),
}

export const AllSizesSuccess: Story = {
  name: 'Success Variant',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {sizes.map((size) => (
        <VerifiedTick key={size} variant='success' size={size} />
      ))}
    </div>
  ),
}

export const AllSizesWarning: Story = {
  name: 'Warning Variant',
  render: () => (
    <div className='flex flex-wrap gap-4 items-center'>
      {sizes.map((size) => (
        <VerifiedTick key={size} variant='warning' size={size} />
      ))}
    </div>
  ),
}
