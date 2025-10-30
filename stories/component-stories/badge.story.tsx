import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from '@/core/components/badge'
import { iconNames } from 'lucide-react/dynamic'

const meta: Meta<typeof Badge> = {
  title: 'components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Un Badge compact avec icône, compteur et option suppression. Parfait pour catégories, tags et notifs.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte affiché dans le badge.',
    },
    count: {
      control: 'number',
      description: 'Affiche un nombre à droite du texte.',
    },
    icon: {
      control: 'select',
      options: [...iconNames],
      description: 'Nom de l’icône Lucide.',
    },
    removable: {
      control: 'boolean',
      description: 'Affiche un bouton X pour supprimer le badge.',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback déclenché lors de la suppression.',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback lors du clic sur le badge.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'error', 'success', 'warning', 'brand', 'ghost'],
    },
    radius: {
      control: 'radio',
      options: ['pilled', 'squared'],
    },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    text: 'Badge',
    count: undefined,
    removable: false,
    icon: undefined,
    radius: 'squared',
    variant: 'brand',
  },
}
