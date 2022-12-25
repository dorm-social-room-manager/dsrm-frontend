import { Route, Routes } from 'react-router-dom';
import { Footer } from './templates/Footer/Footer';
import { Header } from './templates/Header/Header';
import { LoginPage } from './pages/LoginPage';
import { HeaderProps } from './templates/Header/Header.types';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  /* simulating the separation of the login/register page from the header component */
  /* this will be based on breakpoints and the page later on*/

  const TABLET_IDX_ADJUST = 0;
  const MOBILE_IDX_ADJUST = 1;

  const headerTabletJsonIdx = tablet ? TABLET_IDX_ADJUST : MOBILE_IDX_ADJUST;
  const jsonIdx = headerTabletJsonIdx;
  const jsonSubscript = `.${String(jsonIdx)}`;

  const headerProps: HeaderProps = {
    dormitory: { url: t(`header.buildingUrl`), urlName: t('header.buildingName') },
    faculty: { url: t('header.facultyUrl'), urlName: t('header.faculty') },
    headerTitle: t(`loginForm.loginTitle${jsonSubscript}`),
  };

  return (
    <Routes>
      <Route
        path='/'
        element={<Header />}
      ></Route>
      <Route
        path='/'
        element={<LoginPage />}
      />
      <Route
        path='/'
        element={<Footer />}
      />
    </Routes>
  );
}
