import { Meta, Story } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export const Default: Story = () => <Button>Hello</Button>
