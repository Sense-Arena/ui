import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const SportTennisIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
      {...rest}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon points="24 24 0 24 0 0 24 0 24 24" />
        <path
          fill="currentColor"
          d="M18.01667,4.39761c-1.85249-1.8525-5.24087-1.48042-7.56045.83917a6.86711,6.86711,0,0,0-2.01083,4.3225c-.01584,1.25083.20583,3.07958-1.06875,4.35412L4.02,17.2701l1.12417,1.1242L8.5008,15.0376c1.27459-1.2746,3.10334-1.0529,4.35417-1.0687a6.88555,6.88555,0,0,0,4.3225-2.01087C19.48917,9.63844,19.86917,6.25011,18.01667,4.39761ZM10.7333,11.673c-1.21125-1.21125-.83125-3.64959.83917-5.32s4.1008-2.05042,5.32-.83917c1.2113,1.21125.83129,3.64958-.8392,5.32C14.38287,12.50428,11.95247,12.88428,10.7333,11.673Z"
          transform="translate(-4.01997 -3.2198)"
        />
        <path
          fill="currentColor"
          d="M16.81337,15.8847a1.556,1.556,0,0,1,1.1162.4671,1.5793,1.5793,0,0,1-1.1162,2.6995,1.55654,1.55654,0,0,1-1.1163-.467,1.57935,1.57935,0,0,1,1.1163-2.6996Zm0-1.5834a3.1667,3.1667,0,1,0,2.2404.9263A3.1653,3.1653,0,0,0,16.81337,14.3013Z"
          transform="translate(-4.01997 -3.2198)"
        />
      </g>
    </svg>
  );
});
