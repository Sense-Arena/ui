import { ReactNode } from 'react';
export declare const insertComponentsIntoText: (str: string, replacements: Record<string, (value: string) => ReactNode>) => string | ReactNode[];
