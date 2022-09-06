import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const TimeLineIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M13,12 L17,12 L17,14 L11,14 L11,7 L13,7 L13,12 Z"
          id="Shape"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
