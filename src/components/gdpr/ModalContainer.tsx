import { useCallback, useContext, useState } from 'react';
import { CookieConsentModel, LS, LSKeys } from '../../utils/local-store';
import { Button } from '../button';
import { ConsentContext } from './consent-context';
import { modalBtns, modalContainer, modalHead, modalLink, modalText, stickySave } from './modal.css';
import { SwitchConsentItem } from './SwitchConsentItem';

export const ModalContainer = () => {
  const [choices, setChoice] = useState<CookieConsentModel>({ advertising: false, required: true, functional: false });
  const { setConsent, config, onSave } = useContext(ConsentContext);

  const deny = useCallback(() => {
    const consent = { advertising: false, functional: false, required: true };
    LS.setItem(LSKeys.CookieConsent, consent);
    setConsent(true);
    onSave(consent);
  }, [onSave]);

  const accept = useCallback(() => {
    const consent = { advertising: true, functional: true, required: true };
    LS.setItem(LSKeys.CookieConsent, consent);
    setConsent(true);
    onSave(consent);
  }, [choices, onSave]);

  const save = useCallback(() => {
    LS.setItem(LSKeys.CookieConsent, choices);
    setConsent(true);
    onSave(choices);
  }, [choices, onSave]);

  return (
    <div className={modalContainer} onClick={e => e.stopPropagation()}>
      <h2 className={modalHead}>{config.modal?.heading}</h2>
      <p className={modalText}>{config.modal?.text}</p>
      <a className={modalLink} href={config.findOut?.link} target="_blank">
        {config.findOut?.text}
      </a>

      <div className={modalBtns}>
        <Button onClick={accept}>{config.modal?.btnOk}</Button>
        <Button onClick={deny} color="secondary">
          {config.modal?.btnDeny}
        </Button>
      </div>

      <SwitchConsentItem
        id="r"
        disabled
        title={config.modal?.rHeading ?? ''}
        checked={choices.required}
        text={config.modal?.rText ?? ''}
      />
      <SwitchConsentItem
        id="f"
        title={config.modal?.fHeading ?? ''}
        checked={choices.functional}
        onChange={e => setChoice(v => ({ ...v, functional: (e.target as any).checked }))}
        text={config.modal?.fText ?? ''}
      />
      <SwitchConsentItem
        id="a"
        title={config.modal?.aHeading ?? ''}
        checked={choices.advertising}
        onChange={e => setChoice(v => ({ ...v, advertising: (e.target as any).checked }))}
        text={config.modal?.aText ?? ''}
      />
      <div className={stickySave}>
        <Button onClick={save}>{config.modal?.btnSave}</Button>
      </div>
    </div>
  );
};
