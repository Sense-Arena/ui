import { style } from '@vanilla-extract/css';

export const stackItem = style({
  selectors: {
    '&:first-of-type': {
      margin: '0 !important',
    },
  },
});
