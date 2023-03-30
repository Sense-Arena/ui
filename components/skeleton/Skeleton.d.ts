import { CSSProperties, PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    loading: boolean;
    style?: CSSProperties;
    count?: number;
}>;
export declare const Skeleton: import("react").NamedExoticComponent<Props>;
export {};
