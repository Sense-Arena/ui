import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    className?: string;
    align?: 'right' | 'center';
    minWidth?: true;
    withoutPadding?: 'all' | 'top' | 'bottom';
    cellType?: 'head' | 'body';
}>;
export declare const TCell: ({ align, minWidth, withoutPadding, cellType, className, children, ...rest }: Props) => JSX.Element;
export {};
