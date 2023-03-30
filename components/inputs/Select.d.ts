import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from 'react';
type Props<TOption> = {
    disabled?: boolean;
    errorText?: ReactNode;
    onChangeSelect?: (selected: TOption, name?: string) => void;
    selectedOptionLabel: string;
    selectedOption: TOption;
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
export declare function Select<TOption>({ disabled, onChangeSelect, selectedOptionLabel, containerClassName, options, errorText, className, selectedOption, border, fullWidth, bRadius, label, dataSAId, ...rest }: Props<TOption>): JSX.Element;
export {};
