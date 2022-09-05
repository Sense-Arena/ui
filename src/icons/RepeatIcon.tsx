type Props = { color?: string; className?: string };
export const RepeatIcon = ({ color = '#E4022D', className }: Props) => {
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
        <path
          d="M6,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,12 L20,12 L20,6 L6,6 L6,9 L1,5 L6,1 L6,4 Z M18,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,12 L4,12 L4,18 L18,18 L18,15 L23,19 L18,23 L18,20 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
