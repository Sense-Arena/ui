import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { clsx } from '../../utils';
import { Spinner } from '../spinner';
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
  const [loading, setLoading] = useState(true);
  const imgSpringRef = useSpringRef();
  const spinnerSpringRef = useSpringRef();
  const styles = useSpring({
    opacity: loading ? 0 : 1,
    ref: imgSpringRef,
  });
  const spinStyles = useSpring({
    opacity: loading ? 1 : 0,
    ref: spinnerSpringRef,
  });

  useChain([spinnerSpringRef, imgSpringRef]);

  useEffect(() => {
    const pImg = new Image();
    pImg.onload = () => setLoading(false);
    pImg.src = src;
  }, [src]);

  return (
    <div className={clsx(avatarStyles.container({ bg, size }), className)}>
      {loading ? (
        <animated.div className={avatarStyles.loading} style={spinStyles}>
          <Spinner size={size} />
        </animated.div>
      ) : (
        <animated.img src={src} alt={alt} className={avatarStyles.img} style={styles} />
      )}
    </div>
  );
};
