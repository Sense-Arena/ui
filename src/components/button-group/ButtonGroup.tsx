import { Children, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import { clsx } from '../../utils';
import { btnGrpStyles } from './btn-group.css';

export type ButtonGroupProps = {
  dataSAId?: string;
  mode?: 'rounded' | 'square';
  border?: 'primary' | 'secondary' | 'light';
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, dataSAId, mode, border, ...rest }, ref) => {
    return (
      <div className={clsx(btnGrpStyles.container({ mode, border }), className)} data-sa-id={dataSAId} ref={ref} {...rest}>
        {Children.map(children, child => (
          <div className={clsx(btnGrpStyles.groupRec({ border }), btnGrpStyles.group)}>{child}</div>
        ))}
      </div>
    );
  },
);
