import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const container = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    padding: '.5rem',
    borderRadius: '50%',
    color: 'currentcolor',
    transition: 'background-color .2s ease',
    ':hover': {
      backgroundColor: 'rgba(228,2,45,0.08)',
    },
    '@media': {
      '(hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  variants: {
    checked: {
      true: {
        color: vars.colors.red,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        ':hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

const input = style({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
});

const containerIcons = style({
  position: 'relative',
  display: 'flex',
});

const svgRound = style({
  userSelect: 'none',
  width: '24px',
  height: '24px',
  display: 'inline-block',
  fill: 'currentcolor',
  flexShrink: 0,
  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  fontSize: '1.5rem',
  transform: 'scale(1)',
});
const svgInside = recipe({
  base: {
    userSelect: 'none',
    width: '24px',
    height: '24px',
    display: 'inline-block',
    fill: 'currentcolor',
    flexShrink: 0,
    fontSize: '1.5rem',
    position: 'absolute',
    left: 0,
  },
  variants: {
    checked: {
      true: {
        transform: 'scale(1)',
        transition: 'transform 150ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      },
      false: {
        transform: 'scale(0)',
        transition: 'transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms',
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const radioBtnStyles = {
  container,
  input,
  containerIcons,
  svgRound,
  svgInside,
};
