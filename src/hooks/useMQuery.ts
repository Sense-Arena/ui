import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export const useMQuery = (queryInput: string) => {
  const lessThan1100px = useMediaQuery(queryInput);
  const [lessThanV, setLessThan1100px] = useState(false);

  useEffect(() => {
    setLessThan1100px(lessThan1100px);
  }, [lessThan1100px]);

  return lessThanV;
};
