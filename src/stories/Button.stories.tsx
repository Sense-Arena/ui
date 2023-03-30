import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../components/button/Button';
import { ArrowRightCircle } from '../icons';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    fullWidth: {
      type: 'boolean',
    },
    minWidth: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
};
export const SecondaryAction: Story = {
  args: {
    children: 'Button',
    color: 'secondary_action',
    mode: 'square',
  },
};
export const Outline: Story = {
  args: {
    children: 'Button',
    color: 'outline',
  },
};
export const OutlineSecondary: Story = {
  args: {
    children: 'Button',
    color: 'outline_secondary',
  },
};
export const PrimaryBig: Story = {
  args: {
    children: 'Button',
    size: 'l',
  },
};
export const PrimarySmall: Story = {
  args: {
    children: 'Button',
    size: 's',
  },
};

export const Loading: Story = {
  args: {
    children: 'Test long description',
    loading: true,
  },
};

export const SquareMinWidth: Story = {
  args: {
    minWidth: true,
    mode: 'square',
    children: 'Button',
  },
};

export const SquareFullWidth: Story = {
  args: {
    fullWidth: true,
    mode: 'square',
    children: 'Button',
    icon: <ArrowRightCircle />,
  },
};
