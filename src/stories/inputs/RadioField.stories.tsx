import { ComponentMeta, ComponentStory } from '@storybook/react';
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

const Template: ComponentStory<typeof RadioField> = args => (
  <>
    <RadioField {...args} />
    <RadioField {...args} />
  </>
);

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
