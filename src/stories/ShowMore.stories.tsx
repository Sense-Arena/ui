import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button';
import { ShowMore } from '../components/show-more';

export default {
  title: 'UI/ShowMore',
  component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

const Template: ComponentStory<typeof ShowMore> = args => {
  return (
    <div style={{ position: 'relative' }}>
      <ShowMore
        items={[
          { key: '1', child: <Button>kek</Button> },
          { key: '2', child: <Button>kek2</Button> },
          { key: '3', child: <Button>kek2</Button> },
          { key: '4', child: <Button>kek2</Button> },
        ]}
        visible={args.visible}
      />
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  visible: 2,
};
