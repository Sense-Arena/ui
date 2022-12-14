import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const table = style({
  width: '100%',
  borderSpacing: 0,
  borderCollapse: 'collapse',
});

const tCell = recipe({
  base: {
    selectors: {
      '&:last-child': {
        paddingRight: 0,
      },
      '&:first-child': {
        paddingLeft: 0,
      },
    },
  },
  variants: {
    cellType: {
      head: {
        padding: '1.5em 0.75em',
        borderBottom: `1px solid ${vars.colors.grey}`,
      },
      body: {
        padding: '0.75rem',
        height: 73,
        borderBottom: `1px dashed ${vars.colors.grey}`,
      },
    },
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
  defaultVariants: {
    cellType: 'body',
  },
});

const withHover = recipe({
  variants: {
    hover: {
      true: {
        cursor: 'pointer',
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.greyLight,
          },
        },
      },
    },
  },
});

export const tableStyles = {
  table,
  tCell,
  withHover,
};
