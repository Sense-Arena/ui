import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/vars.css';

const accordionContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});
globalStyle(`${accordionContainer} > div:last-child`, {
  borderBottom: 'none !important',
});
const accordionItem = style({
  borderBottom: `1px solid ${vars.colors.grey}`,
  overflow: 'hidden',
});

const accordionTextContainer = style({
  height: '100%',
});
const accordionText = style({
  paddingBottom: '24px',
});
const accordionIcon = style({
  color: vars.colors.blackMetal,
});
const accordionLabel = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '26px 0',
    selectors: {
      '&:hover': {
        color: vars.colors.red,
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        color: vars.colors.red,
      },
    },
  },
});

export const accordionStyles = {
  accordionContainer,
  accordionTextContainer,
  accordionLabel,
  accordionText,
  accordionItem,
  accordionIcon,
};
