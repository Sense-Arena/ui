import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { GDPR } from '../components/gdpr';
import { LS, LSKeys } from '../utils/local-store';

const meta = {
  title: 'UI/GDPR',
  component: GDPR,
  beforeEach: () => LS.deleteItem(LSKeys.CookieConsent),
  tags: ['autodocs'],
  args: { onSave: fn() },
} satisfies Meta<typeof GDPR>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const edit = await canvas.findByRole('button', { name: /edit settings/i });

    await userEvent.click(edit);

    const body = within(document.body);
    await body.findByRole('heading', { name: /information about cookies/i });
    const acceptAll = body.getAllByRole('button', { name: /accept all/i }).at(-1)!;

    await userEvent.click(acceptAll);
    await expect(args.onSave).toHaveBeenCalledWith({ required: true, advertising: true, functional: true });
  },
};
