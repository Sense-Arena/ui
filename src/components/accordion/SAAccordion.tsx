import { accordionStyles } from './accordion.style.css';
import { AccordionItem } from './AccordionItem';

type Props = {
  items: {
    id: number;
    shorText: string;
    text: string;
  }[];
};

export const SAAccordion = ({ items }: Props) => {
  return (
    <div className={accordionStyles.accordionContainer}>
      {items.map(item => (
        <AccordionItem key={item.id} open={item.id === 0} shorText={item.shorText} text={item.text} />
      ))}
    </div>
  );
};
