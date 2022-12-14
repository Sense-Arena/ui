import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const UserIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M12,17 C15.662,17 18.865,18.575 20.607,20.925 L18.765,21.796 C17.347,20.116 14.847,19 12,19 C9.153,19 6.653,20.116 5.235,21.796 L3.394,20.924 C5.136,18.574 8.338,17 12,17 Z M12,2 C14.7614237,2 17,4.23857625 17,7 L17,10 C16.9998453,12.6769176 14.8913954,14.8788218 12.217,14.995 L12,15 C9.23857625,15 7,12.7614237 7,10 L7,7 C7.00015466,4.32308238 9.10860463,2.12117822 11.783,2.005 L12,2 Z M11.9999986,4 C10.4114424,4 9.09819538,5.23817847 9.005,6.824 L8.99999858,7 L8.99999858,10 C8.99843519,11.6236946 10.2889671,12.9539516 11.9119631,13.0015992 C13.5349592,13.0492468 14.901308,11.7969899 14.995,10.176 L14.9999986,10 L14.9999986,7 C14.9999986,5.34314575 13.6568542,4 11.9999986,4 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
