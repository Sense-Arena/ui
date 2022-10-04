import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css';

const translate = keyframes({
  '100%': { transform: 'translateX(100%)' },
});

const skeletonContainer = style({
  backgroundColor: vars.colors.grey,
  width: '100%',
  borderRadius: '0.5rem',
  display: 'inline-flex',
  lineHeight: 1,
  height: '1rem',
  marginTop: '1rem',

  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  selectors: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `linear-gradient(
        90deg,
        ${vars.colors.grey},
        ${vars.colors.greyLight2},
        ${vars.colors.grey}
      )`,
      transform: 'translateX(-100%)',
      animationName: translate,
      animationDirection: 'normal',
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
    },
  },
});

export const skeletonStyles = {
  skeletonContainer,
};
