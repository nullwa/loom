import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/core/components/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Accept terms',
    hint: 'You must accept before continuing',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'default', 'secondary', 'error', 'success'],
    },
    bordered: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => <Checkbox variant='brand' />,
}

export const Brand: Story = {
  args: { variant: 'brand', label: 'Brand checkbox', hint: 'Primary style' },
}

export const DefaultVariant: Story = {
  args: { variant: 'default', label: 'Default checkbox', hint: 'Gray background' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Secondary checkbox', hint: 'Darker gray' },
}

export const Success: Story = {
  args: { variant: 'success', label: 'Success checkbox', hint: 'Green tone' },
}

export const Error: Story = {
  args: { variant: 'error', label: 'Error checkbox', hint: 'Red tone' },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    hint: 'You cannot interact',
    disabled: true,
  },
}

export const Bordered: Story = {
  args: {
    label: 'Bordered checkbox',
    hint: 'With outer border wrapper',
    bordered: true,
  },
}

export const WithoutHint: Story = {
  args: { label: 'Checkbox only (no hint)', hint: '' },
}
