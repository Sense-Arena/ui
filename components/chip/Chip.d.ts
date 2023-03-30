import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    size?: 's' | 'm' | 'l';
    color?: 'primary' | 'secondary' | 'warning' | 'dark';
    onDelete?: () => void;
    className?: string;
    dataSAId?: string;
}>;
export declare const Chip: ({ children, size, color, onDelete, className, dataSAId }: Props) => JSX.Element;
export {};
