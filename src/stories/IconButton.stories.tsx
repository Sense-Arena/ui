import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { IconButton } from '../components/icon-button';
import { TrophyIcon } from '../icons';

const meta = {
  title: 'UI/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

const Template: StoryFn<typeof IconButton> = args => <IconButton {...args} children={<TrophyIcon />} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  color: 'secondary',
  size: 's',
};

export const SmallSizeLoading = Template.bind({});
SmallSizeLoading.args = {
  color: 'secondary',
  size: 's',
  loading: true,
};
