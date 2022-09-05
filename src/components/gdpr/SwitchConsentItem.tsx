import { ChangeEventHandler, useMemo } from 'react';
import { inputSwitch, labelSwitch, switcher } from '../../theme/switch.css';
import { switchContainer, switchHead, switchText } from './modal.css';

type Props = {
  id: string;
  title: string;
  text: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const SwitchConsentItem = ({ id, title, text, checked, disabled = false, onChange }: Props) => {
  const uniqId = useMemo(() => `switch-${id}`, [id]);
  return (
    <div className={switchContainer}>
      <div className={switcher}>
        <input
          className={inputSwitch}
          type="checkbox"
          id={uniqId}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <label htmlFor={uniqId} className={labelSwitch} />
      </div>
      <div>
        <span className={switchHead}>{title}</span>
        <p className={switchText}>{text}</p>
      </div>
    </div>
  );
};
