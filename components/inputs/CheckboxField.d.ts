import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
type Props = {
    label: ReactNode;
    errorText?: ReactNode;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onChange?: (checked: boolean) => void;
    border?: 'black' | 'grey';
    bRadius?: 8 | 10;
    containerClassName?: string;
    variant?: 'field' | 'row';
    dataSAId?: string;
};
export declare const CheckboxField: FC<Props>;
export {};
