import { Slider } from '@mui/material';
import { memo } from 'react';
import { sliderSx } from './slider.style';

type Props = {
  position: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  onChangeCommitted: () => void;
  className?: string;
};

export const SASlider = memo<Props>(({ max, min, position, step, onChange, onChangeCommitted, className }) => {
  return (
    <Slider
      size="small"
      value={position}
      min={min}
      step={step}
      max={max}
      onChange={(_, value) => onChange(value as number)}
      onChangeCommitted={onChangeCommitted}
      className={className}
      sx={sliderSx}
    />
  );
});
