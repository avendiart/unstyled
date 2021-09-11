import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    variant: 'primary',
  },
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>

Default.storyName = 'Button'
