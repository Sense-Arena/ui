import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/divider/Divider';

const meta = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const Middle: Story = {
  args: {
    variant: 'middle',
  },
};
export const WithChildren: Story = {
  args: {
    children: 'Divider',
  },
};
