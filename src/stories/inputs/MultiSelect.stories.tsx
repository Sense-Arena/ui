import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from '../../components/inputs';

export default {
  title: 'UI/Inputs/MultiSelect',
  component: MultiSelect,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const options = [
  {
    title: 'Test option 1',
    value: '1',
  },
  {
    title: 'Test option 2',
    value: '2',
  },
  {
    title: 'Test option 3',
    value: '3',
  },
  {
    title: 'Test option 4',
    value: '4',
  },
  {
    title: 'Test option 5',
    value: '5',
  },
  {
    title: 'Test option 6',
    value: '6',
  },
  {
    title: 'Test option 7',
    value: '7',
  },
  {
    title: 'Test option 8',
    value: '8',
  },
  {
    title: 'Test option 9',
    value: '9',
  },
  {
    title: 'Test option 10',
    value: '10',
  },
];

const Template: ComponentStory<typeof MultiSelect> = args => {
  const [selected, setSelected] = useState<string[]>(args.selectedOptions as string[]);
  return (
    <MultiSelect
      options={options}
      onChangeSelect={values => setSelected(values)}
      label={args.label}
      border={args.border}
      selectedOptions={selected}
      disabled={args.disabled}
      errorText={args.errorText}
      fullWidth={args.fullWidth}
    />
  );
};

export const Base = Template.bind({});
Base.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  label: 'Title',
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  errorText: 'Error message text',
  border: 'grey',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  fullWidth: true,
  name: 'select',
};
