import { Stack } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { RadioField } from '../../components/inputs';

export default {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = args => {
  const [checked, setChecked] = useState(1);
  return (
    <Stack direction="row" spacing={1}>
      <RadioField {...args} checked={checked === 0} onChange={() => setChecked(0)} />
      <RadioField {...args} checked={checked === 1} onChange={() => setChecked(1)} />
    </Stack>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
