import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

export const pLinkStyle = style({
  textDecoration: 'none',
  fontFamily: vars.font.family,
  transition: 'all .2s ease-in-out',
  cursor: 'pointer',
  selectors: {
    '&:focus': {
      textDecoration: 'underline',
    },
  },
});

export const linkStyle = recipe({
  variants: {
    variant: {
      primary: {
        color: vars.colors.red,
        fontSize: '24px',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '18px',
            letterSpacing: '0',
            lineHeight: '24px',
          },
        },
      },
      secondary: {
        color: vars.colors.text,
        fontSize: '18px',
        letterSpacing: 0,
        lineHeight: '24px',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const linkTxtStyle = styleVariants({
  primary: {
    textDecoration: 'underline',
    textTransform: 'capitalize',
    marginRight: '12px',
  },
  secondary: {
    textDecoration: 'underline',
    textTransform: 'capitalize',
  },
});

globalStyle(`${pLinkStyle}:hover > span`, {
  textDecoration: 'none',
});
globalStyle(`${pLinkStyle}:active > span`, {
  textDecoration: 'none',
});
