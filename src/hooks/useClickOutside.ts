import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement, B extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T | null>,
  handler: () => void,
  skipTargetRef?: MutableRefObject<B | null>,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target) || skipTargetRef?.current?.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
