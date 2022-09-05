import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/icon-button';

export default {
  title: 'UI/Icon Button',
  component: IconButton,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
