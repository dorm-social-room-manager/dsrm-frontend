import './main.scss';
import './i18n/i18n';
import '@fontsource/roboto';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { customTheme } from './common/breakpoints';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </ThemeProvider>
);
