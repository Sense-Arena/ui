import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css';

const progressContainer = style({
  width: '100%',
  padding: 4,
  backgroundColor: vars.colors.greyLight,
  border: `1px solid ${vars.colors.grey}`,
  borderRadius: 5,
});

const progressLine = style({
  width: '0%',
  height: 24,
  backgroundColor: vars.colors.red,
  maxWidth: '100%',
  transition: 'all .3s linear',
  borderRadius: 3,
});

export const progressStyles = {
  progressContainer,
  progressLine,
};
