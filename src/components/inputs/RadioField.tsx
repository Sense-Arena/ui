import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useId, useRef } from 'react';
import { clsx } from '../../utils/clsx';
import { RadioButton } from '../radio-button/RadioButton';
import { Paragraph } from '../typography';
import { radioStyles } from './radio.css';

type Props = {
  label: ReactNode;
  errorText?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  radioProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  onChange?: (checked: boolean) => void;
  border?: 'black' | 'grey';
  bRadius?: 8 | 10;
  containerClassName?: string;
};

export const RadioField: FC<Props> = ({
  errorText,
  className,
  label,
  disabled = false,
  checked,
  radioProps = {},
  onChange,
  border,
  bRadius,
  containerClassName,
}) => {
  const id = useId();
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = (checked: boolean) => {
    onChange?.(!checked);
  };

  return (
    <div className={className}>
      <div
        className={clsx(radioStyles.containerStyle({ disabled, error: !!errorText, border, bRadius }), containerClassName)}
        onClick={() => {
          onChange?.(true);

          if (ref.current) {
            ref.current.checked = true;
          }
        }}
      >
        <RadioButton
          id={id}
          checked={!!checked}
          onChangeHandler={onChangeHandler}
          disabled={disabled}
          {...radioProps}
          ref={ref}
        />
        <label htmlFor={id} className={radioStyles.labelStyle({ disabled })}>
          {label}
        </label>
      </div>
      {errorText ? (
        <Paragraph variant="note" className={radioStyles.errorHintStyle}>
          {errorText}
        </Paragraph>
      ) : null}
    </div>
  );
};
