import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/dropdown';

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    title: '1',
    value: '1',
  },
  {
    title: '2',
    value: '2',
  },
  {
    title: '3',
    value: '3',
  },
  {
    title: '4',
    value: '4',
  },
  {
    title: '5',
    value: '5',
  },
];

export const Base: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onSelect: console.debug,
    options,
    border: 'grey',
  },
};
export const LongValue: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel:
      'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onSelect: console.debug,
    options,
  },
};
export const Disabled: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    error: true,
    border: 'grey',
  },
};

export const Small: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 's',
  },
};

export const Large: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l',
  },
};

export const FullWidth: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l',
    fullWidth: true,
  },
};
