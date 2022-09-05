import { useSpring } from '@react-spring/web';
import { MouseEventHandler, useCallback } from 'react';

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

export const useTransitionParallax = (scale = 45) => {
  const [springs, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  const mouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    ({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }),
    [],
  );

  const transition = useCallback((x: number, y: number) => `translate3d(${x / scale}px,${y / scale}px,0)`, [scale]);

  return {
    transition,
    springs,
    mouseMove,
  };
};
