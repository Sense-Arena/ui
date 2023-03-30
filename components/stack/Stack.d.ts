import { CSSProperties, PropsWithChildren } from 'react';
export declare const Stack: import("react").ForwardRefExoticComponent<{
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    style?: CSSProperties | undefined;
    className?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type StackItemProps = PropsWithChildren<{
    spacing?: number;
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}>;
export declare const StackItem: ({ direction, children, spacing }: StackItemProps) => JSX.Element;
export {};
