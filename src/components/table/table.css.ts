import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const table = style({
  width: '100%',
  borderSpacing: 0,
  borderCollapse: 'collapse',
});

const tHead = style({});

const tBody = style({});

const tRow = style({});

const tCell = style({});

const tCellM = recipe({
  base: {
    padding: '0.75rem',
    boxSizing: 'border-box',
  },
  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    minWidth: {
      true: {
        width: 1,
      },
    },
    withoutPadding: {
      all: {
        padding: 0,
      },
      top: {
        paddingTop: 0,
      },
      bottom: {
        paddingBottom: 0,
      },
    },
  },
});

globalStyle(`${tHead} ${tRow}`, {
  borderBottom: `1px solid ${vars.colors.grey}`,
});

globalStyle(`${tBody} ${tRow}`, {
  borderBottom: `1px dashed ${vars.colors.grey}`,
});

globalStyle(`${tBody} ${tCell}`, {
  height: 73,
});

globalStyle(`${tHead} ${tCell}`, {
  padding: '1.5em 0.75em',
});

globalStyle(`${tRow} ${tCell}:last-child`, {
  paddingRight: 0,
});

globalStyle(`${tRow} ${tCell}:first-child`, {
  paddingLeft: 0,
});

export const tableStyles = {
  table,
  tHead,
  tBody,
  tRow,
  tCell,
  tCellM,
};
