import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/skeleton/Skeleton';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    loading: true,
    count: 5,
    children: 'Content after loading',
  },
};
