import { CSSProperties, FC, ReactNode } from 'react';
type Props = {
    weight?: 'light' | 'medium' | 'normal';
    children?: ReactNode;
    root?: 'h1' | 'h2' | 'h3' | 'h4';
    className?: string;
    style?: CSSProperties;
};
export declare const Heading: FC<Props>;
export {};
