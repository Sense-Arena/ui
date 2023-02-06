import { animated as a, useSpring } from '@react-spring/web';
import { RefObject } from 'react';
import { ddMenuItemNotFound, ddMenuItemStyle, ddMenuStyle } from './dropdown-menu.css';

type Props<TOption> = {
  isOpen: boolean;
  mainRef: RefObject<HTMLDivElement>;
  menuRef: RefObject<HTMLDivElement>;
  selectedOption?: TOption;
  selectItem: (value: TOption) => void;
  options: {
    title: string;
    value: TOption;
  }[];
  bRadius?: 8 | 10;
  dataSAId?: string;
};

export function DropDownMenu<TOption>({
  isOpen,
  mainRef,
  options,
  selectedOption,
  selectItem,
  bRadius,
  menuRef,
  dataSAId,
}: Props<TOption>) {
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    config: {
      duration: 250,
    },
  });

  if (!isOpen) return null;

  return (
    <a.div
      style={{
        ...styles,
        width: mainRef.current?.getClientRects()[0].width,
        top: (mainRef.current?.getClientRects()[0].height || 0) + 11,
      }}
      className={ddMenuStyle({ bRadius })}
      ref={menuRef}
      onClick={e => e.stopPropagation()}
    >
      {options.length ? (
        options.map((o, index) => (
          <div
            onClick={() => selectItem(o.value)}
            className={ddMenuItemStyle({ selected: o.value === selectedOption })}
            key={String(o.value)}
            data-sa-id={dataSAId ? `${dataSAId}-child-${index}` : undefined}
          >
            {o.title}
          </div>
        ))
      ) : (
        <div className={ddMenuItemNotFound}>No options</div>
      )}
    </a.div>
  );
}
