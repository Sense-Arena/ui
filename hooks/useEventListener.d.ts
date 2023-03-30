export declare const useEventListener: <K extends keyof DocumentEventMap>(eventListen: K, callback: (e: DocumentEventMap[K]) => void, eventKey?: string) => void;
export declare const useWindowListener: <K extends keyof WindowEventMap>(eventListen: K, callback: (e: WindowEventMap[K]) => void, eventKey?: string) => void;
