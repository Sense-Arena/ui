import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { clsx } from '../../utils';
import { uniTypoStyle } from './typography.style.css';

export type UniTypographyProps = {
  weight?: 'light' | 'medium' | 'normal' | 'bold' | 'semiBold';
  children?: ReactNode;
  root?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  font?: 'base' | 'atp';
  transform?: 'up';
  variant?: 'corph1' | 'corph2' | 'corplabel' | 'corpsmall' | 'corpextrasmall' | 'corpp';
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const UniTypography = forwardRef<HTMLHeadingElement, UniTypographyProps>(
  ({ weight, font, children, root = 'p', className, transform, style = {}, variant, ...rest }, ref) => {
    const Root = root;

    return (
      <Root ref={ref} className={clsx(className, uniTypoStyle({ font, weight, transform, variant }))} {...rest}>
        {children}
      </Root>
    );
  },
);
