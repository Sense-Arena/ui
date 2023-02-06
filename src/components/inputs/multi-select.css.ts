import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const container = recipe({
  base: {
    width: 'fit-content',
    minWidth: '77px',
    maxWidth: '100%',
    fontFamily: vars.font.family,
    backgroundColor: vars.colors.white,
    userSelect: 'none',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    letterSpacing: 0,
    minHeight: '60px',
    padding: '0 16px',
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
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.white,
          },
        },
      },
    },
    error: {
      true: {
        border: `1px solid ${vars.colors.red}`,
      },
    },
    opened: {
      true: {
        backgroundColor: vars.colors.greyLight2,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
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
    bRadius: 10,
    border: 'grey',
  },
});

const text = recipe({
  base: {
    maxWidth: '100%',
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    lineHeight: '22px',
    fontSize: '18px',
  },
  variants: {
    withLabel: {
      true: {
        paddingTop: 20,
      },
    },
  },
});

const label = style({
  position: 'absolute',
  top: 8,
  left: 16,
  color: vars.colors.text,
  fontSize: '14px',
  lineHeight: '20px',
});

const iconStyle = style({
  marginLeft: '18px',
  display: 'block',
});

const select = style({
  display: 'none',
});

const chips = recipe({
  base: {
    marginTop: 6,
    marginBottom: 6,
    display: 'flex',
    flexWrap: 'wrap',
  },
  variants: {
    withLabel: {
      true: {
        marginTop: 24,
        marginBottom: 2,
      },
    },
  },
});

const chip = style({
  margin: '0.125rem 0.25rem 0.125rem 0',
});

export const multiSelectStyles = {
  iconStyle,
  label,
  text,
  container,
  select,
  chips,
  chip,
};
