import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

export const containerStyle = recipe({
  base: {
    width: '100%',
    height: '60px',
    minWidth: '25ch',
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'top',
    cursor: 'text',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    fontFamily: vars.font.family,
    backgroundColor: vars.colors.white,
    '@media': {
      'screen and (max-width: 480px)': {
        minWidth: '15ch',
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
        padding: '0 4px 0 0',
      },
      false: {
        padding: '0',
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
    border: 'grey',
    bRadius: 10,
  },
});

export const fieldWrap = style({
  width: '100%',
  position: 'relative',
});
export const fieldEndAdornment = style({
  flexShrink: 0,
  alignSelf: 'center',
});

export const fieldEndIcon = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 16,
  display: 'block',
  pointerEvents: 'none',
});

globalStyle(`${fieldEndIcon} > svg`, {
  display: 'block',
});

export const labelStyle = recipe({
  base: {
    color: vars.colors.text,
    letterSpacing: 0,
    height: '24px',
    padding: 0,
    paddingLeft: 16,
    display: 'block',
    cursor: 'text',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 32px)',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    pointerEvents: 'none',
  },
  variants: {
    variant: {
      simple: {
        fontSize: '18px',
        lineHeight: '24px',
        transform: 'translateY(16px)',
      },
      focused: {
        fontSize: '14px',
        lineHeight: '20px',
        transform: 'translateY(8px)',
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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '24px 16px 4px',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: 0,
    color: 'currentcolor',
    border: 0,
    background: 'none',
    margin: 0,
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    minWidth: 0,
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
    withIcon: {
      true: {
        paddingRight: 52,
      },
    },
  },
});

export const errorHintStyle = style({
  margin: '0 0 8px 14px !important',
});
