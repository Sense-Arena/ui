import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

export const ddContainerStyle = recipe({
  base: {
    width: 'fit-content',
    minWidth: '77px',
    maxWidth: '100%',
    fontFamily: vars.font.family,
    backgroundColor: vars.colors.white,
    userSelect: 'none',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    border: `1px solid ${vars.colors.blackMetal}`,
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '22px',
    selectors: {
      '&:hover': {
        backgroundColor: vars.colors.greyLight2,
      },
    },
  },
  variants: {
    border: {
      black: {
        border: `1px solid ${vars.colors.blackMetal}`,
      },
      grey: {
        border: `1px solid ${vars.colors.grey}`,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.white,
          },
        },
      },
    },
    error: {
      true: {
        border: `1px solid ${vars.colors.red}`,
      },
    },
    opened: {
      true: {
        backgroundColor: vars.colors.greyLight2,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    size: {
      s: {
        height: '36px',
        padding: '6px 14px',
      },
      m: {
        height: '48px',
        padding: '14px',
      },
      l: {
        height: '60px',
        padding: '18px 14px',
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

export const ddText = style({
  whiteSpace: 'nowrap',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const ddIconStyle = style({
  marginLeft: '18px',
  display: 'block',
});
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
