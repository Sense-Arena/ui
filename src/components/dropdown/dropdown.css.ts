import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

export const ddContainerStyle = recipe({
  base: {
    height: '48px',
    width: 'fit-content',
    minWidth: '77px',
    borderRadius: '8px',
    fontFamily: vars.font.family,
    backgroundColor: vars.colors.white,
    userSelect: 'none',
    position: 'relative',
    cursor: 'pointer',
    padding: '14px',
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
      '&:focus': {
        border: `2px solid ${vars.colors.blackMetal}`,
      },
      '&:hover': {
        backgroundColor: vars.colors.greyLight2,
      },
    },
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        selectors: {
          '&:focus': {
            border: `1px solid ${vars.colors.blackMetal}`,
          },
          '&:hover': {
            backgroundColor: vars.colors.white,
          },
        },
      },
    },
    error: {
      true: {
        border: `1px solid ${vars.colors.red}`,
        selectors: {
          '&:focus': {
            border: `1px solid ${vars.colors.red}`,
          },
        },
      },
    },
    opened: {
      true: {
        backgroundColor: vars.colors.greyLight2,
      },
    },
  },
});

export const ddIconStyle = style({
  marginLeft: '18px',
});
export const ddMenuStyle = style({
  position: 'absolute',
  top: '58px',
  left: '0',
  zIndex: vars.zIndex.dropdown,
  fontFamily: vars.font.family,
  maxHeight: '180px',
  minHeight: '38px',
  minWidth: '77px',
  borderRadius: '8px',
  backgroundColor: vars.colors.white,
  overflowX: 'hidden',
  overflowY: 'auto',
  boxShadow: `0 2px 20px -5px rgba(0,0,0,0.5)`,
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
