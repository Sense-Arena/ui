import { PropsWithChildren, ReactNode } from 'react';
import { cardStyles } from './card.css';
import { Divider } from '@mui/material';
import { Heading } from '../typography';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{
  title?: ReactNode;
  action?: ReactNode;
  withPadding?: boolean;
  className?: string;
}>;

export const Card = ({ children, title, action, withPadding = true, className, ...rest }: Props) => {
  return (
    <section {...rest} className={clsx(cardStyles.section, className)}>
      {title || action ? (
        <>
          <div className={cardStyles.header}>
            <div className={cardStyles.title}>
              {title ? typeof title === 'string' ? <Heading root="h3">{title}</Heading> : title : null}
            </div>
            {action ? <div>{action}</div> : null}
          </div>
          <div className={cardStyles.paddingX}>
            <Divider />
          </div>
        </>
      ) : null}
      <div className={cardStyles.sectionContent({ withPadding })}>{children}</div>
    </section>
  );
};
