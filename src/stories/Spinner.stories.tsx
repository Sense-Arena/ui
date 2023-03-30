import { Meta, StoryFn } from '@storybook/react';
import { Spinner } from '../components/spinner';

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;
export default meta;

const Template: StoryFn<typeof Spinner> = args => (
  <div style={{ color: 'white', backgroundColor: 'grey', padding: '1rem' }}>
    <Spinner {...args} />
  </div>
);

export const Base = Template.bind({});
