type Props = { color?: string; className?: string };
export const ArrowDownSline = ({ color = '#242424', className }: Props) => {
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
          points="12 13.172 16.95 8.222 18.364 9.636 12 16 5.636 9.636 7.05 8.222"
        ></polygon>
      </g>
    </svg>
  );
};
