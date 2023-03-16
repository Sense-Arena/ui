import { PropsWithChildren, ReactNode } from 'react';
import { clsx } from '../../utils';
import { Divider } from '../divider/Divider';
import { Heading } from '../typography';
import { cardStyles } from './card.css';

type Props = PropsWithChildren<{
  title?: ReactNode;
  action?: ReactNode;
  withPadding?: boolean;
  withDivider?: boolean;
  className?: string;
  classNameHeader?: string;
}>;

export const Card = ({
  children,
  title,
  action,
  withPadding = true,
  withDivider = true,
  className,
  classNameHeader,
  ...rest
}: Props) => {
  return (
    <section {...rest} className={clsx(cardStyles.section, className)}>
      {title || action ? (
        <>
          <div className={clsx(cardStyles.header, classNameHeader)}>
            <div>{typeof title === 'string' ? <Heading root="h3">{title}</Heading> : title}</div>
            {action ? <div className={cardStyles.action}>{action}</div> : null}
          </div>
          {withDivider ? (
            <div className={cardStyles.paddingX}>
              <Divider />
            </div>
          ) : null}
        </>
      ) : null}
      <div className={cardStyles.sectionContent({ withPadding })}>{children}</div>
    </section>
  );
};
