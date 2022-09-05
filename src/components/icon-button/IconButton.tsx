import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { iconBtnStyle } from './icon-button.style.css';

type Props = {} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, disabled, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(iconBtnStyle, className)}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
