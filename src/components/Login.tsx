import './Login.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useState } from 'react';

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
  const [isRegister, setIsRegister] = useState(false);
  function RegisterClick() {
    setIsRegister(!isRegister);
    console.log(isRegister);
  }
  function LoginClick() {
    console.log(isRegister);
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <form>
          {!isRegister && (
            <LoginForm
              RegisterButtonFunction={RegisterClick}
              LoginButtonFunction={LoginClick}
            />
          )}
          {isRegister && <RegisterForm RegisterButtonFunction={RegisterClick} />}
        </form>
      </div>
    </ThemeProvider>
  );
}
