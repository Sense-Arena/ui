import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const BenchmarkIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M5,3 L5,19 L21,19 L21,21 L3,21 L3,3 L5,3 Z M20.293,6.293 L21.707,7.707 L16,13.414 L13,10.415 L8.707,14.707 L7.293,13.293 L13,7.586 L16,10.585 L20.293,6.293 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
