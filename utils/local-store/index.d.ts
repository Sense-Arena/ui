export declare const enum LSKeys {
    CookieConsent = "cookie_consent"
}
export type CookieConsentModel = {
    required: boolean;
    functional: boolean;
    advertising: boolean;
};
export interface LSData {
    [LSKeys.CookieConsent]: CookieConsentModel | null;
}
export declare const LS: {
    getItem: <K extends LSKeys>(key: K, defaultValue: LSData[K]) => LSData[K];
    setItem: <K_1 extends LSKeys>(key: K_1, value: LSData[K_1]) => void;
    deleteItem: <K_2 extends LSKeys>(key: K_2) => void;
};
