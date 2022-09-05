

import React from 'react';
import { themeClass } from '../src/theme/theme.css';

export const decorators = [
  (Story) => (
    <div className={themeClass}>
      {Story()}
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}