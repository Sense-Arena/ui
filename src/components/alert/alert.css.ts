import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const alertContainer = recipe({
  base: {
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '.5rem',
    boxShadow: 'none',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))',

    display: 'flex',
    padding: '6px 16px',
    color: vars.colors.white,
  },
  variants: {
    severity: {
      error: {
        backgroundColor: vars.colors.redDarken,
      },
      warning: {
        backgroundColor: vars.colors.orange,
      },
      info: {
        backgroundColor: vars.colors.blueCola,
      },
      success: {
        backgroundColor: vars.colors.green,
      },
    },
  },
});

const iconWrap = style({
  marginRight: '12px',
  padding: '7px 0px',
  display: 'flex',
  fontSize: '22px',
  opacity: 0.9,
});

const svg = style({
  userSelect: 'none',
  width: '24px',
  height: '24px',
  display: 'inline-block',
  fill: 'currentcolor',
  flexShrink: 0,
  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  fontSize: 'inherit',
});

const message = style({
  padding: '8px 0px',
  minWidth: 0,
  overflow: 'auto',
});

export const alertStyles = {
  alertContainer,
  iconWrap,
  svg,
  message,
};
