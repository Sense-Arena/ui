import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { Spinner } from '../spinner';
import { iconBtnStyle } from './icon-button.style.css';

type Props = {
  color?: 'primary' | 'secondary';
  loading?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, disabled, className, color, loading, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(iconBtnStyle({ color }), className)}
        onClick={disabled || loading ? undefined : onClick}
        {...rest}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  },
);
