import { Meta, Story } from '@storybook/react'
import { Button } from './button'
import { CardActions, CardActionsProps } from './card-actions'

export default {
  title: 'Components/CardActions',
  component: CardActions,
  args: {
    variant: 'primary',
  },
} as Meta<CardActionsProps>

export const Default: Story<CardActionsProps> = (args) => (
  <CardActions {...args}>
    <Button variant="primary">First</Button>
    <Button variant="secondary">Second</Button>
  </CardActions>
)

Default.storyName = 'CardActions'
