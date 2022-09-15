import { PropsWithChildren, ReactNode, MouseEvent, useCallback, useEffect, useState } from 'react';
import { modalStyles } from './modal.css';
import { Card } from '../card';
import { CloseIcon } from '../../icons';
import { clsx } from '../../utils';
import { IconButton } from '../icon-button';
import { animated, useSpring } from '@react-spring/web';

type PropsModal = PropsWithChildren<{
  open: boolean;
  title?: ReactNode;
  action?: ReactNode | false;
  withPadding?: boolean;
  className?: string;
  cardClassName?: string;
  withCard?: boolean;
  size?: 's' | 'm' | 'l';
  handleClose: () => void;
}>;

export const Modal = ({
  children,
  open,
  title,
  action,
  withPadding,
  className,
  cardClassName,
  withCard = true,
  size,
  handleClose,
}: PropsModal) => {
  const [mounted, setMounted] = useState(open);
  const [contentTop, setContentTop] = useState(0);

  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [mounted]);

  const contentRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        const bodyHeight = document.documentElement.getBoundingClientRect().height;
        const contentHeight = node.clientHeight;
        if (bodyHeight > contentHeight) {
          setContentTop(bodyHeight / 2 - contentHeight / 2);
        } else {
          setContentTop(0);
        }
      }
    },
    [children],
  );

  const styleContainer = useSpring({
    opacity: open ? 1 : 0,
    config: {
      duration: 300,
    },
    onStart: () => {
      if (open) {
        setMounted(true);
      }
    },
    onRest: () => {
      if (!open) {
        setMounted(false);
      }
    },
  });

  const styleContent = useSpring({
    opacity: open ? 1 : 0,
    transform: `translateY(${open ? `${contentTop}px` : '0px'})`,
    config: {
      duration: 300,
    },
  });

  const onBGClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!mounted) return null;

  return (
    <animated.div style={styleContainer} className={clsx(modalStyles.modalContainer, className)}>
      <div onClick={onBGClick} className={modalStyles.modalContentWrapper}>
        <animated.div ref={contentRef} style={styleContent} className={modalStyles.modalContent({ size })}>
          {withCard ? (
            <Card
              title={title}
              action={
                action === undefined ? (
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                ) : action ? (
                  action
                ) : undefined
              }
              withPadding={withPadding}
              className={cardClassName}
            >
              {children}
            </Card>
          ) : (
            children
          )}
        </animated.div>
      </div>
    </animated.div>
  );
};
