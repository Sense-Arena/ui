import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const ArrowDown = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
        <polygon points="24 24 0 24 0 0 24 0 24 24" />
        <polygon
          fill="currentColor"
          points="11 16.2 11 4 13 4 13 16.2 18.4 10.8 19.8 12.2 12 20 4.2 12.2 5.6 10.8 11 16.2"
        />
      </g>
    </svg>
  );
});
