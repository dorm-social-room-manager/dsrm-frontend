import { Route, Routes } from 'react-router-dom';
import { Footer } from './templates/Footer/Footer';
import { Header } from './templates/Header/Header';
import { LoginPage } from './pages/LoginPage';
import { HeaderProps } from './templates/Header/Header.types';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();

  /* this will be based on breakpoints and the page later on*/
  const headerProps: HeaderProps = {
    dormitory: { url: t(`header.buildingUrl`), urlName: t('header.buildingName') },
    faculty: { url: t('header.facultyUrl'), urlName: t('header.faculty') },
    headerTitle: t('loginForm.headerTitle'),
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
