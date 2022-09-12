import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { Spinner } from '../spinner';
import { btnIconBase, btnIconStyle, btnStyle, btnTxtStyle } from './button.style.css';

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  size?: 'standard' | 'big' | 'small';
  color?: 'primary' | 'secondary' | 'outline' | 'outline_secondary';
  mode?: 'rounded' | 'square';
  minWidth?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, onClick, disabled, className, size, color, mode, fullWidth, minWidth, loading, ...rest }, ref) => {
    return (
      <button
        disabled={disabled || loading}
        className={clsx(btnStyle({ size, color, mode, fullWidth, minWidth }), className)}
        onClick={disabled || loading ? undefined : onClick}
        {...rest}
        ref={ref}
      >
        <span className={btnTxtStyle({ size, fullWidth })}>{children}</span>
        {icon || loading ? (
          <span className={clsx(btnIconStyle({ color, fullWidth }), btnIconBase)}>
            {loading ? <Spinner size={size === 'small' ? 's' : 'm'} /> : icon}
          </span>
        ) : null}
      </button>
    );
  },
);
