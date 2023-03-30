import { PropsWithChildren, ReactNode } from 'react';
type Props = PropsWithChildren<{
    title?: ReactNode;
    action?: ReactNode;
    withPadding?: boolean;
    withDivider?: boolean;
    className?: string;
    classNameHeader?: string;
}>;
export declare const Card: ({ children, title, action, withPadding, withDivider, className, classNameHeader, ...rest }: Props) => JSX.Element;
export {};
