import { Route, Routes } from 'react-router-dom';
import { Footer } from './templates/Footer/Footer';
import { Header } from './templates/Header/Header';
import { LoginPage } from './pages/LoginPage';
import { HeaderProps } from './templates/Header/Header.types';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();

  /* this will be based on breakpoints and the page later on*/
  const jsonSubscript = '.1';
  const headerProps: HeaderProps = {
    dormitory: { url: 'https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta', urlName: t('header.buildingName') },
    faculty: { url: 'https://www.p.lodz.pl/', urlName: t('header.faculty') },
    universityName: t(`header.titles${jsonSubscript}`),
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
