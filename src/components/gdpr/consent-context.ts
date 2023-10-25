import { createContext, Dispatch, SetStateAction } from 'react';
import { noop } from '../../utils';
import { CookieConsentModel } from '../../utils/local-store';
import { GDPRConfig } from './types';

export const ConsentContext = createContext<{
  setConsent: Dispatch<SetStateAction<boolean>>;
  config: GDPRConfig;
  onSave: (consent: CookieConsentModel) => void;
  variant: 'atp' | 'nhl' | 'old';
}>({
  setConsent: noop,
  onSave: noop,
  config: {},
  variant: 'old',
});
