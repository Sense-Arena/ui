import { CSSProperties, FC, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { h1Style } from './typography.style.css';

type Props = {
  weight?: 'light' | 'medium' | 'normal';
  children?: ReactNode;
  root?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  style?: CSSProperties;
};

export const Heading: FC<Props> = ({ children, weight, root = 'h1', className, style }) => {
  const Root = root;
  return (
    <Root style={style} className={clsx(h1Style({ weight, root }), className)}>
      {children}
    </Root>
  );
};
