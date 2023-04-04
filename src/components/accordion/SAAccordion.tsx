import { ReactNode } from 'react';
import { clsx } from '../../utils';
import { AccordionItem } from './AccordionItem';
import { accordionStyles } from './accordion.style.css';

type Props = {
  className?: string;
  items: {
    id: number;
    className?: string;
    shorText: ReactNode;
    text: ReactNode;
    open?: boolean;
  }[];
};

export const SAAccordion = ({ items, className }: Props) => {
  return (
    <div className={clsx(accordionStyles.accordionContainer, className)}>
      {items.map(item => (
        <AccordionItem
          className={item.className}
          key={item.id}
          open={item.open || item.id === 0}
          shorText={item.shorText}
          text={item.text}
        />
      ))}
    </div>
  );
};
