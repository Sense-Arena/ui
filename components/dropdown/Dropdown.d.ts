import { ReactNode } from 'react';
type Props<TOption> = {
    disabled?: boolean;
    error?: boolean;
    onSelect?: (selected: TOption) => void;
    selectedOptionLabel: ReactNode;
    selectedOption: TOption;
    options: {
        title: string;
        value: TOption;
    }[];
    className?: string;
    border?: 'black' | 'grey';
    fullWidth?: boolean;
    size?: 's' | 'm' | 'l';
    bRadius?: 8 | 10;
    dataSAId?: string;
};
export declare function Dropdown<TOption>({ disabled, onSelect, selectedOptionLabel, options, error, className, selectedOption, border, fullWidth, size, bRadius, dataSAId, }: Props<TOption>): JSX.Element;
export {};
