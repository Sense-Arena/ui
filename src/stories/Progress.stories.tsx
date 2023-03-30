import { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../components/progress';

const meta = {
  title: 'UI/Progress',
  tags: ['autodocs'],
  component: Progress,
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    value: 50,
  },
};
