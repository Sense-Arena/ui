import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

const meta = {
  title: 'UI/Inputs/CheckboxField',
  component: CheckboxField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof CheckboxField>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CheckboxField> = props => {
  const [{ firstChecked, secondChecked }, setChecked] = useState({ firstChecked: true, secondChecked: true });
  return (
    <Stack direction="column">
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...props} checked={firstChecked} onChange={c => setChecked({ firstChecked: c, secondChecked })} />
      </StackItem>
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...props} checked={secondChecked} onChange={c => setChecked({ firstChecked, secondChecked: c })} />
      </StackItem>
    </Stack>
  );
};

export const Field: Story = {
  args: {
    label: 'First Name',
    inputProps: {
      name: 'first_name',
    },
  },
  render: Template,
};
export const Row: Story = {
  args: {
    label: 'First Name',
    inputProps: {
      name: 'first_name',
    },
    variant: 'row',
  },
  render: Template,
};
