import { PropsWithChildren } from 'react';
import { CloseIcon } from '../../icons';
import { clsx } from '../../utils';
import { Stack, StackItem } from '../stack';
import { Paragraph } from '../typography';
import { chipStyles } from './chip.css';

type Props = PropsWithChildren<{
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'warning' | 'dark';
  onDelete?: () => void;
  className?: string;
}>;

export const Chip = ({ children, size, color, onDelete, className }: Props) => {
  return (
    <div onClick={e => e.stopPropagation()} className={clsx(chipStyles.chipContainer({ size, color }), className)}>
      <Stack direction="row" alignItems="center">
        <StackItem direction="row" spacing={0.25}>
          <div className={chipStyles.chipText({ size })}>
            {typeof children === 'string' ? (
              <Paragraph variant={size === 'l' ? 'caption' : 'note'}>{children}</Paragraph>
            ) : (
              children
            )}
          </div>
        </StackItem>
        {onDelete ? (
          <div
            onClick={e => {
              e.stopPropagation();
              onDelete();
            }}
            className={chipStyles.chipDelIconContainer({ size })}
          >
            <CloseIcon className={chipStyles.chipDelIcon({ size })} />
          </div>
        ) : null}
      </Stack>
    </div>
  );
};
