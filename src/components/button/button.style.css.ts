import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

export const btnStyle = recipe({
  base: {
    color: vars.colors.white,
    padding: '0 16px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    fontFamily: vars.font.family,
    flexShrink: 0,
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
  variants: {
    size: {
      s: {
        height: '36px',
        minWidth: '90px',
      },
      m: {
        height: '48px',
        minWidth: '148px',
      },
      l: {
        height: '64px',
        minWidth: '199px',
        '@media': {
          'screen and (max-width: 768px)': {
            height: '48px',
            minWidth: '148px',
            borderRadius: '24px',
          },
        },
      },
    },
    color: {
      primary: {
        background: `linear-gradient(270deg, #F33F05 0%, ${vars.colors.red} 100%)`,
        selectors: {
          '&:hover:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.red} 0%, ${vars.colors.red} 100%)`,
          },
          '&:active:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.redDarken} 0%, ${vars.colors.redDarken} 100%)`,
            transform: 'translateY(2px)',
          },
        },
      },
      secondary: {
        background: `linear-gradient(270deg, ${vars.colors.blackMetal} 0%, ${vars.colors.blackMetal} 100%)`,
        selectors: {
          '&:hover:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.black} 0%, ${vars.colors.black} 100%)`,
          },
          '&:active:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.text} 0%, ${vars.colors.text} 100%)`,
            transform: 'translateY(2px)',
          },
        },
      },
      secondary_action: {
        background: `linear-gradient(270deg, ${vars.colors.greyDark} 0%, ${vars.colors.greyDark} 100%)`,
        color: vars.colors.blackMetal,
        selectors: {
          '&:hover:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.greyLight} 0%, ${vars.colors.greyLight} 100%)`,
          },
          '&:active:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.grey} 0%, ${vars.colors.grey} 100%)`,
            transform: 'translateY(2px)',
          },
        },
      },
      outline: {
        background: 'transparent',
        color: vars.colors.blackMetal,
        border: `1px solid ${vars.colors.blackMetal}`,
        selectors: {
          '&:hover:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.greyLight2} 0%, ${vars.colors.greyLight2} 100%)`,
          },
          '&:active:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.greyLight} 0%, ${vars.colors.greyLight} 100%)`,
            transform: 'translateY(2px)',
          },
        },
      },
      outline_secondary: {
        background: 'transparent',
        color: vars.colors.blackMetal,
        border: `1px solid ${vars.colors.grey}`,
        selectors: {
          '&:hover:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.greyLight2} 0%, ${vars.colors.greyLight2} 100%)`,
          },
          '&:active:not(:disabled)': {
            background: `linear-gradient(270deg, ${vars.colors.greyLight} 0%, ${vars.colors.greyLight} 100%)`,
            transform: 'translateY(2px)',
          },
        },
      },
    },
    mode: {
      rounded: {
        borderRadius: '999px',
      },
      square: {
        borderRadius: '10px',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        justifyContent: 'space-between',
      },
      false: {
        width: 'auto',
      },
    },
    minWidth: {
      true: {
        minWidth: 'auto',
      },
    },
  },
  defaultVariants: {
    size: 'm',
    color: 'primary',
    mode: 'rounded',
    fullWidth: false,
    minWidth: false,
  },
});

export const btnTxtStyle = recipe({
  base: {
    color: 'inherit',
    fontWeight: 500,
    letterSpacing: 0,
    textTransform: 'uppercase',
    margin: 'auto',
    flexShrink: 0,
  },
  variants: {
    size: {
      s: {
        fontSize: '14px',
        lineHeight: '16px',
      },
      m: {
        fontSize: '16px',
        lineHeight: '19px',
      },
      l: {
        fontSize: '18px',
        lineHeight: '22px',
      },
    },
    fullWidth: {
      true: {
        margin: 'auto 0',
      },
    },
    color: {
      primary: {},
      secondary: {},
      secondary_action: {
        textTransform: 'unset',
      },
      outline: {},
      outline_secondary: {},
    },
  },
  defaultVariants: {
    size: 'm',
    fullWidth: false,
  },
});

export const btnIconStyle = recipe({
  base: {
    margin: 'auto auto auto 24px',
    fontSize: '22px',
  },
  variants: {
    color: {
      primary: {
        color: 'inherit',
      },
      secondary: {
        color: vars.colors.red,
      },
      secondary_action: {
        color: vars.colors.blackMetal,
      },
      outline: {
        color: vars.colors.blackMetal,
      },
      outline_secondary: {
        color: vars.colors.blackMetal,
      },
    },
    fullWidth: {
      true: {
        margin: 'auto 0',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    fullWidth: false,
  },
});
export const btnIconBase = style({});

globalStyle(`${btnIconBase} svg`, {
  display: 'block',
});
