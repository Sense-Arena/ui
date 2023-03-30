import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../../components/inputs';

const meta = {
  title: 'UI/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write',
  },
};

export const Filled: Story = {
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'GON',
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
