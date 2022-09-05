import { animated as a, useSpring } from '@react-spring/web';
import { FC, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEventListener } from '../../hooks/useEventListener';
import { ArrowDownSline, ArrowUpSline } from '../../icons';
import { clsx } from '../../utils/clsx';
import { ddContainerStyle, ddIconStyle, ddMenuItemStyle, ddMenuStyle } from './dropdown.css';

type Props = {
  disabled?: boolean;
  error?: boolean;
  onSelect?: (selected: string) => void;
  selectedOption: {
    title: string;
    value: string;
  };
  options: {
    title: string;
    value: string;
  }[];
  className?: string;
};

export const Dropdown: FC<Props> = ({ disabled, onSelect, selectedOption, options, error, className }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    config: {
      duration: 250,
    },
  });

  const toggle = useCallback(() => {
    if (disabled) return;
    setOpen(v => !v);
  }, [disabled]);
  const close = useCallback(() => setOpen(false), []);
  useEventListener('keyup', close, 'Escape');
  useClickOutside(ref, close, mainRef);

  return (
    <div onClick={toggle} className={clsx(ddContainerStyle({ disabled, error, opened: isOpen }), className)} ref={mainRef}>
      <span>{selectedOption.title}</span>
      {isOpen ? <ArrowUpSline className={ddIconStyle} /> : <ArrowDownSline className={ddIconStyle} />}
      {isOpen ? (
        <a.div
          style={{ ...styles, width: mainRef.current?.getClientRects()[0].width }}
          className={ddMenuStyle}
          ref={ref}
          onClick={e => e.stopPropagation()}
        >
          {options.map(o => (
            <div
              onClick={() => onSelect?.(o.value)}
              className={ddMenuItemStyle({ selected: o.value === selectedOption.value })}
              key={o.value}
            >
              {o.title}
            </div>
          ))}
        </a.div>
      ) : null}
    </div>
  );
};
