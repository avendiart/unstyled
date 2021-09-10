import { Meta, Story } from '@storybook/react'
import { Button } from './button'
import { Card, CardProps } from './card'
import { CardActions } from './card-actions'
import { CardContent } from './card-content'
import { Divider } from './divider'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    variant: 'primary',
  },
} as Meta<CardProps>

export const Default: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>Hello</CardContent>
    <Divider />
    <CardActions>
      <Button variant="primary">First</Button>
      <Button variant="secondary">Second</Button>
    </CardActions>
  </Card>
)
