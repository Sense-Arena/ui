import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { clsx } from '../../utils';
import { uniTypoStyle } from './typography.style.css';

export type UniTypographyProps = {
  weight?: 'light' | 'medium' | 'normal' | 'bold' | 'semiBold';
  children?: ReactNode;
  root?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  font?: 'base' | 'atp';
  transform?: 'up';
  size?: string | number;
  lineHeight?: string | number;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const UniTypography = forwardRef<HTMLHeadingElement, UniTypographyProps>(
  ({ weight, font, children, root = 'p', className, transform, style = {}, lineHeight, size, ...rest }, ref) => {
    const Root = root;

    return (
      <Root
        ref={ref}
        style={{
          lineHeight,
          fontSize: size,
          ...style,
        }}
        className={clsx(className, uniTypoStyle({ font, weight, transform }))}
        {...rest}
      >
        {children}
      </Root>
    );
  },
);
