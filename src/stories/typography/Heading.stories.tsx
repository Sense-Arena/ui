import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '../../components/typography';

export default {
  title: 'UI/Typography/Heading',
  component: Heading,
  argTypes: {
    weight: {
      name: 'weight',
      defaultValue: 'medium',
      options: ['light', 'medium'],
      control: {
        type: 'select',
      },
    },
    root: {
      name: 'Root component',
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'BECOME THE PLAYMAKER',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Your Cart',
  root: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Sense Arena Single Annual License',
  root: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'Shipping method',
  root: 'h4',
};
