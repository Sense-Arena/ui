type Props = { color?: string; className?: string };
export const TodoLineIcon = ({ color = '#E4022D', className }: Props) => {
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
          d="M17,2 L20,2 C20.5522847,2 21,2.44771525 21,3 L21,21 C21,21.5522847 20.5522847,22 20,22 L4,22 C3.44771525,22 3,21.5522847 3,21 L3,3 C3,2.44771525 3.44771525,2 4,2 L7,2 L7,0 L9,0 L9,2 L15,2 L15,0 L17,0 L17,2 Z M17,4 L17,6 L15,6 L15,4 L9,4 L9,6 L7,6 L7,4 L5,4 L5,20 L19,20 L19,4 L17,4 Z M7,8 L17,8 L17,10 L7,10 L7,8 Z M7,12 L17,12 L17,14 L7,14 L7,12 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
