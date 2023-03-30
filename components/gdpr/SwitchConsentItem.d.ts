import { ChangeEventHandler } from 'react';
type Props = {
    id: string;
    title: string;
    text: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
export declare const SwitchConsentItem: ({ id, title, text, checked, disabled, onChange }: Props) => JSX.Element;
export {};
