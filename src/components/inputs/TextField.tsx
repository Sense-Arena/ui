import { DetailedHTMLProps, FC, FocusEventHandler, InputHTMLAttributes, useId, useState } from 'react';
import { clsx } from '../../utils/clsx';
import { Paragraph } from '../typography';
import { containerStyle, errorHintStyle, inputStyle, labelStyle } from './textfield.css';

type Props = {
  label: string;
  errorText?: string;
  border?: 'black' | 'grey';
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
    <>
      <div className={clsx(containerStyle({ disabled, error: !!errorText, border }), className)}>
        <label htmlFor={id} className={labelStyle({ variant: labelS, disabled })}>
          {label}
        </label>
        <input
          className={inputStyle({ disabled, variant: labelS })}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          value={value}
          {...rest}
          id={id}
        />
      </div>
      {errorText ? (
        <Paragraph variant="note" className={errorHintStyle}>
          {errorText}
        </Paragraph>
      ) : null}
    </>
  );
};
