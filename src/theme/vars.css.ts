import { createGlobalThemeContract, style } from '@vanilla-extract/css';

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
