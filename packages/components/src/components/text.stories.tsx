import { Meta, Story } from '@storybook/react'
import { Text, TextProps } from './text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    variant: 'primary',
  },
} as Meta<TextProps>

export const Default: Story<TextProps> = (args) => <Text {...args}>Hello</Text>

Default.storyName = 'Text'
