import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
type Props = {
    variant?: 'primary' | 'secondary';
    /**
     * only for primaty variant
     */
    icon?: ReactNode;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export declare const Link: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
export {};
