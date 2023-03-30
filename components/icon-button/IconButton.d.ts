import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
type Props = {
    color?: 'primary' | 'secondary';
    loading?: boolean;
    size?: 's' | 'm';
    dataSAId?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const IconButton: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};
