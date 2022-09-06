import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { hex2rgba } from '../../theme/utils';

const cookieContainer = style([
  {
    fontFamily: vars.font.family,
    position: 'fixed',
    bottom: '16px',
    left: '16px',
    right: '16px',
    backgroundColor: vars.colors.white,
    borderRadius: '16px',
    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 40%)',
    color: vars.font.color,
    padding: '24px 16px 16px',
    display: 'grid',
    gridTemplateColumns: '1fr 0.2fr',
    columnGap: '16px',
    zIndex: vars.zIndex.gdpr,
    '@media': {
      'screen and (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr .5fr',
      },
    },
  },
]);

const cookieHead = style({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 600,
  marginBottom: '4px',
  marginTop: 0,
  letterSpacing: '0.5px',
});
const cookieText = style({
  fontSize: '14px',
  color: hex2rgba('#626262', 0.5),
  margin: 0,
});
const cookieLink = style({
  textDecoration: 'underline',
  fontSize: '14px',
  color: hex2rgba('#626262', 0.5),
});
const cookieBtns = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
globalStyle(`${cookieBtns} > button`, {
  margin: '8px 8px 0 0',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '8px 8px 0',
    },
  },
});

export const gdprStyles = {
  cookieContainer,
  cookieHead,
  cookieText,
  cookieLink,
  cookieBtns,
};