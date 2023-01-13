import { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, useCallback } from 'react';
import { checkboxStyles } from './checkbox.css';
type Props = {
  disabled?: boolean;
  checked: boolean;
  onChangeHandler: (checked: boolean) => void;
  dataSAId?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CheckboxButton = forwardRef<HTMLInputElement, Props>(
  ({ checked, onChangeHandler, disabled, dataSAId, ...rest }, ref) => {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e.target.checked);
      },
      [onChangeHandler],
    );

    return (
      <span className={checkboxStyles.container({ checked, disabled })} data-sa-id={dataSAId}>
        <input
          type="checkbox"
          className={checkboxStyles.input}
          {...rest}
          ref={ref}
          onChange={handleChange}
          checked={checked}
        />
        <span className={checkboxStyles.containerIcons}>
          <svg className={checkboxStyles.svgRound} focusable="false" viewBox="0 0 24 24">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          </svg>
          <svg className={checkboxStyles.svgInside({ checked })} focusable="false" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>{' '}
          </svg>
        </span>
      </span>
    );
  },
);
