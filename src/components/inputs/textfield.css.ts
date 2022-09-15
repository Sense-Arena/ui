import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

export const containerStyle = recipe({
  base: {
    width: '100%',
    height: '60px',
    minWidth: '25ch',
    display: 'inline-flex',
    position: 'relative',
    // TODO: with prop
    borderRadius: '10px',
    verticalAlign: 'top',
    cursor: 'text',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    fontFamily: vars.font.family,
    backgroundColor: vars.colors.white,
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
    error: {
      true: {
        border: `1px solid ${vars.colors.red}`,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      false: {
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.greyLight2,
          },
        },
      },
    },
    withEndAdornment: {
      true: {
        padding: '8px 4px 8px 16px',
      },
      false: {
        padding: '8px 16px',
      },
    },
  },
  defaultVariants: {
    border: 'grey',
  },
});

export const fieldWrap = style({
  display: 'inline-flex',
  flexDirection: 'column',
  width: '100%',
});
export const fieldEndAdornment = style({
  flexShrink: 0,
  alignSelf: 'center',
});

globalStyle(`${fieldEndAdornment} > svg`, {
  margin: '0 12px',
  display: 'block',
});

export const labelStyle = recipe({
  base: {
    color: vars.font.color,
    letterSpacing: 0,
    height: '24px',
    padding: 0,
    display: 'block',
    cursor: 'text',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 32px)',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  variants: {
    variant: {
      simple: {
        fontSize: '18px',
        lineHeight: '24px',
        transform: 'translateY(10px)',
      },
      focused: {
        fontSize: '14px',
        lineHeight: '20px',
        transform: 'translateY(0px)',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const inputStyle = recipe({
  base: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: 0,
    color: 'currentcolor',
    border: 0,
    boxSizing: 'content-box',
    background: 'none',
    margin: 0,
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    minWidth: 0,
    width: '100%',
    padding: 0,
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  variants: {
    variant: {
      simple: {
        opacity: 0,
      },
      focused: {
        opacity: 1,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
      false: {
        selectors: {
          '&:focus:not(:disabled)': {
            outline: 0,
            caretColor: vars.colors.red,
          },
        },
      },
    },
  },
});

export const errorHintStyle = style({
  margin: '0 0 8px 14px !important',
});
