import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const CalendarEventIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M17,3 L21,3 C21.5522847,3 22,3.44771525 22,4 L22,20 C22,20.5522847 21.5522847,21 21,21 L3,21 C2.44771525,21 2,20.5522847 2,20 L2,4 C2,3.44771525 2.44771525,3 3,3 L7,3 L7,1 L9,1 L9,3 L15,3 L15,1 L17,1 L17,3 Z M20,9 L20,5 L17,5 L17,7 L15,7 L15,5 L9,5 L9,7 L7,7 L7,5 L4,5 L4,9 L20,9 Z M20,11 L4,11 L4,19 L20,19 L20,11 Z M6,13 L11,13 L11,17 L6,17 L6,13 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});