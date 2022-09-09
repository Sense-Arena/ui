import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Progress } from '../components/progress';

export default {
  title: 'UI/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => {
  return <Progress value={args.value} />;
};

export const Base = Template.bind({});
Base.args = {
  value: 50,
};
