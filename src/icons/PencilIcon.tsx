import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const PencilIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
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
        <polygon points="24 24 0 24 0 0 24 0 24 24" />
        <path
          fill="currentColor"
          d="M 21.332031 6.464844 L 19.8125 7.984375 L 16.015625 4.179688 L 17.535156 2.664062 C 17.84375 2.351562 18.382812 2.351562 18.695312 2.664062 L 21.332031 5.304688 C 21.652344 5.625 21.652344 6.144531 21.332031 6.464844 Z M 8.644531 19.167969 L 4.847656 15.367188 L 14.664062 5.535156 L 18.460938 9.335938 Z M 3.96875 17.199219 L 6.8125 20.042969 L 2.855469 21.160156 Z M 22.6875 3.953125 L 20.046875 1.308594 C 19.53125 0.792969 17.671875 -0.183594 16.1875 1.308594 L 2.8125 14.691406 C 2.695312 14.808594 2.609375 14.949219 2.570312 15.109375 L 0.554688 22.285156 C 0.460938 22.617188 0.558594 22.972656 0.796875 23.222656 C 1.039062 23.46875 1.527344 23.511719 1.734375 23.464844 L 8.90625 21.445312 C 9.066406 21.402344 9.207031 21.320312 9.324219 21.203125 L 22.6875 7.820312 C 23.75 6.753906 23.75 5.019531 22.6875 3.953125 Z M 22.6875 3.953125 "
        />
      </g>
    </svg>
  );
});
