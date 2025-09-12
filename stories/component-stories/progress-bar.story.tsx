import { type Meta, type StoryObj } from '@storybook/nextjs'

import { ProgressBar } from '@/core/components/progress-bar'

const meta = {
  title: 'components/Progress-Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A progress bar component that supports different label positions (`right`, `bottom`, `top-floating`, `bottom-floating`) and custom value formatting.',
      },
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const WithVariants: Story = {
  name: 'Variants',
  args: { value: 45, bandColor: 'success' },
}

export const WithLabelRight: Story = {
  args: { value: 45, labelPosition: 'right' },
}

export const WithLabelBottom: Story = {
  args: { value: 65, labelPosition: 'bottom' },
}

export const WithLabelTopFloating: Story = {
  args: { value: 30, labelPosition: 'top-floating' },
}

export const WithLabelBottomFloating: Story = {
  args: { value: 75, labelPosition: 'bottom-floating' },
}

export const CustomValueFormatter: Story = {
  args: {
    value: 33,
    labelPosition: 'right',
    valueFormatter: (value, percentage) => `${value} of 100 (${percentage.toFixed(1)}%)`,
  },
}
