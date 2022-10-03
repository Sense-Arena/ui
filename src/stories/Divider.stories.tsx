import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from '../components/divider/Divider';

export default {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Base = Template.bind({});
Base.args = {};
export const Middle = Template.bind({});
Middle.args = {
  variant: 'middle',
};
export const WithChildren = Template.bind({});
WithChildren.args = {
  children: 'Divider',
};
