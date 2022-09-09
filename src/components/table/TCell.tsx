import React, { PropsWithChildren } from 'react';
import { tableStyles } from './table.css';
import { clsx } from '../../utils';
import { Paragraph } from '../typography';

type Props = PropsWithChildren<{
  className?: string;
  align?: 'right' | 'center';
  minWidth?: true;
  withoutPadding?: 'all' | 'top' | 'bottom';
  cellType?: 'head' | 'body';
}>;

export const TCell = ({ align, minWidth, withoutPadding, cellType, className, children, ...rest }: Props) => {
  return (
    <td
      {...rest}
      className={clsx(tableStyles.tCell, tableStyles.tCellM({ align, minWidth, withoutPadding, cellType }), className)}
    >
      {typeof children === 'string' ? <Paragraph variant="caption">{children}</Paragraph> : children}
    </td>
  );
};
