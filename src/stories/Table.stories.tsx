import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table, TCell, TBody, THead, TRow } from '../components/table';
import { IconButton } from '../components/icon-button';
import { RepeatIcon } from '../icons';

export default {
  title: 'UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => {
  return (
    <Table>
      <THead>
        <TRow>
          <TCell withoutPadding="top">Name</TCell>
          <TCell withoutPadding="top">Progress</TCell>
          <TCell withoutPadding="top" minWidth>
            Action
          </TCell>
        </TRow>
      </THead>
      <TBody>
        <TRow>
          <TCell>Play tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>
            <IconButton color="secondary">
              <RepeatIcon />
            </IconButton>
          </TCell>
        </TRow>
        <TRow>
          <TCell>Puck tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>text</TCell>
        </TRow>
      </TBody>
    </Table>
  );
};

export const Base = Template.bind({});
Base.args = {};
