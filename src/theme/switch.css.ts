import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const switcher = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '4px',
});

export const labelSwitch = style({
  cursor: 'pointer',
  textIndent: '-9999px',
  width: '50px',
  height: '25px',
  backgroundColor: vars.colors.grey,
  display: 'block',
  borderRadius: '25px',
  position: 'relative',
  margin: 0,
  top: 0,
  ':after': {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '21px',
    height: '21px',
    background: vars.colors.white,
    borderRadius: '21px',
    transition: '.3s',
  },
});

export const inputSwitch = style({
  height: 0,
  width: 0,
  visibility: 'hidden',
  margin: 0,
  opacity: 0.5,
  cursor: 'not-allowed',
});

globalStyle(`${inputSwitch}:checked + label`, {
  background: vars.colors.red,
});
globalStyle(`${inputSwitch}:checked:disabled + label`, {
  cursor: 'not-allowed',
  opacity: 0.5,
});
globalStyle(`${inputSwitch}:checked + label:after`, {
  left: ' calc(100% - 2px)',
  transform: 'translateX(-100%)',
});
globalStyle(`${labelSwitch}:active:after`, {
  width: '28px',
});
