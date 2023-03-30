import { ReactNode } from 'react';
type Props = {
    children?: ReactNode;
    orientation?: 'horizontal' | 'vertical';
    textAlign?: 'center' | 'right' | 'left';
    variant?: 'fullWidth' | 'inset' | 'middle';
    className?: string;
};
export declare const Divider: ({ children, orientation, textAlign, variant, className }: Props) => JSX.Element;
export {};
