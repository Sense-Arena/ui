import { MutableRefObject } from 'react';
export declare const useClickOutside: <T extends HTMLElement, B extends HTMLElement = HTMLElement>(ref: MutableRefObject<T | null>, handler: () => void, skipTargetRef?: MutableRefObject<B | null> | undefined) => void;
