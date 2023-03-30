import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    className?: string;
    onClick?: () => void;
}>;
export declare const TRow: ({ className, children, onClick, ...rest }: Props) => JSX.Element;
export {};
