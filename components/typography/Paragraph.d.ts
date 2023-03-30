import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
type Props = {
    variant?: 'perex' | 'body' | 'caption' | 'note' | 'label';
    children?: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export declare const Paragraph: FC<Props>;
export {};
