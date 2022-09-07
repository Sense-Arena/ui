import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components/card';
import { Button } from '../components/button';
import { Paragraph } from '../components/typography';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    withPadding: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  return (
    <div style={{ position: 'relative', backgroundColor: '#eceff9', height: '100vh', padding: 24 }}>
      <Card withPadding={args.withPadding} title={args.title} action={args.action}>
        {args.children}
      </Card>
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  title: 'Title',
  action: (
    <Button minWidth={true} mode="square" color="outline_secondary">
      Action
    </Button>
  ),
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};

export const WithoutTitleAndAction = Template.bind({});
WithoutTitleAndAction.args = {
  title: undefined,
  action: undefined,
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
  title: undefined,
  action: undefined,
  withPadding: false,
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};
