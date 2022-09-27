import { DetailedHTMLProps, FC, FocusEventHandler, TextareaHTMLAttributes, useId, useState } from 'react';
import { clsx } from '../../utils/clsx';
import { Paragraph } from '../typography';
import { textareaStyles } from './textarea.css';

type Props = {
  label: string;
  errorText?: string;
  border?: 'black' | 'grey';
  bRadius?: 8 | 10;
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
    <div>
      <div className={clsx(textareaStyles.containerStyle({ disabled, error: !!errorText, border, bRadius }), className)}>
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
      {errorText ? (
        <Paragraph variant="note" className={textareaStyles.errorHintStyle}>
          {errorText}
        </Paragraph>
      ) : null}
    </div>
  );
};
