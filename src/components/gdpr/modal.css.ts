import { globalStyle, style } from '@vanilla-extract/css';
import { hex2rgba } from '../../theme/utils';
import { vars } from '../../theme/vars.css';

export const modalContainer = style({
  fontFamily: vars.font.family,
  borderRadius: '16px',
  backgroundColor: vars.colors.white,
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  overflowY: 'auto',
  maxHeight: '70vh',
  position: 'relative',
});

export const modalHead = style({
  fontSize: '24px',
  lineHeight: '28px',
  fontWeight: 600,
  marginBottom: '8px',
  marginTop: 0,
  color: '#626262',
  padding: '16px 16px 0',
  letterSpacing: '0.5px',
});
export const modalBtns = style({
  margin: '16px',
  display: 'flex',
  '@media': {
    'screen and (max-width: 768px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
globalStyle(`${modalBtns} > button`, {
  margin: '8px 8px 8px 0',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '8px',
    },
  },
});
export const modalText = style({
  fontSize: '18px',
  marginBottom: '4px',
  color: hex2rgba('#626262', 0.85),
  marginTop: 0,
  padding: '0 16px',
  lineHeight: '1.2',
});

export const modalLink = style({
  textDecoration: 'underline',
  fontSize: '18px',
  color: hex2rgba('#626262', 0.85),
  padding: '0 16px',
});
export const switchContainer = style({
  display: 'grid',
  gridTemplateColumns: '.1fr 1fr',
  color: hex2rgba('#626262', 0.85),
  marginBottom: '16px',
  columnGap: '16px',
  padding: '0 16px',
});

export const switchHead = style({
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '4px',
  marginTop: 0,
  letterSpacing: '0.5px',
  color: '#626262',
});
export const switchText = style({
  fontSize: '14px',
  marginBottom: '4px',
  color: hex2rgba('#626262', 0.85),
  marginTop: 0,
  lineHeight: '1.2',
});
export const stickySave = style({
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '0 16px',
  borderTop: `1px solid ${hex2rgba('#626262', 0.2)}`,
});
