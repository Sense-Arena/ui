import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const DashboardIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
        <polygon fill="none" id="Path" points="0 0 24 0 24 24 0 24" />
        <path
          d="M13,21 L13,11 L21,11 L21,21 L13,21 Z M3,13 L3,3 L11,3 L11,13 L3,13 Z M9,11 L9,5 L5,5 L5,11 L9,11 Z M3,21 L3,15 L11,15 L11,21 L3,21 Z M5,19 L9,19 L9,17 L5,17 L5,19 Z M15,19 L19,19 L19,13 L15,13 L15,19 Z M13,3 L21,3 L21,9 L13,9 L13,3 Z M15,5 L15,7 L19,7 L19,5 L15,5 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
