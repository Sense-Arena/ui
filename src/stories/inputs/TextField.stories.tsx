import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '../../components/inputs';
import { SearchIcon } from '../../icons';

export default {
  title: 'UI/Inputs/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  name: 'first_name',
  placeholder: 'write',
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'First Name',
  name: 'first_name',
  endAdornment: <SearchIcon />,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'First Name',
  name: 'first_name',
  value: 'Konstantin',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'First Name',
  name: 'first_name',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Last Name',
  name: 'last_name',
  errorText: 'Error message lorem ipsum',
};
export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Last Name',
  name: 'last_name',
  value: 'AAAAAAAA',
  errorText: 'Error message lorem ipsum',
};
