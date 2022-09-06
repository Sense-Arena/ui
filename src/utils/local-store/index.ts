export enum LSKeys {
  CookieConsent = 'cookie_consent',
}

export type CookieConsentModel = {
  required: boolean;
  functional: boolean;
  advertising: boolean;
};

export type LSData = {
  [LSKeys.CookieConsent]: CookieConsentModel | null;
};

const getItem = <K extends LSKeys, D extends LSData[K]>(key: K, defaultValue: D): D => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : defaultValue;
  } catch {
    return defaultValue;
  }
};
const setItem = <K extends LSKeys, D extends LSData[K]>(key: K, value: D) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
const deleteItem = <K extends LSKeys>(key: K) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const LS = {
  keys: LSKeys,
  getItem,
  setItem,
  deleteItem,
};
