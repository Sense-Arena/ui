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
  paddingHeader?: boolean;
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
  paddingHeader = true,
}: PropsModal) => {
  const [mounted, setMounted] = useState(open);
  const [contentTop, setContentTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

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
        let headerHeight = 0;
        const headersCollection = document.getElementsByTagName('header');
        if (paddingHeader && headersCollection.length) {
          headerHeight = headersCollection[0].getBoundingClientRect().height;
          setHeaderHeight(headerHeight);
        }
        const bodyHeight = document.documentElement.getBoundingClientRect().height;
        const modalContentHeight = bodyHeight - headerHeight;
        const contentHeight = node.getBoundingClientRect().height;
        if (modalContentHeight > contentHeight) {
          setContentTop(Math.round(modalContentHeight / 2 - contentHeight / 2));
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
      <div
        onClick={onBGClick}
        style={{ paddingTop: paddingHeader && contentTop < headerHeight ? headerHeight : 0 }}
        className={modalStyles.modalContentWrapper}
      >
        <animated.div ref={contentRef} style={styleContent} className={modalStyles.modalContent({ size })}>
          {withCard ? (
            <div className={modalStyles.modalActionContainer}>
              <div className={modalStyles.modalAction}>
                {action === undefined ? (
                  <IconButton onClick={handleClose}>
                    <CloseIcon className={modalStyles.modalActionCloseIcon} />
                  </IconButton>
                ) : (
                  action || null
                )}
              </div>

              <Card
                title={title}
                withPadding={withPadding}
                className={cardClassName}
                classNameHeader={modalStyles.cardHeader}
              >
                {children}
              </Card>
            </div>
          ) : (
            children
          )}
        </animated.div>
      </div>
    </animated.div>
  );
};
