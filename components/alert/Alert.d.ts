import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    severity: 'error' | 'warning' | 'info' | 'success';
    bRadius?: 8 | 10;
}>;
export declare const Alert: ({ severity, children, bRadius }: Props) => JSX.Element;
export {};
