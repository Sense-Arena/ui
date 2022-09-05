import { style } from '@vanilla-extract/css';

export const modalBox = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background:
    'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 12%, rgba(163,163,163,0) 50.32%, rgba(0,0,0,0.3) 85.64%, rgba(0,0,0,0.5) 100%)',
  padding: '0',
  borderRadius: '20px',
  transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  overflow: 'hidden',
  minWidth: '750px',
  '@media': {
    'screen and (max-width: 1085px)': {
      minWidth: '750px',
    },
    'screen and (max-width: 768px)': {
      minWidth: '500px',
    },
    'screen and (max-width: 520px)': {
      minWidth: '300px',
    },
  },
});
