import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const PlayCircleIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M10.622,8.415 L15.501,11.667 C15.6124353,11.7411597 15.67939,11.8661438 15.67939,12 C15.67939,12.1338562 15.6124353,12.2588403 15.501,12.333 L10.621,15.585 C10.4984097,15.6662611 10.3411132,15.6736917 10.2114085,15.6043488 C10.0817039,15.5350059 10.0005161,15.4000764 10,15.253 L10,8.747 C10.0002726,8.59958881 10.0816005,8.46427484 10.2116462,8.39486134 C10.341692,8.32544785 10.4993759,8.3331864 10.622,8.415 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
