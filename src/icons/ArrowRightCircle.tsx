type Props = { color?: string; className?: string };
export const ArrowRightCircle = ({ color = '#E4022D', className }: Props) => {
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
          d="M12,11 L12,8 L16,12 L12,16 L12,13 L8,13 L8,11 L12,11 Z M12,2 C17.52,2 22,6.48 22,12 C22,17.52 17.52,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 Z M12,20 C16.42,20 20,16.42 20,12 C20,7.58 16.42,4 12,4 C7.58,4 4,7.58 4,12 C4,16.42 7.58,20 12,20 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
