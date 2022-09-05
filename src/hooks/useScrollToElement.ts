import { useCallback } from 'react';

export const useScrollToElement = (
  id: 'equipment' | 'req-quote' | 'text' | 'join-now' | 'corp-select-sport' | 'mental-skills' | 'additional-eq',
  block: ScrollLogicalPosition = 'center',
) => {
  const scroll = useCallback(() => {
    setTimeout(() => {
      var element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block });
    }, 10);
  }, [id, block]);
  return scroll;
};
