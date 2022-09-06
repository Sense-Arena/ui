import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const TrophyIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M13,16.938 L13,19 L18,19 L18,21 L6,21 L6,19 L11,19 L11,16.938 C6.99994023,16.4335919 4,13.0317373 4,9 L4,3 L20,3 L20,9 C20,13.0317373 17.0000598,16.4335919 13,16.938 Z M6,5 L6,9 C6,12.3137085 8.6862915,15 12,15 C15.3137085,15 18,12.3137085 18,9 L18,5 L6,5 Z M1,5 L3,5 L3,9 L1,9 L1,5 Z M21,5 L23,5 L23,9 L21,9 L21,5 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
