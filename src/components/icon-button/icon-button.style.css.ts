import { vars } from '../../theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const iconBtnStyle = recipe({
  base: {
    height: '48px',
    width: '48px',
    minHeight: '48px',
    minWidth: '48px',
    outline: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    borderRadius: '10px',
    fontSize: '24px',
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
  },
  defaultVariants: {
    color: 'primary',
  },
});
