import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const section = style({
  borderRadius: '20px',
  backgroundColor: vars.colors.white,
});

const paddingY = style({
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
});

const paddingX = style({
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
});

const sectionContent = recipe({
  variants: {
    withPadding: {
      true: [paddingX, paddingY],
    },
  },
});

const header = style([
  paddingX,
  {
    paddingTop: '2rem',
    paddingBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media': {
      'screen and (max-width: 480px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: '1rem',
      },
    },
  },
]);

const action = style({
  '@media': {
    'screen and (max-width: 480px)': {
      paddingTop: '1rem',
    },
  },
});

export const cardStyles = {
  section,
  paddingY,
  paddingX,
  sectionContent,
  header,
  action,
};
