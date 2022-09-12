import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from '../components/spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => (
  <div style={{ color: 'white', backgroundColor: 'grey', padding: '1rem' }}>
    <Spinner />
  </div>
);

export const Base = Template.bind({});
Base.args = {};
