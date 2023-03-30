import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, RefObject } from 'react';
type Props = {
    label: string;
    errorText?: ReactNode;
    border?: 'black' | 'grey';
    endAdornment?: ReactNode;
    endIcon?: ReactNode;
    bRadius?: 8 | 10;
    containerClassName?: string;
    inputRef?: RefObject<HTMLInputElement>;
    dataSAId?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const TextField: FC<Props>;
export {};
