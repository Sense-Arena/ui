export const enum LSKeys {
  CookieConsent = 'cookie_consent',
}

export type CookieConsentModel = {
  required: boolean;
  functional: boolean;
  advertising: boolean;
};

export interface LSData {
  [LSKeys.CookieConsent]: CookieConsentModel | null;
}

const getItem = <K extends LSKeys>(key: K, defaultValue: LSData[K]): LSData[K] => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : defaultValue;
  } catch {
    return defaultValue;
  }
};
const setItem = <K extends LSKeys>(key: K, value: LSData[K]) => {
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
  getItem,
  setItem,
  deleteItem,
};
