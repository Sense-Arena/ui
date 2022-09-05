type Props = { color?: string; className?: string };
export const ArrowUpSline = ({ color = '#E4022D', className }: Props) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
        <polygon
          id="Path"
          fill={color}
          fillRule="nonzero"
          points="7.41 15.41 12 10.83 16.59 15.41 18 14 12 8 6 14"
        ></polygon>
      </g>
    </svg>
  );
};
