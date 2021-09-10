import { Meta, Story } from '@storybook/react'
import { Divider, DividerProps } from './divider'

export default {
  title: 'Components/Divider',
  component: Divider,
  args: {
    variant: 'primary',
  },
} as Meta<DividerProps>

export const Default: Story<DividerProps> = (args) => <Divider {...args} />
