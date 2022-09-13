import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const containerStyle = recipe({
  base: {
    width: '100%',
    height: '62px',
    minWidth: '25ch',
    position: 'relative',
    padding: '8px 16px',
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
            backgroundColor: '#ECEFF9',
          },
        },
      },
    },
  },
  defaultVariants: {
    border: 'grey',
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

const errorHintStyle = style({
  margin: '0 0 8px 14px !important',
});

export const radioStyles = {
  containerStyle,
  labelStyle,
  errorHintStyle,
};
