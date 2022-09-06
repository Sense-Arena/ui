import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const PerformanceIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 Z M12,4 C7.582,4 4,7.582 4,12 C4,16.418 7.582,20 12,20 C16.418,20 20,16.418 20,12 C20,7.582 16.418,4 12,4 Z M12,5 C13.018,5 13.985,5.217 14.858,5.608 L13.295,7.17 C12.882,7.06 12.448,7 12,7 C9.239,7 7,9.239 7,12 C7,13.38 7.56,14.63 8.464,15.536 L7.05,16.95 L6.894,16.789 C5.72,15.537 5,13.852 5,12 C5,8.134 8.134,5 12,5 Z M18.392,9.143 C18.782,10.015 19,10.983 19,12 C19,13.933 18.216,15.683 16.95,16.95 L15.536,15.536 C16.44,14.63 17,13.38 17,12 C17,11.552 16.941,11.118 16.83,10.705 L18.392,9.143 Z M16.242,6.343 L17.657,7.757 L13.933,11.483 C13.977,11.648 14,11.821 14,12 C14,13.105 13.105,14 12,14 C10.895,14 10,13.105 10,12 C10,10.895 10.895,10 12,10 C12.179,10 12.352,10.023 12.517,10.067 L16.243,6.343 L16.242,6.343 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
