import { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, useCallback } from 'react';
import { radioBtnStyles } from './radio.css';

type Props = {
  disabled?: boolean;
  checked: boolean;
  onChangeHandler: (checked: boolean) => void;
  dataSAId?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  ({ checked, onChangeHandler, disabled, dataSAId, ...rest }, ref) => {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e.target.checked);
      },
      [onChangeHandler],
    );

    return (
      <span className={radioBtnStyles.container({ checked, disabled })} data-sa-id={dataSAId}>
        <input type="radio" className={radioBtnStyles.input} {...rest} ref={ref} onChange={handleChange} checked={checked} />
        <span className={radioBtnStyles.containerIcons}>
          <svg className={radioBtnStyles.svgRound} focusable="false" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg className={radioBtnStyles.svgInside({ checked })} focusable="false" viewBox="0 0 24 24">
            <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
          </svg>
        </span>
      </span>
    );
  },
);
