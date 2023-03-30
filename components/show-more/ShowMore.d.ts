import { ReactNode } from 'react';
import { ButtonProps } from '../button';
type Props = {
    items: {
        child: ReactNode;
        key: string;
    }[];
    visible: number;
    className?: string;
    btnProps?: ButtonProps;
};
export declare const ShowMore: ({ items, visible, className, btnProps }: Props) => JSX.Element;
export {};
