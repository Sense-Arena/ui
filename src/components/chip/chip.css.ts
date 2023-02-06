import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../theme/constants';

const chipContainer = recipe({
  base: {
    display: 'inline-flex',
    cursor: 'default',
  },
  variants: {
    size: {
      s: {
        borderRadius: '1rem',
        padding: '0 0.5rem',
      },
      m: {
        borderRadius: '1rem',
        padding: '0 0.6rem',
      },
      l: {
        borderRadius: '2rem',
        padding: '0 0.7rem',
      },
    },
    color: {
      primary: {
        background: themeVars.colors.red,
        color: themeVars.colors.white,
      },
      secondary: {
        background: themeVars.colors.greyDark,
        color: themeVars.colors.text,
      },
      warning: {
        background: themeVars.colors.orange,
        color: themeVars.colors.white,
      },
      dark: {
        background: themeVars.colors.blackMetal,
        color: themeVars.colors.white,
      },
    },
  },
  defaultVariants: {
    size: 'm',
    color: 'primary',
  },
});

const chipText = recipe({
  variants: {
    size: {
      s: {
        borderRadius: '1rem',
        padding: '0.125rem 0',
      },
      m: {
        borderRadius: '1rem',
        padding: '0.25rem 0',
      },
      l: {
        borderRadius: '2rem',
        padding: '0.35rem 0',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

const chipDelIconContainer = recipe({
  base: {
    display: 'inline-flex',
    padding: 2,
    marginLeft: '0.1rem',
    background: 'transparent',
    transition: '0.2s',
    selectors: {
      '&:hover': {
        background: themeVars.colors.blackMetalShade,
      },
    },
    borderRadius: '100%',
    cursor: 'pointer',
  },
  variants: {
    size: {
      s: {
        marginRight: '-0.25rem',
      },
      m: {
        marginRight: '-0.3rem',
      },
      l: {
        marginRight: '-0.35rem',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

const chipDelIcon = recipe({
  variants: {
    size: {
      s: {
        width: '12px',
        height: '12px',
      },
      m: {
        width: '15px',
        height: '15px',
      },
      l: {
        width: '20px',
        height: '20px',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

export const chipStyles = {
  chipContainer,
  chipText,
  chipDelIcon,
  chipDelIconContainer,
};
