import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{ className?: string }>;

export const TBody = ({ className, children, ...rest }: Props) => {
  return (
    <tbody {...rest} className={clsx(className)}>
      {children}
    </tbody>
  );
};
