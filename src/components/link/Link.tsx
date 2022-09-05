import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import { clsx } from '../../utils/clsx';
import { linkStyle, linkTxtStyle, pLinkStyle } from './link.style.css';

type Props = {
  variant?: 'primary' | 'secondary';
  /**
   * only for primaty variant
   */
  icon?: ReactNode;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, variant = 'primary', icon, ...rest }, ref) => {
    return (
      <a ref={ref} className={clsx(pLinkStyle, linkStyle({ variant }), className)} {...rest}>
        <span className={linkTxtStyle[variant]}>{children}</span>
        {variant === 'primary' ? icon : null}
      </a>
    );
  },
);
