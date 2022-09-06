import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { btnIconStyle, btnStyle, btnTxtStyle } from './button.style.css';

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  size?: 'standard' | 'big' | 'small';
  color?: 'primary' | 'secondary' | 'outline' | 'outline_secondary';
  mode?: 'rounded' | 'square';
  fullWidth?: boolean;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, onClick, disabled, className, size, color, mode, fullWidth, ...rest }, ref) => {
    return (
      <button
        disabled={disabled}
        className={clsx(btnStyle({ size, color, mode, fullWidth }), className)}
        onClick={disabled ? undefined : onClick}
        {...rest}
        ref={ref}
      >
        <span className={btnTxtStyle({ size, fullWidth })}>{children}</span>
        {icon ? <span className={btnIconStyle({ color, fullWidth })}>{icon}</span> : null}
      </button>
    );
  },
);
