import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';

type Props = { className?: string } & DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>;
export const SportHockeyIcon = forwardRef<SVGSVGElement, Props>(({ className, ...rest }, ref) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 18 14"
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
          d="M3.74717,16.1668v2.5H5.41383V15.3335H4.5805A.83578.83578,0,0,0,3.74717,16.1668Z"
          transform="translate(-3.74717 -5.3335)"
        />
        <path
          fill="currentColor"
          d="M9.5805,15.3335H6.24717v3.3333l3.90833-.0083a.82322.82322,0,0,0,.74166-.4584l.725-1.5833-1.325-2.9Z"
          transform="translate(-3.74717 -5.3335)"
        />
        <path
          fill="currentColor"
          d="M20.17211,15.5752a.83058.83058,0,0,0-.5916-.2417h-.83339v3.3333h1.6667v-2.5A.83063.83063,0,0,0,20.17211,15.5752Z"
          transform="translate(-3.74717 -5.3335)"
        />
        <path
          fill="currentColor"
          d="M13.41382,12.7002l3.375-7.3667h-2.7917l-1.4666,3.30833-.4084.91667-.0416.11666L10.16383,5.3335H7.37217l3.375,7.3667,1.26665,2.7666.0667.15,1.1833,2.5834a.82337.82337,0,0,0,.7417.4583l3.9083.0083V15.3335h-3.3333Z"
          transform="translate(-3.74717 -5.3335)"
        />
      </g>
    </svg>
  );
});
