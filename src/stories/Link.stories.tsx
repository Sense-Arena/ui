import { Meta, StoryObj } from '@storybook/react';
import { Link } from '../components/link';

const meta = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Go to store',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Edit',
    variant: 'secondary',
  },
};
