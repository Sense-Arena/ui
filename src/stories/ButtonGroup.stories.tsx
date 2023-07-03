import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from '../components/button-group/ButtonGroup';
import { Button } from '../components/button/Button';

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    border: 'secondary',
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button size="s" color="secondary">
        kekw
      </Button>
      <Button size="s" color="primary">
        kekw
      </Button>
      <Button size="s" color="outline_secondary">
        kekw
      </Button>
    </ButtonGroup>
  ),
};
