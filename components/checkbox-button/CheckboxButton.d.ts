import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
type Props = {
    disabled?: boolean;
    checked: boolean;
    onChangeHandler: (checked: boolean) => void;
    dataSAId?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const CheckboxButton: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export {};
