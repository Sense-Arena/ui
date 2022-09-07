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
            <div>{title ? <Heading root="h3">{title}</Heading> : <></>}</div>
            {action ? <div>{action}</div> : <></>}
          </div>
          <div className={cardStyles.paddingX}>
            <Divider />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className={cardStyles.sectionContent({ withPadding })}>{children}</div>
    </section>
  );
};
