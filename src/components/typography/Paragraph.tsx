import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { paragraphStyle } from './typography.style.css';

type Props = {
  variant?: 'perex' | 'body' | 'caption' | 'note' | 'label';
  children?: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

/**
 *
 * @deprecated use UniTypography
 */
export const Paragraph: FC<Props> = ({ children, variant, className, style, ...rest }) => {
  return (
    <p style={style} className={clsx(paragraphStyle({ variant }), className)} {...rest}>
      {children}
    </p>
  );
};
