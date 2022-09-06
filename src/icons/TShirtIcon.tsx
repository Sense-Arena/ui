import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const TShirtIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M9,3 C9,4.65685425 10.3431458,6 12,6 C13.6568542,6 15,4.65685425 15,3 L21,3 C21.5522847,3 22,3.44771525 22,4 L22,11 C22,11.5522847 21.5522847,12 21,12 L18.999,12 L19,20 C19,20.5522847 18.5522847,21 18,21 L6,21 C5.44771525,21 5,20.5522847 5,20 L4.999,11.999 L3,12 C2.44771525,12 2,11.5522847 2,11 L2,4 C2,3.44771525 2.44771525,3 3,3 L9,3 Z M20,4.999 L16.583,4.999 L16.566,5.04 C15.7925355,6.7692412 14.1085716,7.91317528 12.216,7.995 L12,8 C10.0274314,8.00017433 8.2390415,6.84081515 7.434,5.04 L7.416,5 L4,5 L4,10 L6.999,9.999 L6.999,19 L17,19 L16.999,10 L20,9.999 L20,4.999 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
