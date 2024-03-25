import { CSSProperties, FC, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { h1Style } from './typography.style.css';

type Props = {
  weight?: 'light' | 'medium' | 'normal' | 'bold' | 'semiBold';
  children?: ReactNode;
  root?: 'h1' | 'h2' | 'h3' | 'h4';
  variant?: 'headline' | 'title' | 'base' | 'baseM' | 'baseS';
  className?: string;
  style?: CSSProperties;
};
/**
 *
 * @deprecated use UniTypography
 */
export const Heading: FC<Props> = ({ children, weight, root = 'h1', className, style, variant }) => {
  const Root = root;
  return (
    <Root style={style} className={clsx(h1Style({ weight, root, variant }), className)}>
      {children}
    </Root>
  );
};
