import { MutableRefObject, useCallback, useState } from 'react';
import { useWindowListener } from './useEventListener';

export const useCalcToElement = <T extends HTMLElement>(ref: MutableRefObject<T | null>) => {
  const [pers, setPers] = useState<number | null>(null);

  const calcOnePersent = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    const a = rect?.bottom ?? 0; // dynamic
    const b = window.innerHeight; // dynamic handle
    return (a - b + window.scrollY) / 100;
  }, [ref]);

  const scrollPers = useCallback((onePers: number) => {
    const value = window.scrollY / onePers;
    if (value > 1 && value < 100) {
      setPers(value);
    }
    if (value > 100) {
      setPers(null);
    }
    if (value > 0 && value < 1) {
      setPers(null);
    }
  }, []);

  useWindowListener('scroll', () => scrollPers(calcOnePersent()));
  return pers;
};
