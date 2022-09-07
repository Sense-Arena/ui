import React, { PropsWithChildren, ReactNode } from 'react';
import { sectionStyles } from './section.css';
import { Divider } from '@mui/material';
import { Heading } from '../typography';
import { clsx } from '../../utils';

type Props = PropsWithChildren<{
  title?: string | ReactNode;
  action?: string | ReactNode;
  withPadding?: boolean;
  className?: string;
}>;

export const Section = ({ children, title, action, withPadding = true, className, ...rest }: Props) => {
  return (
    <section {...rest} className={clsx(sectionStyles.section, className)}>
      {title && action ? (
        <>
          <div className={sectionStyles.header}>
            <div>
              <Heading root="h3">{title}</Heading>
            </div>
            <div>{action}</div>
          </div>
          <div className={sectionStyles.paddingX}>
            <Divider />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className={sectionStyles.sectionContent({ withPadding })}>{children}</div>
    </section>
  );
};
