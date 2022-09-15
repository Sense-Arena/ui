import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const CameraIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
          d="M9.828,5 L7.828,7 L4,7 L4,19 L20,19 L20,7 L16.172,7 L14.172,5 L9.828,5 Z M9,3 L15,3 L17,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,20 C22,20.5522847 21.5522847,21 21,21 L3,21 C2.44771525,21 2,20.5522847 2,20 L2,6 C2,5.44771525 2.44771525,5 3,5 L7,5 L9,3 Z M12,18 C8.96243388,18 6.5,15.5375661 6.5,12.5 C6.5,9.46243388 8.96243388,7 12,7 C15.0375661,7 17.5,9.46243388 17.5,12.5 C17.5,15.5375661 15.0375661,18 12,18 Z M12,16 C13.9329966,16 15.5,14.4329966 15.5,12.5 C15.5,10.5670034 13.9329966,9 12,9 C10.0670034,9 8.5,10.5670034 8.5,12.5 C8.5,14.4329966 10.0670034,16 12,16 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
});
