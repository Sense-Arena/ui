import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{ className?: string }>;

export const TRow = ({ className, children, ...rest }: Props) => {
  return (
    <tr {...rest} className={clsx(className)}>
      {children}
    </tr>
  );
};
