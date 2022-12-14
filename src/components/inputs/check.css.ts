import { ComplexStyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const baseContainer: ComplexStyleRule = {
  width: '100%',
  height: '62px',
  minWidth: '25ch',
  position: 'relative',
  padding: '8px 16px',
  verticalAlign: 'top',
  transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  fontFamily: vars.font.family,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
};

const containerRow = recipe({
  base: { ...baseContainer, height: '40px', padding: 0 },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
});

const containerStyle = recipe({
  base: baseContainer,
  variants: {
    border: {
      black: {
        border: `1px solid ${vars.colors.blackMetal}`,
      },
      grey: {
        border: `1px solid ${vars.colors.grey}`,
      },
    },
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
            backgroundColor: vars.colors.greyLight2,
          },
        },
      },
    },

    bRadius: {
      10: {
        borderRadius: '10px',
      },
      8: {
        borderRadius: '8px',
      },
    },
  },
  defaultVariants: {
    border: 'grey',
    bRadius: 10,
  },
});

const labelStyle = recipe({
  base: {
    color: vars.colors.text,
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

export const checkStyles = {
  containerStyle,
  containerRow,
  labelStyle,
};
