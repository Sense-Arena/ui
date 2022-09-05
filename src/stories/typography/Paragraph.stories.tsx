import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from '../../components/typography';

export default {
  title: 'UI/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      defaultValue: 'body',
      options: ['perex', 'body', 'caption', 'note'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => <Paragraph {...args} />;

export const Perex = Template.bind({});
Perex.args = {
  children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
  variant: 'perex',
};

export const Body = Template.bind({});
Body.args = {
  children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Vice President, Athlete Care, New Jersey Devils',
  variant: 'caption',
};

export const Note = Template.bind({});
Note.args = {
  children: 'Error message lorem ipsum',
  variant: 'note',
};

export const Label = Template.bind({});
Label.args = {
  children: 'Error message lorem ipsum',
  variant: 'label',
};
