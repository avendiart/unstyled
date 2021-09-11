import { Meta, Story } from '@storybook/react'
import { CardContent, CardContentProps } from './card-content'

export default {
  title: 'Components/CardContent',
  component: CardContent,
  args: {
    variant: 'primary',
  },
} as Meta<CardContentProps>

export const Default: Story<CardContentProps> = (args) => <CardContent {...args}>Hello</CardContent>

Default.storyName = 'CardContent'
