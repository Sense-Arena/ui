import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '../components/skeleton/Skeleton';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args}>Content after loading</Skeleton>;

export const Base = Template.bind({});
Base.args = {
  loading: true,
  count: 5,
};
