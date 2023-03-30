import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { GDPR } from '../components/gdpr';
import { LS, LSKeys } from '../utils/local-store';
LS.deleteItem(LSKeys.CookieConsent);

const meta = {
  title: 'UI/GDPR',
  component: GDPR,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GDPR>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const edit = canvas.getByText(/edit settings/i);

    userEvent.click(edit);

    const acceptAll = canvas.getByText(/accept all/i);

    userEvent.click(acceptAll);
  },
};
