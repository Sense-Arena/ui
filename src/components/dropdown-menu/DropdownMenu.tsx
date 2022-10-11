import { animated as a, useSpring } from '@react-spring/web';
import { RefObject } from 'react';
import { ddMenuItemStyle, ddMenuStyle } from './dropdown-menu.css';

type Props<TOption> = {
  isOpen: boolean;
  mainRef: RefObject<HTMLDivElement>;
  menuRef: RefObject<HTMLDivElement>;
  selectedOption: TOption;
  selectItem: (value: TOption) => void;
  options: {
    title: string;
    value: TOption;
  }[];
  size?: 's' | 'm' | 'l';
  bRadius?: 8 | 10;
};

export function DropDownMenu<TOption>({
  isOpen,
  mainRef,
  options,
  selectedOption,
  selectItem,
  size,
  bRadius,
  menuRef,
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
      style={{ ...styles, width: mainRef.current?.getClientRects()[0].width }}
      className={ddMenuStyle({ size, bRadius })}
      ref={menuRef}
      onClick={e => e.stopPropagation()}
    >
      {options.map(o => (
        <div
          onClick={() => selectItem(o.value)}
          className={ddMenuItemStyle({ selected: o.value === selectedOption })}
          key={String(o.value)}
        >
          {o.title}
        </div>
      ))}
    </a.div>
  );
}
