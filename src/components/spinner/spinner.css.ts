import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const spin = keyframes({
  '0%': {
    boxShadow: '.2em 0px 0 0px currentcolor',
  },
  '12%': {
    boxShadow: '.2em .2em 0 0 currentcolor',
  },
  '25%': {
    boxShadow: '0 .2em 0 0px currentcolor',
  },
  '37%': {
    boxShadow: '-.2em .2em 0 0 currentcolor',
  },
  '50%': {
    boxShadow: '-.2em 0 0 0 currentcolor',
  },
  '62%': {
    boxShadow: '-.2em -.2em 0 0 currentcolor',
  },
  '75%': {
    boxShadow: '0px -.2em 0 0 currentcolor',
  },
  '87%': {
    boxShadow: '.2em -.2em 0 0 currentcolor',
  },
  '100%': {
    boxShadow: '.2em 0px 0 0px currentcolor',
  },
});

export const spinnerStyle = recipe({
  base: {
    transform: 'rotateZ(45deg)',
    perspective: '1000px',
    borderRadius: '50%',
    color: 'currentcolor',
    flexShrink: 0,
    selectors: {
      '&:before': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'inherit',
        height: 'inherit',
        borderRadius: '50%',
        transform: 'rotateX(70deg)',
        animation: `1s ${spin} linear infinite`,
      },
      '&:after': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'inherit',
        height: 'inherit',
        borderRadius: '50%',
        animation: `1s ${spin} linear infinite`,
        color: vars.colors.redDarken,
        transform: 'rotateY(70deg)',
        animationDelay: '.4s',
      },
    },
  },
  variants: {
    size: {
      s: {
        width: '14px',
        height: '14px',
      },
      m: {
        width: '24px',
        height: '24px',
      },
      l: {
        width: '48px',
        height: '48px',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});
