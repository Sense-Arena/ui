import { createTheme, globalStyle, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    linkRed: '#E4032D',
    red: '#E4022D',
    redDarken: '#D30028',
    white: '#ffffff',
    black: '#000000',
    grey: '#D7D9DF',
    greyLight: '#F6F8FD',
    greyDark: '#E3E6EE',
    blackMetal: '#242424',
    cBlack: '#1C1C1C',
    ctaDark: '#292929',
    greyLight2: '#ECEFF9',
  },
  font: {
    family: 'Rubik, sans-serif',
    color: '#1C1C1C',
  },
  zIndex: {
    menu: '11000',
    menuSide: '11001',
    playerOverlay: '10999',
    modal: '10998',
    gdpr: '10997',
    dropdown: '9999',
    testimonialBanner: '1',
  },
});

globalStyle(`${themeClass}`, {
  fontFamily: vars.font.family,
  fontWeight: 400,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'initial',
  fontSize: '16px',
  color: vars.font.color,
});
globalStyle(`*`, {
  boxSizing: 'border-box',
});
globalStyle(`html, body`, {
  minHeight: '100%',
  margin: 0,
});
globalStyle(`#__next`, {
  height: '100%',
});

export const disableSelectStyle = style({
  userSelect: 'none',
});

export const redTitle = style({
  color: vars.colors.red,
});

export const subtitleSection = style({
  maxWidth: '773px',
  margin: '1.5rem 0 2rem',
  '@media': {
    'screen and (max-width: 1170px)': {
      maxWidth: '520px',
      fontSize: '18px',
      lineHeight: '24px',
    },
    'screen and (max-width: 670px)': {
      margin: '1rem 0 1.5rem',
      maxWidth: '80%',
    },
  },
});

export const linkInsertion = style({
  fontSize: 'inherit !important',
  lineHeight: 'inherit  !important',
  color: 'inherit  !important',
});
globalStyle(`${linkInsertion} > span`, {
  textTransform: 'unset',
});
