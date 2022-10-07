import { ReactNode, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEventListener } from '../../hooks/useEventListener';
import { ArrowDownSline, ArrowUpSline } from '../../icons';
import { clsx } from '../../utils/clsx';
import { ddContainerStyle, ddIconStyle, ddText } from './dropdown.css';
import { DropDownMenu } from '../dropdown-menu';

type Props<TOption> = {
  disabled?: boolean;
  error?: boolean;
  onSelect?: (selected: TOption) => void;
  selectedOptionLabel: ReactNode;
  selectedOption: TOption;
  options: {
    title: string;
    value: TOption;
  }[];
  className?: string;
  border?: 'black' | 'grey';
  fullWidth?: boolean;
  size?: 's' | 'm' | 'l';
  bRadius?: 8 | 10;
};

export function Dropdown<TOption>({
  disabled,
  onSelect,
  selectedOptionLabel,
  options,
  error,
  className,
  selectedOption,
  border,
  fullWidth,
  size,
  bRadius,
}: Props<TOption>) {
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
    (optionValue: TOption) => {
      onSelect?.(optionValue);
      close();
    },
    [onSelect],
  );

  return (
    <div
      onClick={toggle}
      className={clsx(ddContainerStyle({ disabled, error, opened: isOpen, border, fullWidth, size, bRadius }), className)}
      ref={mainRef}
    >
      <span className={ddText}>{selectedOptionLabel}</span>
      <div>{isOpen ? <ArrowUpSline className={ddIconStyle} /> : <ArrowDownSline className={ddIconStyle} />}</div>
      <DropDownMenu
        isOpen={isOpen}
        mainRef={mainRef}
        selectedOption={selectedOption}
        selectItem={selectItem}
        options={options}
        size={size}
        bRadius={bRadius}
      />
    </div>
  );
}
