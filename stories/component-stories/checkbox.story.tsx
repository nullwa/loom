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
      options: ['default', 'brand', 'secondary', 'error', 'success'],
    },
    bordered: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Accept terms',
    hint: 'You must accept before continuing',
    bordered: false,
    disabled: false,
  },
}
