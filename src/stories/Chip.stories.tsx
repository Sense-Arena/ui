import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../components/chip';

export default {
  title: 'UI/Chip',
  component: Chip,
  argTypes: {
    size: {
      defaultValue: 'm',
      options: ['s', 'm', 'l'],
      control: {
        type: 'select',
      },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'warning', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => {
  return <Chip {...args}>{args.children}</Chip>;
};

export const Base = Template.bind({});
Base.args = {
  children: 'Default chip',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Chip size L',
  size: 'l',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'Chip size S',
  size: 's',
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  children: 'Chip Color secondary',
  color: 'secondary',
};

export const WarningColor = Template.bind({});
WarningColor.args = {
  children: 'Chip Color warning',
  color: 'warning',
};

export const DarkColor = Template.bind({});
DarkColor.args = {
  children: 'Chip Color dark',
  color: 'dark',
};

export const Deletable = Template.bind({});
Deletable.args = {
  children: 'Chip deletable',
  color: 'secondary',
  onDelete: () => {
    console.log('test');
  },
};
