import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, beatae! Harum cupiditate perspiciatis voluptate perferendis. Quas, totam aliquam. Vero voluptates necessitatibus itaque. Praesentium, quisquam reiciendis saepe obcaecati eos soluta ratione.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
