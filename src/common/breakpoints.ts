import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    base: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const customTheme = createTheme({
  breakpoints: {
    values: {
      base: 0,
      desktop: 1024,
      mobile: 360,
      tablet: 768,
    },
  },
});
