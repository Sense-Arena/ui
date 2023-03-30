import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../components/typography';

const meta = {
  title: 'UI/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      defaultValue: 'body',
      options: ['perex', 'body', 'caption', 'note'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Perex: Story = {
  args: {
    children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
    variant: 'perex',
  },
};

export const Body: Story = {
  args: {
    children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
  },
};
export const Caption: Story = {
  args: {
    children: 'Vice President, Athlete Care, New Jersey Devils',
    variant: 'caption',
  },
};
export const Note: Story = {
  args: {
    children: 'Error message lorem ipsum',
    variant: 'note',
  },
};

export const Label: Story = {
  args: {
    children: 'Error message lorem ipsum',
    variant: 'label',
  },
};
