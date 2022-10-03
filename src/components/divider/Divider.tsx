import { ReactNode } from 'react';
import { clsx } from '../../utils';
import { dividerStyles } from './divider.css';

type Props = {
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  textAlign?: 'center' | 'right' | 'left';
  variant?: 'fullWidth' | 'inset' | 'middle';
  className?: string;
};

export const Divider = ({ children, orientation, textAlign, variant, className }: Props) => {
  const Component = children ? 'div' : 'hr';

  return (
    <Component
      className={clsx(
        dividerStyles.divider({
          orientation,
          textAlign,
          hasChildren: !!children,
          variant,
        }),
        className,
      )}
    >
      {children ? (
        <span
          className={dividerStyles.wrapper({
            orientation,
          })}
        >
          {children}
        </span>
      ) : null}
    </Component>
  );
};
