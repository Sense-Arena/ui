import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { Spinner } from '../spinner';
import { iconBtnStyle } from './icon-button.style.css';

type Props = {
  color?: 'primary' | 'secondary';
  loading?: boolean;
  size?: 's' | 'm';
  dataSAId?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, disabled, className, color, loading, size, dataSAId, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(iconBtnStyle({ color, size }), className)}
        onClick={disabled || loading ? undefined : onClick}
        type="button"
        {...rest}
        data-sa-id={dataSAId}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  },
);
