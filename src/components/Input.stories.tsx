import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    fullWidth: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Entrez du texte...'
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom'
  }
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'exemple@blick.ch',
    helperText: 'Nous ne partagerons jamais votre email'
  }
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'exemple@blick.ch',
    error: 'Adresse email invalide'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Petit input',
    placeholder: 'Texte...'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Input moyen',
    placeholder: 'Texte...'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Grand input',
    placeholder: 'Texte...'
  }
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Input pleine largeur',
    placeholder: 'Entrez du texte...'
  },
  parameters: {
    layout: 'padded'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input désactivé',
    placeholder: 'Non disponible'
  }
}
