import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const DiagnosticsIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
        <path
          d="M11,2.05 L11,4.062 C7.054,4.554 4,7.92 4,12 C4,16.418 7.582,20 12,20 C13.849,20 15.55,19.373 16.906,18.32 L18.329,19.743 C16.605,21.153 14.4,22 12,22 C6.477,22 2,17.523 2,12 C2,6.815 5.947,2.551 11,2.05 Z M21.95,13 C21.75,15.011 20.956,16.847 19.743,18.328 L18.32,16.906 C19.18,15.799 19.756,14.461 19.938,13 L21.951,13 L21.95,13 Z M13.002,2.05 C17.726,2.519 21.482,6.276 21.952,11 L19.939,11 C19.488,7.382 16.62,4.514 13.002,4.062 L13.002,2.049 L13.002,2.05 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
