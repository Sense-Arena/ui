import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const container = recipe({
  base: {
    borderRadius: '50%',
    flexShrink: 0,
    border: '1px solid rgba(215,217,223,0.5)',
    overflow: 'hidden',
    padding: '4px',
  },
  variants: {
    bg: {
      white: {
        backgroundColor: vars.colors.white,
      },
    },
    size: {
      m: {
        width: '54px',
        height: '54px',
      },
      s: {
        width: '36px',
        height: '36px',
      },
      l: {
        width: '98px',
        height: '98px',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

const img = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '50%',
});

export const avatarStyles = {
  container,
  img,
};
