import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

export const ddMenuStyle = recipe({
  base: {
    position: 'absolute',
    left: '0',
    zIndex: vars.zIndex.dropdown,
    fontFamily: vars.font.family,
    maxHeight: '180px',
    minHeight: '38px',
    minWidth: '77px',
    backgroundColor: vars.colors.white,
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: `0 2px 20px -5px rgba(0,0,0,0.5)`,
  },
  variants: {
    size: {
      s: {
        top: '46px',
      },
      m: {
        top: '58px',
      },
      l: {
        top: '70px',
      },
    },
    bRadius: {
      10: {
        borderRadius: '10px',
      },
      8: {
        borderRadius: '8px',
      },
    },
  },
  defaultVariants: {
    size: 'm',
    bRadius: 10,
  },
});

export const ddMenuItemStyle = recipe({
  base: {
    padding: '8px 14px',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',

    selectors: {
      '&:hover': {
        backgroundColor: vars.colors.greyLight2,
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.colors.greyLight2,
      },
    },
  },
});
