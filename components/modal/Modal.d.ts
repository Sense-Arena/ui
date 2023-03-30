import { PropsWithChildren, ReactNode } from 'react';
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
export declare const Modal: ({ children, open, title, action, withPadding, withDivider, className, cardClassName, withCard, size, handleClose, paddingHeader, portalNodeId, dataSAId, }: PropsModal) => import("react").ReactPortal | null;
export {};
