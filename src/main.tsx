import './main.scss';
import './i18n/i18n';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from './common/breakpoints';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
