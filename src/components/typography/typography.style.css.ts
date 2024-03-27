import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

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
      normal: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
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
    variant: {
      headline: {
        fontSize: '64px',
        lineHeight: '70px',
        letterSpacing: '-0.022em',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '48px',
            lineHeight: '53px',
          },
        },
      },
      title: {
        fontSize: '58px',
        lineHeight: '53px',
        letterSpacing: '-0.022em',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '20px',
            lineHeight: '18px',
          },
        },
      },
      base: {
        fontSize: '40px',
        lineHeight: '60px',
        letterSpacing: '-0.022em',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '40px',
            lineHeight: '60px',
            letterSpacing: '-0.022em',
          },
        },
      },
      baseM: {
        fontSize: '36px',
        lineHeight: '36px',
        letterSpacing: '-0.022em',
        '@media': {
          'screen and (max-width: 834px)': {
            fontSize: '36px',
            lineHeight: '36px',
            letterSpacing: '-0.022em',
          },
        },
      },
      baseS: {
        fontSize: '32px',
        lineHeight: '32px',
        letterSpacing: '-0.022em',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '24px',
            lineHeight: '24px',
          },
        },
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

export const uniTypoStyle = recipe({
  base: {
    letterSpacing: 0,
    margin: 0,
  },
  variants: {
    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
    font: {
      base: {
        fontFamily: vars.font.family,
      },
      atp: {
        fontFamily: vars.font.atpFamily,
      },
    },
    transform: {
      up: {
        textTransform: 'uppercase',
      },
    },
    variant: {
      corph1: {
        fontSize: '34px',
        lineHeight: '46px',
        '@media': {
          'screen and (max-width: 500px)': {
            fontSize: '18px',
            lineHeight: '26px',
          },
        },
      },
      corph2: {
        fontSize: '26px',
        lineHeight: 'normal',
        '@media': {
          'screen and (max-width: 500px)': {
            fontSize: '18px',
            lineHeight: '26px',
          },
        },
      },
      corplabel: {
        fontSize: '18px',
        lineHeight: 'normal',
        fontWeight: 600,
        '@media': {
          'screen and (max-width: 500px)': {
            fontSize: '13px',
            lineHeight: '14px',
            fontWeight: 500,
          },
        },
      },
      corpsmall: {
        fontSize: '13px',
        lineHeight: '20px',
        '@media': {
          'screen and (max-width: 500px)': {
            lineHeight: 'normal',
          },
        },
      },
      corpextrasmall: {
        fontSize: '10px',
        lineHeight: '14px',
        '@media': {
          'screen and (max-width: 500px)': {
            lineHeight: 'normal',
          },
        },
      },
      corpp: {
        fontSize: '18px',
        lineHeight: '26px',
        '@media': {
          'screen and (max-width: 500px)': {
            fontSize: '14px',
            lineHeight: '22px',
          },
        },
      },
    },
  },
  defaultVariants: {
    weight: 'normal',
    font: 'atp',
  },
});
