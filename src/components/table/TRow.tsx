import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{ className?: string; onClick?: () => void }>;

export const TRow = ({ className, children, onClick, ...rest }: Props) => {
  return (
    <tr {...rest} className={clsx(className, tableStyles.withHover({ hover: !!onClick }))} onClick={onClick}>
      {children}
    </tr>
  );
};
