import { DetailedHTMLProps, FC, FocusEventHandler, InputHTMLAttributes, ReactNode, RefObject, useId, useState } from 'react';
import { clsx } from '../../utils/clsx';
import { FieldError } from './FieldError';
import { containerStyle, fieldEndAdornment, fieldEndIcon, fieldWrap, inputStyle, labelStyle } from './textfield.css';

type Props = {
  label: string;
  errorText?: ReactNode;
  border?: 'black' | 'grey';
  endAdornment?: ReactNode;
  endIcon?: ReactNode;
  bRadius?: 8 | 10;
  containerClassName?: string;
  inputRef?: RefObject<HTMLInputElement>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextField: FC<Props> = ({
  errorText,
  className,
  label,
  onFocus,
  onBlur,
  disabled = false,
  value,
  border,
  endAdornment,
  endIcon,
  bRadius,
  containerClassName,
  inputRef,
  ...rest
}) => {
  const [labelS, setLabelS] = useState<'simple' | 'focused'>(value ? 'focused' : 'simple');
  const id = useId();

  const handleFocus: FocusEventHandler<HTMLInputElement> = e => {
    setLabelS('focused');
    onFocus?.(e);
  };
  const handleBlur: FocusEventHandler<HTMLInputElement> = e => {
    if (!value) {
      setLabelS('simple');
    }
    onBlur?.(e);
  };

  return (
    <div className={className}>
      <div
        className={clsx(
          containerStyle({ disabled, error: !!errorText, border, withEndAdornment: !!endAdornment, bRadius }),
          containerClassName,
        )}
      >
        <div className={fieldWrap}>
          <label htmlFor={id} className={labelStyle({ variant: labelS, disabled })}>
            {label}
          </label>
          <input
            className={inputStyle({ disabled, variant: labelS, withIcon: !!endIcon })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            value={value}
            ref={inputRef}
            {...rest}
            id={id}
          />
        </div>
        {endAdornment ? <div className={fieldEndAdornment}>{endAdornment}</div> : null}
        {endIcon ? <div className={fieldEndIcon}>{endIcon}</div> : null}
      </div>
      <FieldError errorText={errorText} />
    </div>
  );
};
