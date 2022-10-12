import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '../components/alert';
import { Paragraph } from '../components/typography';

export default {
  title: 'UI/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Base = Template.bind({});
Base.args = {
  severity: 'error',
  children: <Paragraph variant="caption">This is an error alert — check it out!</Paragraph>,
};
export const LongGrid = Template.bind({});
LongGrid.args = {
  severity: 'error',
  children: (
    <Paragraph>
      This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
      This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
      This is an error alert — check it out!
    </Paragraph>
  ),
};
