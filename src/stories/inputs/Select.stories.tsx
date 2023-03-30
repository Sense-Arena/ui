import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '../../components/inputs';

const meta = {
  title: 'UI/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;
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

const ControlledTemplate: StoryFn<typeof Select> = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <Select
      border="grey"
      fullWidth
      name="controlled"
      selectedOption={value}
      selectedOptionLabel={options.find(item => item.value === value)?.title ?? 'Select option'}
      options={options}
      onChangeSelect={(value, name) => {
        setValue(value);
        console.log(value);
        console.log(name);
      }}
    />
  );
};

export const Base: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title',
  },
};

export const LongValue: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel:
      'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
  },
};

export const Disabled: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey',
  },
};
export const Small: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
  },
};
export const Large: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
  },
};

export const FullWidth: Story = {
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select',
  },
};

export const Controlled = ControlledTemplate.bind({});
