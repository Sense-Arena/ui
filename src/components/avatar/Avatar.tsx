import { clsx } from '../../utils';
import { avatarStyles } from './avatar.css';

type Props = {
  src: string;
  bg?: 'white';
  name?: string;
  size?: 's' | 'm' | 'l';
  alt?: string;
  className?: string;
};

export const Avatar = ({ src, bg, size, alt, className }: Props) => {
  return (
    <div className={clsx(avatarStyles.container({ bg, size }), className)}>
      <img src={src} alt={alt} className={avatarStyles.img} />
    </div>
  );
};
