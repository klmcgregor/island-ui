const breakpoints = [
  '768px',
  '1024px',
  '1366px',
  '1440px',
  '1920px',
  '2560px',
  '3840px',
];

const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 144, 192, 256];

space.columnGap = ['10px', '16px'];
space.columnGapFull = ['20px', '32px'];

const sizes = {};

sizes.maxWidth = '1920px';

const fontSizes = [
  12, 
  14, 
  16, 
  20, 
  24, 
  32
];

const colors = {
  midnightblue: '#2c3e50',
  wisteria: '#8e44ad',
  belizehole: '#2980b9',
  greensea: '#16a085',
  nephritis: '#27ae60',
};

export const theme = {
  breakpoints,
  space,
  sizes,
  fontSizes,
  colors,
};

export default theme;