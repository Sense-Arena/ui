import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../components/dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Dropdown>;

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

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Base = Template.bind({});
Base.args = {
  selectedOption: { title: '1', value: '1' },
  onSelect: console.debug,
  options,
};
export const LongValue = Template.bind({});
LongValue.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
  error: true,
};