import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const ArrowLeft = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
      {...rest}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon points="0 24 0 0 24 0 24 24 0 24" />
        <polygon fill="currentColor" points="7.8 11 20 11 20 13 7.8 13 13.2 18.4 11.8 19.8 4 12 11.8 4.2 13.2 5.6 7.8 11" />
      </g>
    </svg>
  );
});
