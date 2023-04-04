import { animated, useSpring } from '@react-spring/web';
import { ReactNode, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useWindowListener } from '../../hooks';
import { ArrowDownSline, ArrowUpSline } from '../../icons';
import { clsx } from '../../utils';
import { Heading, Paragraph } from '../typography';
import { accordionStyles } from './accordion.style.css';

type Props = {
  shorText: ReactNode;
  text: ReactNode;
  open?: boolean;
  className?: string;
};

export const AccordionItem = memo<Props>(({ shorText, text, open = false, className }) => {
  const [isOpen, setOpen] = useState(open);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const calcContentMaxHeight = useCallback(() => {
    ref.current && setContentMaxHeight(ref.current.scrollHeight);
  }, [ref, contentMaxHeight]);

  useEffect(() => {
    calcContentMaxHeight();
  }, []);

  useWindowListener('resize', calcContentMaxHeight);

  const openAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? `${contentMaxHeight}px` : '0px',
  });

  const toggle = useCallback(() => {
    setOpen(v => !v);
  }, []);

  return (
    <div className={clsx(accordionStyles.accordionItem, className)}>
      <div onClick={toggle} className={accordionStyles.accordionLabel({ isOpen })}>
        <Heading root="h4">{shorText}</Heading>
        {isOpen ? (
          <ArrowUpSline className={accordionStyles.accordionIcon} />
        ) : (
          <ArrowDownSline className={accordionStyles.accordionIcon} />
        )}
      </div>
      <animated.div ref={ref} style={openAnimation} className={accordionStyles.accordionTextContainer}>
        <Paragraph variant="caption" className={accordionStyles.accordionText}>
          {text}
        </Paragraph>
      </animated.div>
    </div>
  );
});
