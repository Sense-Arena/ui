import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const containerStyle = recipe({
  base: {
    width: '100%',
    height: '62px',
    margin: '8px',
    minWidth: '25ch',
    position: 'relative',
    padding: '8px 16px',
    border: `1px solid ${vars.colors.blackMetal}`,
    // TODO: with prop
    borderRadius: '10px',
    verticalAlign: 'top',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    fontFamily: vars.font.family,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    error: {
      true: {
        border: `1px solid ${vars.colors.red}`,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      false: {
        selectors: {
          '&:hover': {
            backgroundColor: '#ECEFF9',
          },
        },
      },
    },
  },
});

const labelStyle = recipe({
  base: {
    color: vars.font.color,
    letterSpacing: 0,
    padding: 0,
    display: 'block',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 32px)',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

const inputStyle = recipe({
  base: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: 0,
    color: 'currentcolor',
    border: 0,
    boxSizing: 'content-box',
    background: 'none',
    margin: 0,
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    wordBreak: 'break-all',
    minWidth: 0,
    padding: 0,
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
      false: {
        selectors: {
          '&:focus:not(:disabled)': {
            outline: 0,
            caretColor: vars.colors.red,
          },
        },
      },
    },
  },
});

const containerStyleSub = style({});

globalStyle(`${containerStyleSub} > input[type="radio"]`, {
  appearance: 'none',
  backgroundColor: 'transparent',
  font: 'inherit',
  color: 'currentColor',
  width: '20px',
  height: '20px',
  border: `1px solid #000000`,
  borderRadius: '50%',
  margin: '0 28px 0 10px',
  display: 'grid',
  placeContent: 'center',
  cursor: 'pointer',
});
globalStyle(`${containerStyleSub} > input[type="radio"]::before`, {
  content: '""',
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  transform: 'scale(0)',
  transition: '120ms transform ease-in-out',
  boxShadow: `inset 15px 15px ${vars.colors.red}`,
  border: `2px solid ${vars.colors.white}`,
  outline: `2px solid ${vars.colors.red}`,
});
globalStyle(`${containerStyleSub} > input[type="radio"]:checked::before `, {
  transform: 'scale(1)',
});

const errorHintStyle = style({
  margin: '0 0 8px 14px !important',
});

export const radioStyles = {
  containerStyle,
  containerStyleSub,
  labelStyle,
  inputStyle,
  errorHintStyle,
};
