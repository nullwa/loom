import { type Meta, type StoryObj } from '@storybook/nextjs'
import { ProgressBar } from '@/core/components/progress-bar'

import Template from '@/templates/progress-bar.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/Progress-Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    value: {
      control: {type: 'number', min: 0, max: 100, step: 1},
      description: 'The current value of the progress bar.',
      table: {type: {summary: 'number'}, defaultValue: {summary: '0'}}
    },
    min: {
      control: {type: 'number'},
      description: 'The minimum value of the progress bar range.',
      table: {type: {summary: 'number'}, defaultValue: {summary: '0'}}
    },
    max: {
      control: {type: 'number'},
      description: 'The maximum value of the progress bar range.',
      table: {type: {summary: 'number'}, defaultValue: {summary: '100'}}
    },
    bandColor: {
      control: {type: 'select'},
      options: ['brand', 'error', 'success', 'warning', 'default'],
      description: 'The color variant of the progress bar.',
      table: {type: {summary: '\'brand\' | \'error\' | \'success\' | \'warning\' | \'default\''}, defaultValue: {summary: 'brand'}}
    },
    labelPosition: {
      control: {type: 'select'},
      options: ['right', 'bottom', 'top-floating', 'bottom-floating', undefined],
      description: 'Where the label (value text) is displayed relative to the bar.',
      table: {
        type: {summary: '\'right\' | \'bottom\' | \'top-floating\' | \'bottom-floating\' | undefined'},
        defaultValue: {summary: 'undefined'}
      }
    },
    valueFormatter: {
      control: false,
      description: 'Optional function to format the displayed value. Receives `(value, percentage)` and should return a string or number.',
      table: {type: {summary: '(value: number, percentage: number) => string | number'}}
    },
    className: {
      control: {type: 'text'},
      description: 'Additional CSS class for the wrapper element.',
      table: {type: {summary: 'string'}}
    },
    progressClassName: {
      control: {type: 'text'},
      description: 'Additional CSS class for the inner progress bar.',
      table: {type: {summary: 'string'}}
    }
  }
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  name: 'Playground',
  args: {
    value: 45,
    min: 0,
    max: 100,
    bandColor: 'brand',
    labelPosition: 'right',
    className: '',
    progressClassName: ''
  }
}
