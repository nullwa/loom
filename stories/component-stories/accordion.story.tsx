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
      control: { type: 'object' },
      description: 'Array of accordion items. Each item must have `id`, `title`, and `content`.',
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Whether the accordion can be collapsed.',
    },
    keepOpen: {
      control: { type: 'boolean' },
      description: 'Collapse Multiple at a time.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    collapsible: true,
    keepOpen: false,
    items: [
      { id: '1', title: <p>First item</p>, content: 'Content of the first item.' },
      { id: '2', title: <p>Second item</p>, content: 'Content of the second item.' },
      { id: '3', title: <p>Third item</p>, content: 'Content of the third item.' },
    ],
  },
}
