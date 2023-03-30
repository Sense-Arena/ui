import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/alert';
import { Paragraph } from '../components/typography';

const meta = {
  title: 'UI/Alert',
  tags: ['autodocs'],
  component: Alert,
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    severity: 'error',
    children: <Paragraph variant="caption">This is an error alert — check it out!</Paragraph>,
  },
};
export const LongGrid: Story = {
  args: {
    severity: 'error',
    children: (
      <Paragraph>
        This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
        This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
        This is an error alert — check it out!
      </Paragraph>
    ),
  },
};
