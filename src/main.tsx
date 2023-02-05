import './main.scss';
import './i18n/i18n';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from './common/breakpoints';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient(); // Create a new query client

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>
);
