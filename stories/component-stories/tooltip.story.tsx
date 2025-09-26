import { type Meta, type StoryObj } from '@storybook/react'
import { Tooltip } from '@/core/components/tooltip'
import { HelpCircle } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip** is a component that displays additional information when users hover or focus on an element.  
It uses \`react-aria-components\` under the hood to provide accessibility and keyboard support.`,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Main title of the tooltip' },
    description: { control: 'text', description: 'Optional supporting description' },
    arrow: { control: 'boolean', description: 'Show the arrow indicator' },
    delay: { control: 'number', description: 'Delay before showing tooltip (ms)' },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top start', 'top end', 'bottom start', 'bottom end'],
      description: 'Tooltip placement relative to trigger',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    title: 'Tooltip Title',
    description: 'This is a description for the tooltip.',
    arrow: false,
    delay: 300,
    children: <span className='underline cursor-pointer'>Hover or focus me</span>,
  },
}

export const WithArrow: Story = {
  args: {
    title: 'Tooltip Title',
    description: 'This is a description for the tooltip with an arrow.',
    arrow: true,
    delay: 300,
    children: <span className='underline cursor-pointer'>Hover or focus me</span>,
  },
}

export const NoDescription: Story = {
  args: {
    title: 'Tooltip Title',
    arrow: true,
    delay: 300,
    children: <span className='underline cursor-pointer'>Hover or focus me</span>,
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Tooltip with Icon',
    description: 'This tooltip is triggered by an icon.',
    arrow: true,
    delay: 300,
    children: <HelpCircle className='h-4.5 w-4.5 cursor-pointer' />,
  },
}

export const PlacementPreview: Story = {
  render: () => {
    const placement = ['top left', 'top', 'top right', 'bottom right', 'bottom', 'bottom left', 'left', 'right'] as const

    return (
      <div className='grid grid-cols-3 gap-12'>
        {placement.map((side, index) => (
          <div key={index} className='flex flex-col items-center justify-center gap-1 text-center'>
            <Tooltip placement={side} title={`Tooltip on ${side}`}>
              <HelpCircle className='h-4.5 w-4.5 cursor-pointer' />
            </Tooltip>
            <span className='text-xs whitespace-nowrap text-secondary capitalize'>{side}</span>
          </div>
        ))}
      </div>
    )
  },
}
