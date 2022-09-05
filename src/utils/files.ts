import { HTMLAttributeAnchorTarget } from 'react';

export const download = (url: string, downloadName?: string, target?: HTMLAttributeAnchorTarget) => {
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  if (target) {
    a.target = target;
  }

  a.download = downloadName ?? url.split('/').pop() ?? 'file';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
