import { animated, config, useTransition } from '@react-spring/web';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button } from '../button';
import { smButtonWrap } from './show-more.style.css';

type Props = {
  items: {
    child: ReactNode;
    key: string;
  }[];
  visible: number;
  className?: string;
};

export const ShowMore = ({ items, visible, className }: Props) => {
  const [visibleItems, setVisible] = useState(items.slice(0, visible));

  useEffect(() => {
    setVisible(items.slice(0, visible));
  }, [visible]);

  const transitions = useTransition(visibleItems, {
    from: {
      transform: 'scale(0)',
    },
    enter: {
      transform: 'scale(1)',
    },
    trail: 400 / visibleItems.length,
    unique: true,
    config: config.molasses,
    keys: i => i.key,
  });

  const showAll = useCallback(() => {
    setVisible(v => v.concat(items.slice(visible)));
  }, [items, visible]);

  return (
    <>
      <div className={className}>
        {transitions((style, item) => (
          <animated.div style={style}>{item.child}</animated.div>
        ))}
      </div>
      {visibleItems.length === items.length ? null : (
        <div className={smButtonWrap}>
          <Button color="outline" noIcon onClick={showAll} style={{ marginTop: '1.5rem' }}>
            Show all
          </Button>
        </div>
      )}
    </>
  );
};
