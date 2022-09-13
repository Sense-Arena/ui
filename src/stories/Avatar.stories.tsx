import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../components/avatar/Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
  name: 'Test Image',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
  name: 'Test Image',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  name: 'Test Image',
};

export const WithoutImageSmall = Template.bind({});
WithoutImageSmall.args = {
  size: 's',
  name: 'Test Image',
};
