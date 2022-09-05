import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';

export const iconBtnStyle = style({
  height: '48px',
  width: '48px',
  minHeight: '48px',
  minWidth: '48px',
  color: vars.colors.black,
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  borderRadius: '10px',
  fontSize: '24px',
  fontFamily: vars.font.family,
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'rgba(215, 217, 223, .3)',
    },
    '&:focus:not(:disabled)': {
      border: `2px solid ${vars.colors.red}`,
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
});
