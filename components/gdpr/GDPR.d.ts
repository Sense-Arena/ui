import { CookieConsentModel } from '../../utils/local-store';
import { GDPRConfig } from './types';
export declare const gdprDefaultConfig: GDPRConfig;
type Props = {
    config?: GDPRConfig;
    onSave?: (consent: CookieConsentModel) => void;
};
export declare const GDPR: ({ config, onSave }: Props) => JSX.Element | null;
export {};
