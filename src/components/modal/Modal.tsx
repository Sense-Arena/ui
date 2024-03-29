import { animated, useSpring } from '@react-spring/web';
import { MouseEvent, PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../icons';
import { clsx } from '../../utils';
import { Card } from '../card';
import { IconButton } from '../icon-button';
import { modalStyles } from './modal.css';

type PropsModal = PropsWithChildren<{
  open: boolean;
  title?: ReactNode;
  action?: ReactNode | false;
  withPadding?: boolean;
  withDivider?: boolean;
  className?: string;
  cardClassName?: string;
  withCard?: boolean;
  size?: 's' | 'm' | 'l';
  handleClose: () => void;
  paddingHeader?: boolean;
  portalNodeId?: string;
  dataSAId?: string;
}>;

export const Modal = ({
  children,
  open,
  title,
  action,
  withPadding,
  withDivider,
  className,
  cardClassName,
  withCard = true,
  size,
  handleClose,
  paddingHeader = true,
  portalNodeId = 'root',
  dataSAId,
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
        const bodyHeight = window.innerHeight;
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

  const portalNode = typeof window === 'undefined' ? null : document.getElementById(portalNodeId) || document.body;

  if (!mounted || !portalNode) return null;

  return createPortal(
    <animated.div style={styleContainer} className={clsx(modalStyles.modalContainer, className)}>
      <div
        onClick={onBGClick}
        style={{ paddingTop: paddingHeader ? headerHeight : 0 }}
        className={modalStyles.modalContentWrapper}
        data-sa-id={dataSAId}
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
                withDivider={withDivider}
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
    </animated.div>,
    portalNode,
  );
};
