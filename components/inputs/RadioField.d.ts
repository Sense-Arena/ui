import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
type Props = {
    label: ReactNode;
    errorText?: ReactNode;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    radioProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onChange?: (checked: boolean) => void;
    border?: 'black' | 'grey';
    bRadius?: 8 | 10;
    containerClassName?: string;
    dataSAId?: string;
};
export declare const RadioField: FC<Props>;
export {};
