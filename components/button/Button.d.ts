import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export type ButtonProps = {
    children?: ReactNode;
    icon?: ReactNode;
    size?: 's' | 'm' | 'l';
    color?: 'primary' | 'secondary' | 'secondary_action' | 'outline' | 'outline_secondary';
    mode?: 'rounded' | 'square';
    minWidth?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    dataSAId?: string;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;
export declare const Button: import("react").ForwardRefExoticComponent<{
    children?: ReactNode;
    icon?: ReactNode;
    size?: "s" | "m" | "l" | undefined;
    color?: "outline" | "primary" | "secondary" | "secondary_action" | "outline_secondary" | undefined;
    mode?: "square" | "rounded" | undefined;
    minWidth?: boolean | undefined;
    fullWidth?: boolean | undefined;
    loading?: boolean | undefined;
    dataSAId?: string | undefined;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
