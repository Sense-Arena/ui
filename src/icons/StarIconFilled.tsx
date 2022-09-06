import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const StarIconFilled = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
  return (
    <svg
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      ref={ref}
      {...rest}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24" />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="12 17 6.122 20.59 7.72 13.89 2.49 9.41 9.355 8.86 12 2.5 14.645 8.86 21.511 9.41 16.28 13.89 17.878 20.59"
        />
      </g>
    </svg>
  );
});
