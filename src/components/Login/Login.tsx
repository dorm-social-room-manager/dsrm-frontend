import { createTheme, ThemeProvider } from '@mui/material';
import { RegisterForm } from '../RegisterForm/RegisterForm';

const theme = createTheme({
  breakpoints: {
    values: {
      base: 0,
      desktop: 1024,
      mobile: 360,
      tablet: 768,
    },
  },
});

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

export function Login() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <RegisterForm />
      </div>
    </ThemeProvider>
  );
}
