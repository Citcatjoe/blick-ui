import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost']
    },
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Bouton Primary'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Bouton Secondary'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Bouton Outline'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Bouton Ghost'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Petit bouton'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Bouton moyen'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Grand bouton'
  }
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Bouton pleine largeur'
  },
  parameters: {
    layout: 'padded'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Bouton désactivé'
  }
}
