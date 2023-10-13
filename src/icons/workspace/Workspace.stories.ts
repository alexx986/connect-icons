import type { StoryObj,Meta } from '@storybook/react'

import Workspace from './index'

const meta: Meta<typeof Workspace>= {
  title: 'Icon/WorkspaceIcon',
  component: Workspace,
  tags: ['autodocs'],
  argTypes: {
    fill: { control: 'color' },
    width: { control: 'text'}
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AbastoIcon: Story = {
  args: {
    width: '40px',
    height: '40px',
    fill: '#FF625F'
  }
}
