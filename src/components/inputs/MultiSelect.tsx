import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEventListener } from '../../hooks/useEventListener';
import { ArrowDownSline, ArrowUpSline } from '../../icons';
import { clsx } from '../../utils/clsx';
import { Chip } from '../chip';
import { DropDownMenu } from '../dropdown-menu';
import { FieldError } from './FieldError';
import { multiSelectStyles } from './multi-select.css';

type Props<TOption> = {
  selectedOptions: TOption[];
  disabled?: boolean;
  errorText?: ReactNode;
  onChangeSelect?: (selected: TOption[], name?: string) => void;
  options: {
    title: string;
    value: TOption;
  }[];
  className?: string;
  border?: 'black' | 'grey';
  fullWidth?: boolean;
  bRadius?: 8 | 10;
  label?: string;
  containerClassName?: string;
  dataSAId?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export function MultiSelect<TOption>({
  selectedOptions,
  disabled,
  onChangeSelect,
  containerClassName,
  options,
  errorText,
  className,
  border,
  fullWidth,
  bRadius,
  label,
  dataSAId,
  ...rest
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
      onChangeSelect?.(selectedOptions.concat(optionValue));
    },
    [onChangeSelect],
  );

  const deleteItem = useCallback(
    (optionValue: TOption) => {
      onChangeSelect?.(selectedOptions.filter(item => item !== optionValue));
    },
    [onChangeSelect],
  );

  return (
    <div className={className}>
      <select
        multiple
        data-sa-id={dataSAId ? `${dataSAId}-select` : dataSAId}
        disabled
        value={selectedOptions as string[]}
        className={multiSelectStyles.select}
        {...rest}
      >
        {selectedOptions.map(item => (
          <option key={`option_${item}`} value={item as string}>
            {options.find(i => i.value === item)?.title || 'Not found'}
          </option>
        ))}
      </select>
      <div
        onClick={toggle}
        className={clsx(
          multiSelectStyles.container({ disabled, error: !!errorText, opened: isOpen, border, fullWidth, bRadius }),
          containerClassName,
        )}
        ref={mainRef}
        data-sa-id={dataSAId}
      >
        {label ? <span className={multiSelectStyles.label}>{label}</span> : null}
        {!selectedOptions.length ? (
          <span className={multiSelectStyles.text({ withLabel: !!label })}>Select options</span>
        ) : (
          <div className={multiSelectStyles.chips({ withLabel: !!label })}>
            {selectedOptions.map((item, index) => (
              <Chip
                dataSAId={dataSAId ? `${dataSAId}-chip-${index}` : dataSAId}
                key={`chip_${item}`}
                className={multiSelectStyles.chip}
                color="secondary"
                onDelete={() => deleteItem(item)}
              >
                {options.find(i => i.value === item)?.title || 'Not Found'}
              </Chip>
            ))}
          </div>
        )}

        <div>
          {isOpen ? (
            <ArrowUpSline className={multiSelectStyles.iconStyle} />
          ) : (
            <ArrowDownSline className={multiSelectStyles.iconStyle} />
          )}
        </div>
        <DropDownMenu
          menuRef={ref}
          isOpen={isOpen}
          mainRef={mainRef}
          selectItem={selectItem}
          options={options.filter(item => !selectedOptions.some(i => item.value === i))}
          bRadius={bRadius}
          dataSAId={dataSAId}
        />
      </div>
      <FieldError errorText={errorText} />
    </div>
  );
}
