import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Button } from '../components/button';
import { ShowMore } from '../components/show-more';

const meta = {
  title: 'UI/ShowMore',
  component: ShowMore,
  tags: ['autodocs'],
} satisfies Meta<typeof ShowMore>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ShowMore> = args => {
  return (
    <div style={{ position: 'relative' }}>
      <ShowMore items={args.items} visible={args.visible} />
    </div>
  );
};

export const Base: Story = {
  args: {
    visible: 2,
    items: [
      { key: '1', child: <Button>kek</Button> },
      { key: '2', child: <Button>kek2</Button> },
      { key: '3', child: <Button>kek3</Button> },
      { key: '4', child: <Button>kek4</Button> },
    ],
  },
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const showMore = canvas.getByText(/show all/i);

    userEvent.click(showMore);

    canvas.findByText(/kek3/i);
    canvas.findByText(/kek4/i);
  },
};
