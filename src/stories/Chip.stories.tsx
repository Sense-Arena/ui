import { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/chip';

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      defaultValue: 'm',
      options: ['s', 'm', 'l'],
      control: {
        type: 'select',
      },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'warning', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Default chip',
  },
};

export const SizeLarge: Story = {
  args: {
    children: 'Chip size L',
    size: 'l',
  },
};

export const SizeSmall: Story = {
  args: {
    children: 'Chip size S',
    size: 's',
  },
};

export const SecondaryColor: Story = {
  args: {
    children: 'Chip Color secondary',
    color: 'secondary',
  },
};

export const WarningColor: Story = {
  args: {
    children: 'Chip Color warning',
    color: 'warning',
  },
};

export const DarkColor: Story = {
  args: {
    children: 'Chip Color dark',
    color: 'dark',
  },
};

export const Deletable: Story = {
  args: {
    children: 'Chip deletable',
    color: 'secondary',
    onDelete: () => {
      console.log('test');
    },
  },
};
