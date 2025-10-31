import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '@/core/components/switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: 'Accept terms',
    hint: 'You must accept before continuing'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'error']
    },
    bordered: {control: 'boolean'},
    disabled: {control: 'boolean'},
    radius: {
      control: {type: 'radio'},
      options: ['squared', 'pilled']
    }
  }
} satisfies Meta<typeof Switch>
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Accept terms',
    hint: 'You must accept before continuing',
    bordered: false,
    disabled: false,
    radius: 'squared'
  }
}
