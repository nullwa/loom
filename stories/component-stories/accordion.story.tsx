import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/core/components/accordion'

// Storybook metadata
const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Expandable and collapsible content section built on Radix UI primitives.
- Supports multiple variants: default, outline, solid
- Different indicators: arrow, plus, or none
- Smooth accordion animations using Radix state attributes
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Accordion behavior for expanding items.',
      table: {
        type: { summary: `'single' | 'multiple'` },
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Allows collapsing the active item if true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'solid'],
      description: 'Visual style of the accordion items.',
      table: {
        type: { summary: `'default' | 'outline' | 'solid'` },
        defaultValue: { summary: 'default' },
      },
    },
    indicator: {
      control: 'select',
      options: ['arrow', 'plus', 'none'],
      description: 'What icon indicator appears on the trigger.',
      table: {
        type: { summary: `'arrow' | 'plus' | 'none'` },
        defaultValue: { summary: 'arrow' },
      },
    },
  },
  args: {
    type: 'single',
    collapsible: true,
    variant: 'solid',
    indicator: 'arrow',
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

// Default story
export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'solid',
    indicator: 'plus',
    items: [
      {
        id: '1',
        title: 'product information',
        content: (
          <div>
            <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
            <p className='pt-0.5'>Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.</p>
          </div>
        ),
      },
      {
        id: '2',
        title: 'shipping details',
        content: (
          <div>
            <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.</p>
            <p className='pt-0.5'>Track your shipment in real-time through our dedicated tracking portal.</p>
          </div>
        ),
      },
      {
        id: '3',
        title: 'return policy',
        content: (
          <div>
            <p>We stand behind our products with a comprehensive 30-day return policy. If {"you're"} not completely satisfied, simply return the item in its original condition.</p>
            <p>full refunds processed within 48 hours of receiving the returned item.</p>
          </div>
        ),
      },
    ],
  },
}
