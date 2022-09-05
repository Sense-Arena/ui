import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

export const h1Style = recipe({
  base: {
    textTransform: 'uppercase',
    margin: 0,
    fontFamily: vars.font.family,
  },
  variants: {
    weight: {
      light: {
        fontWeight: 300,
      },
      medium: {
        fontWeight: 500,
      },
      normal: {
        fontWeight: 400,
      },
    },
    root: {
      h1: {
        fontSize: '80px',
        lineHeight: '96px',
        letterSpacing: '1.5px',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '48px',
            letterSpacing: '0.75px',
            lineHeight: '57px',
          },
          'screen and (max-height: 796px)': {
            fontSize: '48px',
            letterSpacing: '0.75px',
            lineHeight: '57px',
          },
        },
      },
      h2: {
        fontSize: '48px',
        letterSpacing: '0.75px',
        lineHeight: '57px',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '24px',
            letterSpacing: '0.38px',
            lineHeight: '28px',
          },
        },
      },
      h3: {
        fontSize: '24px',
        letterSpacing: '0.38px',
        lineHeight: '28px',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '18px',
            letterSpacing: '0',
            lineHeight: '22px',
          },
        },
      },
      h4: {
        fontSize: '18px',
        letterSpacing: '0',
        lineHeight: '22px',
      },
    },
  },
  defaultVariants: {
    weight: 'medium',
    root: 'h1',
  },
});

export const paragraphStyle = recipe({
  base: {
    letterSpacing: 0,
    margin: 0,
    fontFamily: vars.font.family,
  },
  variants: {
    variant: {
      perex: {
        fontSize: '32px',
        fontWeight: 300,
        lineHeight: '40px',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '24px',
            lineHeight: '32px',
          },
          'screen and (max-height: 796px)': {
            fontSize: '24px',
            lineHeight: '32px',
          },
        },
      },
      body: {
        fontSize: '24px',
        fontWeight: 300,
        lineHeight: '32px',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 400,
          },
        },
      },
      caption: {
        fontSize: '18px',
        lineHeight: '24px',
      },
      label: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '19px',
      },
      note: {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
