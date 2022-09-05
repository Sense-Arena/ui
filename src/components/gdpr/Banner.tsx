import { useCallback, useContext, useState } from 'react';
import { LS, LSKeys } from '../../utils/local-store';
import { Button } from '../button';
import { SAModal } from '../modal';
import { ConsentContext } from './consent-context';
import { gdprStyles } from './gdpr.css';
import { ModalContainer } from './ModalContainer';

export const Banner = () => {
  const { setConsent, config, onSave } = useContext(ConsentContext);
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
      <div className={gdprStyles.cookieContainer}>
        <div>
          <h1 className={gdprStyles.cookieHead}>{config.banner?.heading}</h1>
          <p className={gdprStyles.cookieText}>
            {config.banner?.text}{' '}
            <a className={gdprStyles.cookieLink} href={config.findOut?.link} target="_blank">
              {config.findOut?.text}
            </a>
          </p>
        </div>
        <div className={gdprStyles.cookieBtns}>
          <Button onClick={onAccept} noIcon>
            {config.banner?.btnOk}
          </Button>
          <Button onClick={openModal} noIcon color="secondary">
            {config.banner?.btnEdit}
          </Button>
        </div>
      </div>
      <SAModal open={opened} handleClose={closeModal} handleOpen={openModal}>
        <ModalContainer />
      </SAModal>
    </>
  );
};
