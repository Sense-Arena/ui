import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

export const iconBtnStyle = recipe({
  base: {
    outline: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    fontFamily: vars.font.family,
    color: vars.colors.black,
    backgroundColor: 'transparent',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'rgba(215, 217, 223, .3)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'rgba(215, 217, 223, .3)',
        transform: 'translateY(1px)',
        outline: 'none',
        border: 'none',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
  variants: {
    color: {
      primary: {
        border: 'none',
        selectors: {
          '&:focus:not(:disabled)': {
            border: `2px solid ${vars.colors.red}`,
          },
        },
      },
      secondary: {
        border: `1px solid ${vars.colors.grey}`,
        selectors: {
          '&:focus:not(:disabled)': {
            border: `2px solid ${vars.colors.grey}`,
          },
        },
      },
    },
    size: {
      m: {
        height: '48px',
        width: '48px',
        minHeight: '48px',
        minWidth: '48px',
        fontSize: '24px',
        borderRadius: '10px',
      },
      s: {
        height: '36px',
        width: '36px',
        minHeight: '36px',
        minWidth: '36px',
        fontSize: '16px',
        borderRadius: '8px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'm',
  },
});
