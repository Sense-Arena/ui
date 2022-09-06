import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const UsersIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M2,22 C2,17.581722 5.581722,14 10,14 C14.418278,14 18,17.581722 18,22 L16,22 C16,18.6862915 13.3137085,16 10,16 C6.6862915,16 4,18.6862915 4,22 L2,22 L2,22 Z M10,13 C6.685,13 4,10.315 4,7 C4,3.685 6.685,1 10,1 C13.315,1 16,3.685 16,7 C16,10.315 13.315,13 10,13 Z M10,11 C12.21,11 14,9.21 14,7 C14,4.79 12.21,3 10,3 C7.79,3 6,4.79 6,7 C6,9.21 7.79,11 10,11 Z M18.284,14.703 C21.1545749,15.9958288 23.0003235,18.8517296 23,22 L21,22 C21.0004682,19.6386691 19.6161002,17.4965583 17.463,16.527 L18.283,14.703 L18.284,14.703 Z M17.596,3.413 C19.6565508,4.26235112 21.000828,6.2712635 21,8.5 C21.0008728,11.344307 18.8325723,13.719897 16,13.978 L16,11.965 C17.5210148,11.7471558 18.722081,10.5627563 18.961157,9.04493395 C19.200233,7.52711155 18.4214037,6.03085385 17.041,5.356 L17.596,3.413 L17.596,3.413 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
