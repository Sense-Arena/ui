import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { btnIconStyle, btnStyle, btnTxtStyle } from './button.style.css';

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  size?: 'standard' | 'big' | 'small';
  color?: 'primary' | 'secondary' | 'outline';
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, onClick, disabled, className, size, color, ...rest }, ref) => {
    return (
      <button
        disabled={disabled}
        className={clsx(btnStyle({ size, color }), className)}
        onClick={disabled ? undefined : onClick}
        {...rest}
        ref={ref}
      >
        <span className={btnTxtStyle({ size })}>{children}</span>
        {icon ? <span className={btnIconStyle({ color })}>{icon}</span> : null}
      </button>
    );
  },
);
