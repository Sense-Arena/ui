import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const CalendarCheckIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          d="M9,1 L9,3 L15,3 L15,1 L17,1 L17,3 L21,3 C21.5522847,3 22,3.44771525 22,4 L22,20 C22,20.5522847 21.5522847,21 21,21 L3,21 C2.44771525,21 2,20.5522847 2,20 L2,4 C2,3.44771525 2.44771525,3 3,3 L7,3 L7,1 L9,1 Z M20,10 L4,10 L4,19 L20,19 L20,10 Z M15.036,11.136 L16.45,12.55 L11.5,17.5 L7.964,13.964 L9.38,12.55 L11.501,14.672 L15.037,11.136 L15.036,11.136 Z M7,5 L4,5 L4,8 L20,8 L20,5 L17,5 L17,6 L15,6 L15,5 L9,5 L9,6 L7,6 L7,5 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
