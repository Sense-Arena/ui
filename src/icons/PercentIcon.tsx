import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const PercentIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          fill="currentColor"
          d="M17.5,21 C15.5670034,21 14,19.4329966 14,17.5 C14,15.5670034 15.5670034,14 17.5,14 C19.4329966,14 21,15.5670034 21,17.5 C21,19.4329966 19.4329966,21 17.5,21 Z M17.5,19 C18.3284271,19 19,18.3284271 19,17.5 C19,16.6715729 18.3284271,16 17.5,16 C16.6715729,16 16,16.6715729 16,17.5 C16,18.3284271 16.6715729,19 17.5,19 Z M6.49999993,10 C5.24957042,10 4.09412582,9.3329038 3.46891103,8.25000002 C2.84369623,7.16709624 2.84369623,5.83290376 3.46891103,4.74999998 C4.09412582,3.6670962 5.24957042,3 6.49999993,3 C8.4329966,3 9.99999993,4.5670034 9.99999993,6.5 C9.99999993,8.4329966 8.4329966,10 6.49999993,10 L6.49999993,10 Z M6.5,8 C7.32842712,8 8,7.32842712 8,6.5 C8,5.67157288 7.32842712,5 6.5,5 C5.67157288,5 5,5.67157288 5,6.5 C5,7.32842712 5.67157288,8 6.5,8 Z M19.071,3.515 L20.485,4.929 L4.93,20.485 L3.516,19.071 L19.07,3.515 L19.071,3.515 Z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
