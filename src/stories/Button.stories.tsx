import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  color: 'outline',
};
export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  children: 'Button',
  size: 'big',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button',
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Test long description',
  disabled: true,
};
