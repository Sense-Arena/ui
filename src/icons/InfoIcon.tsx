import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { color?: string; className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const InfoIcon = forwardRef<SVGSVGElement, Props>(({ color = '#E3072F', className, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
        fill={color}
      />
    </svg>
  );
});
