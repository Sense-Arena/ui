import { useCallback, useContext, useState } from 'react';
import { vars } from '../../theme/vars.css';
import { LS, LSKeys } from '../../utils/local-store';
import { Button } from '../button';
import { Modal } from '../modal';
import { ModalContainer } from './ModalContainer';
import { ConsentContext } from './consent-context';
import { gdprStyles } from './gdpr.css';

export const Banner = () => {
  const { setConsent, config, onSave, variant } = useContext(ConsentContext);
  const [opened, setOpen] = useState(false);

  const onAccept = useCallback(() => {
    const consent = {
      required: true,
      advertising: true,
      functional: true,
    };
    LS.setItem(LSKeys.CookieConsent, consent);
    setConsent(true);
    onSave(consent);
  }, [onSave]);
  const openModal = useCallback(() => {
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className={gdprStyles.cookieContainer({ variant })}>
        <div>
          <h1 className={gdprStyles.cookieHead({ variant })}>{config.banner?.heading}</h1>
          <p className={gdprStyles.cookieText}>
            {config.banner?.text}{' '}
            <a className={gdprStyles.cookieLink} href={config.findOut?.link} target="_blank">
              {config.findOut?.text}
            </a>
          </p>
        </div>
        <div className={gdprStyles.cookieBtns}>
          <Button
            onClick={onAccept}
            dataSAId="gdpr-accept-all"
            style={{
              borderRadius: variant !== 'old' ? 0 : undefined,
              background: variant === 'atp' ? vars.colors.atpBlue : undefined,
            }}
          >
            {config.banner?.btnOk}
          </Button>
          <Button
            onClick={openModal}
            dataSAId="gdpr-edit-settings"
            color="secondary"
            style={{ borderRadius: variant !== 'old' ? 0 : undefined }}
          >
            {config.banner?.btnEdit}
          </Button>
        </div>
      </div>
      <Modal open={opened} handleClose={closeModal} withCard={false}>
        <ModalContainer />
      </Modal>
    </>
  );
};
