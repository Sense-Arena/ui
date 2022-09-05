import { createContext, Dispatch, SetStateAction } from 'react';
import { CookieConsentModel, noop } from '../../utils';
import { GDPRConfig } from './types';

export const ConsentContext = createContext<{
  setConsent: Dispatch<SetStateAction<boolean>>;
  config: GDPRConfig;
  onSave: (consent: CookieConsentModel) => void;
}>({
  setConsent: noop,
  onSave: noop,
  config: {},
});
