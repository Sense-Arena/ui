import { Dispatch, SetStateAction } from 'react';
import { CookieConsentModel } from '../../utils/local-store';
import { GDPRConfig } from './types';
export declare const ConsentContext: import("react").Context<{
    setConsent: Dispatch<SetStateAction<boolean>>;
    config: GDPRConfig;
    onSave: (consent: CookieConsentModel) => void;
}>;
