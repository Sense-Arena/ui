export const sliderSx = {
  color: '#E4022D',
  height: 4,
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:before': {
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)`,
    },
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.28,
    backgroundColor: '#fff',
  },
};

export const verticalSliderSx = {
  ...sliderSx,
  height: undefined,
  width: 4,
  '& input[type="range"]': {
    WebkitAppearance: 'slider-vertical',
  },
};
