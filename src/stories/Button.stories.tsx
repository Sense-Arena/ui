import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button/Button';
import { ArrowRightCircle } from '../icons';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    fullWidth: {
      type: 'boolean',
    },
    minWidth: {
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
export const SecondaryAction = Template.bind({});
SecondaryAction.args = {
  children: 'Button',
  color: 'secondary_action',
  mode: 'square',
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  color: 'outline',
};
export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  children: 'Button',
  color: 'outline_secondary',
};
export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  children: 'Button',
  size: 'l',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button',
  size: 's',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Test long description',
  loading: true,
};

export const SquareMinWidth = Template.bind({});
SquareMinWidth.args = {
  minWidth: true,
  mode: 'square',
  children: 'Button',
};

export const SquareFullWidth = Template.bind({});
SquareFullWidth.args = {
  fullWidth: true,
  mode: 'square',
  children: 'Button',
  icon: <ArrowRightCircle />,
};
