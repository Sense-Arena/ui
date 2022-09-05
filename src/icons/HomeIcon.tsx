type Props = { color?: string; className?: string };
export const HomeIcon = ({ color = '#E4022D', className }: Props) => {
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
          d="M19,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,11 L1,11 L11.327,1.612 C11.7085185,1.26485664 12.2914815,1.26485664 12.673,1.612 L23,11 L20,11 L20,20 C20,20.5522847 19.5522847,21 19,21 Z M6,19 L18,19 L18,9.157 L12,3.703 L6,9.157 L6,19 Z M9,10 L15,10 L15,16 L9,16 L9,10 Z M11,12 L11,14 L13,14 L13,12 L11,12 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
