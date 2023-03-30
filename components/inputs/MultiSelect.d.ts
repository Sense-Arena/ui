import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from 'react';
type Props<TOption> = {
    selectedOptions: TOption[];
    disabled?: boolean;
    errorText?: ReactNode;
    onChangeSelect?: (selected: TOption[], name?: string) => void;
    options: {
        title: string;
        value: TOption;
    }[];
    className?: string;
    border?: 'black' | 'grey';
    fullWidth?: boolean;
    bRadius?: 8 | 10;
    label?: string;
    containerClassName?: string;
    dataSAId?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export declare function MultiSelect<TOption>({ selectedOptions, disabled, onChangeSelect, containerClassName, options, errorText, className, border, fullWidth, bRadius, label, dataSAId, ...rest }: Props<TOption>): JSX.Element;
export {};
