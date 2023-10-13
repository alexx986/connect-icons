import type { Meta,StoryObj } from '@storybook/react'

import ArrowIcon from './index'

const meta: Meta<typeof ArrowIcon> = {
  title: 'Icon/ArrowIcon',
  component: ArrowIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const IconColor: Story = {
  args: {
    width: '20px',
    height: '20px',
    fill: 'red'
  }
}
