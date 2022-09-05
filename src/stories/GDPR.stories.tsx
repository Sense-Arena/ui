import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GDPR } from '../components/gdpr';

export default {
  title: 'UI/GDPR',
  component: GDPR,
  argTypes: {},
} as ComponentMeta<typeof GDPR>;

const Template: ComponentStory<typeof GDPR> = args => <GDPR {...args} />;

export const Base = Template.bind({});
Base.args = {
  onSave: console.debug,
};
