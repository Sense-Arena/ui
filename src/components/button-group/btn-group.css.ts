import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const group = style({});

const container = recipe({
  base: {
    display: 'flex',
    width: 'min-content',
    overflow: 'hidden',
  },
  variants: {
    mode: {
      rounded: {
        borderRadius: '999px',
      },
      square: {
        borderRadius: '10px',
      },
    },
    border: {
      primary: {
        border: `1px solid ${vars.colors.red}`,
      },
      secondary: {
        border: `1px solid ${vars.colors.blackMetal}`,
      },
      light: {
        border: `1px solid ${vars.colors.grey}`,
      },
    },
  },
  defaultVariants: {
    mode: 'square',
  },
});

const groupRec = recipe({
  base: {
    ':last-of-type': {
      borderRight: 'none',
    },
  },
  variants: {
    border: {
      primary: {
        borderRight: `1px solid ${vars.colors.red}`,
      },
      secondary: {
        borderRight: `1px solid ${vars.colors.blackMetal}`,
      },
      light: {
        borderRight: `1px solid ${vars.colors.grey}`,
      },
    },
  },
});

globalStyle(`${group} > *`, {
  borderRadius: '0 !important',
  border: 'none !important',
});
globalStyle(`${group} > *:active:not(:disabled)`, {
  transform: 'none !important',
});
export const btnGrpStyles = { container, group, groupRec };
