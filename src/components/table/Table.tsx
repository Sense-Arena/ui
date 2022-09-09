import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{ className?: string }>;

export const Table = ({ className, children, ...rest }: Props) => {
  return (
    <table {...rest} className={clsx(tableStyles.table, className)}>
      {children}
    </table>
  );
};
