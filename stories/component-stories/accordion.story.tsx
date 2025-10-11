import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/core/components/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A fully controlled Accordion component. Pass an array of items via the `items` prop.',
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of accordion items. Each item must have `id`, `title`, and `content`.',
      control: 'object',
    },
    type: {
      description: 'Accordion type: "single" or "multiple".',
      control: { type: 'radio' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      description: 'Whether the accordion can be collapsed.',
      control: 'boolean',
    },
    defaultValue: {
      description: 'Default opened item id(s).',
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: [
      { id: '1', title: 'First item', content: 'Content of the first item.' },
      { id: '2', title: 'Second item', content: 'Content of the second item.' },
      { id: '3', title: 'Third item', content: 'Content of the third item.' },
    ],
  },
}
