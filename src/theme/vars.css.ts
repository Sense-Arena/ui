import { createGlobalTheme, createGlobalThemeContract, globalStyle, style } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract(
  {
    colors: {
      red: 'red',
      redShade: 'red-shade',
      green: 'green',
      greenShade: 'green-shade',
      redDarken: 'red-darken',
      white: 'white',
      black: 'black',
      grey: 'grey',
      greyLight: 'grey-light',
      greyDark: 'grey-dark',
      blackMetal: 'black-metal',
      blackMetalShade: 'black-metal-shade',
      text: 'text',
      ctaDark: 'cta-dark',
      greyLight2: 'grey-light-2',
      logoBlack: 'logo-black',
      blueCola: 'blue-cola',
      orange: 'orange',
    },
    font: {
      family: 'font',
    },
    zIndex: {
      menu: 'menu',
      menuSide: 'menu-side',
      playerOverlay: 'player-overlay',
      modal: 'modal',
      gdpr: 'gdpr',
      dropdown: 'dropdown',
    },
  },
  value => `sa-${value}`,
);

createGlobalTheme('body', vars, {
  colors: {
    red: '#E4022D',
    redShade: 'rgba(228,2,45,0.15)',
    redDarken: '#D30028',
    green: '#1A994A',
    greenShade: 'rgba(26,153,74,0.15)',
    white: '#ffffff',
    black: '#000000',
    grey: '#D7D9DF',
    greyDark: '#E3E6EE',
    greyLight: '#F6F8FD',
    greyLight2: '#ECEFF9',
    blackMetal: '#242424',
    blackMetalShade: 'rgba(36,36,36,0.15)',
    text: '#1C1C1C',
    ctaDark: '#292929',
    logoBlack: '#1c1d1c',
    blueCola: '#0288d1',
    orange: '#f57c00',
  },
  font: {
    family: 'Rubik, sans-serif',
  },
  zIndex: {
    menu: '11000',
    menuSide: '11001',
    playerOverlay: '10999',
    modal: '10998',
    gdpr: '10997',
    dropdown: '9999',
  },
});

export const disableSelectStyle = style({
  userSelect: 'none',
});

export const redTitle = style({
  color: vars.colors.red,
});

export const linkInsertion = style({
  fontSize: 'inherit !important',
  lineHeight: 'inherit  !important',
  color: 'inherit  !important',
  textDecoration: 'inherit',
});

export const textNoWrap = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

globalStyle('body', {
  fontFamily: vars.font.family,
  fontWeight: 400,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'initial',
  fontSize: '16px',
  color: vars.colors.text,
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

globalStyle(`${linkInsertion} > span`, {
  textTransform: 'unset',
});
