import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { iconBtnStyle } from './icon-button.style.css';

type Props = {
  color?: 'primary' | 'secondary';
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, disabled, className, color, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(iconBtnStyle({ color }), className)}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
