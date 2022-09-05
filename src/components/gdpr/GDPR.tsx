import { useEffect, useState } from 'react';
import { CookieConsentModel, LS, LSKeys, noop } from '../../utils';
import { Banner } from './Banner';
import { ConsentContext } from './consent-context';
import { GDPRConfig } from './types';

export const gdprDefaultConfig: GDPRConfig = {
  banner: {
    heading: 'Cookies',
    text: 'We use cookies to collect and analyze information about the performance and use of the website, to ensure the functioning of social media functions, and to improve and customize content and advertising.',
    btnOk: 'accept all',
    btnEdit: 'edit settings',
  },
  findOut: {
    text: 'Find out more',
    link: 'https://www.sensearena.com/terms-and-conditions',
  },
  modal: {
    heading: 'Information about cookies on this website',
    text: 'The cookies used on this site are divided into categories. Below, you can find out more about each category and allow or deny some or all of them. Once you disable categories that were previously enabled, all cookies associated with that category will be deleted from your browser. You can also see a list of cookies that are assigned to each of the categories and detailed information in the cookie statement.',
    btnOk: 'accept all',
    btnSave: 'save settings',
    btnDeny: 'deny all',
    rHeading: 'Required Cookies',
    rText:
      'These cookies are necessary for the website to function and cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but this may affect how the website functions.',
    fHeading: 'Functional Cookies',
    fText:
      'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies also enable the website to provide enhanced functionality and personalization.',
    aHeading: 'Advertising Cookies',
    aText:
      'These cookies are capable of tracking your browser across other sites and building up a profile of your interests. They do not store direct personal information but are based on uniquely identifying your browser and internet device.',
  },
};

type Props = {
  config?: GDPRConfig;
  onSave?: (consent: CookieConsentModel) => void;
};

export const GDPR = ({ config = gdprDefaultConfig, onSave = noop }: Props) => {
  const [hasConsent, setConsent] = useState(true);

  useEffect(() => {
    setConsent(!!LS.getItem(LSKeys.CookieConsent, null));
  }, []);

  if (hasConsent) return null;

  return (
    <ConsentContext.Provider value={{ setConsent, config, onSave }}>
      <Banner />
    </ConsentContext.Provider>
  );
};
