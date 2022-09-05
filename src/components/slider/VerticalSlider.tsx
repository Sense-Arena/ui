import { Slider } from '@mui/material';
import { memo } from 'react';
import { verticalSliderSx } from './slider.style';

function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
}

type Props = {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  className?: string;
};

export const SAVerticalSlider = memo<Props>(({ onChange, value, className, max, min, step }) => {
  return (
    <Slider
      sx={verticalSliderSx}
      min={min}
      max={max}
      step={step}
      className={className}
      orientation="vertical"
      valueLabelDisplay="auto"
      value={value}
      onChange={(_, v) => onChange(v as number)}
      onKeyDown={preventHorizontalKeyboardNavigation}
    />
  );
});
