import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const SearchIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M11,2 C15.968,2 20,6.032 20,11 C20,15.968 15.968,20 11,20 C6.032,20 2,15.968 2,11 C2,6.032 6.032,2 11,2 Z M11,18 C14.867,18 18,14.867 18,11 C18,7.132 14.867,4 11,4 C7.132,4 4,7.132 4,11 C4,14.867 7.132,18 11,18 Z M19.485,18.071 L22.314,20.899 L20.899,22.314 L18.071,19.485 L19.485,18.071 L19.485,18.071 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
