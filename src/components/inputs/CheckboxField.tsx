import { DetailedHTMLProps, FC, InputHTMLAttributes, MouseEvent, ReactNode, useCallback, useId, useRef } from 'react';
import { clsx } from '../../utils/clsx';
import { CheckboxButton } from '../checkbox-button/CheckboxButton';
import { Paragraph } from '../typography';
import { checkStyles } from './check.css';

type Props = {
  label: ReactNode;
  errorText?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  onChange?: (checked: boolean) => void;
  border?: 'black' | 'grey';
  bRadius?: 8 | 10;
  containerClassName?: string;
  variant?: 'field' | 'row';
};

export const CheckboxField: FC<Props> = ({
  errorText,
  className,
  label,
  disabled = false,
  checked,
  inputProps = {},
  onChange,
  border,
  bRadius,
  containerClassName,
  variant = 'field',
}) => {
  const id = useId();
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = useCallback(
    (c: boolean) => {
      if (disabled) return;
      onChange?.(c);
    },
    [onChange, disabled],
  );
  const onClickHandler = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      if (disabled) return;
      onChangeHandler(!checked);
      if (ref.current) {
        ref.current.checked = !checked;
      }
    },
    [onChangeHandler, disabled],
  );

  return (
    <div className={className}>
      <div
        className={clsx(
          variant === 'field'
            ? checkStyles.containerStyle({ disabled, error: !!errorText, border, bRadius })
            : checkStyles.containerRow({
                disabled,
              }),
          containerClassName,
        )}
        onClick={onClickHandler}
      >
        <CheckboxButton
          id={id}
          checked={!!checked}
          onChangeHandler={onChangeHandler}
          disabled={disabled}
          {...inputProps}
          ref={ref}
        />
        <label htmlFor={id} className={checkStyles.labelStyle({ disabled })}>
          {label}
        </label>
      </div>
      {errorText && variant === 'field' ? (
        <Paragraph variant="note" className={checkStyles.errorHintStyle}>
          {errorText}
        </Paragraph>
      ) : null}
    </div>
  );
};
