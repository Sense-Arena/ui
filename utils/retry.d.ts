export declare function retry<R>(fn: () => Promise<R>, retriesLeft?: number, interval?: number): Promise<R>;
