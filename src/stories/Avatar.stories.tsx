import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/avatar/Avatar';

const meta = {
  title: 'UI/Avatar',
  tags: ['autodocs'],
  component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
  },
};

export const Large: Story = {
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
    size: 'l',
  },
};

export const HeavyImg: Story = {
  args: {
    size: 'l',
    src: 'https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg',
  },
};
