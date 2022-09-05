type Props = { color?: string; className?: string };
export const FacebookIcon = ({ color = '#fff', className }: Props) => {
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
        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
        <path
          d="M14,13.5 L16.5,13.5 L17.5,9.5 L14,9.5 L14,7.5 C14,6.47 14,5.5 16,5.5 L17.5,5.5 L17.5,2.14 C17.174,2.097 15.943,2 14.643,2 C11.928,2 10,3.657 10,6.7 L10,9.5 L7,9.5 L7,13.5 L10,13.5 L10,22 L14,22 L14,13.5 Z"
          id="Path"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
