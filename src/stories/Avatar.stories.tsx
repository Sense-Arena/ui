import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../components/avatar/Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Base = Template.bind({});
Base.args = {
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};
export const Large = Template.bind({});
Large.args = {
  size: 'l',
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};
export const HeavyImg = Template.bind({});
HeavyImg.args = {
  size: 'l',
  src: 'https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg',
};
