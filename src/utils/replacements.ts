import { ReactNode } from 'react';

export const insertComponentsIntoText = (str: string, replacements: Record<string, (value: string) => ReactNode>) => {
  const splitRegex = new RegExp(/\{(.*)\}/g);

  if (/\{(.*):(.*)\}/g.test(str)) {
    const parts = str?.split(splitRegex) ?? [];
    return parts.map(part => {
      try {
        if (Object.keys(replacements).some(r => part.includes(r))) {
          const [keyToReplace, valueToReplace] = part.split(':');
          return replacements[`${keyToReplace}:`](valueToReplace);
        }
      } catch (error) {
        console.error(error);
        return part;
      }
      return part;
    });
  }
  return str;
};
