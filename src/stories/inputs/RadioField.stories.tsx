import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

const meta = {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof RadioField>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RadioField> = args => {
  const [checked, setChecked] = useState(1);
  return (
    <Stack direction="row">
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 0} onChange={() => setChecked(0)} />
      </StackItem>
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 1} onChange={() => setChecked(1)} />
      </StackItem>
    </Stack>
  );
};

export const Base: Story = {
  args: {
    label: 'First Name',
    radioProps: {
      name: 'first_name',
    },
  },
  render: Template,
};
