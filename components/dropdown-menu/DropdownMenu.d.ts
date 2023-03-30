import { RefObject } from 'react';
type Props<TOption> = {
    isOpen: boolean;
    mainRef: RefObject<HTMLDivElement>;
    menuRef: RefObject<HTMLDivElement>;
    selectedOption?: TOption;
    selectItem: (value: TOption) => void;
    options: {
        title: string;
        value: TOption;
    }[];
    bRadius?: 8 | 10;
    dataSAId?: string;
};
export declare function DropDownMenu<TOption>({ isOpen, mainRef, options, selectedOption, selectItem, bRadius, menuRef, dataSAId, }: Props<TOption>): JSX.Element | null;
export {};
