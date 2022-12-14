import { customTheme } from './common/breakpoints';
import { Footer } from './templates/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';

export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Footer></Footer>
    </ThemeProvider>
  );
}
