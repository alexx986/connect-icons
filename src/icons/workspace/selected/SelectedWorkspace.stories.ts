import type { StoryObj, Meta } from '@storybook/react'

import SelectedWorkspace from './index'

const meta: Meta<typeof SelectedWorkspace> = {
  title: 'Icon/Workspace/SelectedWorkspace',
  component: SelectedWorkspace,
  tags: ['autodocs'],
  argTypes: {
    fillCirle: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fillShadow: { control: 'color' },
    opacityCompass: {control: 'text'}
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
    fillCirle: '#FF625F',
    fillShadow:'#E65856'
  }
}

export const AbastoDisable: Story = {
  args: {
    width: '40px',
    height: '40px',
    fillCirle: '#FF8280',
    fillShadow:'#FF8280',
    opacityCompass: '0.32'
  }
}
