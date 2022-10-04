import { globalStyle } from '@vanilla-extract/css';
import { linkInsertion, vars } from './vars.css';

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
