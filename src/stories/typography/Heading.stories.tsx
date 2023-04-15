import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../components/typography';

const meta = {
  title: 'UI/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    weight: {
      name: 'weight',
      options: ['light', 'medium', 'normal', 'bold', 'semiBold'],
      control: {
        type: 'select',
      },
    },
    root: {
      name: 'Root component',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'select',
      },
    },
    variant: {
      name: 'Variant',
      options: ['headline', 'title', 'base', 'baseM', 'baseS'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'BECOME THE PLAYMAKER',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Your Cart',
    root: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Sense Arena Single Annual License',
    root: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    children: 'Shipping method',
    root: 'h4',
  },
};
