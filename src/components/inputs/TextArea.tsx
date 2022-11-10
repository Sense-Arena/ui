import { DetailedHTMLProps, FC, FocusEventHandler, ReactNode, TextareaHTMLAttributes, useId, useState } from 'react';
import { clsx } from '../../utils/clsx';
import { FieldError } from './FieldError';
import { textareaStyles } from './textarea.css';

type Props = {
  label: string;
  errorText?: ReactNode;
  border?: 'black' | 'grey';
  bRadius?: 8 | 10;
  containerClassName?: string;
  dataSAId?: string;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const TextArea: FC<Props> = ({
  errorText,
  className,
  label,
  onFocus,
  onBlur,
  disabled = false,
  value,
  border,
  bRadius,
  containerClassName,
  dataSAId,
  ...rest
}) => {
  const [labelS, setLabelS] = useState<'simple' | 'focused'>(value ? 'focused' : 'simple');
  const id = useId();

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = e => {
    setLabelS('focused');
    onFocus?.(e);
  };
  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = e => {
    if (!value) {
      setLabelS('simple');
    }
    onBlur?.(e);
  };

  return (
    <div className={className}>
      <div
        className={clsx(
          textareaStyles.containerStyle({ disabled, error: !!errorText, border, bRadius }),
          containerClassName,
        )}
        data-sa-id={dataSAId}
      >
        <label htmlFor={id} className={textareaStyles.labelStyle({ variant: labelS, disabled })}>
          {label}
        </label>
        <textarea
          className={textareaStyles.inputStyle({ disabled, variant: labelS })}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          value={value}
          {...rest}
          id={id}
        />
      </div>
      <FieldError errorText={errorText} />
    </div>
  );
};
