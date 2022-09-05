import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '../components/link';

export default {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Go to store',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Edit',
  variant: 'secondary',
};
