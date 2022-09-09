import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{ className?: string }>;

export const THead = ({ className, children, ...rest }: Props) => {
  return (
    <thead {...rest} className={clsx(className)}>
      {children}
    </thead>
  );
};
