import { Radio } from '@mui/material';
import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useId, useRef } from 'react';
import { clsx } from '../../utils/clsx';
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
}) => {
  const id = useId();
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange?.(!checked);
  };

  return (
    <div>
      <div
        className={clsx(radioStyles.containerStyle({ disabled, error: !!errorText, border, bRadius }), className)}
        onClick={() => {
          onChange?.(true);

          if (ref.current) {
            ref.current.checked = true;
          }
        }}
      >
        <Radio
          inputRef={ref}
          disabled={disabled}
          onChange={onChangeHandler}
          checked={checked}
          id={id}
          inputProps={radioProps}
          sx={{
            '&.Mui-checked': {
              color: '#E4022D',
            },
          }}
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
