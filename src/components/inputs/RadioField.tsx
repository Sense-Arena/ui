import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useCallback, useId, useRef } from 'react';
import { clsx } from '../../utils/clsx';
import { RadioButton } from '../radio-button/RadioButton';
import { FieldError } from './FieldError';
import { radioStyles } from './radio.css';

type Props = {
  label: ReactNode;
  errorText?: ReactNode;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  radioProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  onChange?: (checked: boolean) => void;
  border?: 'black' | 'grey';
  bRadius?: 8 | 10;
  containerClassName?: string;
  dataSAId?: string;
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
  dataSAId,
}) => {
  const id = useId();
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = useCallback(
    (c: boolean) => {
      if (disabled) return;
      onChange?.(!c);
    },
    [onChange, disabled],
  );
  const onClickHandler = useCallback(() => {
    if (disabled) return;
    onChange?.(true);
    if (ref.current) {
      ref.current.checked = true;
    }
  }, [onChange, disabled]);

  return (
    <div className={className}>
      <div
        className={clsx(radioStyles.containerStyle({ disabled, error: !!errorText, border, bRadius }), containerClassName)}
        onClick={onClickHandler}
        data-sa-id={dataSAId}
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
      <FieldError errorText={errorText} />
    </div>
  );
};
