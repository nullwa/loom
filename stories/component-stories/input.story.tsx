import type { Meta, StoryObj } from '@storybook/nextjs'
import { Input } from '@/core/components/input'

import { iconNames } from 'lucide-react/dynamic'

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Composant Input de base pour les formulaires.'
      }
    }
  },
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['default', 'error', 'success', 'warning'],
      description: 'The variant style of the input.'
    },
    placeholder: {
      control: {type: 'text'},
      description: 'The placeholder text for the input.'
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input.'
    },
    radius: {
      control: {type: 'select'},
      options: ['squared', 'pilled'],
      description: 'The border radius of the input.'
    },
    addon: {
      control: {type: 'select'},
      options: [...iconNames],
      description: 'Optional addon to display before the input (text, icon, or React element).'
    },
    direction: {
      control: {type: 'radio'},
      options: ['left', 'right'],
      description: 'Position of the addon relative to the input.'
    },
    onValidateInput: {
      description: 'Activate the addon click when icon button to be clickable.'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'default',
    size: 'md',
    radius: 'squared',
    // addon: 'http://',
    direction: 'left'
  }
}
