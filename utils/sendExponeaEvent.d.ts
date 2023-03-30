declare global {
    interface Window {
        exponea: {
            track: (eventName: string, eventData: {
                [key: string]: any;
            }) => void;
            identify: (userObject: {
                [key: string]: any;
            }, options?: {
                [key: string]: any;
            }, successCallback?: () => void, errorCallback?: () => void, immediate?: boolean) => void;
        };
    }
}
export declare const sendExponeaEvent: (eventName: string, eventData: {
    [key: string]: any;
}, email?: string) => void;
export declare const exponeaIdentify: (key: string, value: string) => void;
