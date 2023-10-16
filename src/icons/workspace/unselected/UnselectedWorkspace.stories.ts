import type { StoryObj, Meta } from '@storybook/react'

import UnselectedWorkspace from './index'

const meta: Meta<typeof UnselectedWorkspace> = {
  title: 'Icon/Workspace/UnselectedWorkspace',
  component: UnselectedWorkspace,
  tags: ['autodocs'],
  argTypes: {
    fillCircle: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fillPath:{control:'color'}
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
    fillCircle: '#FF625F'
  }
}

export const DisableDark: Story = {
  args: {
    width: '40px',
    height: '40px',
    fillCircle: '#3F4366',
    fillPath:'#353957'
  }
}

export const DisableLight: Story = {
  args: {
    width: '40px',
    height: '40px',
    fillCircle: '#E8E8EA',
    fillPath:'#F0F0F1'
  }
}

