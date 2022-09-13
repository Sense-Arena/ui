import { avatarStyles } from './avatar.css';

type Props = {
  src?: string | null;
  bg?: 'white';
  name?: string;
  size?: 's' | 'm';
};

export const Avatar = ({ src, bg, name, size }: Props) => {
  return (
    <div className={avatarStyles.container({ bg, size })}>
      <img src={src ?? `https://avatars.dicebear.com/api/initials/${name}.svg`} className={avatarStyles.img} />
    </div>
  );
};
