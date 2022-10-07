import { DetailedHTMLProps, SelectHTMLAttributes, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEventListener } from '../../hooks/useEventListener';
import { ArrowDownSline, ArrowUpSline } from '../../icons';
import { clsx } from '../../utils/clsx';
import { selectStyles } from './select.css';
import { DropDownMenu } from '../dropdown-menu';

type Props = {
  disabled?: boolean;
  error?: boolean;
  onSelect?: (selected: string) => void;
  selectedOptionLabel: string;
  selectedOption: string;
  options: {
    title: string;
    value: string;
  }[];
  className?: string;
  border?: 'black' | 'grey';
  fullWidth?: boolean;
  bRadius?: 8 | 10;
  label?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export function Select<T>({
  disabled,
  onSelect,
  selectedOptionLabel,
  options,
  error,
  className,
  selectedOption,
  border,
  fullWidth,
  bRadius,
  label,
  ...rest
}: Props) {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    if (disabled) return;
    setOpen(v => !v);
  }, [disabled]);
  const close = useCallback(() => setOpen(false), []);
  useEventListener('keyup', close, 'Escape');
  useClickOutside(ref, close, mainRef);

  const selectItem = useCallback(
    (optionValue: string) => {
      onSelect?.(optionValue);
      close();
    },
    [onSelect],
  );

  return (
    <>
      <select className={selectStyles.select} {...rest} value={selectedOption}>
        <option value={selectedOption}>{selectedOptionLabel}</option>
      </select>
      <div
        onClick={toggle}
        className={clsx(selectStyles.container({ disabled, error, opened: isOpen, border, fullWidth, bRadius }), className)}
        ref={mainRef}
      >
        {label ? <span className={selectStyles.label}>{label}</span> : null}
        <span className={selectStyles.text({ withLabel: !!label })}>{selectedOptionLabel}</span>
        <div>
          {isOpen ? (
            <ArrowUpSline className={selectStyles.iconStyle} />
          ) : (
            <ArrowDownSline className={selectStyles.iconStyle} />
          )}
        </div>
        <DropDownMenu
          isOpen={isOpen}
          mainRef={mainRef}
          selectedOption={selectedOption}
          selectItem={selectItem}
          options={options}
          size="l"
          bRadius={bRadius}
        />
      </div>
    </>
  );
}
