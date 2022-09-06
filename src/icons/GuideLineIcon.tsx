import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const GuideLineIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M13,8 L13,16 C13,17.6568542 11.6568542,19 10,19 L7.83,19 C7.34294144,20.3781262 5.93383866,21.2048964 4.49321143,20.9578112 C3.05258419,20.710726 1.99951224,19.4616627 1.99951224,18 C1.99951224,16.5383373 3.05258419,15.289274 4.49321143,15.0421888 C5.93383866,14.7951036 7.34294144,15.6218738 7.83,17 L10,17 C10.5522847,17 11,16.5522847 11,16 L11,8 C11,6.34314575 12.3431458,5 14,5 L17,5 L17,2 L22,6 L17,10 L17,7 L14,7 C13.4477153,7 13,7.44771525 13,8 Z M5,19 C5.55228475,19 6,18.5522847 6,18 C6,17.4477153 5.55228475,17 5,17 C4.44771525,17 4,17.4477153 4,18 C4,18.5522847 4.44771525,19 5,19 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
