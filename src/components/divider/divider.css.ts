import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/theme.css';

const divider = recipe({
  base: {
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: vars.colors.grey,
    borderBottomWidth: 'thin',
  },
  variants: {
    textAlign: {
      left: {},
      right: {},
      center: {},
    },
    variant: {
      fullWidth: {},
      inset: {
        marginLeft: '72px',
      },
      middle: {},
    },
    orientation: {
      horizontal: {},
      vertical: {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin',
      },
    },
    hasChildren: {
      true: {
        display: 'flex',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        border: 0,
        '::before': {
          position: 'relative',
          width: '100%',
          borderTop: `thin solid ${vars.colors.grey}`,
          top: '50%',
          content: '""',
          transform: 'translateY(50%)',
        },
        '::after': {
          position: 'relative',
          width: '100%',
          borderTop: `thin solid ${vars.colors.grey}`,
          top: '50%',
          content: '""',
          transform: 'translateY(50%)',
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        hasChildren: true,
        orientation: 'vertical',
      },
      style: {
        flexDirection: 'column',
        '::before': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: `thin solid ${vars.colors.grey}`,
          transform: 'translateX(0%)',
        },
        '::after': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: `thin solid ${vars.colors.grey}`,
          transform: 'translateX(0%)',
        },
      },
    },
    {
      variants: {
        textAlign: 'right',
        orientation: 'horizontal',
      },
      style: {
        '::before': {
          width: '90%',
        },
        '::after': {
          width: '10%',
        },
      },
    },
    {
      variants: {
        textAlign: 'left',
        orientation: 'horizontal',
      },
      style: {
        '::before': {
          width: '10%',
        },
        '::after': {
          width: '90%',
        },
      },
    },
    {
      variants: {
        variant: 'middle',
        orientation: 'horizontal',
      },
      style: {
        marginLeft: '1rem',
        marginRight: '1rem',
      },
    },
    {
      variants: {
        variant: 'middle',
        orientation: 'vertical',
      },
      style: {
        marginTop: '1rem',
        marginBottom: '1rem',
      },
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    textAlign: 'center',
    variant: 'fullWidth',
  },
});

const wrapper = recipe({
  base: {
    display: 'inline-block',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const dividerStyles = {
  divider,
  wrapper,
};
