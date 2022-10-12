import { memo, ReactNode } from 'react';
import { Paragraph } from '../typography';
import { fieldErrorStyle } from './error.css';

export const FieldError = memo<{ errorText?: ReactNode }>(({ errorText }) => {
  if (!errorText) return null;

  return (
    <Paragraph variant="note" className={fieldErrorStyle}>
      {errorText}
    </Paragraph>
  );
});
