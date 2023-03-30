import { DetailedHTMLProps, FC, ReactNode, TextareaHTMLAttributes } from 'react';
type Props = {
    label: string;
    errorText?: ReactNode;
    border?: 'black' | 'grey';
    bRadius?: 8 | 10;
    containerClassName?: string;
    dataSAId?: string;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export declare const TextArea: FC<Props>;
export {};
