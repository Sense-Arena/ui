import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const modalContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: vars.zIndex.modal,
});

const modalContentWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflowY: 'auto',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
});

const modalContent = recipe({
  base: {
    position: 'absolute',
    width: '100%',
    padding: '2rem',
    '@media': {
      'screen and (max-width: 480px)': {
        padding: '1rem',
      },
    },
  },
  variants: {
    size: {
      s: {
        maxWidth: 550,
      },
      m: {
        maxWidth: 980,
      },
      l: {
        maxWidth: '100%',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

const modalActionContainer = style({
  position: 'relative',
});

const modalAction = style({
  position: 'absolute',
  top: 16,
  right: 16,
});

const modalActionCloseIcon = style({
  width: 18,
  height: 18,
});

const cardHeader = style({
  // backgroundColor: '#ff00ff',
  paddingRight: '5rem !important',
});

export const modalStyles = {
  modalContainer,
  modalContent,
  modalContentWrapper,
  modalActionContainer,
  modalAction,
  modalActionCloseIcon,
  cardHeader,
};
