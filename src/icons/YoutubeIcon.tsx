type Props = { color?: string; className?: string };
export const YoutubeIcon = ({ color = '#fff', className }: Props) => {
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
          d="M21.543,6.498 C22,8.28 22,12 22,12 C22,12 22,15.72 21.543,17.502 C21.289,18.487 20.546,19.262 19.605,19.524 C17.896,20 12,20 12,20 C12,20 6.107,20 4.395,19.524 C3.45,19.258 2.708,18.484 2.457,17.502 C2,15.72 2,12 2,12 C2,12 2,8.28 2.457,6.498 C2.711,5.513 3.454,4.738 4.395,4.476 C6.107,4 12,4 12,4 C12,4 17.896,4 19.605,4.476 C20.55,4.742 21.292,5.516 21.543,6.498 Z M10,15.5 L16,12 L10,8.5 L10,15.5 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};
