import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from '../../components/icon-button';
import { TextField } from '../../components/inputs';
import { SearchIcon } from '../../icons';

const meta = {
  title: 'UI/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write',
  },
};
export const WithIcon: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    endIcon: <SearchIcon />,
  },
};

export const WithIconButton: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    endAdornment: (
      <IconButton>
        <SearchIcon />
      </IconButton>
    ),
  },
};

export const Filled: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write',
    value: 'Konstantin',
  },
};

export const Disabled: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum',
  },
};
export const ErrorFilled: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum',
  },
};
